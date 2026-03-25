(() => {
    "use strict";

    const EVENT_I18N = "tenrusl:i18nUpdated";
    const EVENT_THEME = "tenrusl:themeChanged";
    const LS_LANG = "tenrusl.uiLang";

    const q = (selector, scope = document) => scope.querySelector(selector);
    const qa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    function safeGetLS(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function getI18n() {
        try {
            if (window.PagesI18N && typeof window.PagesI18N.t === "function") return window.PagesI18N;
            if (window.TRI18N && typeof window.TRI18N.t === "function") return window.TRI18N;
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

    function isPageContext() {
        return (
            location.pathname.startsWith("/pages/") ||
            document.body?.dataset.pageScope === "pages" ||
            !!q(".breadcrumbs")
        );
    }

    function applyI18N(scope) {
        qa("[data-i18n]", scope).forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const label = q(":scope > .label", el);
            const value = t(key, label ? label.textContent : el.textContent);
            if (label) label.textContent = value;
            else if (el.childElementCount === 0) el.textContent = value;
        });

        qa("[data-i18n-attrs]", scope).forEach((el) => {
            const attrs = (el.getAttribute("data-i18n-attrs") || "")
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean);

            attrs.forEach((attr) => {
                const key = el.getAttribute(`data-i18n-${attr}`);
                if (!key) return;
                el.setAttribute(attr, t(key, el.getAttribute(attr) || ""));
            });
        });

        const badge = q("#uiLangBadgeSites", scope);
        if (badge) badge.textContent = getCurrentLang().toUpperCase();

        const themeBtn = q("#btnThemeSites", scope);
        if (themeBtn) {
            const themeLabel = t("common.theme", "Theme");
            themeBtn.setAttribute("aria-label", themeLabel);
            themeBtn.title = themeLabel;
            themeBtn.dataset.theme = getCurrentTheme();
            themeBtn.dataset.active = getCurrentTheme() === "light" ? "true" : "false";
        }

        const langBtn = q("#btnUiLangSites", scope);
        if (langBtn) {
            const langCode = getCurrentLang().toUpperCase();
            const actionLabel = t("common.toggleLanguage", "Toggle language");
            const currentLabel = t("common.languageCurrent", "Current language");
            langBtn.setAttribute("aria-label", `${actionLabel}: ${langCode}`);
            langBtn.title = `${currentLabel}: ${langCode}`;
        }

        const navToggle = q("#siteNavToggle", scope);
        if (navToggle) {
            const menuLabel = t("common.menu", "Menu");
            navToggle.setAttribute("aria-label", menuLabel);
            navToggle.title = menuLabel;
        }
    }

    function setActiveLink(scope) {
        const path = location.pathname.replace(/\/+$/, "") || "/";
        qa("a[data-path]", scope).forEach((link) => {
            const linkPath = (link.getAttribute("data-path") || "").replace(/\/+$/, "") || "/";
            link.classList.toggle("active", linkPath === path);
            if (linkPath === path) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
    }

    function bindButtons(scope) {
        const themeBtn = q("#btnThemeSites", scope);
        if (themeBtn && themeBtn.dataset.boundTheme !== "true") {
            themeBtn.dataset.boundTheme = "true";
            themeBtn.addEventListener("click", () => {
                if (window.TRTheme && typeof window.TRTheme.toggleTheme === "function") {
                    window.TRTheme.toggleTheme();
                }
            });
        }

        const langBtn = q("#btnUiLangSites", scope);
        if (langBtn && langBtn.dataset.boundLang !== "true") {
            langBtn.dataset.boundLang = "true";
            langBtn.addEventListener("click", () => {
                if (window.PagesI18N && typeof window.PagesI18N.toggleLang === "function") {
                    window.PagesI18N.toggleLang();
                    return;
                }
                if (window.TRI18N && typeof window.TRI18N.toggleUiLang === "function") {
                    window.TRI18N.toggleUiLang();
                }
            });
        }
    }

    function bindNav(scope) {
        const nav = q(".nav.is-collapsible", scope);
        const toggle = q("#siteNavToggle", scope);
        if (!nav || !toggle || toggle.dataset.boundNav === "true") return;

        toggle.dataset.boundNav = "true";
        toggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
        });

        document.addEventListener("click", (event) => {
            if (!nav.classList.contains("open")) return;
            if (nav.contains(event.target) || toggle.contains(event.target)) return;
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    }

    function injectHeader() {
        if (!isPageContext()) return null;
        if (q('.site-header[data-scope="pages"]')) return q('.site-header[data-scope="pages"]');
        if (q(".topbar")) return null;

        const header = document.createElement("header");
        header.className = "site-header";
        header.dataset.scope = "pages";
        header.innerHTML = `
            <a class="brand" href="/">
                <span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-file-lines"></i></span>
                <span class="brand-copy">
                    <span class="brand-name">TenRusl-Tutorial-Linux</span>
                    <span class="brand-tag">Markdown viewer</span>
                </span>
                <span class="brand-badge">PWA</span>
            </a>

            <div class="toolbar">
                <button id="siteNavToggle" class="nav-toggle" type="button" aria-label="Menu" aria-expanded="false">
                    <i class="fa-solid fa-bars" aria-hidden="true"></i>
                </button>

                <nav class="nav is-collapsible" aria-label="Site navigation">
                    <a href="/" data-path="/" data-i18n="nav.home"><i class="fa-solid fa-house icon" aria-hidden="true"></i><span class="label">Home</span></a>
                    <a href="/pages/contact.html" data-path="/pages/contact.html" data-i18n="nav.contact"><i class="fa-solid fa-headset icon" aria-hidden="true"></i><span class="label">Contact</span></a>
                    <a href="/pages/privacy.html" data-path="/pages/privacy.html" data-i18n="nav.privacy"><i class="fa-solid fa-shield icon" aria-hidden="true"></i><span class="label">Privacy</span></a>
                    <a href="/pages/terms.html" data-path="/pages/terms.html" data-i18n="nav.terms"><i class="fa-solid fa-scale-balanced icon" aria-hidden="true"></i><span class="label">Terms</span></a>
                    <a href="/pages/cookies.html" data-path="/pages/cookies.html" data-i18n="nav.cookies"><i class="fa-solid fa-cookie-bite icon" aria-hidden="true"></i><span class="label">Cookies</span></a>
                </nav>

                <div class="controls">
                    <button id="btnUiLangSites" class="icon-btn" type="button" aria-label="Language">
                        <i class="fa-solid fa-globe icon" aria-hidden="true"></i>
                        <span id="uiLangBadgeSites" class="badge-mini">EN</span>
                    </button>

                    <button id="btnThemeSites" class="icon-btn" type="button" aria-label="Theme">
                        <i class="fa-solid fa-sun icon icon-sun" aria-hidden="true"></i>
                        <i class="fa-solid fa-moon icon icon-moon" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.prepend(header);
        return header;
    }

    function refreshHeader() {
        const header = q('.site-header[data-scope="pages"]');
        if (!header) return;
        applyI18N(header);
        setActiveLink(header);
    }

    function boot() {
        const header = injectHeader();
        if (!header) return;
        bindButtons(header);
        bindNav(header);
        refreshHeader();
    }

    document.addEventListener(EVENT_I18N, refreshHeader);
    document.addEventListener(EVENT_THEME, refreshHeader);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }
})();
