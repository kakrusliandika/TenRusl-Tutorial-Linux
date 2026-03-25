(() => {
    "use strict";

    const LS_KEY = "tenrusl.theme";
    const EVENT_THEME = "tenrusl:themeChanged";
    const DARK_COLOR = "#0d1117";
    const LIGHT_COLOR = "#f6f8fb";

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

    function clampTheme(mode) {
        return mode === "light" ? "light" : "dark";
    }

    function getStoredTheme() {
        const value = safeGetLS(LS_KEY);
        return value ? clampTheme(value) : null;
    }

    function getDefaultTheme() {
        const htmlDefault = document.documentElement.getAttribute("data-default-theme");
        if (htmlDefault) return clampTheme(htmlDefault);
        return "dark";
    }

    function ensureMeta(name) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = name;
            document.head.appendChild(meta);
        }
        return meta;
    }

    function syncThemeColor(mode) {
        ensureMeta("theme-color").setAttribute("content", mode === "light" ? LIGHT_COLOR : DARK_COLOR);
    }

    function syncColorSchemeMeta() {
        ensureMeta("color-scheme").setAttribute("content", "dark light");
    }

    function syncVendorStyles(mode) {
        const theme = clampTheme(mode);
        [
            document.getElementById("markdownThemeStylesheet"),
            document.getElementById("highlightThemeStylesheet"),
        ].forEach((link) => {
            if (!link) return;
            const lightHref = link.getAttribute("data-light-href") || "";
            const darkHref = link.getAttribute("data-dark-href") || "";
            const nextHref = theme === "light" ? lightHref : darkHref;
            if (nextHref && link.getAttribute("href") !== nextHref) {
                link.setAttribute("href", nextHref);
            }
        });
    }

    function syncThemeButtons(mode) {
        document.querySelectorAll("#themeToggle, #btnTheme, #btnThemeSites, #btnThemePages").forEach((button) => {
            button.dataset.theme = mode;
            button.dataset.active = mode === "light" ? "true" : "false";
        });
    }

    function getMermaidTheme(mode = getTheme()) {
        return clampTheme(mode) === "light" ? "default" : "dark";
    }

    function applyTheme(mode, options = {}) {
        const theme = clampTheme(mode);
        const persist = options.persist !== false;
        const broadcast = options.broadcast !== false;
        const root = document.documentElement;
        const isLight = theme === "light";

        root.dataset.theme = theme;
        root.classList.toggle("light", isLight);
        root.classList.toggle("dark", !isLight);
        root.style.colorScheme = isLight ? "light" : "dark";

        if (persist) safeSetLS(LS_KEY, theme);

        syncThemeColor(theme);
        syncColorSchemeMeta();
        syncVendorStyles(theme);
        syncThemeButtons(theme);

        if (broadcast) {
            document.dispatchEvent(
                new CustomEvent(EVENT_THEME, {
                    detail: {
                        theme,
                        mermaidTheme: getMermaidTheme(theme),
                    },
                })
            );
        }

        return theme;
    }

    function getTheme() {
        return clampTheme(document.documentElement.dataset.theme || getStoredTheme() || getDefaultTheme());
    }

    function setTheme(mode) {
        return applyTheme(mode, { persist: true, broadcast: true });
    }

    function toggleTheme() {
        return setTheme(getTheme() === "light" ? "dark" : "light");
    }

    function init() {
        const stored = getStoredTheme();
        const initial = document.documentElement.dataset.theme || stored || getDefaultTheme();
        applyTheme(initial, {
            persist: Boolean(stored),
            broadcast: false,
        });
    }

    window.TRTheme = {
        getTheme,
        setTheme,
        toggleTheme,
        getMermaidTheme,
    };

    window.getTheme = getTheme;
    window.setTheme = setTheme;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
