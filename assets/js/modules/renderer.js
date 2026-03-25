import { LS_LAST_SOURCE } from "../core/constants.js";
import { q, qa, refs } from "../core/dom.js";
import { state } from "../core/state.js";
import {
    copyText,
    escapeHtml,
    formatPathLabel,
    normalizeMarkdownText,
    sanitizeInitialPath,
    slugify,
    tx,
} from "../core/utils.js";
import { updateBreadcrumb, updateMenuActiveState } from "./navigation.js";
import { rerenderMermaidInContent } from "./mermaid.js";
import { resetTocCount, setErrorUi, setLoadingUi, updateMeta, updateStatus } from "./ui.js";

const RENDER_LIB_WAIT_MS = 8000;
const FETCH_TIMEOUT_MS = 15000;
const MIN_CONTENT_LOADING_MS = 1000;
const CONTENT_REVEAL_BUFFER_MS = 420;

let headingObserver = null;
let contentLoadToken = 0;
let contentRevealTimer = 0;

function disconnectScrollSpy() {
    if (headingObserver) {
        headingObserver.disconnect();
        headingObserver = null;
    }
}

function getPaper() {
    return refs.content?.closest(".paper") || null;
}

function clearContentRevealTimer() {
    if (contentRevealTimer) {
        window.clearTimeout(contentRevealTimer);
        contentRevealTimer = 0;
    }
}

function isActiveContentLoad(token) {
    return token === contentLoadToken;
}

function setContentBusyState(active) {
    const paper = getPaper();
    const loading = Boolean(active);

    if (paper) {
        paper.classList.toggle("is-loading", loading);
        if (loading) {
            paper.classList.remove("is-revealing");
            paper.dataset.loadingLabel = tx("loading");
        } else {
            delete paper.dataset.loadingLabel;
        }
    }

    if (refs.content) {
        refs.content.setAttribute("aria-busy", loading ? "true" : "false");
    }

    document.documentElement.dataset.contentState = loading ? "loading" : "ready";
}

function beginContentLoad(token) {
    contentLoadToken = token;
    clearContentRevealTimer();
    document.documentElement.dataset.appReady = "loading";
    setContentBusyState(true);
}

function finishContentLoad(token) {
    if (!isActiveContentLoad(token)) return;

    const paper = getPaper();
    clearContentRevealTimer();
    setContentBusyState(false);

    if (paper) {
        paper.classList.add("is-revealing");
        contentRevealTimer = window.setTimeout(() => {
            if (isActiveContentLoad(token)) {
                paper.classList.remove("is-revealing");
            }
            contentRevealTimer = 0;
        }, CONTENT_REVEAL_BUFFER_MS);
    }
}

async function ensureMinimumLoadingWindow(startedAt, minimumMs = MIN_CONTENT_LOADING_MS) {
    const elapsed = Math.max(0, performance.now() - startedAt);
    const remaining = minimumMs - elapsed;
    if (remaining <= 0) return;
    await new Promise((resolve) => window.setTimeout(resolve, remaining));
}

function classifyCallout(text) {
    const value = String(text || "").toLowerCase();

    if (/warning|warn|peringatan|hati-hati|⚠️/.test(value)) return "warn";
    if (/danger|error|bahaya|gagal|stop|❌|🚫/.test(value)) return "danger";

    return "info";
}

function transformBlockquotes() {
    qa("blockquote", refs.content).forEach((blockquote) => {
        const text = blockquote.textContent || "";
        if (!text.trim()) return;

        blockquote.classList.add("callout");

        const type = classifyCallout(text);
        if (type === "warn") blockquote.classList.add("warn");
        if (type === "danger") blockquote.classList.add("danger");
    });
}

function createCopyToolbar(lang, code) {
    const toolbar = document.createElement("div");
    toolbar.className = "code-toolbar";
    toolbar.innerHTML = `
            <span class="code-lang">
                <i class="fa-solid fa-code" aria-hidden="true"></i>
                <span>${escapeHtml(lang)}</span>
            </span>
            <button type="button" class="copy-btn">
                <i class="fa-solid fa-copy" aria-hidden="true"></i>
                <span>${escapeHtml(tx("copy"))}</span>
            </button>
        `;

    const button = q(".copy-btn", toolbar);
    if (!button) return toolbar;

    button.addEventListener("click", async () => {
        const label = q("span:last-child", button);
        const resetLabel = tx("copy");

        try {
            await copyText(code.innerText || code.textContent || "");
            button.classList.add("done");
            if (label) label.textContent = tx("copied");
            updateStatus(tx("copied"));
        } catch {
            if (label) label.textContent = resetLabel;
        }

        window.setTimeout(() => {
            button.classList.remove("done");
            if (label) label.textContent = resetLabel;
        }, 1400);
    });

    return toolbar;
}

function enhanceCodeBlocks() {
    qa("pre", refs.content).forEach((pre) => {
        if (pre.dataset.enhanced === "true") return;

        const code = q("code", pre);
        if (!code) return;

        const classes = Array.from(code.classList);
        const langClass =
            classes.find((item) => item.startsWith("language-")) || classes.find((item) => item.startsWith("lang-"));
        const lang = (langClass || "").replace(/^language-/, "").replace(/^lang-/, "") || "text";

        if (window.hljs && typeof window.hljs.highlightElement === "function" && lang !== "mermaid") {
            try {
                window.hljs.highlightElement(code);
            } catch {}
        }

        pre.prepend(createCopyToolbar(lang, code));
        pre.dataset.enhanced = "true";
    });
}

function prepareMermaidBlocks() {
    qa("pre", refs.content).forEach((pre) => {
        const code = q("code.language-mermaid, code.lang-mermaid", pre);
        if (!code) return;

        const source = code.textContent || "";
        const wrap = document.createElement("div");
        wrap.className = "mermaid-wrap";
        wrap.innerHTML = `<div class="mermaid" data-source="${encodeURIComponent(source)}">${escapeHtml(source)}</div>`;
        pre.replaceWith(wrap);
    });
}

function markMarkdownLinks() {
    qa("a[href]", refs.content).forEach((anchor) => {
        const href = anchor.getAttribute("href") || "";
        if (/\.md($|[?#])/i.test(href)) {
            anchor.dataset.mdLink = "true";
        }
    });
}

function buildAnchorLabel(text) {
    return tx("anchorTo", { text: String(text || "section").trim() || "section" });
}

function setupScrollSpy() {
    disconnectScrollSpy();

    const headings = qa("h1, h2, h3", refs.content);
    if (!headings.length || !("IntersectionObserver" in window)) return;

    headingObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (!visibleEntries.length) return;

            const id = visibleEntries[0].target.id;
            state.lastVisibleHeadingId = id;

            state.tocLinks.forEach((link) => {
                const active = link.getAttribute("href") === `#${id}`;
                link.classList.toggle("active", active);
            });
        },
        {
            root: null,
            rootMargin: "-80px 0px -60% 0px",
            threshold: [0.1, 0.4, 0.75],
        }
    );

    headings.forEach((heading) => headingObserver.observe(heading));
}

function buildAnchorsAndToc() {
    if (!refs.toc || !refs.content) return;

    refs.toc.innerHTML = "";
    state.renderedHeadings = [];
    state.tocLinks = [];

    const seen = new Map();
    const headings = qa("h1, h2, h3", refs.content);

    if (!headings.length) {
        refs.toc.innerHTML = `<div class="menu-empty">${escapeHtml(tx("tocEmpty"))}</div>`;
        if (refs.tocCount) refs.tocCount.textContent = "0";
        return;
    }

    headings.forEach((heading, index) => {
        const text = heading.textContent ? heading.textContent.trim() : `section-${index + 1}`;
        const base = slugify(text, `section-${index + 1}`);
        const count = (seen.get(base) || 0) + 1;
        seen.set(base, count);

        const id = count > 1 ? `${base}-${count}` : base;
        heading.id = id;

        let anchor = q(".anchor-link", heading);
        if (!anchor) {
            anchor = document.createElement("a");
            anchor.className = "anchor-link";
            anchor.href = `#${id}`;
            anchor.textContent = "#";
            heading.appendChild(anchor);
        }
        anchor.setAttribute("aria-label", buildAnchorLabel(text));

        const link = document.createElement("a");
        link.href = `#${id}`;
        link.className = `lv${Math.min(Math.max(Number(heading.tagName.slice(1)) || 1, 1), 3)}`;
        link.textContent = text;

        refs.toc.appendChild(link);

        state.renderedHeadings.push({
            id,
            text,
            level: heading.tagName.toLowerCase(),
        });
        state.tocLinks.push(link);
    });

    resetTocCount();
    setupScrollSpy();
}

function updateHistory(path) {
    try {
        const url = new URL(location.href);
        url.searchParams.set("md", path);
        history.replaceState({ md: path }, "", url);
    } catch {}
}

function rememberLastSource(path) {
    try {
        localStorage.setItem(LS_LAST_SOURCE, path);
    } catch {}
}

function countMarkdownLines(raw) {
    if (!raw) return 0;
    return String(raw).split(/\r\n|\r|\n/).length;
}

async function waitForRendererLibraries(timeoutMs = RENDER_LIB_WAIT_MS) {
    const startedAt = Date.now();

    while (Date.now() - startedAt < timeoutMs) {
        const hasMarked = Boolean(window.marked && typeof window.marked.parse === "function");
        const hasDomPurify = Boolean(window.DOMPurify && typeof window.DOMPurify.sanitize === "function");

        if (hasMarked && hasDomPurify) return;

        await new Promise((resolve) => window.setTimeout(resolve, 40));
    }

    const missing = [];
    if (!(window.marked && typeof window.marked.parse === "function")) missing.push("Marked");
    if (!(window.DOMPurify && typeof window.DOMPurify.sanitize === "function")) missing.push("DOMPurify");

    throw new Error(`${missing.join(" and ")} library is not available.`);
}

async function renderMarkdownHtml(markdownText) {
    await waitForRendererLibraries();

    const html = window.marked.parse(markdownText, {
        gfm: true,
        breaks: false,
        mangle: false,
        headerIds: false,
    });

    return window.DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
    });
}

async function decorateRenderedContent() {
    transformBlockquotes();
    enhanceCodeBlocks();
    prepareMermaidBlocks();
    markMarkdownLinks();
    buildAnchorsAndToc();
    await rerenderMermaidInContent();
}

async function fetchWithTimeout(resource, init = {}, timeoutMs = FETCH_TIMEOUT_MS) {
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(new Error("timeout")), timeoutMs) : null;

    try {
        return await fetch(resource, {
            ...init,
            signal: controller?.signal,
        });
    } catch (error) {
        if (error?.name === "AbortError") {
            throw new Error(`Request timeout after ${timeoutMs}ms`);
        }
        throw error;
    } finally {
        if (timer) window.clearTimeout(timer);
    }
}

export function updateRenderInfo(sourcePath) {
    const sourceLabel = formatPathLabel(sourcePath);
    const raw = String(state.rawMarkdown || "");
    const lines = countMarkdownLines(raw);
    const chars = raw.length;

    updateMeta(`${tx("rendered")} • ${lines} ${tx("lines")} • ${chars} ${tx("chars")}`, "fa-solid fa-check");
    updateStatus(tx("loadedSuccess", { path: sourceLabel }));
}

export async function renderMarkdown(markdownText, sourcePath, options = {}) {
    if (!refs.content) return;

    const normalized = normalizeMarkdownText(markdownText);
    const safePath = sanitizeInitialPath(sourcePath);
    const loadToken = typeof options.loadToken === "number" ? options.loadToken : null;
    const loadingStartedAt = typeof options.loadingStartedAt === "number" ? options.loadingStartedAt : performance.now();

    try {
        const renderedHtml = await renderMarkdownHtml(normalized);

        if (loadToken !== null && !isActiveContentLoad(loadToken)) return;

        await ensureMinimumLoadingWindow(loadingStartedAt);

        if (loadToken !== null && !isActiveContentLoad(loadToken)) return;

        state.rawMarkdown = normalized;
        state.currentSource = safePath;

        refs.content.innerHTML = renderedHtml;
        await decorateRenderedContent();
        if (loadToken !== null && !isActiveContentLoad(loadToken)) return;
        updateRenderInfo(safePath);
        updateBreadcrumb(safePath);
        updateMenuActiveState();
        updateHistory(safePath);
        rememberLastSource(safePath);
        finishContentLoad(loadToken ?? contentLoadToken);
        document.documentElement.dataset.appReady = "1";
        document.dispatchEvent(new CustomEvent("tenrusl:contentReady", { detail: { path: safePath } }));
    } catch (error) {
        if (loadToken !== null && !isActiveContentLoad(loadToken)) return;
        disconnectScrollSpy();
        setContentBusyState(false);
        document.documentElement.dataset.appReady = "error";
        setErrorUi(safePath, error?.message || "Unknown render error");
    }
}

export async function loadBundledMarkdown(path, options = {}) {
    const safePath = sanitizeInitialPath(path);
    const loadToken = contentLoadToken + 1;
    const loadingStartedAt = performance.now();

    state.currentMode = "bundled";
    state.currentSource = safePath;

    beginContentLoad(loadToken);
    setLoadingUi(safePath);

    try {
        const response = await fetchWithTimeout(
            safePath,
            {
                cache: options.force ? "reload" : "default",
                credentials: "same-origin",
            },
            typeof options.timeoutMs === "number" ? options.timeoutMs : FETCH_TIMEOUT_MS
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const text = await response.text();
        if (!isActiveContentLoad(loadToken)) return;
        await renderMarkdown(text, safePath, { loadToken, loadingStartedAt });
    } catch (error) {
        if (!isActiveContentLoad(loadToken)) return;
        disconnectScrollSpy();
        setContentBusyState(false);
        document.documentElement.dataset.appReady = "error";
        setErrorUi(safePath, error?.message || "Fetch failed");
    }
}
