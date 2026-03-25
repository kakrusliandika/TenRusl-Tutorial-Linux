const VERSION = "2026-03-25-v1";
const CACHE_PREFIX = "tenrusl-tutorial-linux";
const STATIC_CACHE = `${CACHE_PREFIX}-static-${VERSION}`;
const RUNTIME_CACHE = `${CACHE_PREFIX}-runtime-${VERSION}`;
const OFFLINE_URL = "/pages/offline.html";

const PRECACHE_URLS = [
    "/",
    "/index.html",
    "/manifest.webmanifest",
    "/assets/images/icon.svg",
    "/assets/css/theme.css",
    "/assets/css/chrome.css",
    "/assets/css/header.css",
    "/assets/css/footer.css",
    "/assets/css/language.css",
    "/assets/css/pages.css",
    "/assets/css/app.css",
    "/assets/js/theme.js",
    "/assets/js/language.js",
    "/assets/js/header.js",
    "/assets/js/footer.js",
    "/assets/js/bootstrap/theme-init.js",
    "/assets/js/bootstrap/viewer-theme-links.js",
    "/assets/js/bootstrap/analytics-loader.js",
    "/assets/js/app.js",
    "/assets/js/core/constants.js",
    "/assets/js/core/dom.js",
    "/assets/js/core/state.js",
    "/assets/js/core/utils.js",
    "/assets/js/modules/navigation.js",
    "/assets/js/modules/renderer.js",
    "/assets/js/modules/ui.js",
    "/assets/js/modules/mermaid.js",
    "/assets/js/data/content-tree.js",
    "/assets/js/header-pages.js",
    "/assets/js/footer-pages.js",
    "/assets/js/language-pages.js",
    "/assets/js/pages.js",
    "/assets/i18n/en.json",
    "/assets/i18n/id.json",
    "/assets/i18n/pages.json",
    "/assets/content/index.md",
    "/assets/content/en/index.md",
    "/pages/offline.html",
    "/pages/404.html",
    "/pages/privacy.html",
    "/pages/terms.html",
    "/pages/cookies.html",
    "/pages/contact.html",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(STATIC_CACHE);
            await Promise.allSettled(
                PRECACHE_URLS.map(async (url) => {
                    try {
                        const request = new Request(url, { cache: "reload" });
                        const response = await fetch(request);
                        if (response && (response.ok || response.type === "opaque")) {
                            await cache.put(url, response.clone());
                        }
                    } catch {}
                })
            );
            await self.skipWaiting();
        })()
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys
                    .filter((key) => key.startsWith(CACHE_PREFIX) && ![STATIC_CACHE, RUNTIME_CACHE].includes(key))
                    .map((key) => caches.delete(key))
            );

            if (self.registration.navigationPreload) {
                try {
                    await self.registration.navigationPreload.enable();
                } catch {}
            }

            await self.clients.claim();
        })()
    );
});

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }

    if (event.data && event.data.type === "CLEAR_RUNTIME_CACHE") {
        event.waitUntil(caches.delete(RUNTIME_CACHE));
    }
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    const sameOrigin = url.origin === self.location.origin;
    const pathname = url.pathname.toLowerCase();
    const isNavigation = request.mode === "navigate";
    const isPageLike = pathname.endsWith(".html") || pathname === "/";
    const isDataFile = pathname.endsWith(".md") || pathname.endsWith(".json");
    const isImage = request.destination === "image" || /\.(svg|png|jpg|jpeg|webp|gif|ico)$/.test(pathname);
    const isStaticAsset =
        request.destination === "style" ||
        request.destination === "script" ||
        request.destination === "font" ||
        /\.(css|js|woff|woff2|ttf|otf)$/.test(pathname);

    if (!sameOrigin) return;

    if (isNavigation || isPageLike) {
        event.respondWith(handleNavigation(event));
        return;
    }

    if (isDataFile) {
        event.respondWith(networkFirst(request));
        return;
    }

    if (isImage) {
        event.respondWith(cacheFirst(request));
        return;
    }

    if (isStaticAsset) {
        event.respondWith(staleWhileRevalidate(request));
    }
});

async function handleNavigation(event) {
    try {
        const preload = await event.preloadResponse;
        if (preload) {
            await putIfCacheable(event.request, preload, RUNTIME_CACHE);
            return preload;
        }
    } catch {}

    try {
        const network = await fetch(event.request, { cache: "no-store" });
        await putIfCacheable(event.request, network, RUNTIME_CACHE);
        return network;
    } catch {
        return (
            (await caches.match(OFFLINE_URL)) ||
            (await caches.match("/index.html")) ||
            new Response("Offline", {
                status: 503,
                headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
        );
    }
}

async function cacheFirst(request) {
    const cached = await caches.match(request, { ignoreSearch: false });
    if (cached) return cached;

    const network = await fetch(request, { cache: "no-store" });
    await putIfCacheable(request, network, RUNTIME_CACHE);
    return network;
}

async function networkFirst(request) {
    try {
        const network = await fetch(request, { cache: "no-store" });
        await putIfCacheable(request, network, RUNTIME_CACHE);
        return network;
    } catch {
        const cached = await caches.match(request, { ignoreSearch: false });
        if (cached) return cached;
        throw new Error("offline");
    }
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request, { ignoreSearch: false });
    const networkPromise = fetch(request, { cache: "no-store" })
        .then(async (response) => {
            await putIfCacheable(request, response, RUNTIME_CACHE);
            return response;
        })
        .catch(() => null);

    return cached || (await networkPromise) || new Response("", { status: 504, statusText: "offline" });
}

async function putIfCacheable(request, response, cacheName) {
    if (!response || !(response.ok || response.type === "opaque")) return;
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
}
