function pickLabel(label, locale) {
    if (typeof label === "string") return label;
    if (!label || typeof label !== "object") return "";
    if (locale === "id") return label.id || label.en || "";
    return label.en || label.id || "";
}

function localePath(locale, ...parts) {
    return ["assets", "content", locale, ...parts].join("/");
}

function moduleNode(label, locale, pathParts, manifestParts) {
    return {
        label: pickLabel(label, locale),
        path: localePath(locale, ...pathParts),
        manifest: localePath(locale, ...manifestParts),
        isModule: true,
        children: [],
    };
}

function node(label, locale, pathParts, children = [], icon = "") {
    return {
        label: pickLabel(label, locale),
        path: localePath(locale, ...pathParts),
        icon,
        children,
    };
}

const ROOT_LABELS = {
    home: { en: "Home", id: "Beranda" },
    server: { en: "Server", id: "Server" },
    baseOs: { en: "Base OS", id: "Base OS" },
    reverseProxy: { en: "Reverse Proxy", id: "Reverse Proxy" },
    hostingPanels: { en: "Hosting Panels", id: "Panel Hosting" },
    paas: { en: "PaaS", id: "PaaS" },
    virtualization: { en: "Virtualization", id: "Virtualisasi" },
    security: { en: "Security", id: "Keamanan" },
    serverSecurity: { en: "Server Security", id: "Keamanan Server" },
    vmSecurity: { en: "VM Security", id: "Keamanan VM" },
    webSecurity: { en: "Web Security", id: "Keamanan Web" },
    backup: { en: "Backup", id: "Backup" },
    vpsBackup: { en: "VPS Backup", id: "Backup VPS" },
    vmBackup: { en: "VM Backup", id: "Backup VM" },
    webBackup: { en: "Web Backup", id: "Backup Web" },
    workstation: { en: "Workstation", id: "Stasiun Kerja" },
    ubuntu: { en: "Ubuntu", id: "Ubuntu" },
};

export function getContentTree(locale = "en") {
    const activeLocale = locale === "id" ? "id" : "en";

    return [
        node(
            ROOT_LABELS.virtualization,
            activeLocale,
            ["virtualization", "index.md"],
            [
                moduleNode(
                    "Proxmox",
                    activeLocale,
                    ["virtualization", "proxmox", "index.md"],
                    ["virtualization", "proxmox", "meta", "manifest.json"]
                ),
                moduleNode(
                    "Incus",
                    activeLocale,
                    ["virtualization", "incus", "index.md"],
                    ["virtualization", "incus", "meta", "manifest.json"]
                ),
                moduleNode(
                    "Harvester",
                    activeLocale,
                    ["virtualization", "harvester", "index.md"],
                    ["virtualization", "harvester", "meta", "manifest.json"]
                ),
                moduleNode(
                    "CloudStack",
                    activeLocale,
                    ["virtualization", "cloudstack", "index.md"],
                    ["virtualization", "cloudstack", "meta", "manifest.json"]
                ),
                moduleNode(
                    "IDVE",
                    activeLocale,
                    ["virtualization", "idve", "index.md"],
                    ["virtualization", "idve", "meta", "manifest.json"]
                ),
            ],
            "fa-cubes"
        ),
        node(
            ROOT_LABELS.workstation,
            activeLocale,
            ["workstation", "index.md"],
            [
                node(
                    ROOT_LABELS.ubuntu,
                    activeLocale,
                    ["workstation", "ubuntu", "index.md"],
                    [
                        moduleNode(
                            "Ubuntu Lite",
                            activeLocale,
                            ["workstation", "ubuntu", "lite", "index.md"],
                            ["workstation", "ubuntu", "lite", "meta", "manifest.json"]
                        ),
                        moduleNode(
                            "Ubuntu Standard",
                            activeLocale,
                            ["workstation", "ubuntu", "standard", "index.md"],
                            ["workstation", "ubuntu", "standard", "meta", "manifest.json"]
                        ),
                    ]
                ),
            ],
            "fa-laptop"
        ),
        node(
            ROOT_LABELS.server,
            activeLocale,
            ["server", "index.md"],
            [
                node(
                    ROOT_LABELS.baseOs,
                    activeLocale,
                    ["server", "base-os", "index.md"],
                    [
                        moduleNode(
                            "Debian",
                            activeLocale,
                            ["server", "base-os", "debian", "index.md"],
                            ["server", "base-os", "debian", "meta", "manifest.json"]
                        ),
                        moduleNode(
                            "Ubuntu",
                            activeLocale,
                            ["server", "base-os", "ubuntu", "index.md"],
                            ["server", "base-os", "ubuntu", "meta", "manifest.json"]
                        ),
                        moduleNode(
                            "RHEL",
                            activeLocale,
                            ["server", "base-os", "rhel", "index.md"],
                            ["server", "base-os", "rhel", "meta", "manifest.json"]
                        ),
                    ]
                ),
                node(
                    ROOT_LABELS.reverseProxy,
                    activeLocale,
                    ["server", "reverse-proxy", "index.md"],
                    [
                        moduleNode(
                            "Caddy",
                            activeLocale,
                            ["server", "reverse-proxy", "caddy", "index.md"],
                            ["server", "reverse-proxy", "caddy", "meta", "manifest.json"]
                        ),
                    ]
                ),
                node(
                    ROOT_LABELS.hostingPanels,
                    activeLocale,
                    ["server", "hosting-panels", "index.md"],
                    [
                        moduleNode(
                            "aaPanel",
                            activeLocale,
                            ["server", "hosting-panels", "aapanel", "index.md"],
                            ["server", "hosting-panels", "aapanel", "meta", "manifest.json"]
                        ),
                        moduleNode(
                            "CloudPanel",
                            activeLocale,
                            ["server", "hosting-panels", "cloudpanel", "index.md"],
                            ["server", "hosting-panels", "cloudpanel", "meta", "manifest.json"]
                        ),
                        moduleNode(
                            "Nginx UI",
                            activeLocale,
                            ["server", "hosting-panels", "nginx-ui", "index.md"],
                            ["server", "hosting-panels", "nginx-ui", "meta", "manifest.json"]
                        ),
                    ]
                ),
                node(
                    ROOT_LABELS.paas,
                    activeLocale,
                    ["server", "paas", "index.md"],
                    [
                        moduleNode(
                            "Coolify",
                            activeLocale,
                            ["server", "paas", "coolify", "index.md"],
                            ["server", "paas", "coolify", "meta", "manifest.json"]
                        ),
                    ]
                ),
            ],
            "fa-server"
        ),
        node(
            ROOT_LABELS.security,
            activeLocale,
            ["security", "index.md"],
            [
                moduleNode(
                    ROOT_LABELS.serverSecurity,
                    activeLocale,
                    ["security", "server", "index.md"],
                    ["security", "server", "meta", "manifest.json"]
                ),
                moduleNode(
                    ROOT_LABELS.vmSecurity,
                    activeLocale,
                    ["security", "vm", "index.md"],
                    ["security", "vm", "meta", "manifest.json"]
                ),
                moduleNode(
                    ROOT_LABELS.webSecurity,
                    activeLocale,
                    ["security", "web", "index.md"],
                    ["security", "web", "meta", "manifest.json"]
                ),
            ],
            "fa-shield-halved"
        ),
        node(
            ROOT_LABELS.backup,
            activeLocale,
            ["backup", "index.md"],
            [
                moduleNode(
                    ROOT_LABELS.vpsBackup,
                    activeLocale,
                    ["backup", "vps", "index.md"],
                    ["backup", "vps", "meta", "manifest.json"]
                ),
                moduleNode(
                    ROOT_LABELS.vmBackup,
                    activeLocale,
                    ["backup", "vm", "index.md"],
                    ["backup", "vm", "meta", "manifest.json"]
                ),
                moduleNode(
                    ROOT_LABELS.webBackup,
                    activeLocale,
                    ["backup", "web", "index.md"],
                    ["backup", "web", "meta", "manifest.json"]
                ),
            ],
            "fa-hard-drive"
        ),
    ];
}
