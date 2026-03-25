(() => {
    "use strict";

    const EVENT_I18N = "tenrusl:i18nUpdated";
    const q = (selector, scope = document) => scope.querySelector(selector);
    const qa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
    const timers = new WeakMap();

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

    function getRepoUrl() {
        return (
            document.querySelector('meta[name="tenrusl-repo"]')?.getAttribute("content") ||
            document.documentElement.getAttribute("data-repo-url") ||
            "https://github.com/kakrusliandika/TenRusl-Tutorial-Linux"
        );
    }

    function resolveInternalHref(path) {
        try {
            return new URL(String(path || "").replace(/^\/+/, ""), document.baseURI).href;
        } catch {
            return path;
        }
    }

    function isPagesScope() {
        return document.body?.dataset.pageScope === "pages" || /(?:^|\/)pages\/[^/]*$/i.test(location.pathname);
    }

    function isIdleText(text) {
        const value = String(text || "").trim();
        return !value || value === "Ready" || value === "Siap";
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
        const year = q("#footerYear", scope);
        if (year) year.textContent = String(new Date().getFullYear());
    }

    function setIdleStatus(scope) {
        const status = q("#footerStatus", scope);
        if (!status) return;
        if (isIdleText(status.textContent)) {
            status.textContent = t("footer.statusIdle", "Ready");
        }
    }

    function injectFooter() {
        if (isPagesScope()) return null;
        if (q(".site-footer")) return null;
        if (q(".app-footer")) return q(".app-footer");

        const repoUrl = getRepoUrl();
        const privacyHref = resolveInternalHref("pages/privacy.html");
        const termsHref = resolveInternalHref("pages/terms.html");
        const cookiesHref = resolveInternalHref("pages/cookies.html");

        const footer = document.createElement("footer");
        footer.className = "app-footer";
        footer.innerHTML = `
            <div class="left footer-meta">
                <span class="muted">© <span id="footerYear"></span> TenRusl-Tutorial-Linux</span>
                <span class="badge-dot"></span>
                <span class="badge">PWA</span>
                <span class="badge-dot"></span>
                <span id="footerStatus" class="muted">Ready</span>
            </div>
            <div class="right footer-links">
                <a href="${privacyHref}" class="icon-btn ghost" data-i18n="nav.privacy"><i class="fa-solid fa-shield icon" aria-hidden="true"></i><span class="label">Privacy</span></a>
                <a href="${termsHref}" class="icon-btn ghost" data-i18n="nav.terms"><i class="fa-solid fa-scale-balanced icon" aria-hidden="true"></i><span class="label">Terms</span></a>
                <a href="${cookiesHref}" class="icon-btn ghost" data-i18n="nav.cookies"><i class="fa-solid fa-cookie-bite icon" aria-hidden="true"></i><span class="label">Cookies</span></a>
                <a href="${repoUrl}" target="_blank" rel="noopener" class="icon-btn ghost"><i class="fa-brands fa-github icon" aria-hidden="true"></i><span class="label">${t(
            "common.repository",
            "GitHub"
        )}</span></a>
            </div>
        `;

        document.body.appendChild(footer);
        return footer;
    }

    function bindFooter() {
        const footer = q(".app-footer") || injectFooter();
        if (!footer) return;
        setYear(footer);
        applyI18N(footer);
        setIdleStatus(footer);
    }

    function getStatusNode() {
        return q("#footerStatus", q(".app-footer") || q(".site-footer") || document);
    }

    window.TRStatus = window.TRStatus || {
        set(message, options = {}) {
            const el = getStatusNode();
            if (!el) return;

            const oldTimer = timers.get(el);
            if (oldTimer) window.clearTimeout(oldTimer);

            if (!message) {
                el.textContent = t("footer.statusIdle", "Ready");
                return;
            }

            el.textContent = message;

            if (!options.sticky) {
                const timer = window.setTimeout(() => {
                    if (el.textContent === message) {
                        el.textContent = t("footer.statusIdle", "Ready");
                    }
                }, 2400);
                timers.set(el, timer);
            }
        },
        clear() {
            const el = getStatusNode();
            if (!el) return;

            const oldTimer = timers.get(el);
            if (oldTimer) window.clearTimeout(oldTimer);

            el.textContent = t("footer.statusIdle", "Ready");
        },
    };

    document.addEventListener(EVENT_I18N, () => {
        const footer = q(".app-footer") || q(".site-footer");
        if (!footer) return;

        const status = q("#footerStatus", footer);
        const shouldRefreshIdle = !status || isIdleText(status.textContent);

        applyI18N(footer);
        setYear(footer);

        if (shouldRefreshIdle && status) {
            status.textContent = t("footer.statusIdle", "Ready");
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindFooter, { once: true });
    } else {
        bindFooter();
    }
})();
