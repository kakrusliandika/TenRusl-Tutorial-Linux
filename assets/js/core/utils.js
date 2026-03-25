import { DEFAULT_LANGUAGE, DEFAULT_MARKDOWN_PATH } from "./constants.js";

const I18N_ENTRIES = Object.freeze({
    pageTitle: {
        path: "app.pageTitle",
        en: "TenRusl Tutorial Linux — Structured Linux Tutorial Portal",
        id: "TenRusl Tutorial Linux — Portal Tutorial Linux Terstruktur",
    },
    brandTitle: {
        path: "app.brandTitle",
        en: "TenRusl Tutorial Linux",
        id: "TenRusl Tutorial Linux",
    },
    brandTagline: {
        path: "app.brandTagline",
        en: "Structured Linux tutorials for server, virtualization, security, backup, and workstation",
        id: "Tutorial Linux terstruktur untuk server, virtualization, security, backup, dan workstation",
    },
    searchPlaceholder: {
        path: "app.searchPlaceholder",
        en: "Search tutorials...",
        id: "Cari tutorial...",
    },
    menuAriaLabel: {
        path: "app.tutorialNavigation",
        en: "Tutorial navigation",
        id: "Daftar tutorial",
    },
    paperTitle: {
        path: "app.paperTitle",
        en: "Live Markdown Preview",
        id: "Live Markdown Preview",
    },
    paperIntro: {
        path: "app.paperIntro",
        en: "Reading file {path}",
        id: "Membaca file {path}",
    },
    loading: {
        path: "app.loading",
        en: "Loading...",
        id: "Loading...",
    },
    loadingFile: {
        path: "app.loadingFile",
        en: "Reading {path} ...",
        id: "Membaca {path} ...",
    },
    waitingMarkdown: {
        path: "app.waitingMarkdown",
        en: "Waiting for the tutorial catalog.",
        id: "Menunggu katalog tutorial.",
    },
    rendered: {
        path: "app.rendered",
        en: "Rendered",
        id: "Dirender",
    },
    lines: {
        path: "app.lines",
        en: "lines",
        id: "baris",
    },
    chars: {
        path: "app.chars",
        en: "chars",
        id: "karakter",
    },
    copy: {
        path: "common.copy",
        en: "Copy",
        id: "Salin",
    },
    copied: {
        path: "common.copied",
        en: "Copied",
        id: "Tersalin",
    },
    copyRaw: {
        path: "app.copyRaw",
        en: "Copy raw MD",
        id: "Salin raw MD",
    },
    print: {
        path: "app.print",
        en: "Print",
        id: "Cetak",
    },
    toc: {
        path: "app.toc",
        en: "Table of contents",
        id: "Daftar isi",
    },
    tocToggle: {
        path: "app.tocToggle",
        en: "Table of contents",
        id: "Daftar isi",
    },
    tocEmpty: {
        path: "app.tocEmpty",
        en: "No headings were found in this document.",
        id: "Belum ada heading yang ditemukan pada dokumen ini.",
    },
    breadcrumbHome: {
        path: "app.breadcrumbHome",
        en: "Home",
        id: "Beranda",
    },
    noMenuResult: {
        path: "app.noMenuResult",
        en: "No tutorials matched this search.",
        id: "Tidak ada tutorial yang cocok dengan pencarian ini.",
    },
    clearSearch: {
        path: "app.clearSearch",
        en: "Clear search",
        id: "Bersihkan pencarian",
    },
    expandAll: {
        path: "app.expandAll",
        en: "Expand all groups",
        id: "Buka semua grup",
    },
    collapseAll: {
        path: "app.collapseAll",
        en: "Collapse all groups",
        id: "Tutup semua grup",
    },
    sidebarControls: {
        path: "app.sidebarControls",
        en: "Sidebar controls",
        id: "Kontrol sidebar",
    },
    sidebarSearchHint: {
        path: "app.sidebarSearchHint",
        en: "Try a shorter keyword or clear the filter.",
        id: "Coba kata kunci yang lebih pendek atau bersihkan filter.",
    },
    fallback: {
        path: "app.fallback",
        en: "Fallback",
        id: "Fallback",
    },
    loadFailedWithReason: {
        path: "app.loadFailedWithReason",
        en: "Failed to read {path}: {reason}",
        id: "Gagal membaca {path}: {reason}",
    },
    errorHeading: {
        path: "app.errorHeading",
        en: "Failed to read documentation",
        id: "Gagal membaca dokumentasi",
    },
    errorBody: {
        path: "app.errorBody",
        en: "Cannot read file {path}.",
        id: "Tidak bisa membaca file {path}.",
    },
    commonCauses: {
        path: "app.commonCauses",
        en: "Common causes:",
        id: "Penyebab umum:",
    },
    errorCauseWrongName: {
        path: "app.errorCauseWrongName",
        en: "The Markdown path still points to an old file or the requested file does not exist.",
        id: "Path Markdown masih mengarah ke file lama atau file yang diminta tidak ada.",
    },
    errorCauseWrongFolder: {
        path: "app.errorCauseWrongFolder",
        en: "The content structure or manifest paths do not match the expected locations.",
        id: "Struktur konten atau path manifest tidak sesuai dengan lokasi yang diharapkan.",
    },
    errorCauseSavedState: {
        path: "app.errorCauseSavedState",
        en: "The browser is still using an older source from localStorage or a previous cache.",
        id: "Browser masih memakai source lama dari localStorage atau cache sebelumnya.",
    },
    quickFix: {
        path: "app.quickFix",
        en: "Quick fix",
        id: "Solusi cepat",
    },
    fixStep1: {
        path: "app.fixStep1",
        en: "Point the root app to assets/content/index.md or another valid content entry page.",
        id: "Arahkan root app ke assets/content/index.md atau halaman masuk konten lain yang valid.",
    },
    fixStep2: {
        path: "app.fixStep2",
        en: "Make sure Markdown files, index pages, and manifests are stored in the correct folders.",
        id: "Pastikan file Markdown, halaman index, dan manifest berada di folder yang benar.",
    },
    fixStep3: {
        path: "app.fixStep3",
        en: "Clear stale cache and reload the project through a local HTTP server.",
        id: "Bersihkan cache lama lalu muat ulang proyek melalui HTTP server lokal.",
    },
    anchorTo: {
        path: "app.anchorTo",
        en: "Anchor to {text}",
        id: "Anchor ke {text}",
    },
    localFile: {
        path: "app.localFile",
        en: "Local file",
        id: "File lokal",
    },
    loadedSuccess: {
        path: "app.loadedSuccess",
        en: "Successfully loaded {path}. Documentation rendered with breadcrumb, navigation tree, TOC, syntax highlighting, and Mermaid.",
        id: "Berhasil memuat {path}. Dokumentasi dirender dengan breadcrumb, struktur navigasi, TOC, syntax highlighting, dan Mermaid.",
    },
    top: {
        path: "app.top",
        en: "Top",
        id: "Atas",
    },
    bottom: {
        path: "app.bottom",
        en: "Bottom",
        id: "Bawah",
    },
    menu: {
        path: "common.menu",
        en: "Menu",
        id: "Menu",
    },
    sectionConcepts: {
        path: "app.sectionConcepts",
        en: "Concepts",
        id: "Konsep",
    },
    sectionHowTo: {
        path: "app.sectionHowTo",
        en: "How-to",
        id: "Panduan cepat",
    },
    sectionReference: {
        path: "app.sectionReference",
        en: "Reference",
        id: "Referensi",
    },
    sectionTutorials: {
        path: "app.sectionTutorials",
        en: "Tutorials",
        id: "Tutorial",
    },
    navOverview: {
        path: "app.navOverview",
        en: "Overview",
        id: "Ringkasan",
    },
    close: {
        path: "common.close",
        en: "Close",
        id: "Tutup",
    },
});

function getI18nProvider() {
    try {
        if (window.TRI18N && typeof window.TRI18N.t === "function") return window.TRI18N;
        if (window.PagesI18N && typeof window.PagesI18N.t === "function") return window.PagesI18N;
    } catch {}
    return null;
}

function normalizeLang(value) {
    return String(value || "").toLowerCase() === "id" ? "id" : "en";
}

function interpolate(value, params) {
    if (!params) return String(value ?? "");
    return String(value ?? "").replace(/\{(\w+)\}/g, (_, name) => {
        return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : `{${name}}`;
    });
}

function fallbackText(key) {
    const entry = I18N_ENTRIES[key];
    if (!entry) return key;
    return currentLang() === "id" ? entry.id : entry.en;
}

export function currentLang() {
    try {
        if (window.TRI18N && typeof window.TRI18N.get === "function") {
            return normalizeLang(window.TRI18N.get());
        }

        if (window.PagesI18N && typeof window.PagesI18N.get === "function") {
            return normalizeLang(window.PagesI18N.get());
        }
    } catch {}

    return normalizeLang(document.documentElement.lang || DEFAULT_LANGUAGE);
}

export function prefersReducedMotion() {
    try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
        return false;
    }
}

export function preferredScrollBehavior() {
    return prefersReducedMotion() ? "auto" : "smooth";
}

const scrollAnimationHandles = new WeakMap();

function easingOutCubic(progress) {
    return 1 - Math.pow(1 - progress, 3);
}

function getScrollNode(target) {
    if (target === window) {
        return document.scrollingElement || document.documentElement;
    }
    return target instanceof Element ? target : null;
}

function readScrollTop(target, node) {
    if (target === window) {
        return window.scrollY || window.pageYOffset || node?.scrollTop || 0;
    }
    return node?.scrollTop || 0;
}

function writeScrollTop(target, value) {
    const nextValue = Math.max(0, Number(value) || 0);
    if (target === window) {
        window.scrollTo({ top: nextValue, behavior: "auto" });
        return;
    }
    if (target instanceof Element) {
        target.scrollTop = nextValue;
    }
}

export function animateScrollTop(target, top, options = {}) {
    const node = getScrollNode(target);
    if (!node) return;

    const nextTop = Math.max(0, Number(top) || 0);

    if (preferredScrollBehavior() === "auto") {
        writeScrollTop(target, nextTop);
        return;
    }

    const startTop = readScrollTop(target, node);
    if (Math.abs(nextTop - startTop) < 1) {
        writeScrollTop(target, nextTop);
        return;
    }

    const duration = Math.max(320, Number(options.duration) || 720);
    const previousHandle = scrollAnimationHandles.get(node);
    if (typeof previousHandle === "number") {
        window.cancelAnimationFrame(previousHandle);
    }

    const startedAt = performance.now();

    const step = (timestamp) => {
        const progress = Math.min(1, (timestamp - startedAt) / duration);
        const eased = easingOutCubic(progress);
        writeScrollTop(target, startTop + (nextTop - startTop) * eased);

        if (progress < 1) {
            scrollAnimationHandles.set(node, window.requestAnimationFrame(step));
            return;
        }

        scrollAnimationHandles.delete(node);
        writeScrollTop(target, nextTop);
    };

    scrollAnimationHandles.set(node, window.requestAnimationFrame(step));
}

export function animateElementIntoView(target, container, options = {}) {
    if (!(target instanceof Element)) return;

    const scrollContainer = container instanceof Element ? container : target.closest(".menu-scroll");
    if (!(scrollContainer instanceof Element)) {
        if (preferredScrollBehavior() === "auto") {
            target.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
            return;
        }
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        return;
    }

    if (preferredScrollBehavior() === "auto") {
        target.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
        return;
    }

    const padding = Math.max(0, Number(options.padding) || 18);
    const containerRect = scrollContainer.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const currentTop = scrollContainer.scrollTop;

    let nextTop = currentTop;
    if (targetRect.top < containerRect.top + padding) {
        nextTop -= containerRect.top + padding - targetRect.top;
    } else if (targetRect.bottom > containerRect.bottom - padding) {
        nextTop += targetRect.bottom - (containerRect.bottom - padding);
    } else {
        return;
    }

    animateScrollTop(scrollContainer, nextTop, {
        duration: options.duration || 680,
    });
}

export function tx(key, params) {
    const provider = getI18nProvider();
    const entry = I18N_ENTRIES[key];
    const i18nPath = entry?.path || key;
    const fallback = fallbackText(key);

    let value = fallback;

    try {
        if (provider && typeof provider.t === "function") {
            value = provider.t(i18nPath, fallback);
        }
    } catch {
        value = fallback;
    }

    return interpolate(value, params);
}

export function normalizeMarkdownText(input) {
    return String(input || "").replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, "");
}

export function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export function copyText(value) {
    const text = String(value || "");

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function" && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.setAttribute("readonly", "readonly");
        temp.style.position = "fixed";
        temp.style.top = "-9999px";
        temp.style.opacity = "0";

        document.body.appendChild(temp);
        temp.focus();
        temp.select();

        let ok = false;
        try {
            ok = document.execCommand("copy");
        } catch {
            ok = false;
        }

        temp.remove();

        if (ok) resolve();
        else reject(new Error("clipboard_unavailable"));
    });
}

export async function registerServiceWorker(scriptUrl, options = {}) {
    if (!("serviceWorker" in navigator)) return null;
    if (!window.isSecureContext) return null;

    try {
        return await navigator.serviceWorker.register(scriptUrl, options);
    } catch {
        return null;
    }
}

export function slugify(text, fallback = "section") {
    const base = String(text || "")
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    return base || fallback;
}

export function formatPathLabel(path) {
    if (!path) return tx("localFile");
    return String(path).replace(/^\.\//, "");
}

export function titleFromSlug(value) {
    const base = String(value || "")
        .replace(/\.md$/i, "")
        .replace(/^\d+[-_]?/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (!base) return "Untitled";

    return base.replace(/\b\w/g, (m) => m.toUpperCase());
}

export function labelForSection(key) {
    if (key === "concepts") return tx("sectionConcepts");
    if (key === "howTo") return tx("sectionHowTo");
    if (key === "reference") return tx("sectionReference");
    if (key === "tutorials") return tx("sectionTutorials");
    return titleFromSlug(key);
}

export function sanitizeInitialPath(path) {
    const normalized = String(path || "").replace(/^\/+/, "");

    if (!normalized) return DEFAULT_MARKDOWN_PATH;
    if (/^assets\/md\/example\.md$/i.test(normalized)) return DEFAULT_MARKDOWN_PATH;
    if (!/^assets\/(content|pages)\//i.test(normalized)) return DEFAULT_MARKDOWN_PATH;

    return normalized;
}

export function resolveMarkdownPath(basePath, href) {
    try {
        const base = new URL(String(basePath || DEFAULT_MARKDOWN_PATH), document.baseURI);
        const next = new URL(href, base);

        if (next.origin !== location.origin) return null;

        return next.pathname.replace(/^\/+/, "");
    } catch {
        return null;
    }
}
