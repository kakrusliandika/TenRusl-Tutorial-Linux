# 🤝 Contributing to TenRusl-Tutorial-Linux

First of all — **thank you** for taking the time to contribute. 🎉

This repository is a **static, client-side Markdown viewer** and we welcome contributions in documentation, UX, i18n, accessibility, reliability, and architecture.

> By participating in this project, you agree to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📌 Project Identity

Before contributing, keep the current project identity clear:

-   ✅ **Current product name:** `TenRusl-Tutorial-Linux`
-   ✅ **Current product type:** client-side Markdown viewer
-   ❌ **Do not reintroduce:** `TenRusl Highlight Code`, `TRHC`, Prism-only product wording, legacy export pipeline assumptions

This project is **not** the old code highlighter architecture.

---

## 🧭 What This Project Focuses On

Contributions should align with the current scope:

-   📄 Markdown rendering
-   📚 TOC generation
-   🔗 heading anchors
-   🎨 syntax highlighting inside Markdown
-   📊 Mermaid rendering
-   🌍 EN/ID i18n
-   🌗 theme management
-   📡 service worker + offline fallback
-   🛡️ safer client-side rendering
-   📘 documentation quality

---

## 💡 Ways to Contribute

You can contribute through:

-   🐞 **Bug reports**
-   ✨ **Feature requests**
-   📘 **Documentation improvements**
-   🌍 **i18n updates**
-   ♿ **Accessibility improvements**
-   🎨 **UI/UX refinements**
-   ⚡ **Performance improvements**
-   🛡️ **Security hardening**
-   📡 **PWA/offline reliability fixes**

---

## 🧰 Project Setup

This repository is a **static site**.

There is **no required build step**.

### 1) Clone your fork

```bash
git clone --depth 1 https://github.com/<your-user>/TenRusl-Tutorial-Linux.git
cd TenRusl-Tutorial-Linux
```

### 2) Run a local static server

Use **any static server**.

#### Option A — Python

```bash
python3 -m http.server 5173
```

#### Option B — Node.js `serve`

```bash
npx serve . -p 5173
```

#### Option C — VS Code Live Server

Open the folder and serve the project root.

### 3) Open the app

```text
http://localhost:5173/
```

---

## ⚠️ Do Not Rely on `file://`

Do **not** test only by opening:

```text
file:///.../index.html
```

Some behavior can fail under `file://`, including:

-   fetching the default Markdown file,
-   loading i18n JSON,
-   loading config JSON,
-   service worker behavior,
-   some clipboard flows.

Always validate with a local HTTP server.

---

## 🌳 Branching Workflow

1. Fork the repository.
2. Create a focused branch from `main`.
3. Make a small, clear change.
4. Test locally.
5. Open a pull request.

Example:

```bash
git checkout -b feat/toc-keyboard-improvements
```

Keep PRs **small and intentional**.

---

## 📝 Commit Style

Use **Conventional Commits**.

Examples:

```text
feat: improve markdown load fallback state
fix: prevent duplicate heading ids in toc
docs: expand README architecture section
refactor: split footer labels from app status logic
perf: reduce unnecessary rerender on theme change
chore: update static page metadata
```

Optional scopes are welcome:

```text
feat(app): add better local file reload flow
fix(sw): reduce stale runtime cache collisions
docs(readme): document clipboard secure-context note
refactor(i18n): unify event names across scripts
```

---

## 🧱 Architecture Rules

Please keep the current separation of concerns intact.

### Root app only

These files are for the **Markdown viewer app**:

-   `index.html`
-   `assets/js/app.js`
-   `assets/js/theme.js`
-   `assets/js/language.js`
-   `assets/js/header.js`
-   `assets/js/footer.js`
-   `assets/css/app.css`

### Static pages only

These files are for **support/legal/offline pages**:

-   `pages/*.html`
-   `assets/js/pages.js`
-   `assets/js/header-pages.js`
-   `assets/js/footer-pages.js`
-   `assets/js/language-pages.js`
-   `assets/css/pages.css`

### Shared layers

These are shared across both:

-   `assets/css/theme.css`
-   `assets/css/chrome.css`
-   `assets/css/header.css`
-   `assets/css/footer.css`
-   `assets/css/language.css`

---

## 🚫 Please Avoid These Regressions

Do **not** introduce:

-   giant inline `<style>` blocks,
-   giant inline `<script>` blocks,
-   inline `onclick` handlers,
-   legacy Prism autoloader architecture,
-   PNG/PDF export assumptions,
-   old product naming,
-   duplicate language event names,
-   duplicated business logic across root and pages.

---

## 🌍 i18n Rules

The project uses **two i18n layers**.

### Root app

-   `assets/i18n/en.json`
-   `assets/i18n/id.json`
-   handled by `assets/js/language.js`

### Static pages

-   `assets/i18n/pages.json`
-   handled by `assets/js/language-pages.js`

### Unified event

Use the same language event everywhere:

```text
tenrusl:i18nUpdated
```

Do **not** introduce mismatched custom events for language updates.

### If you change labels

Update all relevant files:

-   root app strings,
-   static page strings,
-   UI button labels,
-   placeholders,
-   titles if needed.

---

## 🌗 Theme Rules

Theme is handled centrally in:

-   `assets/js/theme.js`
-   `assets/css/theme.css`

If you change theme behavior:

-   keep dark/light both working,
-   keep `meta[name="theme-color"]` in sync,
-   keep Mermaid theme mode in sync,
-   do not reintroduce missing Prism theme references.

Unified theme event:

```text
tenrusl:themeChanged
```

---

## 📄 Markdown Rendering Rules

If you change `assets/js/app.js`, make sure the following still work:

-   default Markdown file loading,
-   local Markdown file opening,
-   Markdown parsing,
-   HTML sanitization,
-   heading anchor generation,
-   TOC generation,
-   code highlighting,
-   copy buttons,
-   Mermaid rendering,
-   status bar updates,
-   fallback error view.

Do not remove sanitization from the Markdown pipeline.

---

## 📋 Clipboard Rules

Clipboard behavior can vary across browsers and environments.

When touching copy features:

-   keep the secure-context limitation in mind,
-   keep fallback behavior where possible,
-   test on **localhost** or **HTTPS**,
-   avoid assuming clipboard access is always available.

---

## 📡 Service Worker Rules

The service worker lives at:

-   `assets/js/sw.js`

If you change cached assets or offline behavior:

-   update the SW version string,
-   verify offline fallback still works,
-   verify navigation fallback still works,
-   verify runtime cache cleanup still works,
-   avoid caching files that do not exist.

Test:

-   first load online,
-   refresh online,
-   reload offline,
-   open offline fallback page.

---

## 🔐 Security Rules

If you touch security-sensitive files such as:

-   `_headers`
-   `index.html`
-   `pages/*.html`
-   `assets/js/app.js`

please verify:

-   CSP still matches actual asset usage,
-   no inline handlers were added,
-   no unnecessary external domains were added,
-   Markdown output is still sanitized,
-   service worker scope still makes sense.

---

## 🗂️ Config / Metadata Rules

If you change app metadata, update the correct files:

### App config

-   `assets/json/settings.json`
-   `assets/json/languages.json`

### PWA / deploy

-   `manifest.webmanifest`
-   `_headers`
-   `robots.txt`
-   `sitemap.xml`
-   `sitemap-index.xml`
-   `humans.txt`

### Important

Do not leave placeholder domains or outdated repo names in deploy-facing files.

---

## 🧪 Recommended Test Checklist

Before opening a PR, check as many of these as possible:

-   [ ] Root app loads from `/`
-   [ ] Default Markdown file renders correctly
-   [ ] Local Markdown file can be opened
-   [ ] TOC builds and scroll highlight works
-   [ ] Code block copy works
-   [ ] Raw Markdown copy works
-   [ ] Mermaid blocks render
-   [ ] Dark theme works
-   [ ] Light theme works
-   [ ] EN/ID toggle works in root app
-   [ ] EN/ID toggle works in static pages
-   [ ] Footer/header labels stay synchronized
-   [ ] Offline fallback still works
-   [ ] No console errors in common flows
-   [ ] No old brand strings remain
-   [ ] No inline event handlers were introduced
-   [ ] If SW behavior changed, cache version was updated
-   [ ] README / i18n / config were updated if required

---

## 📷 UI Changes

For visible UI changes, it is helpful to include:

-   a **before/after screenshot**, or
-   a short screen recording, or
-   a concise visual explanation in the PR description.

This is optional, but strongly recommended.

---

## 🐞 Filing Good Issues

When reporting a bug, please include:

-   what page or feature is affected,
-   steps to reproduce,
-   expected behavior,
-   actual behavior,
-   browser + OS,
-   console/network errors if relevant,
-   whether the problem happens on `localhost`, deployed HTTPS, or `file://`.

A minimal reproduction is always appreciated.

---

## 🔄 Keeping Your Fork Updated

```bash
git remote add upstream https://github.com/kakrusliandika/TenRusl-Tutorial-Linux.git
git fetch upstream
git checkout main
git merge upstream/main
```

---

## ✅ Pull Request Guidance

Good pull requests usually:

-   solve one focused problem,
-   explain _why_ the change is needed,
-   avoid unrelated formatting churn,
-   update docs when behavior changes,
-   avoid mixing root app and static page refactors without reason.

---

## 📘 Documentation Expectations

If your change affects behavior, you should update at least one of these when appropriate:

-   `README.md`
-   `CONTRIBUTING.md`
-   `assets/i18n/en.json`
-   `assets/i18n/id.json`
-   `assets/i18n/pages.json`
-   `assets/json/settings.json`

---

## 🧡 Thank You

Every good contribution helps keep **TenRusl-Tutorial-Linux** cleaner, safer, and easier to maintain.

We appreciate your time, your care, and your attention to detail.
