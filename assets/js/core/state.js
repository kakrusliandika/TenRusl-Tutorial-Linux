import { DEFAULT_MARKDOWN_PATH } from "./constants.js";

export const state = {
    rawMarkdown: "",
    currentSource: DEFAULT_MARKDOWN_PATH,
    currentMode: "bundled",
    navLocale: "en",
    mermaid: null,
    mermaidReady: false,
    mermaidRenderToken: 0,
    renderedHeadings: [],
    tocLinks: [],
    lastVisibleHeadingId: "",
    navIndexLoaded: false,
    navIndex: [],
    navFilter: "",
    navPathSet: new Set(),
    navUiHydrated: false,
    lastMenuScrollPath: "",
    tocOpen: false,
};
