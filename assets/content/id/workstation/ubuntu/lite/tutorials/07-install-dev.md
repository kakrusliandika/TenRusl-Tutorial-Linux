# 🧪 07 Instal Pengembang

## Tujuan
Tambahkan dasar pengembangan praktis ke Ubuntu Lite tanpa mengubur mesin di bawah rangkaian alat yang tidak perlu.

## Prasyarat
- Workstation sudah stabil dengan lapisan GUI, browser, dan editor.
- Pengembangan adalah bagian nyata dari peran mesin.

## Asumsi Lingkungan
- Anda sedang membangun dasar pengembangan Linux secara umum, bukan tumpukan monster khusus bahasa.

## Langkah Berurutan
### 1. Instal rantai alat pengembangan inti
Mulailah dengan alat portabel yang membantu hampir semua pengembang atau operator Linux.

```bash
sudo apt update
sudo apt install build-essential git curl wget unzip ca-certificates pkg-config python3 python3-venv python3-pip
```

### 2. Verifikasi alat utama secara eksplisit
Penginstalan paket tidak sama dengan rantai alat yang dapat digunakan. Konfirmasikan biner yang Anda minati ada di PATH.

```bash
gcc --version | head -n 1
git --version
python3 --version
pip3 --version
```

### 3. Tambahkan perangkat bahasa atau kerangka kerja hanya setelah baseline terbukti
Node.js, Go, Rust, Java, container, dan virtualisasi lokal semuanya merupakan tambahan yang valid. Jaga agar tetap berdasarkan peran sehingga stasiun kerja tetap dapat dijelaskan.

## ✅ Checkpoint Validasi
- Mesin dapat mengkompilasi perangkat lunak dasar, mengkloning repositori, dan membuat lingkungan virtual Python.
- Tidak ada ketergantungan yang rusak yang tersisa setelah pemasangan rantai alat.
- Mesin masih terasa sehat dalam memori, penyimpanan, dan perilaku booting.

## ⚠️ Peringatan
- Jika alat pengembangan menghasilkan lebih banyak dari yang diharapkan, hentikan dan nilai kembali apakah Lite masih merupakan jalur yang tepat atau apakah rantai alat harus diisolasi dengan cara lain.

## Cleanup / Pemeriksaan Akhir
- Ekspor daftar paket sebelum Anda menambahkan ekosistem khusus bahasa atau repositori eksternal.

## Tutorial Berikutnya
[🎵 08 Pasang Media](./08-install-media.md)

## Dokumen Terkait
- [📋 Dasar Paket](../reference/package-baseline.md)
- [📋 Paket Opsional](../reference/package-optional.md)
- [🧹 09 Pembersihan](./09-cleanup.md)
