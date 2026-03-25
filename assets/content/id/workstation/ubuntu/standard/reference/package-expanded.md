# 📋 Paket Diperluas

## Tujuan
Gunakan referensi ini ketika stasiun kerja Standard memerlukan lebih dari baseline gelombang pertama namun Anda tetap ingin pertumbuhannya tetap disengaja.

## Materi Referensi Terstruktur
| Daerah perluasan | Paket umum | Tambahkan ketika... |
|---|---|---|
| Produktivitas | `keepassxc`, `okular`, dan alat serupa | Stasiun kerja digunakan untuk tugas-tugas yang banyak dokumen atau pekerjaan pengetahuan |
| Pembangunan | `build-essential`, `python3-venv`, `nodejs`, `npm`, `docker.io` hanya jika dibenarkan | Pembangunan adalah beban kerja inti |
| Pembuatan media | `gimp`, `inkscape`, `obs-studio`, `audacity` | Mesin ini digunakan untuk pekerjaan konten, bukan hanya pemutaran |
| Klien virtualisasi | `virt-manager`, `spice-client-gtk` | Manajemen VM lokal adalah bagian dari peran |
| Penyetelan desktop | `gnome-tweaks`, perkakas ekstensi | Anda sengaja memiliki permukaan penyesuaian ekstra |

## Perintah / Potongan Pemeriksaan
```bash
apt-cache policy keepassxc okular build-essential python3-venv nodejs npm gimp inkscape obs-studio virt-manager gnome-tweaks
```

## Catatan Praktis
- Diperluas bukan berarti wajib; ini berarti pertumbuhan yang didorong oleh peran melampaui gelombang pertama.
- Jika kumpulan paket terus bertambah tanpa peran yang jelas, periksa kembali apakah stasiun kerja mengalami drifting.

## Dokumen Terkait
- [📦 Instal Aplikasi Ekstra](../how-to/install-extra-apps.md)
- [🧪 06 Alat Pengembang](../tutorials/06-dev-tools.md)
- [🧰 08 Alat Opsional](../tutorials/08-optional-tools.md)
