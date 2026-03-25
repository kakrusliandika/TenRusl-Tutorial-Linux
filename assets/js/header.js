(() => {
    "use strict";

    const EVENT_I18N = "tenrusl:i18nUpdated";
    const EVENT_THEME = "tenrusl:themeChanged";
    const LS_LANG = "tenrusl.uiLang";

    const q = (selector, scope = document) => scope.querySelector(selector);

    function safeGetLS(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function getI18n() {
        try {
            if (window.TRI18N && typeof window.TRI18N.t === "function") return window.TRI18N;
            if (window.PagesI18N && typeof window.PagesI18N.t === "function") return window.PagesI18N;
        } catch {}
        return null;
    }

    function t(key, fallback) {
        const api = getI18n();
        if (api) {
            try {
                return api.t(key, fallback);
            } catch {}
        }
        return fallback || key;
    }

    function getCurrentLang() {
        const api = getI18n();
        if (api && typeof api.get === "function") {
            try {
                return String(api.get() || "en").toLowerCase();
            } catch {}
        }
        return String(safeGetLS(LS_LANG) || document.documentElement.lang || "en").toLowerCase();
    }

    function getCurrentTheme() {
        try {
            if (window.TRTheme && typeof window.TRTheme.getTheme === "function") {
                return window.TRTheme.getTheme();
            }
        } catch {}
        return document.documentElement.dataset.theme === "light" ? "light" : "dark";
    }

    function setTextButton(button, text) {
        if (!button) return;
        const label = q(".label", button) || q("span:last-child", button);
        if (label) label.textContent = text;
        button.setAttribute("aria-label", text);
        button.title = text;
    }

    function syncThemeButtons() {
        const buttons = [q("#themeToggle"), q("#btnTheme"), q("#btnThemeSites"), q("#btnThemePages")].filter(Boolean);
        const theme = getCurrentTheme();
        const label = t("app.theme", t("common.theme", "Theme"));

        buttons.forEach((button) => {
            button.dataset.theme = theme;
            button.dataset.active = theme === "light" ? "true" : "false";
            button.setAttribute("aria-label", label);
            button.title = label;
        });
    }

    function syncLanguageButtons() {
        const buttons = [q("#btnUiLang"), q("#btnUiLangSites"), q("#btnUiLangPages")].filter(Boolean);
        const badges = [q("#uiLangBadge"), q("#uiLangBadgeSites"), q("#uiLangBadgePages")].filter(Boolean);
        const lang = getCurrentLang();
        const code = lang.toUpperCase();
        const visibleLabel = t("common.language", "Language");
        const actionLabel = t("common.toggleLanguage", "Toggle language");
        const currentLabel = t("common.languageCurrent", "Current language");

        badges.forEach((badge) => {
            badge.textContent = code;
        });

        buttons.forEach((button) => {
            const label = q(".label", button);
            if (label) label.textContent = visibleLabel;
            button.dataset.lang = lang;
            button.setAttribute("aria-label", `${actionLabel}: ${code}`);
            button.title = `${currentLabel}: ${code}`;
        });
    }

    function bindThemeButtons() {
        [q("#themeToggle"), q("#btnTheme"), q("#btnThemeSites"), q("#btnThemePages")]
            .filter(Boolean)
            .forEach((button) => {
                if (button.dataset.boundTheme === "true") return;
                button.dataset.boundTheme = "true";
                button.addEventListener("click", () => {
                    if (window.TRTheme && typeof window.TRTheme.toggleTheme === "function") {
                        window.TRTheme.toggleTheme();
                    }
                });
            });
    }

    function bindLanguageButtons() {
        [q("#btnUiLang"), q("#btnUiLangSites"), q("#btnUiLangPages")].filter(Boolean).forEach((button) => {
            if (button.dataset.boundLang === "true") return;
            button.dataset.boundLang = "true";
            button.addEventListener("click", () => {
                if (window.TRI18N && typeof window.TRI18N.toggleUiLang === "function") {
                    window.TRI18N.toggleUiLang();
                    return;
                }
                if (window.PagesI18N && typeof window.PagesI18N.toggleLang === "function") {
                    window.PagesI18N.toggleLang();
                }
            });
        });
    }

    function maybeInjectHeader() {
        if (q(".topbar") || q(".site-header") || q(".app-header")) return;
        if (document.body?.dataset.injectHeader !== "true") return;

        const header = document.createElement("header");
        header.className = "app-header";
        header.dataset.scope = "generic";
        header.innerHTML = `
            <a class="brand" href="/">
                <span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-file-lines"></i></span>
                <span class="brand-copy">
                    <span class="brand-name">TenRusl-Tutorial-Linux</span>
                    <span class="brand-tag">Markdown viewer</span>
                </span>
                <span class="brand-badge">PWA</span>
            </a>
            <div class="controls">
                <button id="btnUiLang" class="icon-btn" type="button" aria-label="Language">
                    <i class="fa-solid fa-globe icon" aria-hidden="true"></i>
                    <span id="uiLangBadge" class="badge-mini">EN</span>
                </button>
                <button id="btnTheme" class="icon-btn" type="button" aria-label="Theme">
                    <i class="fa-solid fa-sun icon icon-sun" aria-hidden="true"></i>
                    <i class="fa-solid fa-moon icon icon-moon" aria-hidden="true"></i>
                </button>
            </div>
        `;
        document.body.prepend(header);
    }

    function syncControls() {
        document.documentElement.classList.remove("no-js");
        syncThemeButtons();
        syncLanguageButtons();
    }

    function boot() {
        maybeInjectHeader();
        bindThemeButtons();
        bindLanguageButtons();
        syncControls();
    }

    document.addEventListener(EVENT_I18N, syncControls);
    document.addEventListener(EVENT_THEME, syncControls);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }
})();
