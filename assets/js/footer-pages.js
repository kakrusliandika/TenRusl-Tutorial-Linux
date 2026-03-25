(() => {
    "use strict";

    const EVENT_I18N = "tenrusl:i18nUpdated";

    const q = (selector, scope = document) => scope.querySelector(selector);
    const qa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

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

    function getRepoUrl() {
        return (
            document.querySelector('meta[name="tenrusl-repo"]')?.getAttribute("content") ||
            document.documentElement.getAttribute("data-repo-url") ||
            "https://github.com/kakrusliandika/TenRusl-Tutorial-Linux"
        );
    }

    function isPagesScope() {
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
    }

    function setYear(scope) {
        const year = q("#siteFooterYear", scope);
        if (year) year.textContent = String(new Date().getFullYear());
    }

    function injectFooter() {
        if (!isPagesScope()) return null;
        if (q(".site-footer")) return q(".site-footer");

        const repoUrl = getRepoUrl();
        const footer = document.createElement("footer");
        footer.className = "site-footer";
        footer.innerHTML = `
            <div class="left footer-meta">
                <span>© <span id="siteFooterYear"></span> TenRusl-Tutorial-Linux</span>
                <span class="badge">Markdown Viewer</span>
            </div>
            <div class="right footer-links">
                <a href="/pages/privacy.html" class="icon-btn ghost" data-i18n="nav.privacy"><i class="fa-solid fa-shield icon" aria-hidden="true"></i><span class="label">Privacy</span></a>
                <a href="/pages/terms.html" class="icon-btn ghost" data-i18n="nav.terms"><i class="fa-solid fa-scale-balanced icon" aria-hidden="true"></i><span class="label">Terms</span></a>
                <a href="/pages/cookies.html" class="icon-btn ghost" data-i18n="nav.cookies"><i class="fa-solid fa-cookie-bite icon" aria-hidden="true"></i><span class="label">Cookies</span></a>
                <a href="${repoUrl}" target="_blank" rel="noopener" class="icon-btn ghost"><i class="fa-brands fa-github icon" aria-hidden="true"></i><span class="label">${t(
            "common.repository",
            "Repository"
        )}</span></a>
            </div>
        `;

        document.body.appendChild(footer);
        return footer;
    }

    function bindFooter() {
        const footer = injectFooter();
        if (!footer) return;
        setYear(footer);
        applyI18N(footer);
    }

    document.addEventListener(EVENT_I18N, () => {
        const footer = q(".site-footer");
        if (!footer) return;
        setYear(footer);
        applyI18N(footer);
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindFooter, { once: true });
    } else {
        bindFooter();
    }
})();
