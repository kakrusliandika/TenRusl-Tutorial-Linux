import { MERMAID_MODULE_URL } from "../core/constants.js";
import { qa, refs } from "../core/dom.js";
import { state } from "../core/state.js";
import { escapeHtml } from "../core/utils.js";

let mermaidPromise = null;

function resolveMermaidTheme() {
    if (window.TRTheme && typeof window.TRTheme.getMermaidTheme === "function") {
        return window.TRTheme.getMermaidTheme();
    }
    return document.documentElement.dataset.theme === "light" ? "default" : "dark";
}

function renderFallback(block, code) {
    block.innerHTML = `<pre><code>${escapeHtml(code)}</code></pre>`;
}

export async function ensureMermaid() {
    if (state.mermaidReady && state.mermaid) {
        return state.mermaid;
    }

    if (!mermaidPromise) {
        mermaidPromise = import(MERMAID_MODULE_URL)
            .then((mod) => mod.default || mod.mermaid || mod)
            .then((mermaid) => {
                state.mermaid = mermaid;
                if (state.mermaid && typeof state.mermaid.initialize === "function") {
                    state.mermaid.initialize({
                        startOnLoad: false,
                        securityLevel: "strict",
                        theme: resolveMermaidTheme(),
                    });
                }
                state.mermaidReady = true;
                return state.mermaid;
            })
            .catch((error) => {
                mermaidPromise = null;
                throw error;
            });
    }

    return mermaidPromise;
}

export async function rerenderMermaidInContent() {
    const blocks = qa(".mermaid[data-source]", refs.content);
    if (!blocks.length) return;

    try {
        const mermaid = await ensureMermaid();
        const token = ++state.mermaidRenderToken;

        if (mermaid && typeof mermaid.initialize === "function") {
            mermaid.initialize({
                startOnLoad: false,
                securityLevel: "strict",
                theme: resolveMermaidTheme(),
            });
        }

        for (let index = 0; index < blocks.length; index += 1) {
            if (token !== state.mermaidRenderToken) return;

            const block = blocks[index];
            const code = decodeURIComponent(block.dataset.source || "");
            const id = `tr-mermaid-${Date.now()}-${index}`;

            try {
                const renderResult = await mermaid.render(id, code);
                const svg = typeof renderResult === "string" ? renderResult : renderResult?.svg || "";
                if (svg) block.innerHTML = svg;
                else renderFallback(block, code);
            } catch {
                renderFallback(block, code);
            }
        }
    } catch {
        blocks.forEach((block) => {
            const code = decodeURIComponent(block.dataset.source || "");
            renderFallback(block, code);
        });
    }
}
