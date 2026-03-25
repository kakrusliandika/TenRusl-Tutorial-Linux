import { LS_TOC_OPEN } from "../core/constants.js";
import { refs } from "../core/dom.js";
import { state } from "../core/state.js";
import { escapeHtml, formatPathLabel, tx } from "../core/utils.js";

function isCompactViewport() {
    try {
        return window.matchMedia("(max-width: 1080px)").matches;
    } catch {
        return window.innerWidth <= 1080;
    }
}

function isSidebarVisible() {
    if (!refs.layout) return false;
    if (isCompactViewport()) {
        return refs.layout.classList.contains("sidebar-open");
    }
    return !refs.layout.classList.contains("sidebar-collapsed");
}

export function syncSidebarToggleState() {
    if (!refs.layout || !refs.mobileToggle) return;
    const sidebarVisible = isSidebarVisible();
    refs.mobileToggle.setAttribute("aria-expanded", sidebarVisible ? "true" : "false");

    if (refs.sidebar) {
        refs.sidebar.setAttribute("aria-hidden", sidebarVisible ? "false" : "true");
        if (sidebarVisible) refs.sidebar.removeAttribute("inert");
        else refs.sidebar.setAttribute("inert", "");
    }

    if (refs.sidebarBackdrop) {
        const overlayOpen = isCompactViewport() && refs.layout.classList.contains("sidebar-open");
        refs.sidebarBackdrop.setAttribute("aria-hidden", overlayOpen ? "false" : "true");
    }
}

function setMetaIcon(iconClass) {
    if (!refs.renderMetaIcon || !iconClass) return;
    refs.renderMetaIcon.className = iconClass;
}

function pushShellStatus(message) {
    if (window.TRStatus && typeof window.TRStatus.set === "function") {
        window.TRStatus.set(message);
    }
}

export function updateStatus(message) {
    if (refs.statusBar) {
        refs.statusBar.textContent = String(message || "");
    }
    pushShellStatus(message);
}

export function updateMeta(message, iconClass) {
    if (refs.renderMeta) {
        refs.renderMeta.textContent = String(message || "");
    }
    setMetaIcon(iconClass);
}

export function updatePaperIntro(path) {
    if (!refs.paperIntro) return;

    const pathLabel = formatPathLabel(path);
    const template = escapeHtml(tx("paperIntro", { path: "__TR_PATH__" }));
    refs.paperIntro.innerHTML = template.replace("__TR_PATH__", `<code>${escapeHtml(pathLabel)}</code>`);
}

export function setLoadingUi(path) {
    const pathLabel = formatPathLabel(path);
    updatePaperIntro(pathLabel);
    updateMeta(tx("loading"), "fa-solid fa-hourglass-half");
    updateStatus(tx("loadingFile", { path: pathLabel }));
}

export function setErrorUi(path, reason) {
    const pathLabel = formatPathLabel(path);
    const causes = [tx("errorCauseWrongName"), tx("errorCauseWrongFolder"), tx("errorCauseSavedState")];

    if (location.protocol === "file:") {
        const fileProtocolCause = tx("errorCauseFileProtocol", "");
        if (fileProtocolCause && fileProtocolCause !== "app.errorCauseFileProtocol") {
            causes.unshift(fileProtocolCause);
        }
    }

    updatePaperIntro(pathLabel);
    updateMeta(tx("fallback"), "fa-solid fa-triangle-exclamation");
    updateStatus(tx("loadFailedWithReason", { path: pathLabel, reason }));

    if (!refs.content) return;

    refs.content.innerHTML = `
        <h1>${escapeHtml(tx("errorHeading"))}</h1>
        <p>${escapeHtml(tx("errorBody", { path: pathLabel }))}</p>
        <p><strong>${escapeHtml(String(reason || "Unknown error"))}</strong></p>
        <h2>${escapeHtml(tx("commonCauses"))}</h2>
        <ul>
            ${causes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <h2>${escapeHtml(tx("quickFix"))}</h2>
        <ol>
            <li>${escapeHtml(tx("fixStep1"))}</li>
            <li>${escapeHtml(tx("fixStep2"))}</li>
            <li>${escapeHtml(tx("fixStep3"))}</li>
        </ol>
    `;

    if (refs.toc) {
        refs.toc.innerHTML = `<div class="menu-empty">${escapeHtml(tx("tocEmpty"))}</div>`;
    }

    if (refs.tocCount) {
        refs.tocCount.textContent = "0";
    }
}

export function resetTocCount() {
    if (!refs.tocCount) return;

    const visible = state.tocLinks.filter((link) => !link.classList.contains("hidden")).length;
    refs.tocCount.textContent = String(visible);

    if (!visible && refs.toc && !refs.toc.querySelector(".menu-empty")) {
        refs.toc.innerHTML = `<div class="menu-empty">${escapeHtml(tx("tocEmpty"))}</div>`;
    }
}

export function closeSidebar() {
    if (!refs.layout) return;
    const returnFocus = refs.sidebar?.contains(document.activeElement);
    if (isCompactViewport()) {
        refs.layout.classList.remove("sidebar-open");
    } else {
        refs.layout.classList.add("sidebar-collapsed");
    }
    syncSidebarToggleState();
    if (returnFocus) {
        window.requestAnimationFrame(() => refs.mobileToggle?.focus());
    }
}

export function toggleSidebar() {
    if (!refs.layout) return;

    if (isCompactViewport()) {
        refs.layout.classList.toggle("sidebar-open");
    } else {
        refs.layout.classList.toggle("sidebar-collapsed");
    }
    syncSidebarToggleState();
}

export function setTocDrawer(open) {
    const wasOpen = state.tocOpen;
    state.tocOpen = Boolean(open);

    if (refs.layout) {
        refs.layout.classList.toggle("toc-open", state.tocOpen);
    }

    if (refs.tocBackdrop) {
        refs.tocBackdrop.setAttribute("aria-hidden", state.tocOpen ? "false" : "true");
    }

    if (refs.tocDrawer) {
        refs.tocDrawer.classList.toggle("is-open", state.tocOpen);
        refs.tocDrawer.setAttribute("aria-hidden", state.tocOpen ? "false" : "true");
        if (state.tocOpen) refs.tocDrawer.removeAttribute("inert");
        else refs.tocDrawer.setAttribute("inert", "");
    }

    if (refs.tocDrawerToggle) {
        refs.tocDrawerToggle.setAttribute("aria-expanded", state.tocOpen ? "true" : "false");
    }

    try {
        localStorage.setItem(LS_TOC_OPEN, state.tocOpen ? "1" : "0");
    } catch {}

    if (state.tocOpen && refs.tocDrawer) {
        window.requestAnimationFrame(() => refs.tocDrawer?.focus());
    } else if (wasOpen && refs.tocDrawerToggle) {
        window.requestAnimationFrame(() => refs.tocDrawerToggle?.focus());
    }
}

export function toggleTocDrawer() {
    setTocDrawer(!state.tocOpen);
}
