(() => {
    "use strict";

    const LS_LANG = "tenrusl.uiLang";
    const EVENT_I18N = "tenrusl:i18nUpdated";
    const SUPPORTED = ["en", "id"];

    const SCRIPT_URL = (() => {
        try {
            const src = document.currentScript?.getAttribute("src") || "assets/js/language-pages.js";
            return new URL(src, document.baseURI);
        } catch {
            return new URL("assets/js/language-pages.js", document.baseURI);
        }
    })();

    const ASSETS_BASE = new URL("../", SCRIPT_URL);

    const FALLBACK = {
        en: {
            common: {
                language: "Language",
                toggleLanguage: "Toggle language",
                languageCurrent: "Current language",
                menu: "Menu",
                lastUpdated: "Last updated",
                copied: "Copied",
                copy: "Copy",
                repository: "Repository",
                error: "Error",
                ok: "OK",
                backHome: "Back to Home",
                tryAgain: "Try again",
            },
            nav: {
                home: "Home",
                contact: "Contact",
                privacy: "Privacy",
                terms: "Terms",
                cookies: "Cookies",
            },
            contact: {
                title: "Contact — TenRusl-Tutorial-Linux",
                heading: "Contact",
                description: "We’d love to hear from you.",
                form: {
                    nameLabel: "Name",
                    namePlaceholder: "Your name",
                    emailLabel: "Email",
                    emailPlaceholder: "you@example.com",
                    messageLabel: "Message",
                    messagePlaceholder: "How can we help?",
                    help: "Sending uses your email app (mailto). This site does not submit your message to a server by default.",
                    submit: "Send",
                    openMail: "Open mail app",
                },
                direct: {
                    title: "Direct",
                    emailLabel: "Email",
                    copyBtn: "Copy email",
                    hours: "Support hours: 09:00–18:00 (Asia/Jakarta), Mon–Fri.",
                },
            },
            privacy: {
                title: "Privacy Policy — TenRusl-Tutorial-Linux",
                heading: "Privacy Policy",
                intro: "TenRusl-Tutorial-Linux is a client-side Markdown viewer. By default, Markdown files are processed locally in your browser.",
                summary: {
                    heading: "Summary",
                    item1: "Your Markdown content is rendered in the browser by default.",
                    item2: "Opening a local Markdown file does not upload that file to our server by default.",
                    item3: "The app may store limited local preferences such as theme, language, and cached assets for offline use.",
                },
                processing: {
                    heading: "How content is processed",
                    body: "When you open a Markdown file, the content is parsed and rendered on your device. If you load a default example file from the site, that file is fetched like a normal web asset.",
                },
                storage: {
                    heading: "Local storage and offline cache",
                    body: "We may use localStorage for preferences such as theme and UI language. A service worker may cache app assets and example files to improve repeat visits and offline fallback.",
                },
                clipboard: {
                    heading: "Clipboard actions",
                    body: "If you click copy actions, the app asks the browser to write selected text to your clipboard. Clipboard behavior depends on browser permissions and secure-context requirements.",
                },
                thirdParty: {
                    heading: "Third-party libraries and CDNs",
                    body: "The app may load front-end libraries such as Markdown parsing, syntax highlighting, icons, or diagram rendering from bundled assets or allowed CDNs. Those requests follow the browser’s normal network behavior.",
                },
                noSale: {
                    heading: "Data sale",
                    body: "We do not describe this app as selling your personal data.",
                },
                changes: {
                    heading: "Changes to this policy",
                    body: "We may revise this policy when the app’s features or deployment model change.",
                },
                contact: {
                    heading: "Contact",
                },
            },
            terms: {
                title: "Terms of Service — TenRusl-Tutorial-Linux",
                heading: "Terms of Service",
                items: [
                    {
                        title: "Acceptance",
                        body: "By using the app, you agree to these terms.",
                    },
                    {
                        title: "Client-side use",
                        body: "The app is designed to render Markdown in the browser. You are responsible for the files and content you choose to open.",
                    },
                    {
                        title: "Responsible use",
                        body: "Do not use the app for unlawful activity, abuse of infrastructure, or attempts to bypass browser or platform security.",
                    },
                    {
                        title: "Your content",
                        body: "You remain responsible for the Markdown files, text, images, and links you load into the viewer.",
                    },
                    {
                        title: "Availability",
                        body: "Features may change, move, or be removed at any time.",
                    },
                    {
                        title: "No warranty",
                        body: "The app is provided “as is” without warranties of any kind.",
                    },
                    {
                        title: "Limitation of liability",
                        body: "We are not liable for indirect damages, lost data, or compatibility issues arising from use of the app.",
                    },
                    {
                        title: "Contact",
                        body: "See the Contact page for the current contact channel.",
                    },
                ],
            },
            cookies: {
                title: "Cookie & Local Storage Policy — TenRusl-Tutorial-Linux",
                heading: "Cookie & Local Storage Policy",
                intro: "This app may use browser storage and similar web mechanisms for essential operation, preferences, and offline capability.",
                types: {
                    heading: "Storage categories",
                    essential: {
                        name: "Essential",
                        desc: "Files and values required for core rendering, navigation, and app stability.",
                    },
                    preferences: {
                        name: "Preferences",
                        desc: "Settings such as theme, language, and UI state.",
                    },
                    offline: {
                        name: "Offline cache",
                        desc: "Cached app assets and example files used to improve repeat loads and offline fallback.",
                    },
                },
                table: {
                    headType: "Type",
                    headPurpose: "Purpose",
                },
                manage: {
                    heading: "Manage preferences",
                    body: "You can clear browser storage, site data, or service-worker cache from your browser settings and site controls.",
                    resetBtn: "Reset preferences",
                },
            },
            offline: {
                title: "You are offline — TenRusl-Tutorial-Linux",
                breadcrumb: "Offline",
                heading: "You are offline",
                lead: "The page or resource you requested is not currently available without a connection.",
                cta: "Try again",
            },
            notFound: {
                title: "Page not found — TenRusl-Tutorial-Linux",
                breadcrumb: "Not Found",
                heading: "Page not found",
                lead: "The page you requested could not be found.",
                cta: "Back to Home",
            },
        },
        id: {
            common: {
                language: "Bahasa",
                toggleLanguage: "Ganti bahasa",
                languageCurrent: "Bahasa aktif",
                menu: "Menu",
                lastUpdated: "Terakhir diperbarui",
                copied: "Tersalin",
                copy: "Salin",
                repository: "Repositori",
                error: "Error",
                ok: "OK",
                backHome: "Kembali ke Beranda",
                tryAgain: "Coba lagi",
            },
            nav: {
                home: "Beranda",
                contact: "Kontak",
                privacy: "Privasi",
                terms: "Ketentuan",
                cookies: "Cookie",
            },
            contact: {
                title: "Kontak — TenRusl-Tutorial-Linux",
                heading: "Kontak",
                description: "Kami senang mendengar dari Anda.",
                form: {
                    nameLabel: "Nama",
                    namePlaceholder: "Nama Anda",
                    emailLabel: "Email",
                    emailPlaceholder: "anda@contoh.com",
                    messageLabel: "Pesan",
                    messagePlaceholder: "Ada yang bisa kami bantu?",
                    help: "Pengiriman menggunakan aplikasi email Anda (mailto). Situs ini tidak mengirim pesan Anda ke server secara default.",
                    submit: "Kirim",
                    openMail: "Buka aplikasi email",
                },
                direct: {
                    title: "Langsung",
                    emailLabel: "Email",
                    copyBtn: "Salin email",
                    hours: "Jam dukungan: 09.00–18.00 (Asia/Jakarta), Sen–Jum.",
                },
            },
            privacy: {
                title: "Kebijakan Privasi — TenRusl-Tutorial-Linux",
                heading: "Kebijakan Privasi",
                intro: "TenRusl-Tutorial-Linux adalah viewer Markdown client-side. Secara default, file Markdown diproses secara lokal di browser Anda.",
                summary: {
                    heading: "Ringkasan",
                    item1: "Konten Markdown Anda dirender di browser secara default.",
                    item2: "Membuka file Markdown lokal tidak mengunggah file tersebut ke server kami secara default.",
                    item3: "Aplikasi dapat menyimpan preferensi lokal terbatas seperti tema, bahasa, dan cache asset untuk penggunaan offline.",
                },
                processing: {
                    heading: "Cara konten diproses",
                    body: "Saat Anda membuka file Markdown, konten diparse dan dirender di perangkat Anda. Jika Anda memuat file contoh default dari situs, file tersebut diambil seperti asset web biasa.",
                },
                storage: {
                    heading: "Local storage dan cache offline",
                    body: "Kami dapat menggunakan localStorage untuk preferensi seperti tema dan bahasa UI. Service worker dapat menyimpan cache asset aplikasi dan file contoh untuk meningkatkan kunjungan ulang dan fallback offline.",
                },
                clipboard: {
                    heading: "Aksi clipboard",
                    body: "Jika Anda menekan aksi salin, aplikasi meminta browser menulis teks yang dipilih ke clipboard Anda. Perilaku clipboard bergantung pada izin browser dan persyaratan secure context.",
                },
                thirdParty: {
                    heading: "Library pihak ketiga dan CDN",
                    body: "Aplikasi dapat memuat library front-end seperti parser Markdown, syntax highlighting, ikon, atau renderer diagram dari asset bawaan atau CDN yang diizinkan. Permintaan tersebut mengikuti perilaku jaringan normal browser.",
                },
                noSale: {
                    heading: "Penjualan data",
                    body: "Kami tidak menyatakan aplikasi ini menjual data pribadi Anda.",
                },
                changes: {
                    heading: "Perubahan kebijakan ini",
                    body: "Kami dapat merevisi kebijakan ini ketika fitur aplikasi atau model deployment berubah.",
                },
                contact: {
                    heading: "Kontak",
                },
            },
            terms: {
                title: "Ketentuan Layanan — TenRusl-Tutorial-Linux",
                heading: "Ketentuan Layanan",
                items: [
                    {
                        title: "Penerimaan",
                        body: "Dengan menggunakan aplikasi ini, Anda menyetujui ketentuan ini.",
                    },
                    {
                        title: "Penggunaan client-side",
                        body: "Aplikasi dirancang untuk merender Markdown di browser. Anda bertanggung jawab atas file dan konten yang Anda pilih untuk dibuka.",
                    },
                    {
                        title: "Penggunaan yang bertanggung jawab",
                        body: "Jangan gunakan aplikasi untuk aktivitas melanggar hukum, penyalahgunaan infrastruktur, atau upaya melewati keamanan browser maupun platform.",
                    },
                    {
                        title: "Konten Anda",
                        body: "Anda tetap bertanggung jawab atas file Markdown, teks, gambar, dan tautan yang Anda muat ke dalam viewer.",
                    },
                    {
                        title: "Ketersediaan",
                        body: "Fitur dapat berubah, dipindah, atau dihapus kapan saja.",
                    },
                    {
                        title: "Tanpa jaminan",
                        body: "Aplikasi disediakan “sebagaimana adanya” tanpa jaminan apa pun.",
                    },
                    {
                        title: "Batas tanggung jawab",
                        body: "Kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan data, atau masalah kompatibilitas akibat penggunaan aplikasi.",
                    },
                    {
                        title: "Kontak",
                        body: "Lihat halaman Kontak untuk kanal kontak terbaru.",
                    },
                ],
            },
            cookies: {
                title: "Kebijakan Cookie & Local Storage — TenRusl-Tutorial-Linux",
                heading: "Kebijakan Cookie & Local Storage",
                intro: "Aplikasi ini dapat menggunakan penyimpanan browser dan mekanisme web serupa untuk operasi esensial, preferensi, dan kemampuan offline.",
                types: {
                    heading: "Kategori penyimpanan",
                    essential: {
                        name: "Esensial",
                        desc: "File dan nilai yang diperlukan untuk rendering inti, navigasi, dan stabilitas aplikasi.",
                    },
                    preferences: {
                        name: "Preferensi",
                        desc: "Pengaturan seperti tema, bahasa, dan state UI.",
                    },
                    offline: {
                        name: "Cache offline",
                        desc: "Asset aplikasi dan file contoh yang dicache untuk meningkatkan pemuatan ulang dan fallback offline.",
                    },
                },
                table: {
                    headType: "Jenis",
                    headPurpose: "Tujuan",
                },
                manage: {
                    heading: "Kelola preferensi",
                    body: "Anda dapat membersihkan penyimpanan browser, data situs, atau cache service worker dari pengaturan browser dan kontrol situs.",
                    resetBtn: "Reset preferensi",
                },
            },
            offline: {
                title: "Anda sedang offline — TenRusl-Tutorial-Linux",
                breadcrumb: "Offline",
                heading: "Anda sedang offline",
                lead: "Halaman atau resource yang Anda minta saat ini tidak tersedia tanpa koneksi.",
                cta: "Coba lagi",
            },
            notFound: {
                title: "Halaman tidak ditemukan — TenRusl-Tutorial-Linux",
                breadcrumb: "Tidak ditemukan",
                heading: "Halaman tidak ditemukan",
                lead: "Halaman yang Anda minta tidak ditemukan.",
                cta: "Kembali ke Beranda",
            },
        },
    };

    const state = {
        lang: "en",
        dicts: {
            en: clone(FALLBACK.en),
            id: clone(FALLBACK.id),
        },
        observer: null,
        remoteLoaded: false,
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
        const value = deepGet(state.dicts[state.lang], key);
        const backup = deepGet(FALLBACK[state.lang], key);
        const resolved = value != null ? value : backup != null ? backup : fallback || key;
        return interpolate(resolved, params);
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

    function translateNode(el) {
        if (!(el instanceof Element)) return;

        if (el.hasAttribute("data-i18n")) {
            const key = el.getAttribute("data-i18n");
            const label = q(":scope > .label", el);
            const value = t(key, label ? label.textContent : el.textContent);

            if (label) label.textContent = value;
            else if (el.childElementCount === 0) el.textContent = value;
        }

        if (el.hasAttribute("data-i18n-attrs")) {
            const attrs = (el.getAttribute("data-i18n-attrs") || "")
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);

            attrs.forEach((attr) => {
                const key = el.getAttribute(`data-i18n-${attr}`);
                if (!key) return;
                el.setAttribute(attr, t(key, el.getAttribute(attr) || ""));
            });
        }
    }

    function translateTree(scope = document) {
        qa("[data-i18n], [data-i18n-attrs]", scope).forEach(translateNode);

        if (
            scope instanceof Element &&
            (scope.matches("[data-i18n], [data-i18n-attrs]") || scope === document.documentElement)
        ) {
            translateNode(scope);
        }

        const titleEl = document.querySelector("title[data-i18n]");
        if (titleEl) {
            titleEl.textContent = t(titleEl.getAttribute("data-i18n"), titleEl.textContent);
        }

        document.documentElement.lang = state.lang;
        updateLanguageButtons();
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
        const actionLabel = t("common.toggleLanguage", "Toggle language");
        const currentLabel = t("common.languageCurrent", "Current language");
        const visibleLabel = t("common.language", "Language");

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
                    toggleLang();
                });
            });
    }

    function observeMutations() {
        if (state.observer || !document.body) return;

        state.observer = new MutationObserver((records) => {
            records.forEach((record) => {
                record.addedNodes.forEach((node) => {
                    if (!(node instanceof Element)) return;
                    translateTree(node);
                });
            });
        });

        state.observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    async function loadRemoteDict() {
        if (state.remoteLoaded) return true;

        const candidates = [
            new URL("../i18n/pages.json", SCRIPT_URL).href,
            new URL("/assets/i18n/pages.json", location.origin).href,
            "../assets/i18n/pages.json",
            "/assets/i18n/pages.json",
        ];

        for (const url of candidates) {
            try {
                const res = await fetch(url, {
                    cache: "no-cache",
                    credentials: "same-origin",
                });

                if (!res.ok) continue;

                const json = await res.json();

                if (json.en) deepMerge(state.dicts.en, json.en);
                if (json.id) deepMerge(state.dicts.id, json.id);

                state.remoteLoaded = true;
                return true;
            } catch {}
        }

        return false;
    }

    async function set(lang, options = {}) {
        state.lang = clamp(lang);
        safeSetLS(LS_LANG, state.lang);

        await loadRemoteDict();
        translateTree(document);

        if (!options.silent) {
            document.dispatchEvent(
                new CustomEvent(EVENT_I18N, {
                    detail: {
                        lang: state.lang,
                        scope: "pages",
                    },
                })
            );
        }

        return state.lang;
    }

    function get() {
        return state.lang;
    }

    async function toggleLang() {
        return set(state.lang === "en" ? "id" : "en");
    }

    function refresh(scope = document) {
        translateTree(scope);
    }

    function supported() {
        return [...SUPPORTED];
    }

    async function boot() {
        if (state.booted) return;
        state.booted = true;

        state.lang = detectInitialLang();

        bindLanguageButtons();
        translateTree(document);
        observeMutations();
        await loadRemoteDict();
        translateTree(document);

        document.dispatchEvent(
            new CustomEvent(EVENT_I18N, {
                detail: {
                    lang: state.lang,
                    scope: "pages",
                },
            })
        );
    }

    const api = {
        t,
        get,
        set,
        setUiLang: set,
        toggleLang,
        toggleUiLang: toggleLang,
        refresh,
        supported,
    };

    window.PagesI18N = api;

    if (!window.TRI18N) {
        window.TRI18N = {
            t,
            get,
            setUiLang: set,
            toggleUiLang: toggleLang,
            refresh,
            supported,
        };
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }
})();
