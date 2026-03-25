const root = document.documentElement;

const appId = root?.getAttribute("data-app") || "tenrusl-tutorial-linux";
const defaultMarkdownPath = root?.getAttribute("data-default-markdown") || "assets/content/index.md";
const defaultTheme = root?.getAttribute("data-default-theme") || "dark";
const defaultLanguage = root?.getAttribute("data-default-lang") || "id";
const repoUrl =
    root?.getAttribute("data-repo-url") ||
    document.querySelector('meta[name="tenrusl-repo"]')?.getAttribute("content") ||
    "https://github.com/kakrusliandika/TenRusl-Tutorial-Linux";

export const ROOT_CONFIG = Object.freeze({
    appId,
    defaultMarkdownPath,
    defaultTheme,
    defaultLanguage,
    repoUrl,
});

export const APP_ID = ROOT_CONFIG.appId;
export const DEFAULT_MARKDOWN_PATH = ROOT_CONFIG.defaultMarkdownPath;
export const DEFAULT_THEME = ROOT_CONFIG.defaultTheme;
export const DEFAULT_LANGUAGE = ROOT_CONFIG.defaultLanguage;
export const REPO_URL = ROOT_CONFIG.repoUrl;

export const EVENT_I18N = "tenrusl:i18nUpdated";
export const EVENT_THEME = "tenrusl:themeChanged";

export const LS_LAST_SOURCE = "tenrusl.lastMarkdownSource";
export const LS_TOC_OPEN = "tenrusl.tocDrawerOpen";
export const LS_THEME = "tenrusl.theme";
export const LS_LANG = "tenrusl.uiLang";
export const LS_NAV_FILTER = "tenrusl.navFilter";

export const MERMAID_MODULE_URL = new URL("../../plugin/mermaid-lib/dist/mermaid.esm.min.mjs", import.meta.url).href;
