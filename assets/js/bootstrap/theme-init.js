(() => {
    "use strict";

    const STORAGE_KEY = "tenrusl.theme";
    const DARK_COLOR = "#0d1117";
    const LIGHT_COLOR = "#f6f8fb";

    try {
        const root = document.documentElement;
        const defaultTheme = root.getAttribute("data-default-theme") === "light" ? "light" : "dark";
        const stored = localStorage.getItem(STORAGE_KEY);
        const theme = stored === "light" || stored === "dark" ? stored : defaultTheme;
        const isLight = theme === "light";
        const themeColor = isLight ? LIGHT_COLOR : DARK_COLOR;

        root.dataset.theme = theme;
        root.classList.toggle("light", isLight);
        root.classList.toggle("dark", !isLight);
        root.style.colorScheme = isLight ? "light" : "dark";

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute("content", themeColor);
        }
    } catch {}
})();
