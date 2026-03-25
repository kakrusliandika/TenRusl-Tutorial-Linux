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

    function copyText(text) {
        const value = String(text || "");

        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function" && window.isSecureContext) {
            return navigator.clipboard.writeText(value);
        }

        return new Promise((resolve, reject) => {
            const temp = document.createElement("textarea");
            temp.value = value;
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

    function setButtonText(btn, text) {
        if (!btn) return;
        btn.textContent = text;
    }

    function temporaryButtonState(btn, successText, resetText) {
        if (!btn) return;
        btn.textContent = successText;
        window.setTimeout(() => {
            btn.textContent = resetText;
        }, 1400);
    }

    function enhanceCode() {
        qa("pre > code").forEach((code) => {
            const pre = code.parentElement;
            if (!pre || q('.btn.copy[data-role="copy-code"]', pre)) return;

            const button = document.createElement("button");
            button.type = "button";
            button.className = "btn btn-sm copy";
            button.dataset.role = "copy-code";
            button.textContent = t("common.copy", "Copy");
            pre.appendChild(button);

            button.addEventListener("click", async () => {
                const baseLabel = t("common.copy", "Copy");
                try {
                    await copyText(code.innerText || "");
                    temporaryButtonState(button, t("common.copied", "Copied"), baseLabel);
                } catch {
                    temporaryButtonState(button, t("common.error", "Error"), baseLabel);
                }
            });
        });
    }

    function refreshCodeButtonLabels() {
        qa('.btn.copy[data-role="copy-code"]').forEach((button) => {
            setButtonText(button, t("common.copy", "Copy"));
        });
    }

    function guessMailAddress(contextButton) {
        const explicit =
            contextButton?.getAttribute("data-copy-email") || contextButton?.getAttribute("data-copy-value");
        if (explicit) return explicit;

        const card = contextButton ? contextButton.closest(".card, aside, section, article, main") : document;
        const mailLink = q('a[href^="mailto:"]', card || document) || q('a[href^="mailto:"]');
        if (!mailLink) return "";
        return (mailLink.getAttribute("href") || "").replace(/^mailto:/i, "").split("?")[0];
    }

    function bindCopyEmailAction() {
        document.addEventListener("click", async (event) => {
            const copyBtn = event.target.closest(
                '[data-copy-email], [data-action="copy-email"], #copyEmailBtn, [data-i18n="contact.direct.copyBtn"]'
            );
            if (!copyBtn) return;

            event.preventDefault();
            const value = guessMailAddress(copyBtn);
            const resetText = t("contact.direct.copyBtn", "Copy email");

            try {
                await copyText(value);
                temporaryButtonState(copyBtn, t("common.copied", "Copied"), resetText);
            } catch {
                temporaryButtonState(copyBtn, t("common.error", "Error"), resetText);
            }
        });
    }

    function bindConsentResetAction() {
        document.addEventListener("click", (event) => {
            const resetBtn = event.target.closest(
                '[data-reset-consent], [data-action="reset-consent"], [data-i18n="cookies.manage.resetBtn"]'
            );
            if (!resetBtn) return;

            event.preventDefault();
            ["tr-consent", "tenrusl.consent", "tenrusl.cookieConsent"].forEach((key) => {
                try {
                    localStorage.removeItem(key);
                } catch {}
            });
            location.reload();
        });
    }

    function bindRetryAction() {
        document.addEventListener("click", (event) => {
            const retryBtn = event.target.closest('[data-retry], [data-action="retry"], [data-i18n="offline.cta"]');
            if (!retryBtn) return;

            event.preventDefault();
            location.reload();
        });
    }

    function initTableSort() {
        qa("th[data-sort]").forEach((th) => {
            if (th.dataset.boundSort === "true") return;
            th.dataset.boundSort = "true";

            th.addEventListener("click", () => {
                const table = th.closest("table");
                if (!table || !table.tBodies[0]) return;

                const columnIndex = Array.from(th.parentNode.children).indexOf(th);
                const type = th.dataset.sort || "text";
                const direction = th.classList.contains("asc") ? "desc" : "asc";

                qa("th[data-sort]", table).forEach((header) => header.classList.remove("asc", "desc"));
                th.classList.add(direction);

                const rows = Array.from(table.tBodies[0].rows);
                const parse = (value) => {
                    const input = String(value || "").trim();
                    if (type === "number") return parseFloat(input.replace(/[^\d.-]/g, "")) || 0;
                    if (type === "date") return Date.parse(input) || 0;
                    return input.toLowerCase();
                };

                rows.sort((rowA, rowB) => {
                    const a = parse(rowA.cells[columnIndex]?.innerText);
                    const b = parse(rowB.cells[columnIndex]?.innerText);
                    if (a === b) return 0;
                    if (direction === "asc") return a > b ? 1 : -1;
                    return a < b ? 1 : -1;
                });

                rows.forEach((row) => table.tBodies[0].appendChild(row));
            });
        });
    }

    function reveal() {
        if (!("IntersectionObserver" in window)) {
            qa(".reveal").forEach((el) => el.classList.add("reveal-in"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("reveal-in");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12 }
        );

        qa(".reveal").forEach((el) => observer.observe(el));
    }

    function registerSW() {
        if (!("serviceWorker" in navigator)) return;
        if (!window.isSecureContext) return;

        const candidates = ["/sw.js", "/assets/js/sw.js"];

        window.addEventListener(
            "load",
            async () => {
                for (const url of candidates) {
                    try {
                        await navigator.serviceWorker.register(url, { updateViaCache: "none" });
                        break;
                    } catch {}
                }
            },
            { once: true }
        );
    }

    document.addEventListener(EVENT_I18N, () => {
        refreshCodeButtonLabels();
    });

    function boot() {
        qa("[onclick]").forEach((el) => {
            const key = el.getAttribute("data-i18n") || "";
            if (key === "contact.direct.copyBtn" || key === "cookies.manage.resetBtn" || key === "offline.cta") {
                el.removeAttribute("onclick");
            }
        });

        enhanceCode();
        bindCopyEmailAction();
        bindConsentResetAction();
        bindRetryAction();
        initTableSort();
        reveal();
        registerSW();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
        boot();
    }
})();
