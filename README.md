# TenRusl Tutorial Linux (TRTL) — Structured Linux Tutorial Portal

> A lightweight, fast, and structured **PWA** documentation portal for **Linux learning paths**. Browse **Server**, **Virtualization**, **Security**, **Backup**, and **Workstation** content through a client-side **Markdown viewer** with **manifest-driven navigation**, **syntax highlighting**, **Mermaid diagrams**, **EN/ID i18n**, and **offline-first** support.

![Status](https://img.shields.io/badge/PWA-Ready-8b5cf6)
![License](https://img.shields.io/badge/License-MIT-green)
![Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20Markdown%20%7C%20PWA-111)
![Build](https://img.shields.io/badge/Build-None%20%28Static%20Site%29-2ea44f)
![I18N](https://img.shields.io/badge/I18N-EN%20%7C%20ID-1f6feb)
![Stars](https://img.shields.io/github/stars/kakrusliandika/TenRusl-Tutorial-Linux?style=social)
![Forks](https://img.shields.io/github/forks/kakrusliandika/TenRusl-Tutorial-Linux?style=social)

Live: **[https://tenrusl-tutorial-linux.pages.dev/](https://tenrusl-tutorial-linux.pages.dev/)**

---

## Table of Contents

- [✨ Key Features](#key-features)
- [▶️ Quick Demo](#quick-demo)
- [📦 Install (Open Source)](#install-open-source)
- [🚀 Deployment](#deployment)
- [🗂️ Directory Structure](#directory-structure)
- [⚙️ How It Works](#how-it-works)
- [📚 Content Architecture](#content-architecture)
- [🧭 Navigation & Reading UX](#navigation--reading-ux)
- [🎛️ Options & Preferences](#options--preferences)
- [📴 PWA & Caching](#pwa--caching)
- [🌐 I18N](#i18n)
- [🛡️ Security Headers (Recommended)](#security-headers-recommended)
- [🧪 Development](#development)
- [🛠️ Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 Code of Conduct](#code-of-conduct)
- [🙏 Credits](#credits)
- [👤 Author](#author)
- [🗺️ Roadmap](#roadmap)
- [📄 License](#license)

---

## ✨ Key Features

- **Structured Linux documentation portal** covering:
  - **🖥️ Server**
  - **☁️ Virtualization**
  - **🛡️ Security**
  - **💾 Backup**
  - **💻 Workstation**
- **Manifest-driven navigation** → module indexes are expanded from `meta/manifest.json` files into **Concepts**, **How-To**, **Reference**, and **Tutorials**.
- **Client-side Markdown rendering** with **Marked** + **DOMPurify**.
- **Syntax highlighting** for code blocks with **Highlight.js**.
- **Mermaid diagram rendering** for architecture, flow, and topology blocks.
- **Reader UX built for docs**:
  - searchable left sidebar,
  - breadcrumb trail,
  - floating / drawer TOC,
  - heading anchors,
  - copy code buttons,
  - print support.
- **PWA / offline-first** with Service Worker, offline page, runtime caching, and installable app metadata.
- **Bilingual interface and content support** for **English** and **Bahasa Indonesia**.
- **No build step required** → static hosting friendly and easy to deploy.

---

## ▶️ Quick Demo

1. Open the viewer in a browser.
2. Pick a learning domain such as **Server**, **Security**, or **Virtualization**.
3. Use the **left sidebar** to jump between modules and section groups.
4. Read the current page with **breadcrumb**, **code highlighting**, and **TOC navigation**.
5. Switch **theme** and **language** as needed.
6. Install the app as a **PWA** for a cleaner offline-capable reading experience.

---

## 📦 Install (Open Source)

### 1) Clone the repository

```bash
# SSH (recommended if you set up SSH keys)
git clone --depth 1 git@github.com:kakrusliandika/TenRusl-Tutorial-Linux.git

# or HTTPS
git clone --depth 1 https://github.com/kakrusliandika/TenRusl-Tutorial-Linux.git

cd TenRusl-Tutorial-Linux
```

> `--depth 1` gives you a shallow clone for a faster download.

### 2) Run it

Pick one (**no build step**):

```bash
# Using Node "serve"
npx serve . -p 5173

# Or Python
python3 -m http.server 5173

# Or Bun
bunx serve . -p 5173
```

Open `http://localhost:5173` and start reading.

### 3) Keep your fork in sync (optional)

```bash
# Add the original repo as upstream
git remote add upstream https://github.com/kakrusliandika/TenRusl-Tutorial-Linux.git

# Fetch and merge updates
git fetch upstream
git checkout main
git merge upstream/main
```

### 4) Create a new branch for your changes (for PRs)

```bash
git checkout -b feat/improve-docs-navigation
# ...do your changes...
git add -A
git commit -m "feat: improve docs navigation"
git push origin feat/improve-docs-navigation
# Then open a Pull Request on GitHub
```

---

## 🚀 Deployment

### Cloudflare Pages (recommended)

- **Build command**: _(empty)_
- **Output directory**: `/` (root)
- Ensure the Service Worker is reachable as **`/sw.js`**.
- `_headers` and `_redirects` are ready for static-host usage.

### Netlify / Vercel / Any static host

- Upload the repository as-is.
- Preserve `/_redirects` for SPA-style fallback routing where needed.
- Keep `manifest.webmanifest`, `sw.js`, and static assets served from the root path.

### Apache / Nginx

- Serve the repo root directly.
- Mirror security headers via server config if you do not use `_headers`.
- Make sure `/sw.js` resolves correctly and is served with JavaScript content type.

---

## 🗂️ Directory Structure

```text
/
├─ index.html
├─ sw.js
├─ manifest.webmanifest
├─ _headers
├─ _redirects
├─ robots.txt
├─ sitemap.xml
├─ sitemap-index.xml
├─ ads.txt
├─ humans.txt
├─ consent-base.js
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ README.md
├─ assets/
│  ├─ content/
│  │  ├─ index.md
│  │  ├─ en/
│  │  │  ├─ server/
│  │  │  ├─ virtualization/
│  │  │  ├─ security/
│  │  │  ├─ backup/
│  │  │  └─ workstation/
│  │  └─ id/
│  │     ├─ server/
│  │     ├─ virtualization/
│  │     ├─ security/
│  │     ├─ backup/
│  │     └─ workstation/
│  ├─ css/
│  │  ├─ app.css
│  │  ├─ chrome.css
│  │  ├─ theme.css
│  │  ├─ header.css
│  │  ├─ footer.css
│  │  ├─ language.css
│  │  └─ pages.css
│  ├─ i18n/
│  │  ├─ en.json
│  │  ├─ id.json
│  │  └─ pages.json
│  ├─ images/
│  │  └─ icon.svg
│  ├─ json/
│  │  ├─ languages.json
│  │  └─ settings.json
│  ├─ js/
│  │  ├─ app.js
│  │  ├─ theme.js
│  │  ├─ language.js
│  │  ├─ header.js
│  │  ├─ footer.js
│  │  ├─ pages.js
│  │  ├─ header-pages.js
│  │  ├─ footer-pages.js
│  │  ├─ language-pages.js
│  │  ├─ bootstrap/
│  │  ├─ core/
│  │  ├─ data/
│  │  └─ modules/
│  └─ plugin/
│     ├─ marked-lib/
│     ├─ dompurify/
│     ├─ highlight.js/
│     ├─ mermaid-lib/
│     ├─ fontawesome/
│     └─ github-markdown-css/
├─ pages/
│  ├─ 404.html
│  ├─ offline.html
│  ├─ contact.html
│  ├─ cookies.html
│  ├─ privacy.html
│  ├─ terms.html
│  ├─ head-snippets.html
│  ├─ index.html
│  └─ ad-unit-example.html
└─ prompt/
   ├─ 01.md
   ├─ 02.md
   ├─ 03.md
   ├─ 04.md
   └─ 05.md
```

---

## ⚙️ How It Works

- **Boot pipeline**
  1. `index.html` loads shell UI, metadata, theme, and language bootstrap.
  2. `assets/js/app.js` initializes the viewer.
  3. Default content is resolved from `assets/json/settings.json`.

- **Navigation pipeline**
  - `assets/js/data/content-tree.js` defines the high-level domain tree.
  - Each module can load a `meta/manifest.json` file.
  - Manifest sections expand into **Concepts**, **How-To**, **Reference**, and **Tutorials** inside the sidebar.

- **Rendering pipeline**
  - Markdown is fetched client-side.
  - `Marked` converts Markdown to HTML.
  - `DOMPurify` sanitizes the output.
  - `Highlight.js` styles code blocks.
  - Mermaid blocks are re-rendered after content injection.

- **Reader pipeline**
  - Heading IDs and anchor links are generated automatically.
  - The active page updates **breadcrumb**, **TOC**, and **menu state**.
  - Sidebar filtering helps readers find specific modules faster.

- **PWA pipeline**
  - Root `sw.js` proxies to `assets/js/sw.js`.
  - Static assets are pre-cached.
  - HTML / Markdown / JSON are handled with freshness-oriented strategies plus offline fallback.

---

## 📚 Content Architecture

The documentation library is organized into **learning domains**, then into **modules**, and finally into **content groups**.

### Main domains

- **🖥️ Server**
  - Base OS: Debian, Ubuntu, RHEL
  - Reverse Proxy: Caddy
  - Hosting Panels: aaPanel, CloudPanel, Nginx UI
  - PaaS: Coolify

- **☁️ Virtualization**
  - Proxmox
  - Incus
  - Harvester
  - CloudStack
  - IDVE

- **🛡️ Security**
  - Server Security
  - VM Security
  - Web Security

- **💾 Backup**
  - VPS Backup
  - VM Backup
  - Web Backup

- **💻 Workstation**
  - Ubuntu Lite
  - Ubuntu Standard

### Section model inside each module

- **Concepts** → mental model and baseline understanding.
- **How-To** → focused operational tasks.
- **Reference** → checklists, matrices, and technical notes.
- **Tutorials** → step-by-step learning path.

> The English tree under `assets/content/en/` acts as the source catalog structure, while Indonesian content mirrors the same hierarchy for bilingual delivery.

---

## 🧭 Navigation & Reading UX

- **Searchable sidebar** for modules and pages.
- **Nested branch navigation** with current-page state.
- **Breadcrumb** to show the active content path.
- **Floating / drawer TOC** generated from headings.
- **Anchor links** for headings.
- **Code copy buttons** for code blocks.
- **Deep-link support** through `?md=...` paths.
- **Print-friendly** layout for documentation pages.

---

## 🎛️ Options & Preferences

- **Theme**: Light / Dark.
- **Language**: `en` / `id`.
- **Remember last document** via local storage.
- **Remember TOC drawer state**.
- **Remember sidebar filter text**.
- **Default app settings** live in `assets/json/settings.json`.

---

## 📴 PWA & Caching

- **Installable web app** through `manifest.webmanifest`.
- **Offline fallback page** at `/pages/offline.html`.
- **Service Worker caching model**:
  - **HTML / page navigation** → network-first with offline fallback.
  - **Markdown / JSON data** → network-first.
  - **Images** → cache-first.
  - **Static CSS / JS** → stale-while-revalidate.
- **Versioned cache names** help invalidate old assets on release.

---

## 🌐 I18N

- UI dictionaries live in:
  - `assets/i18n/en.json`
  - `assets/i18n/id.json`
  - `assets/i18n/pages.json`
- Supported languages are configured in `assets/json/languages.json`.
- Root viewer and support pages both have dedicated language-handling scripts.
- The project is designed so EN and ID stay aligned in structure and navigation.

---

## 🛡️ Security Headers (Recommended)

This project already includes `_headers` and `_redirects` for static-host deployment.

Recommended headers:

```text
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

If you use a custom host, mirror the same policy through your server config.

---

## 🧪 Development

- **Architecture split**:
  - root viewer app,
  - support/legal/static pages,
  - shared core utilities,
  - modular renderer / navigation / UI layers.
- **No bundler required**.
- **Conventional Commits** are recommended:
  - `feat:`
  - `fix:`
  - `docs:`
  - `refactor:`
  - `chore:`
  - `perf:`
- Prefer **small PRs**, clean semantic HTML, and minimal regressions in navigation, rendering, i18n, and offline behavior.

---

## 🛠️ Troubleshooting

- **Viewer fails to load content**
  - Confirm the Markdown path exists.
  - Check `assets/json/settings.json` default path.
  - Verify `meta/manifest.json` filenames match real files.

- **App works poorly under `file://`**
  - Use a local HTTP server instead of opening `index.html` directly.

- **Service Worker not active**
  - Make sure the app runs on `http://` or `https://`.
  - Verify `/sw.js` resolves correctly.

- **Markdown renders without enhancement**
  - Confirm vendor files in `assets/plugin/` are present and load successfully.

- **Mermaid diagrams do not appear**
  - Verify Mermaid blocks use the `mermaid` code language.
  - Check whether the Mermaid module and vendor asset load successfully.

- **Translation / UI labels look wrong**
  - Review `assets/i18n/*.json` and `assets/json/languages.json`.

---

## 🤝 Contributing

1. **Fork** the repository.
2. **Create a branch** → `git checkout -b feat/improve-docs-navigation`
3. **Commit clearly** → `git commit -m "feat: improve docs navigation"`
4. **Push** → `git push origin feat/improve-docs-navigation`
5. **Open a Pull Request**

Please keep contributions aligned with the current product identity: a **static, client-side Markdown documentation viewer**.

---

## 📜 Code of Conduct

This project follows the **Contributor Covenant**. Please see `CODE_OF_CONDUCT.md`.

---

## 🙏 Credits

- **Marked** — Markdown parsing
- **DOMPurify** — HTML sanitization
- **Highlight.js** — syntax highlighting
- **Mermaid** — diagram rendering
- **Font Awesome** — UI icons
- **GitHub Markdown CSS** — document styling baseline

---

## 👤 Author

- **Andika Rusli (TenRusl)**
- **Site**: https://tenrusl-tutorial-linux.pages.dev/
- **GitHub**: https://github.com/kakrusliandika/TenRusl-Tutorial-Linux

---

## 🗺️ Roadmap

- [ ] Improve Indonesian copy quality and editorial consistency
- [ ] Expand module coverage across more Linux operations topics
- [ ] Add stronger validation for manifest/content mismatches
- [ ] Add richer in-app search across headings and content metadata
- [ ] Improve documentation QA workflow for EN ↔ ID parity
- [ ] Add automated checks for broken internal Markdown links

---

## 📄 License

**MIT** — feel free to use, modify, and redistribute. See `LICENSE`.