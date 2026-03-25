import { DEFAULT_MARKDOWN_PATH, LS_NAV_FILTER } from "../core/constants.js";
import { q, qa, refs } from "../core/dom.js";
import { state } from "../core/state.js";
import {
    animateElementIntoView,
    currentLang,
    escapeHtml,
    labelForSection,
    preferredScrollBehavior,
    sanitizeInitialPath,
    slugify,
    titleFromSlug,
    tx,
} from "../core/utils.js";
import { getContentTree } from "../data/content-tree.js";

const MANIFEST_SECTION_ORDER = ["concepts", "howTo", "reference", "tutorials"];

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

function cloneTree(value) {
    return JSON.parse(JSON.stringify(value || []));
}

function getNodeLabel(node) {
    if (!node) return "";
    return node.label || titleFromSlug(node.path || "");
}

function makeNodeId(node, parentId, depth, index) {
    const raw = node.path || node.manifest || `${getNodeLabel(node)}-${depth}-${index}`;
    return slugify(`${parentId}-${raw}`, `${parentId}-${depth}-${index}`);
}

function normalizeNode(node, parentId = "nav", depth = 0, index = 0) {
    const id = node.id || makeNodeId(node, parentId, depth, index);
    return {
        ...node,
        id,
        label: getNodeLabel(node),
        path: node.path ? sanitizeInitialPath(node.path) : "",
        children: Array.isArray(node.children)
            ? node.children.map((child, childIndex) => normalizeNode(child, id, depth + 1, childIndex))
            : [],
    };
}

function nodeContainsPath(node, targetPath) {
    const target = sanitizeInitialPath(targetPath);
    if (sanitizeInitialPath(node.path || "") === target) return true;
    return Array.isArray(node.children) && node.children.some((child) => nodeContainsPath(child, target));
}

function buildSectionNode(parentNode, sectionKey, list) {
    if (!Array.isArray(list) || !list.length) return null;

    const sectionPathName = sectionKey === "howTo" ? "how-to" : sectionKey;

    return {
        id: `${parentNode.id}-${sectionKey}`,
        label: labelForSection(sectionKey),
        path: "",
        isSection: true,
        sectionKey,
        children: list.map((filename, index) => ({
            id: `${parentNode.id}-${sectionKey}-${slugify(filename, `item-${index}`)}`,
            label: titleFromSlug(filename),
            path: parentNode.path.replace(/index\.md$/i, `${sectionPathName}/${filename}`),
            isTutorial: sectionKey === "tutorials",
            children: [],
        })),
    };
}

async function hydrateManifestNode(node) {
    if (!node.manifest) return;

    try {
        const res = await fetch(node.manifest, {
            cache: "no-cache",
            credentials: "same-origin",
        });
        if (!res.ok) return;

        const json = await res.json();
        if (!json || !json.sections) return;

        const additions = MANIFEST_SECTION_ORDER.map((sectionKey) =>
            buildSectionNode(node, sectionKey, json.sections[sectionKey])
        ).filter(Boolean);

        if (additions.length) {
            node.children = [...(node.children || []), ...additions];
        }
    } catch {}
}

function walkAndHydrate(node, tasks) {
    if (node.manifest) {
        tasks.push(hydrateManifestNode(node));
    }
    (node.children || []).forEach((child) => walkAndHydrate(child, tasks));
}

function hydrateNavigationUiState(locale) {
    if (!state.navUiHydrated) {
        state.navFilter = safeGetLS(LS_NAV_FILTER) || "";
        state.navUiHydrated = true;
    }
    state.navLocale = locale;

    if (refs.searchInput && refs.searchInput.value !== state.navFilter) {
        refs.searchInput.value = state.navFilter;
    }
}

function collectNavigationMeta(nodes, pathSet) {
    nodes.forEach((node) => {
        if (node.path) {
            pathSet.add(sanitizeInitialPath(node.path));
        }

        if (Array.isArray(node.children) && node.children.length) {
            collectNavigationMeta(node.children, pathSet);
        }
    });
}

function getSearchQuery() {
    return String(state.navFilter || "").trim().toLowerCase();
}

function menuMatches(node, query) {
    if (!query) return true;

    const haystack = [getNodeLabel(node), node.path || "", node.manifest || ""].join(" ").toLowerCase();
    return haystack.includes(query);
}

function nodeHasMatch(node, query) {
    if (!query) return true;
    if (menuMatches(node, query)) return true;
    return (node.children || []).some((child) => nodeHasMatch(child, query));
}

function isBranchOpen(node, depth, query) {
    if (query) return nodeHasMatch(node, query);
    if (nodeContainsPath(node, state.currentSource)) return true;
    return false;
}

function iconClassForNode(node, { branch = false } = {}) {
    if (node.icon) return node.icon;
    if (node.isSection) return "fa-layer-group";
    if (node.isModule) return "fa-cube";
    if (node.isTutorial) return "fa-route";
    return branch ? "fa-folder-tree" : "fa-file-lines";
}

function renderLeaf(node, depth, current) {
    const path = node.path || DEFAULT_MARKDOWN_PATH;
    const label = getNodeLabel(node);
    const same = sanitizeInitialPath(path) === current;
    const iconClass = iconClassForNode(node);
    const titleAttr = label.length > 36 ? ` title="${escapeHtml(label)}"` : "";

    return `
        <a href="?md=${encodeURIComponent(path)}"
           class="menu-link depth-${Math.min(depth, 4)}${same ? " is-active is-current" : ""}"
           data-md-path="${escapeHtml(path)}"
           data-node-id="${escapeHtml(node.id)}"
           data-menu-focusable="true"${same ? ' aria-current="page"' : ""}${titleAttr}>
            <span class="menu-link-icon"><i class="fa-solid ${escapeHtml(iconClass)}" aria-hidden="true"></i></span>
            <span class="menu-link-label">${escapeHtml(label)}</span>
        </a>
    `;
}

function renderBranchOverview(node, depth, current) {
    return renderLeaf(
        {
            ...node,
            id: `${node.id}-overview`,
            label: tx("navOverview"),
            children: [],
        },
        depth,
        current
    );
}

function renderMenuNode(node, depth, query, current) {
    const children = Array.isArray(node.children) ? node.children : [];
    if (!nodeHasMatch(node, query)) return "";

    if (!children.length) {
        return renderLeaf(node, depth, current);
    }

    const label = getNodeLabel(node);
    const shouldOpen = isBranchOpen(node, depth, query);
    const iconClass = iconClassForNode(node, { branch: true });
    const titleAttr = label.length > 36 ? ` title="${escapeHtml(label)}"` : "";
    const childrenHtml = children.map((child) => renderMenuNode(child, depth + 1, query, current)).join("");
    const overviewHtml = node.path ? renderBranchOverview(node, depth + 1, current) : "";

    return `
        <details class="menu-branch depth-${Math.min(depth, 4)}" data-node-id="${escapeHtml(node.id)}"${
            shouldOpen ? " open" : ""
        }>
            <summary class="menu-summary" data-node-id="${escapeHtml(node.id)}" data-menu-focusable="true" aria-expanded="${
                shouldOpen ? "true" : "false"
            }"${titleAttr}>
                <span class="menu-summary-main">
                    <span class="menu-summary-caret" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                    <span class="menu-summary-icon" aria-hidden="true"><i class="fa-solid ${escapeHtml(
                        iconClass
                    )}"></i></span>
                    <span class="menu-summary-label">${escapeHtml(label)}</span>
                </span>
                <span class="menu-summary-badge" aria-hidden="true">${children.length}</span>
            </summary>
            <div class="menu-children">
                <div class="menu-children-inner">
                    ${overviewHtml}
                    ${childrenHtml}
                </div>
            </div>
        </details>
    `;
}

function renderEmptyState(query) {
    const title = tx("noMenuResult");
    const hint = query ? tx("sidebarSearchHint") : tx("loading");
    return `
        <div class="menu-empty" role="status">
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(hint)}</span>
        </div>
    `;
}

function updateBranchAria() {
    qa(".menu-summary", refs.contentMenu).forEach((summary) => {
        const branch = summary.parentElement;
        if (!(branch instanceof HTMLDetailsElement)) return;
        summary.setAttribute("aria-expanded", branch.open ? "true" : "false");
    });
}

function scrollActiveItemIntoView(activeEl) {
    if (!activeEl) return;

    const currentPath = sanitizeInitialPath(activeEl.getAttribute("data-md-path") || "");
    if (!currentPath || state.lastMenuScrollPath === currentPath) return;

    state.lastMenuScrollPath = currentPath;

    window.requestAnimationFrame(() => {
        animateElementIntoView(activeEl, activeEl.closest(".menu-scroll"), {
            duration: 760,
            padding: 20,
        });
    });
}

function clearBranchAnimation(branch, panel) {
    if (!(branch instanceof HTMLDetailsElement) || !(panel instanceof HTMLElement)) return;

    const cancel = branch.__trNavCancelAnimation;
    if (typeof cancel === "function") {
        cancel();
    }

    branch.__trNavCancelAnimation = null;
    delete branch.dataset.animating;
    panel.style.height = "";
    panel.style.opacity = "";
    panel.style.overflow = "";
}

function animateBranch(branch, open) {
    if (!(branch instanceof HTMLDetailsElement)) return;

    const panel = q(".menu-children", branch);
    if (!(panel instanceof HTMLElement)) {
        branch.open = open;
        syncBranchState(branch);
        return;
    }

    clearBranchAnimation(branch, panel);

    if (preferredScrollBehavior() === "auto") {
        branch.open = open;
        syncBranchState(branch);
        return;
    }

    const finish = () => {
        if (!open) {
            branch.open = false;
        }
        clearBranchAnimation(branch, panel);
        syncBranchState(branch);
    };

    const onTransitionEnd = (event) => {
        if (event.target !== panel || event.propertyName !== "height") return;
        finish();
    };

    const timeoutId = window.setTimeout(finish, 760);

    branch.__trNavCancelAnimation = () => {
        window.clearTimeout(timeoutId);
        panel.removeEventListener("transitionend", onTransitionEnd);
    };

    panel.addEventListener("transitionend", onTransitionEnd);
    branch.dataset.animating = "true";
    panel.style.overflow = "hidden";

    if (open) {
        branch.open = true;
        syncBranchState(branch);
        panel.style.height = "0px";
        panel.style.opacity = "0";

        window.requestAnimationFrame(() => {
            panel.style.height = `${panel.scrollHeight}px`;
            panel.style.opacity = "1";
        });
        return;
    }

    const startHeight = panel.offsetHeight || panel.scrollHeight;
    panel.style.height = `${startHeight}px`;
    panel.style.opacity = "1";

    window.requestAnimationFrame(() => {
        panel.style.height = "0px";
        panel.style.opacity = "0";
    });
}

function setBranchOpen(branch, open, options = {}) {
    if (!(branch instanceof HTMLDetailsElement)) return;

    const immediate = options.immediate === true;
    const desired = Boolean(open);

    if (immediate) {
        const panel = q(".menu-children", branch);
        if (panel instanceof HTMLElement) {
            clearBranchAnimation(branch, panel);
        }
        branch.open = desired;
        syncBranchState(branch);
        return;
    }

    if (branch.open === desired && !branch.dataset.animating) {
        syncBranchState(branch);
        return;
    }

    animateBranch(branch, desired);
}

function collapseBranchTree(branch) {
    if (!(branch instanceof HTMLDetailsElement)) return;
    branch.querySelectorAll("details[open]").forEach((child) => {
        if (child instanceof HTMLDetailsElement) {
            setBranchOpen(child, false, { immediate: true });
        }
    });
}

function syncBranchState(branch) {
    if (!(branch instanceof HTMLDetailsElement)) return;

    const summary = q(".menu-summary", branch);
    if (summary) {
        summary.setAttribute("aria-expanded", branch.open ? "true" : "false");
    }

    if (!getSearchQuery() && !branch.open) {
        collapseBranchTree(branch);
    }
}

function branchContainsPath(branch, targetPath) {
    const target = sanitizeInitialPath(targetPath);
    return qa("[data-md-path]", branch).some((el) => sanitizeInitialPath(el.getAttribute("data-md-path") || "") === target);
}

function syncOpenBranchesToPath(targetPath = state.currentSource) {
    const query = getSearchQuery();
    if (query) {
        updateBranchAria();
        return;
    }

    const activePath = sanitizeInitialPath(targetPath);
    qa("details", refs.contentMenu).forEach((branch) => {
        if (!(branch instanceof HTMLDetailsElement)) return;
        setBranchOpen(branch, branchContainsPath(branch, activePath), { immediate: true });
    });
}

function collapseUnrelatedBranches(targetBranch) {
    if (!(targetBranch instanceof HTMLDetailsElement)) return;
    if (getSearchQuery()) return;

    const keep = new Set([targetBranch]);
    let parent = targetBranch.parentElement?.closest("details");
    while (parent instanceof HTMLDetailsElement) {
        keep.add(parent);
        parent = parent.parentElement?.closest("details");
    }

    qa("details", refs.contentMenu).forEach((branch) => {
        if (!(branch instanceof HTMLDetailsElement)) return;
        if (keep.has(branch) || targetBranch.contains(branch)) return;
        setBranchOpen(branch, false);
    });
}

function visibleMenuItems() {
    return qa("[data-menu-focusable='true']", refs.contentMenu).filter((el) => {
        if (el.offsetParent === null) return false;

        const closedAncestor = el.closest("details:not([open])");
        if (!closedAncestor) return true;

        return el.classList.contains("menu-summary");
    });
}

function focusBoundaryItem(position = "first") {
    const items = visibleMenuItems();
    if (!items.length) return;
    const target = position === "last" ? items[items.length - 1] : items[0];
    target.focus();
}

function focusRelativeItem(currentEl, direction) {
    const items = visibleMenuItems();
    const index = items.indexOf(currentEl);
    if (index < 0) return;

    const nextIndex = Math.min(Math.max(index + direction, 0), items.length - 1);
    items[nextIndex]?.focus();
}

function focusParentSummary(fromEl) {
    const branch = fromEl?.closest("details")?.parentElement?.closest("details");
    const summary = branch ? q(".menu-summary", branch) : null;
    summary?.focus();
}

function focusFirstChild(branch) {
    const target = q(".menu-children [data-menu-focusable='true']", branch);
    target?.focus();
}

export function handleSidebarKeydown(event) {
    const target = event.target instanceof Element ? event.target.closest("[data-menu-focusable='true']") : null;
    if (!target || !refs.contentMenu?.contains(target)) return;

    if (event.key === "ArrowDown") {
        event.preventDefault();
        focusRelativeItem(target, 1);
        return;
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        focusRelativeItem(target, -1);
        return;
    }

    if (event.key === "Home") {
        event.preventDefault();
        focusBoundaryItem("first");
        return;
    }

    if (event.key === "End") {
        event.preventDefault();
        focusBoundaryItem("last");
        return;
    }

    if (!target.classList.contains("menu-summary")) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            focusParentSummary(target);
        }
        return;
    }

    const branch = target.parentElement;
    if (!(branch instanceof HTMLDetailsElement)) return;

    if (event.key === "ArrowRight") {
        event.preventDefault();
        if (!branch.open) {
            setBranchOpen(branch, true);
            collapseUnrelatedBranches(branch);
        } else {
            focusFirstChild(branch);
        }
        return;
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (branch.open) {
            setBranchOpen(branch, false);
        } else {
            focusParentSummary(branch);
        }
        return;
    }

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const nextOpen = !branch.open;
        setBranchOpen(branch, nextOpen);
        if (nextOpen) {
            collapseUnrelatedBranches(branch);
        }
    }
}

export function handleSidebarClick(event) {
    const summary = event.target instanceof Element ? event.target.closest(".menu-summary") : null;
    if (!summary || !refs.contentMenu?.contains(summary)) return;

    const branch = summary.parentElement;
    if (!(branch instanceof HTMLDetailsElement)) return;

    event.preventDefault();

    const nextOpen = !branch.open;
    setBranchOpen(branch, nextOpen);

    if (nextOpen) {
        collapseUnrelatedBranches(branch);
    }
}

export function setSidebarFilter(value, options = {}) {
    state.navFilter = String(value || "");

    if (refs.searchInput && refs.searchInput.value !== state.navFilter) {
        refs.searchInput.value = state.navFilter;
    }

    if (options.persist !== false) {
        safeSetLS(LS_NAV_FILTER, state.navFilter);
    }

    state.lastMenuScrollPath = "";

    if (options.render !== false) {
        renderContentMenu();
    }
}

export async function buildNavigationIndex(locale = currentLang()) {
    const activeLocale = locale === "id" ? "id" : "en";
    hydrateNavigationUiState(activeLocale);

    const rootNodes = cloneTree(getContentTree(activeLocale));
    const tasks = [];

    rootNodes.forEach((node) => walkAndHydrate(node, tasks));
    await Promise.all(tasks);

    const normalizedRoot = rootNodes.map((node, index) => normalizeNode(node, `${activeLocale}-root`, 0, index));
    const navPathSet = new Set();

    collectNavigationMeta(normalizedRoot, navPathSet);

    state.navIndex = normalizedRoot;
    state.navIndexLoaded = true;
    state.navLocale = activeLocale;
    state.navPathSet = navPathSet;
}

export function renderContentMenu() {
    if (!refs.contentMenu) return;

    if (refs.searchInput && refs.searchInput.value !== state.navFilter) {
        refs.searchInput.value = state.navFilter;
    }

    const query = getSearchQuery();

    if (!state.navIndexLoaded) {
        refs.contentMenu.innerHTML = `<div class="menu-empty"><strong>${escapeHtml(tx("loading"))}</strong></div>`;
        return;
    }

    const current = sanitizeInitialPath(state.currentSource);
    const html = state.navIndex.map((node) => renderMenuNode(node, 0, query, current)).join("");

    refs.contentMenu.innerHTML = `
        <div class="menu-scroll">
            ${html || renderEmptyState(query)}
        </div>
    `;

    updateMenuActiveState();
}

export function updateMenuActiveState(options = {}) {
    const current = sanitizeInitialPath(state.currentSource);
    let activeEl = null;

    qa("[data-md-path]", refs.contentMenu).forEach((el) => {
        const same = sanitizeInitialPath(el.getAttribute("data-md-path") || "") === current;
        el.classList.toggle("is-active", same);
        el.classList.toggle("is-current", same);

        if (same) {
            el.setAttribute("aria-current", "page");
            activeEl = el;
        } else {
            el.removeAttribute("aria-current");
        }
    });

    syncOpenBranchesToPath(current);
    updateBranchAria();

    if (options.scroll !== false) {
        scrollActiveItemIntoView(activeEl);
    }
}

export function resolveLocalizedContentPath(path, locale = state.navLocale || currentLang()) {
    const targetLocale = locale === "id" ? "id" : "en";
    const normalized = sanitizeInitialPath(path || DEFAULT_MARKDOWN_PATH);

    if (normalized === sanitizeInitialPath(DEFAULT_MARKDOWN_PATH)) {
        return DEFAULT_MARKDOWN_PATH;
    }

    const match = normalized.match(/^assets\/content\/(en|id)\//i);
    if (!match) return normalized;

    const currentLocale = match[1].toLowerCase();
    if (currentLocale === targetLocale) return normalized;

    const localizedPath = normalized.replace(/^assets\/content\/(en|id)\//i, `assets/content/${targetLocale}/`);
    if (state.navPathSet instanceof Set && state.navPathSet.has(localizedPath)) {
        return localizedPath;
    }

    return normalized;
}

function findNodeTrailByPath(path, nodes = state.navIndex, trail = []) {
    const target = sanitizeInitialPath(path);

    for (const node of nodes) {
        const nextTrail = node.path ? [...trail, { label: getNodeLabel(node), path: node.path }] : [...trail];

        if (sanitizeInitialPath(node.path || "") === target) {
            return nextTrail;
        }

        if (node.children?.length) {
            const found = findNodeTrailByPath(path, node.children, nextTrail);
            if (found) return found;
        }
    }

    return null;
}

function ensureHomeTrail(trail) {
    const home = { label: tx("breadcrumbHome"), path: DEFAULT_MARKDOWN_PATH };
    const items = Array.isArray(trail) ? trail.filter(Boolean) : [];

    if (!items.length) return [home];

    const firstPath = sanitizeInitialPath(items[0]?.path || "");
    if (firstPath === sanitizeInitialPath(DEFAULT_MARKDOWN_PATH)) {
        return [home, ...items.slice(1)];
    }

    return [home, ...items];
}

function fallbackTrailFromPath(path) {
    const target = sanitizeInitialPath(path || DEFAULT_MARKDOWN_PATH);
    if (target === sanitizeInitialPath(DEFAULT_MARKDOWN_PATH)) {
        return [{ label: tx("breadcrumbHome"), path: DEFAULT_MARKDOWN_PATH }];
    }

    const rel = target
        .replace(/^assets\/content\//, "")
        .replace(/\/index\.md$/i, "")
        .replace(/\.md$/i, "");

    const segments = rel.split("/").filter(Boolean);
    const items = [{ label: tx("breadcrumbHome"), path: DEFAULT_MARKDOWN_PATH }];

    let build = "assets/content";

    segments.forEach((segment, index) => {
        build += `/${segment}`;

        if (index === 0 && (segment === "en" || segment === "id")) {
            return;
        }

        const last = index === segments.length - 1;
        let label = titleFromSlug(segment);
        let itemPath = `${build}${last && !/index$/i.test(segment) ? ".md" : "/index.md"}`;

        if (last && !/\/index\.md$/i.test(target) && /\.md$/i.test(target)) {
            itemPath = target;
        }

        items.push({ label, path: itemPath });
    });

    return items;
}

export function updateBreadcrumb(path) {
    if (!refs.breadcrumb) return;

    const trail = ensureHomeTrail(findNodeTrailByPath(path) || fallbackTrailFromPath(path));

    const items = trail
        .map((item, index) => {
            const last = index === trail.length - 1;
            const body = last
                ? `<span class="breadcrumb-current" aria-current="page">${escapeHtml(item.label)}</span>`
                : `<a class="breadcrumb-link" href="?md=${encodeURIComponent(item.path)}" data-md-path="${escapeHtml(
                      item.path
                  )}">${escapeHtml(item.label)}</a>`;

            return `<li class="breadcrumb-item">${body}</li>`;
        })
        .join("");

    refs.breadcrumb.innerHTML = `<ol class="breadcrumb-list" role="list">${items}</ol>`;
}

export function focusFirstMenuItem() {
    focusBoundaryItem("first");
}
