# 🧰 08 Alat Opsional

## Tujuan
Tambahkan alat stasiun kerja Standard opsional hanya setelah lapisan desktop utama, produktivitas, pengembangan, dan media sudah terbukti.

## Prasyarat
- Semua lapisan Standard yang diperlukan sudah stabil.
- Alat opsional memiliki peran yang jelas seperti akses klien virtualisasi, penyetelan desktop, atau pembantu sinkronisasi.

## Asumsi Lingkungan
- Alat opsional adalah tempat dimana Standard dapat terpecah jika Anda berhenti membuat keputusan yang disengaja.

## Langkah Berurutan
### 1. Pilih kategori opsional dengan sengaja
Contohnya termasuk alat klien virtualisasi, penyetelan desktop, dukungan Flatpak, atau utilitas sinkronisasi.

### 2. Tetapkan hanya opsi yang dapat Anda benarkan
Contoh ini menunjukkan himpunan opsional yang umum namun masih terbatas.

```bash
sudo apt update
sudo apt install virt-manager flatpak gnome-tweaks
```

### 3. Validasi bahwa alat opsional tidak mengganggu baseline
Desktop harus tetap stabil dan dapat dimengerti setelah setiap kategori opsional muncul.

```bash
dpkg -l | grep -E 'virt-manager|flatpak|gnome-tweaks'
systemctl --failed
```

## ✅ Checkpoint Validasi
- Alat opsional dipasang hanya jika dibenarkan.
- Sistem tetap cukup bersih sehingga Anda masih dapat menjelaskan perannya dan mengemas permukaannya dengan jelas.

## ⚠️ Peringatan
- Jika alat opsional sekarang melebihi jumlah aplikasi berbasis peran inti, stasiun kerja akan mengalami penyimpangan dan memerlukan pembersihan.

## Cleanup / Pemeriksaan Akhir
- Hapus paket opsional dengan cepat jika tidak menambah nilai operasional; semakin lama mereka tinggal, semakin banyak perasaan dasar yang mereka rasakan.

## Tutorial Berikutnya
[🧹 09 Pembersihan](./09-cleanup.md)

## Dokumen Terkait
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [📦 Instal Aplikasi Ekstra](../how-to/install-extra-apps.md)
- [💻 Referensi Paket Opsional Ubuntu Lite](../../lite/reference/package-optional.md)
