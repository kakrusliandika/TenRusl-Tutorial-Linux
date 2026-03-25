# 📦 Paket Dasar

## Tujuan
Pertahankan halaman ini sebagai lantai paket yang disengaja untuk server Ubuntu yang bersih sebelum perangkat lunak khusus peran ditambahkan.

## Data Terstruktur / Referensi
| Tujuan | Paket atau Alat | Mengapa Itu Penting |
| --- | --- | --- |
| Akses jarak jauh | `openssh-server` | Bidang kontrol SSH standar untuk host Ubuntu. |
| tembok api | `ufw` | Firewall host sederhana untuk kebijakan dasar yang dapat diprediksi. |
| Diagnostik | `curl`, `jq`, `rsync`, `less` | Inspeksi jaringan, API, dan log. |
| Pengeditan dan hak istimewa | `vim-tiny`, `sudo` | Pengeditan pemeliharaan dan disiplin eskalasi. |
| Perbarui otomatisasi | `unattended-upgrades`, `apt-listchanges` | Patch otomatis dengan petunjuk ulasan. |
| Jaringan | `netplan.io` | Konfigurasi jaringan yang digerakkan oleh perender secara persisten. |

## Cuplikan Perintah
```bash
sudo apt-get update
sudo apt-get dist-upgrade -y
sudo apt-get install -y sudo curl ca-certificates rsync jq less vim-tiny gnupg openssh-server ufw unattended-upgrades apt-listchanges netplan.io
```

## Catatan Interpretasi
- Jauhkan paket peran opsional dari garis dasar hingga beban kerja benar-benar tiba.
- Tinjau daftar paket manual setelah setiap jendela pemeliharaan yang menambahkan perkakas baru.

## Dokumen Terkait
- [📦 Dasar Server Ubuntu](../concepts/ubuntu-baseline.md)
- [📦 Tutorial 03: Instal Inti](../tutorials/03-install-core.md)
