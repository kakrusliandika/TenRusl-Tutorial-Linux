# 📚 05 Produktivitas

## Tujuan
Bangun lapisan produktivitas Standard dengan alat kantor, surat, catatan, dan kerja jarak jauh yang sesuai dengan peran stasiun kerja.

## Prasyarat
- Basis desktop dan default sudah berfungsi.
- Anda mengetahui alat produktivitas mana yang benar-benar dibutuhkan pengguna.

## Asumsi Lingkungan
- Standard mendukung default yang lebih luas, namun produktivitas masih memerlukan kurasi daripada instalasi aplikasi sembarangan.

## Langkah Berurutan
### 1. Instal bundel produktivitas
Gunakan paket yang tersedia di Ubuntu terlebih dahulu agar mesin tetap dapat didukung.

```bash
sudo apt update
sudo apt install libreoffice thunderbird remmina keepassxc
```

### 2. Luncurkan dan uji alat inti
Buka setiap aplikasi setidaknya sekali dan pastikan desktop tetap responsif.

```bash
dpkg -l | grep -E 'libreoffice|thunderbird|remmina|keepassxc'
```

### 3. Putuskan apa yang masih opsional
Tidak semua stasiun kerja Standard memerlukan alat kolaborasi, pencatatan, atau dukungan jarak jauh pada hari pertama.

## ✅ Checkpoint Validasi
- Kantor utama dan alat komunikasi dipasang dan diluncurkan secara normal.
- Mesin masih terasa seimbang dalam ruang disk dan responsif.

## ⚠️ Peringatan
- Jika paket sudah terlalu besar untuk perangkat keras, berhenti di sini dan pertimbangkan kembali aplikasi mana yang benar-benar diperlukan.

## Cleanup / Pemeriksaan Akhir
- Bersihkan aplikasi yang tidak diperlukan sekarang selagi riwayat pemasangan masih baru.

## Tutorial Berikutnya
[🧪 06 Alat Pengembang](./06-dev-tools.md)

## Dokumen Terkait
- [📦 Instal Aplikasi Ekstra](../how-to/install-extra-apps.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
