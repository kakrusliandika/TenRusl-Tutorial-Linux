(() => {
    "use strict";

    const LS_LANG = "tenrusl.uiLang";
    const EVENT_I18N = "tenrusl:i18nUpdated";
    const SUPPORTED = ["en", "id"];

    const SCRIPT_URL = (() => {
        try {
            const src = document.currentScript?.getAttribute("src") || "assets/js/language.js";
            return new URL(src, document.baseURI);
        } catch {
            return new URL("assets/js/language.js", document.baseURI);
        }
    })();

    const ASSETS_BASE = new URL("../", SCRIPT_URL);

    const FALLBACK = {
        en: {
            common: {
                copied: "Copied",
                clipboardUnavailable: "Clipboard is not available in this browser.",
                repository: "GitHub",
                language: "Language",
                toggleLanguage: "Toggle language",
                languageCurrent: "Current language",
                menu: "Menu",
                languageEnglish: "English",
                languageIndonesian: "Bahasa Indonesia",
                copy: "Copy",
                error: "Error",
                ok: "OK",
                backHome: "Back to Home",
                tryAgain: "Try again",
            },
            nav: {
                home: "Home",
                privacy: "Privacy",
                terms: "Terms",
                cookies: "Cookies",
                contact: "Contact",
            },
            app: {
                pageTitle: "TenRusl Tutorial Linux — Structured Linux Tutorial Portal",
                brandTitle: "TenRusl Tutorial Linux",
                brandTagline:
                    "Structured Linux tutorials for server, virtualization, security, backup, and workstation",
                searchPlaceholder: "Search tutorials...",
                tutorialNavigation: "Tutorial navigation",
                documentationHome: "Documentation home",
                breadcrumb: "Breadcrumb",
                breadcrumbHome: "Home",
                breadcrumbRoot: "Catalog",
                currentPage: "Current page",
                paperTitle: "Live Markdown Preview",
                paperIntro: "Reading file {path}",
                loading: "Loading...",
                waitingMarkdown: "Waiting for the tutorial catalog.",
                loadingFile: "Reading {path} ...",
                rendered: "Rendered",
                lines: "lines",
                chars: "chars",
                copy: "Copy",
                copyRaw: "Copy raw MD",
                print: "Print",
                theme: "Theme",
                top: "Top",
                bottom: "Bottom",
                toc: "Table of contents",
                tocToggle: "Table of contents",
                tocEmpty: "No headings were found in this document.",
                noMenuResult: "No tutorials matched this search.",
                loadedSuccess:
                    "Successfully loaded {path}. Documentation rendered with breadcrumb, navigation tree, TOC, syntax highlighting, and Mermaid.",
                loadFailedWithReason: "Failed to read {path}: {reason}",
                fallback: "Fallback",
                errorHeading: "Failed to read documentation",
                errorBody: "Cannot read file {path}.",
                commonCauses: "Common causes:",
                errorCauseFileProtocol: "The HTML file is opened via file:// instead of an HTTP server.",
                errorCauseWrongName:
                    "The Markdown path still points to an old file or the requested file does not exist.",
                errorCauseWrongFolder: "The content structure or manifest paths do not match the expected locations.",
                errorCauseSavedState:
                    "The browser is still using an older source from localStorage or a previous cache.",
                quickFix: "Quick fix",
                fixStep1: "Point the root app to assets/content/index.md or another valid content entry page.",
                fixStep2: "Make sure Markdown files, index pages, and manifests are stored in the correct folders.",
                fixStep3: "Clear stale cache and reload the project through a local HTTP server.",
                anchorTo: "Anchor to {text}",
                localFile: "Local file",
                offlineTitle: "You are offline",
                offlineBody: "Some resources may be unavailable until the connection returns.",
                offlineTryAgain: "Try again",
                sectionConcepts: "Concepts",
                sectionHowTo: "How-to",
                sectionReference: "Reference",
                sectionTutorials: "Tutorials",
                categories: {
                    server: "Server",
                    virtualization: "Virtualization",
                    security: "Security",
                    backup: "Backup",
                    workstation: "Workstation",
                },
            },
            footer: {
                statusIdle: "Ready",
                stackLabel: "Stack",
                builtWith: "Built with",
                markdownViewer: "Linux documentation portal",
            },
        },
        id: {
            common: {
                copied: "Tersalin",
                clipboardUnavailable: "Clipboard tidak tersedia di browser ini.",
                repository: "GitHub",
                language: "Bahasa",
                toggleLanguage: "Ganti bahasa",
                languageCurrent: "Bahasa aktif",
                menu: "Menu",
                languageEnglish: "English",
                languageIndonesian: "Bahasa Indonesia",
                copy: "Salin",
                error: "Error",
                ok: "OK",
                backHome: "Kembali ke Beranda",
                tryAgain: "Coba lagi",
            },
            nav: {
                home: "Beranda",
                privacy: "Privasi",
                terms: "Ketentuan",
                cookies: "Cookie",
                contact: "Kontak",
            },
            app: {
                pageTitle: "TenRusl Tutorial Linux — Portal Tutorial Linux Terstruktur",
                brandTitle: "TenRusl Tutorial Linux",
                brandTagline:
                    "Tutorial Linux terstruktur untuk server, virtualization, security, backup, dan workstation",
                searchPlaceholder: "Cari tutorial...",
                tutorialNavigation: "Daftar tutorial",
                documentationHome: "Beranda dokumentasi",
                breadcrumb: "Breadcrumb",
                breadcrumbHome: "Beranda",
                breadcrumbRoot: "Katalog",
                currentPage: "Halaman saat ini",
                paperTitle: "Live Markdown Preview",
                paperIntro: "Membaca file {path}",
                loading: "Loading...",
                waitingMarkdown: "Menunggu katalog tutorial.",
                loadingFile: "Membaca {path} ...",
                rendered: "Dirender",
                lines: "baris",
                chars: "karakter",
                copy: "Salin",
                copyRaw: "Salin raw MD",
                print: "Cetak",
                theme: "Tema",
                top: "Atas",
                bottom: "Bawah",
                toc: "Daftar isi",
                tocToggle: "Daftar isi",
                tocEmpty: "Belum ada heading yang ditemukan pada dokumen ini.",
                noMenuResult: "Tidak ada tutorial yang cocok dengan pencarian ini.",
                loadedSuccess:
                    "Berhasil memuat {path}. Dokumentasi dirender dengan breadcrumb, struktur navigasi, TOC, syntax highlighting, dan Mermaid.",
                loadFailedWithReason: "Gagal membaca {path}: {reason}",
                fallback: "Fallback",
                errorHeading: "Gagal membaca dokumentasi",
                errorBody: "Tidak bisa membaca file {path}.",
                commonCauses: "Penyebab umum:",
                errorCauseFileProtocol: "File HTML dibuka melalui file://, bukan HTTP server.",
                errorCauseWrongName: "Path Markdown masih mengarah ke file lama atau file yang diminta tidak ada.",
                errorCauseWrongFolder: "Struktur konten atau path manifest tidak sesuai dengan lokasi yang diharapkan.",
                errorCauseSavedState: "Browser masih memakai source lama dari localStorage atau cache sebelumnya.",
                quickFix: "Solusi cepat",
                fixStep1: "Arahkan root app ke assets/content/index.md atau halaman masuk konten lain yang valid.",
                fixStep2: "Pastikan file Markdown, halaman index, dan manifest berada di folder yang benar.",
                fixStep3: "Bersihkan cache lama lalu muat ulang proyek melalui HTTP server lokal.",
                anchorTo: "Anchor ke {text}",
                localFile: "File lokal",
                offlineTitle: "Anda sedang offline",
                offlineBody: "Sebagian resource mungkin belum tersedia sampai koneksi kembali.",
                offlineTryAgain: "Coba lagi",
                sectionConcepts: "Konsep",
                sectionHowTo: "Panduan cepat",
                sectionReference: "Referensi",
                sectionTutorials: "Tutorial",
                categories: {
                    server: "Server",
                    virtualization: "Virtualization",
                    security: "Security",
                    backup: "Backup",
                    workstation: "Workstation",
                },
            },
            footer: {
                statusIdle: "Siap",
                stackLabel: "Stack",
                builtWith: "Dibangun dengan",
                markdownViewer: "Portal dokumentasi Linux",
            },
        },
    };

    const state = {
        lang: "en",
        dict: clone(FALLBACK.en),
        observer: null,
        booted: false,
    };

    const q = (selector, scope = document) => scope.querySelector(selector);
    const qa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    function clone(value) {
        if (typeof structuredClone === "function") {
            try {
                return structuredClone(value);
            } catch {}
        }
        return JSON.parse(JSON.stringify(value));
    }

    function safeGetLS(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function safeSetLS(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {}
    }

    function clamp(lang) {
        const normalized = String(lang || "").toLowerCase();
        return SUPPORTED.includes(normalized) ? normalized : "en";
    }

    function deepMerge(target, source) {
        Object.keys(source || {}).forEach((key) => {
            const value = source[key];
            if (value && typeof value === "object" && !Array.isArray(value)) {
                if (!target[key] || typeof target[key] !== "object") target[key] = {};
                deepMerge(target[key], value);
            } else {
                target[key] = value;
            }
        });
        return target;
    }

    function deepGet(obj, path) {
        return String(path || "")
            .split(".")
            .filter(Boolean)
            .reduce((acc, key) => {
                return acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined;
            }, obj);
    }

    function interpolate(value, params) {
        if (!params) return String(value ?? "");
        return String(value ?? "").replace(/\{(\w+)\}/g, (_, name) => {
            return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : `{${name}}`;
        });
    }

    function normalizeTranslateArgs(fallbackOrParams, maybeParams) {
        if (
            fallbackOrParams &&
            typeof fallbackOrParams === "object" &&
            !Array.isArray(fallbackOrParams) &&
            maybeParams === undefined
        ) {
            return {
                fallback: undefined,
                params: fallbackOrParams,
            };
        }

        return {
            fallback: fallbackOrParams,
            params: maybeParams,
        };
    }

    function t(key, fallbackOrParams, maybeParams) {
        const { fallback, params } = normalizeTranslateArgs(fallbackOrParams, maybeParams);
        const localValue = deepGet(state.dict, key);
        const fallbackValue = deepGet(FALLBACK[state.lang], key);
        const value = localValue != null ? localValue : fallbackValue != null ? fallbackValue : fallback || key;
        return interpolate(value, params);
    }

    function getDictUrl(lang) {
        return new URL(`i18n/${lang}.json`, ASSETS_BASE).href;
    }

    async function loadDict(lang) {
        const base = clone(FALLBACK[lang] || FALLBACK.en);

        try {
            const res = await fetch(getDictUrl(lang), {
                cache: "no-cache",
                credentials: "same-origin",
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const json = await res.json();
            return deepMerge(base, json || {});
        } catch {
            return base;
        }
    }

    function detectInitialLang() {
        const fromLS = safeGetLS(LS_LANG);
        if (fromLS) return clamp(fromLS);

        const htmlLang = document.documentElement.getAttribute("data-default-lang") || document.documentElement.lang;
        if (htmlLang) return clamp(htmlLang);

        const hintedCountry =
            window.__tenrusl_COUNTRY || document.querySelector('meta[name="tenrusl-country"]')?.getAttribute("content");
        if (String(hintedCountry || "").toUpperCase() === "ID") return "id";

        try {
            const langs = (navigator.languages || [navigator.language || "en"]).map((item) =>
                String(item).toLowerCase()
            );
            if (langs.some((item) => item.startsWith("id"))) return "id";
        } catch {}

        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
            if (/^Asia\/(Jakarta|Makassar|Jayapura)$/i.test(timezone)) return "id";
        } catch {}

        return "en";
    }

    function setButtonLabel(id, text) {
        const el = document.getElementById(id);
        if (!el) return;

        const label = q("span:last-child", el);
        if (label) label.textContent = text;
        else if (el.childElementCount === 0) el.textContent = text;

        el.setAttribute("aria-label", text);
        el.title = text;
    }

    function setIconOnlyLabel(id, text) {
        const el = document.getElementById(id);
        if (!el) return;
        el.setAttribute("aria-label", text);
        el.title = text;
    }

    function setInlineIconText(id, text) {
        const el = document.getElementById(id);
        if (!el) return;

        const icon = q("i", el);
        el.innerHTML = `${icon ? `${icon.outerHTML} ` : ""}${text}`;
    }

    function updateLanguageButtons() {
        const buttons = [
            document.getElementById("btnUiLang"),
            document.getElementById("btnUiLangSites"),
            document.getElementById("btnUiLangPages"),
        ].filter(Boolean);

        const badges = [
            document.getElementById("uiLangBadge"),
            document.getElementById("uiLangBadgeSites"),
            document.getElementById("uiLangBadgePages"),
        ].filter(Boolean);

        const langCode = state.lang.toUpperCase();
        const visibleLabel = t("common.language", "Language");
        const actionLabel = t("common.toggleLanguage", "Toggle language");
        const currentLabel = t("common.languageCurrent", "Current language");

        badges.forEach((badge) => {
            badge.textContent = langCode;
        });

        buttons.forEach((button) => {
            const labelEl = q(".label", button);
            if (labelEl) labelEl.textContent = visibleLabel;

            button.dataset.lang = state.lang;
            button.setAttribute("aria-label", `${actionLabel}: ${langCode}`);
            button.title = `${currentLabel}: ${langCode}`;
        });
    }

    function applyGenericI18n(scope = document) {
        qa("[data-i18n]", scope).forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const label = q(":scope > .label", el);
            const nextText = t(key, label ? label.textContent : el.textContent);

            if (label) label.textContent = nextText;
            else if (el.childElementCount === 0) el.textContent = nextText;
        });

        qa("[data-i18n-attrs]", scope).forEach((el) => {
            const attrs = (el.getAttribute("data-i18n-attrs") || "")
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);

            attrs.forEach((attr) => {
                const key = el.getAttribute(`data-i18n-${attr}`);
                if (!key) return;

                const value = t(key, el.getAttribute(attr) || "");
                el.setAttribute(attr, value);
            });
        });

        const titleEl = document.querySelector("title[data-i18n]");
        if (titleEl) {
            titleEl.textContent = t(titleEl.getAttribute("data-i18n"), titleEl.textContent);
        }
    }

    function applyRootTexts() {
        document.documentElement.lang = state.lang;
        document.title = t("app.pageTitle", "TenRusl Tutorial Linux");

        const search = document.getElementById("searchInput");
        if (search) {
            const searchLabel = t("app.searchPlaceholder", "Search tutorials...");
            search.placeholder = searchLabel;
            search.setAttribute("aria-label", searchLabel);
        }

        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            const themeLabel = t("app.theme", "Theme");
            themeToggle.setAttribute("aria-label", themeLabel);
            themeToggle.title = themeLabel;
        }

        const mobileToggle = document.getElementById("mobileToggle");
        if (mobileToggle) {
            const menuLabel = t("common.menu", "Menu");
            mobileToggle.setAttribute("aria-label", menuLabel);
            mobileToggle.title = menuLabel;
        }

        setIconOnlyLabel("toTopBtn", t("app.top", "Top"));
        setIconOnlyLabel("toBottomBtn", t("app.bottom", "Bottom"));

        const brandTitle = document.getElementById("brandTitle");
        if (brandTitle) brandTitle.textContent = t("app.brandTitle", "TenRusl Tutorial Linux");

        const brandTagline = document.getElementById("brandTagline");
        if (brandTagline) {
            brandTagline.textContent = t(
                "app.brandTagline",
                "Structured Linux tutorials for server, virtualization, security, backup, and workstation"
            );
        }

        const contentMenu = document.getElementById("contentMenu");
        if (contentMenu) {
            contentMenu.setAttribute("aria-label", t("app.tutorialNavigation", "Tutorial navigation"));
        }

        const breadcrumb = document.getElementById("breadcrumb");
        if (breadcrumb) {
            breadcrumb.setAttribute("aria-label", t("app.breadcrumb", "Breadcrumb"));
        }

        const paperTitle = document.getElementById("paperTitle");
        if (paperTitle) {
            paperTitle.textContent = t("app.paperTitle", "Live Markdown Preview");
        }

        setButtonLabel("copyRawBtn", t("app.copyRaw", "Copy raw MD"));
        setButtonLabel("printBtn", t("app.print", "Print"));
        setInlineIconText("tocTitle", t("app.toc", "Table of contents"));

        const toc = document.getElementById("toc");
        if (toc) toc.setAttribute("aria-label", t("app.toc", "Table of contents"));

        const tocDrawer = document.getElementById("tocDrawer");
        if (tocDrawer) tocDrawer.setAttribute("aria-label", t("app.toc", "Table of contents"));

        const tocDrawerToggleLabel = document.getElementById("tocDrawerToggleLabel");
        if (tocDrawerToggleLabel) {
            tocDrawerToggleLabel.textContent = t("app.tocToggle", "Table of contents");
        }

        const tocDrawerToggle = document.getElementById("tocDrawerToggle");
        if (tocDrawerToggle) {
            const tocLabel = t("app.tocToggle", "Table of contents");
            tocDrawerToggle.setAttribute("aria-label", tocLabel);
            tocDrawerToggle.title = tocLabel;
        }

        updateLanguageButtons();
        applyGenericI18n(document);
    }

    function refresh(scope = document) {
        applyRootTexts();
        applyGenericI18n(scope);
    }

    function bindLanguageButtons() {
        [
            document.getElementById("btnUiLang"),
            document.getElementById("btnUiLangSites"),
            document.getElementById("btnUiLangPages"),
        ]
            .filter(Boolean)
            .forEach((button) => {
                if (button.dataset.boundLang === "true") return;

                button.dataset.boundLang = "true";
                button.addEventListener("click", () => {
                    toggleUiLang();
                });
            });
    }

    function observeMutations() {
        if (state.observer || !document.body) return;

        state.observer = new MutationObserver((records) => {
            records.forEach((record) => {
                record.addedNodes.forEach((node) => {
                    if (!(node instanceof Element)) return;

                    if (node.matches?.("[data-i18n], [data-i18n-attrs]")) {
                        applyGenericI18n(node);
                    }

                    if (node.querySelector?.("[data-i18n], [data-i18n-attrs]")) {
                        applyGenericI18n(node);
                    }
                });
            });
        });

        state.observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    async function setUiLang(lang, options = {}) {
        state.lang = clamp(lang);
        state.dict = await loadDict(state.lang);
        safeSetLS(LS_LANG, state.lang);

        refresh(document);

        if (!options.silent) {
            document.dispatchEvent(
                new CustomEvent(EVENT_I18N, {
                    detail: {
                        lang: state.lang,
                        scope: "root",
                    },
                })
            );
        }

        return state.lang;
    }

    async function toggleUiLang() {
        const next = state.lang === "en" ? "id" : "en";
        return setUiLang(next);
    }

    function get() {
        return state.lang;
    }

    function supported() {
        return [...SUPPORTED];
    }

    window.TRI18N = {
        t,
        get,
        setUiLang,
        toggleUiLang,
        refresh,
        supported,
    };

    async function init() {
        if (state.booted) return;
        state.booted = true;

        bindLanguageButtons();
        observeMutations();
        await setUiLang(detectInitialLang());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
