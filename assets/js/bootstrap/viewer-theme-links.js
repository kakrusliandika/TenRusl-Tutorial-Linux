(() => {
    "use strict";

    try {
        const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
        const links = [
            document.getElementById("markdownThemeStylesheet"),
            document.getElementById("highlightThemeStylesheet"),
        ];

        links.forEach((link) => {
            if (!link) return;

            const lightHref = link.getAttribute("data-light-href") || "";
            const darkHref = link.getAttribute("data-dark-href") || "";
            const nextHref = theme === "light" ? lightHref : darkHref;

            if (nextHref) {
                link.setAttribute("href", nextHref);
            }
        });
    } catch {}
})();
