(() => {
    "use strict";

    const script = document.currentScript;
    const analyticsId = script?.getAttribute("data-analytics-id") || "";

    if (!analyticsId) return;

    try {
        if (navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.globalPrivacyControl === true) {
            return;
        }

        if (navigator.connection?.saveData) {
            return;
        }
    } catch {}

    let booted = false;

    function cleanup() {
        window.removeEventListener("pointerdown", scheduleBoot, true);
        window.removeEventListener("keydown", scheduleBoot, true);
        window.removeEventListener("scroll", scheduleBoot, true);
        document.removeEventListener("visibilitychange", onVisibilityChange, true);
    }

    function ensureTracker() {
        window.dataLayer = window.dataLayer || [];
        window.gtag =
            window.gtag ||
            function gtag() {
                window.dataLayer.push(arguments);
            };
    }

    function bootAnalytics() {
        if (booted) return;
        booted = true;
        cleanup();
        ensureTracker();

        window.gtag("js", new Date());
        window.gtag("config", analyticsId, {
            anonymize_ip: true,
            transport_type: "beacon",
        });

        const loader = document.createElement("script");
        loader.async = true;
        loader.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
        loader.referrerPolicy = "strict-origin-when-cross-origin";
        document.head.appendChild(loader);
    }

    function scheduleBoot() {
        if (booted) return;

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(() => bootAnalytics(), { timeout: 2500 });
            return;
        }

        window.setTimeout(() => bootAnalytics(), 1500);
    }

    function onVisibilityChange() {
        if (document.visibilityState === "visible") {
            scheduleBoot();
        }
    }

    window.addEventListener("pointerdown", scheduleBoot, { capture: true, once: true, passive: true });
    window.addEventListener("keydown", scheduleBoot, { capture: true, once: true, passive: true });
    window.addEventListener("scroll", scheduleBoot, { capture: true, once: true, passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange, { capture: true });
    window.addEventListener("load", scheduleBoot, { once: true });
})();
