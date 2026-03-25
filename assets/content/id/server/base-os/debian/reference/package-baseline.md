# 📦 Paket Dasar

## Tujuan
Pertahankan halaman ini sebagai lantai paket yang disengaja untuk server Debian yang bersih sebelum perangkat lunak khusus peran ditambahkan.

## Data Terstruktur / Referensi
| Tujuan | Paket atau Alat | Mengapa Itu Penting |
| --- | --- | --- |
| Akses jarak jauh | `openssh-server` | Jalur SSH yang stabil untuk admin dan otomatisasi. |
| tembok api | `ufw` | Kebijakan firewall dasar yang dapat dibaca. |
| Diagnostik | `curl`, `jq`, `rsync`, `less` | Pemeriksaan kesehatan, pemindahan, dan pemeriksaan. |
| Pengeditan dan hak istimewa | `vim-tiny`, `sudo` | Pengeditan pemeliharaan yang aman dan eskalasi yang terkendali. |
| Perbarui otomatisasi | `unattended-upgrades`, `apt-listchanges` | Tambalan rutin dengan petunjuk ulasan. |

## Cuplikan Perintah
```bash
sudo apt-get update
sudo apt-get full-upgrade -y
sudo apt-get install -y sudo curl ca-certificates rsync jq less vim-tiny gnupg openssh-server ufw unattended-upgrades apt-listchanges
```

## Catatan Interpretasi
- Jauhkan paket peran opsional dari garis dasar hingga beban kerja benar-benar tiba.
- Tinjau daftar paket manual setelah setiap jendela pemeliharaan yang menambahkan perkakas baru.

## Dokumen Terkait
- [📦 Dasar Server Debian](../concepts/debian-baseline.md)
- [📦 Tutorial 03: Instal Inti](../tutorials/03-install-core.md)
