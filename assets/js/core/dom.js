export const q = (selector, scope = document) =>
    scope && typeof scope.querySelector === "function" ? scope.querySelector(selector) : null;
export const qa = (selector, scope = document) =>
    scope && typeof scope.querySelectorAll === "function" ? Array.from(scope.querySelectorAll(selector)) : [];
export const byId = (id, scope = document) =>
    scope && typeof scope.getElementById === "function" ? scope.getElementById(id) : null;

export const refs = {
    get layout() {
        return byId("layout");
    },
    get sidebar() {
        return byId("sidebar");
    },
    get sidebarBackdrop() {
        return byId("sidebarBackdrop");
    },
    get content() {
        return byId("content");
    },
    get contentMenu() {
        return byId("contentMenu");
    },
    get breadcrumb() {
        return byId("breadcrumb");
    },
    get toc() {
        return byId("toc");
    },
    get tocCount() {
        return byId("tocCount");
    },
    get tocTitle() {
        return byId("tocTitle");
    },
    get tocBackdrop() {
        return byId("tocBackdrop");
    },
    get tocDrawer() {
        return byId("tocDrawer");
    },
    get tocDrawerToggle() {
        return byId("tocDrawerToggle");
    },
    get tocDrawerToggleLabel() {
        return byId("tocDrawerToggleLabel");
    },
    get tocDrawerClose() {
        return byId("tocDrawerClose");
    },
    get statusBar() {
        return q("#statusBar span") || byId("statusBar");
    },
    get renderMeta() {
        return q("#renderMeta span") || byId("renderMeta");
    },
    get renderMetaIcon() {
        return q("#renderMeta i");
    },
    get paperIntro() {
        return byId("paperIntro");
    },
    get paperTitle() {
        return byId("paperTitle");
    },
    get brandTitle() {
        return byId("brandTitle");
    },
    get brandTagline() {
        return byId("brandTagline");
    },
    get searchInput() {
        return byId("searchInput");
    },
    get copyRawBtn() {
        return byId("copyRawBtn");
    },
    get printBtn() {
        return byId("printBtn");
    },
    get mobileToggle() {
        return byId("mobileToggle");
    },
    get toTopBtn() {
        return byId("toTopBtn");
    },
    get toBottomBtn() {
        return byId("toBottomBtn");
    },
    get themeToggle() {
        return byId("themeToggle");
    },
};
