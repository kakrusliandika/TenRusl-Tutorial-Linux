import { EVENT_I18N, EVENT_THEME, LS_LAST_SOURCE, LS_TOC_OPEN, DEFAULT_MARKDOWN_PATH } from "./core/constants.js";
import { q, qa, refs } from "./core/dom.js";
import { state } from "./core/state.js";
import {
    animateScrollTop,
    copyText,
    currentLang,
    registerServiceWorker,
    resolveMarkdownPath,
    sanitizeInitialPath,
    tx,
} from "./core/utils.js";
import {
    buildNavigationIndex,
    focusFirstMenuItem,
    handleSidebarClick,
    handleSidebarKeydown,
    renderContentMenu,
    resolveLocalizedContentPath,
    setSidebarFilter,
    updateBreadcrumb,
    updateMenuActiveState,
} from "./modules/navigation.js";
import { loadBundledMarkdown, updateRenderInfo } from "./modules/renderer.js";
import {
    closeSidebar,
    setTocDrawer,
    syncSidebarToggleState,
    toggleSidebar,
    toggleTocDrawer,
    updateMeta,
    updateStatus,
} from "./modules/ui.js";

let booted = false;
let eventsBound = false;
let languageSyncTask = Promise.resolve();
let bootFailsafeTimer = 0;

const FAILSAFE_TIMEOUT_MS = 12000;

function shouldDismissOverlaySidebar() {
    try {
        return window.matchMedia("(max-width: 1080px)").matches;
    } catch {
        return window.innerWidth <= 1080;
    }
}

function clearBootFailsafe() {
    if (!bootFailsafeTimer) return;
    window.clearTimeout(bootFailsafeTimer);
    bootFailsafeTimer = 0;
}

function applyBootFallbackUi() {
    updateMeta(tx("fallback"), "fa-solid fa-triangle-exclamation");
    updateStatus("Loading melebihi batas aman. Viewer dialihkan ke mode fallback.");

    if (refs.content) {
        refs.content.innerHTML = `
            <h1>Viewer berhenti saat loading</h1>
            <p>Bootstrap JavaScript tidak menyelesaikan render Markdown awal.</p>
            <ol>
                <li>Periksa <code>assets/js/modules/renderer.js</code> untuk error syntax atau runtime.</li>
                <li>Periksa <code>assets/js/app.js</code> agar render awal tidak menunggu katalog terlalu lama.</li>
                <li>Hapus cache service worker, lalu refresh ulang halaman.</li>
            </ol>
        `;
    }

    if (refs.contentMenu && !refs.contentMenu.children.length) {
        refs.contentMenu.innerHTML = '<div class="menu-empty">Katalog belum tersedia.</div>';
    }

    if (refs.toc) {
        refs.toc.innerHTML = '<div class="menu-empty">TOC belum tersedia.</div>';
    }

    if (refs.tocCount) {
        refs.tocCount.textContent = "0";
    }
}

function installBootFailsafe() {
    clearBootFailsafe();

    document.addEventListener(
        "tenrusl:contentReady",
        () => {
            clearBootFailsafe();
            document.documentElement.dataset.appReady = "1";
        },
        { once: true }
    );

    bootFailsafeTimer = window.setTimeout(() => {
        const root = document.documentElement;
        if (root.dataset.appReady === "1" || root.dataset.appReady === "error") return;

        root.dataset.appReady = "error";
        applyBootFallbackUi();
        clearBootFailsafe();
    }, FAILSAFE_TIMEOUT_MS);
}

function setTrailingSpanText(button, text) {
    if (!button) return;
    const span = q("span:last-child", button);
    if (span) span.textContent = text;
}

function applyStaticUiText(options = {}) {
    const refreshNavigation = options.refreshNavigation !== false;
    const refreshBreadcrumb = options.refreshBreadcrumb !== false;

    document.title = tx("pageTitle");

    if (refs.brandTitle) refs.brandTitle.textContent = tx("brandTitle");
    if (refs.brandTagline) refs.brandTagline.textContent = tx("brandTagline");
    if (refs.paperTitle) refs.paperTitle.textContent = tx("paperTitle");

    if (refs.contentMenu) {
        refs.contentMenu.setAttribute("aria-label", tx("menuAriaLabel"));
    }

    if (refs.searchInput) {
        const label = tx("searchPlaceholder");
        refs.searchInput.placeholder = label;
        refs.searchInput.setAttribute("aria-label", label);
        refs.searchInput.setAttribute("aria-controls", "contentMenu");
    }

    if (refs.mobileToggle) {
        refs.mobileToggle.setAttribute("aria-label", tx("menu"));
        refs.mobileToggle.title = tx("menu");
    }

    if (refs.toTopBtn) {
        refs.toTopBtn.setAttribute("aria-label", tx("top"));
        refs.toTopBtn.title = tx("top");
        setTrailingSpanText(refs.toTopBtn, tx("top"));
    }

    if (refs.toBottomBtn) {
        refs.toBottomBtn.setAttribute("aria-label", tx("bottom"));
        refs.toBottomBtn.title = tx("bottom");
        setTrailingSpanText(refs.toBottomBtn, tx("bottom"));
    }

    if (refs.copyRawBtn) {
        refs.copyRawBtn.setAttribute("aria-label", tx("copyRaw"));
        refs.copyRawBtn.title = tx("copyRaw");
        setTrailingSpanText(refs.copyRawBtn, tx("copyRaw"));
    }

    if (refs.printBtn) {
        refs.printBtn.setAttribute("aria-label", tx("print"));
        refs.printBtn.title = tx("print");
        setTrailingSpanText(refs.printBtn, tx("print"));
    }

    if (refs.tocTitle) {
        refs.tocTitle.innerHTML = `<i class="fa-solid fa-book-open" aria-hidden="true"></i>${tx("toc")}`;
    }

    if (refs.tocDrawerToggleLabel) {
        refs.tocDrawerToggleLabel.textContent = tx("tocToggle");
    }

    if (refs.tocDrawerToggle) {
        refs.tocDrawerToggle.setAttribute("aria-label", tx("tocToggle"));
        refs.tocDrawerToggle.title = tx("tocToggle");
    }

    if (refs.tocDrawerClose) {
        const closeLabel = tx("close");
        refs.tocDrawerClose.setAttribute("aria-label", closeLabel);
        refs.tocDrawerClose.title = closeLabel;
    }

    if (refs.tocDrawer) {
        refs.tocDrawer.setAttribute("aria-label", tx("toc"));
    }

    if (!state.rawMarkdown) {
        updateMeta(tx("loading"), "fa-solid fa-hourglass-half");
        updateStatus(tx("waitingMarkdown"));
    } else {
        updateRenderInfo(state.currentSource || DEFAULT_MARKDOWN_PATH);
    }

    qa(".copy-btn span:last-child", refs.content || document).forEach((span) => {
        span.textContent = tx("copy");
    });

    qa(".anchor-link", refs.content || document).forEach((anchor) => {
        const heading = anchor.parentElement;
        const rawText = heading ? heading.childNodes[0]?.textContent || heading.textContent || "section" : "section";
        const cleaned = String(rawText).replace(/#$/, "").trim();
        anchor.setAttribute("aria-label", tx("anchorTo", { text: cleaned }));
    });

    if (refreshNavigation) {
        if (!state.navIndexLoaded) {
            if (refs.contentMenu) {
                refs.contentMenu.innerHTML = `<div class="menu-empty">${tx("loading")}</div>`;
            }
        } else {
            renderContentMenu();
        }
    }

    if (refreshBreadcrumb) {
        updateBreadcrumb(state.currentSource || DEFAULT_MARKDOWN_PATH);
    }

    if (!state.tocLinks.length && refs.toc) {
        refs.toc.innerHTML = `<div class="menu-empty">${tx("tocEmpty")}</div>`;
    }
}

async function navigateToMarkdown(path, options = {}) {
    const nextPath = sanitizeInitialPath(path);

    if (!options.keepSidebar && shouldDismissOverlaySidebar()) {
        closeSidebar();
    }

    await loadBundledMarkdown(nextPath, {
        force: Boolean(options.force),
    });
}

async function handleCopyRaw() {
    try {
        await copyText(state.rawMarkdown || "");
        updateStatus(tx("copied"));
    } catch {
        updateStatus(tx("copy"));
    }
}

function handleDocumentClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const mdTarget = target.closest("[data-md-path]");
    if (mdTarget) {
        event.preventDefault();
        const path = mdTarget.getAttribute("data-md-path");
        if (path) {
            navigateToMarkdown(path);
        }
        return;
    }

    const anchor = target.closest("a[href]");
    if (anchor) {
        const href = anchor.getAttribute("href") || "";

        if (/^#/.test(href)) {
            if (anchor.closest("#toc") && window.innerWidth <= 1080) {
                setTocDrawer(false);
            }
            return;
        }

        if (/\.md($|[?#])/i.test(href) || anchor.dataset.mdLink === "true") {
            const next =
                resolveMarkdownPath(state.currentSource || DEFAULT_MARKDOWN_PATH, href) ||
                sanitizeInitialPath(href.replace(/^\?md=/, ""));

            if (next) {
                event.preventDefault();
                navigateToMarkdown(next);
                return;
            }
        }

        try {
            const url = new URL(href, location.href);
            const fromQuery = url.searchParams.get("md");
            if (fromQuery) {
                event.preventDefault();
                navigateToMarkdown(fromQuery);
                return;
            }
        } catch {}
    }

    if (state.tocOpen && !target.closest("#tocDrawer") && !target.closest("#tocDrawerToggle")) {
        setTocDrawer(false);
    }

}

function handleDocumentKeydown(event) {
    if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        const active = document.activeElement;
        const tag = active?.tagName || "";
        const editable = active?.isContentEditable;

        if (!editable && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
            event.preventDefault();
            refs.searchInput?.focus();
        }
    }

    if (event.key === "Escape") {
        if (state.tocOpen) {
            setTocDrawer(false);
            return;
        }
        closeSidebar();
    }
}

async function handleThemeChanged() {
    if (!refs.content?.querySelector(".mermaid[data-source]")) return;

    const { rerenderMermaidInContent } = await import("./modules/mermaid.js");
    await rerenderMermaidInContent();
}

function hasExplicitMarkdownQuery() {
    try {
        const params = new URLSearchParams(location.search);
        return Boolean(params.get("md") || params.get("file"));
    } catch {
        return false;
    }
}

function handleLanguageChanged(event) {
    applyStaticUiText({
        refreshNavigation: false,
        refreshBreadcrumb: false,
    });

    languageSyncTask = languageSyncTask.then(async () => {
        const nextLocale = String(event?.detail?.lang || currentLang() || "en").toLowerCase() === "id" ? "id" : "en";
        const previousPath = state.currentSource || DEFAULT_MARKDOWN_PATH;

        try {
            await buildNavigationIndex(nextLocale);
            const nextPath = resolveLocalizedContentPath(previousPath, nextLocale);
            renderContentMenu();
            updateBreadcrumb(nextPath);

            if (nextPath !== previousPath) {
                await loadBundledMarkdown(nextPath);
            } else {
                updateMenuActiveState();
            }
        } catch (error) {
            console.error("[TenRusl] Failed to sync navigation after language change.", error);
            if (refs.contentMenu) {
                refs.contentMenu.innerHTML = `<div class="menu-empty">Katalog tidak bisa dimuat.</div>`;
            }
        }
    });
}

async function handleHistoryNavigation() {
    const path = resolveInitialPath();
    await loadBundledMarkdown(path);
}

function bindEvents() {
    if (eventsBound) return;
    eventsBound = true;

    refs.searchInput?.addEventListener("input", (event) => {
        const value = event.target instanceof HTMLInputElement ? event.target.value : refs.searchInput?.value || "";
        setSidebarFilter(value);
    });

    refs.searchInput?.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            focusFirstMenuItem();
        }
    });

    refs.copyRawBtn?.addEventListener("click", handleCopyRaw);

    refs.printBtn?.addEventListener("click", () => {
        window.print();
    });

    refs.mobileToggle?.addEventListener("click", () => {
        toggleSidebar();
    });

    refs.toTopBtn?.addEventListener("click", () => {
        animateScrollTop(window, 0, { duration: 820 });
    });

    refs.toBottomBtn?.addEventListener("click", () => {
        animateScrollTop(window, document.documentElement.scrollHeight, {
            duration: 900,
        });
    });

    refs.tocDrawerToggle?.addEventListener("click", () => {
        toggleTocDrawer();
    });

    refs.tocBackdrop?.addEventListener("click", () => {
        setTocDrawer(false);
    });

    refs.tocDrawerClose?.addEventListener("click", () => {
        setTocDrawer(false);
    });

    refs.sidebarBackdrop?.addEventListener("click", () => {
        closeSidebar();
    });

    refs.contentMenu?.addEventListener("keydown", handleSidebarKeydown);
    refs.contentMenu?.addEventListener("click", handleSidebarClick);

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleDocumentKeydown);

    document.addEventListener(EVENT_I18N, handleLanguageChanged);
    document.addEventListener(EVENT_THEME, handleThemeChanged);

    window.addEventListener("popstate", handleHistoryNavigation);
    window.addEventListener("resize", syncSidebarToggleState);

    syncSidebarToggleState();
}

function registerRootServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    const swUrl = new URL("./sw.js", import.meta.url).href;

    window.addEventListener(
        "load",
        async () => {
            const rootScoped = await registerServiceWorker(swUrl, {
                scope: "/",
                updateViaCache: "none",
            });

            if (rootScoped) return;

            await registerServiceWorker(swUrl, {
                updateViaCache: "none",
            });
        },
        { once: true }
    );
}

function resolveInitialPath() {
    try {
        const params = new URLSearchParams(location.search);
        const queryPath = params.get("md") || params.get("file") || "";

        if (queryPath && !/^https?:/i.test(queryPath)) {
            return sanitizeInitialPath(queryPath.replace(/^\/+/, ""));
        }
    } catch {}

    try {
        const saved = localStorage.getItem(LS_LAST_SOURCE);
        if (saved && typeof saved === "string") {
            return sanitizeInitialPath(saved);
        }
    } catch {}

    return DEFAULT_MARKDOWN_PATH;
}

function restorePersistentUiState() {
    try {
        const savedToc = localStorage.getItem(LS_TOC_OPEN);
        if (savedToc === "1") state.tocOpen = true;
        if (savedToc === "0") state.tocOpen = false;
    } catch {}
}

function showBootFailure(error, initialPath) {
    const message = error?.message || "Unknown boot error";
    document.documentElement.dataset.appReady = "error";
    clearBootFailsafe();

    updateMeta("Fallback", "fa-solid fa-triangle-exclamation");
    updateStatus(`Bootstrap gagal: ${message}`);
    updateBreadcrumb(initialPath || DEFAULT_MARKDOWN_PATH);

    if (refs.content) {
        refs.content.innerHTML = `
            <h1>Gagal memulai viewer</h1>
            <p>Bootstrap aplikasi berhenti sebelum Markdown berhasil dirender.</p>
            <p><strong>${message.replace(
                /[&<>"']/g,
                (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch])
            )}</strong></p>
            <ol>
                <li>Periksa file <code>assets/js/modules/renderer.js</code>.</li>
                <li>Pastikan file Markdown awal bisa diakses dari <code>${initialPath}</code>.</li>
                <li>Refresh cache service worker lalu muat ulang situs.</li>
            </ol>
        `;
    }

    if (refs.toc) {
        refs.toc.innerHTML = `<div class="menu-empty">Viewer gagal dimulai.</div>`;
    }

    if (refs.contentMenu && !state.navIndexLoaded) {
        refs.contentMenu.innerHTML = `<div class="menu-empty">Katalog belum tersedia.</div>`;
    }
}

async function init() {
    if (booted) return;
    booted = true;

    document.documentElement.dataset.appReady = "0";
    installBootFailsafe();

    restorePersistentUiState();
    bindEvents();
    setTocDrawer(state.tocOpen);
    applyStaticUiText();
    registerRootServiceWorker();

    const initialPath = resolveInitialPath();
    const navLocale = currentLang();
    state.currentSource = initialPath;

    const navigationTask = (async () => {
        try {
            await buildNavigationIndex(navLocale);
            renderContentMenu();
            updateBreadcrumb(state.currentSource || initialPath);
        } catch (error) {
            console.error("[TenRusl] Failed to build navigation index.", error);
            if (refs.contentMenu) {
                refs.contentMenu.innerHTML = `<div class="menu-empty">Katalog tidak bisa dimuat.</div>`;
            }
        }
    })();

    const markdownTask = (async () => {
        let nextPath = initialPath;

        try {
            await navigationTask;
            if (!hasExplicitMarkdownQuery()) {
                nextPath = resolveLocalizedContentPath(initialPath, navLocale);
            }
        } catch {}

        state.currentSource = nextPath;
        await loadBundledMarkdown(nextPath);
    })();

    try {
        await markdownTask;
        await navigationTask;
    } catch (error) {
        showBootFailure(error, initialPath);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
    init();
}
