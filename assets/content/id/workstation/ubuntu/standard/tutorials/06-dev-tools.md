# 🧪 06 Alat Pengembang

## Tujuan
Tambahkan dasar pengembangan dan alat admin yang solid ke Ubuntu Standard sehingga mesin dapat mendukung pekerjaan nyata di luar penelusuran dan penggunaan kantor.

## Prasyarat
- Desktop Standard sudah stabil dan berjaringan.
- Pekerjaan pengembangan atau admin adalah bagian dari peran mesin.

## Asumsi Lingkungan
- Ekosistem bahasa berkembang biak dengan cepat. Mulailah dengan garis dasar portabel sebelum Anda menambahkan tumpukan bahasa tertentu.

## Langkah Berurutan
### 1. Instal garis dasar pengembangan
Toolchain ini mencakup sebagian besar pengembangan Linux harian dan alur kerja admin.

```bash
sudo apt update
sudo apt install build-essential git curl wget unzip ca-certificates python3 python3-venv python3-pip nodejs npm
```

### 2. Validasi alat pengembangan
Periksa alat compiler dan runtime secara langsung.

```bash
gcc --version | head -n 1
git --version
python3 --version
node --version
npm --version
```

### 3. Tambahkan ekosistem yang lebih berat nanti hanya jika hal tersebut dibenarkan
Kontainer, tumpukan JVM, atau tumpukan pengembangan GPU harus merupakan pekerjaan lanjutan yang disengaja, bukan add-on otomatis.

## ✅ Checkpoint Validasi
- Kompiler inti, Python, dan perkakas Node diinstal dan dapat dipanggil.
- Mesin masih terasa cukup stabil untuk sisa chapter Standard.

## ⚠️ Peringatan
- Jika paket repo untuk suatu bahasa terlalu lama untuk peran Anda, dokumentasikan kendala tersebut daripada secara diam-diam beralih ke sumber berisiko tanpa rencana.

## Cleanup / Pemeriksaan Akhir
- Ekspor pilihan paket sebelum Anda memperkenalkan repositori eksternal atau ekosistem pengembang yang lebih besar nanti.

## Tutorial Berikutnya
[🎵 07 Alat Media](./07-media-tools.md)

## Dokumen Terkait
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [🧰 08 Alat Opsional](./08-optional-tools.md)
- [💻 Bab Pengembang Ubuntu Lite](../../lite/tutorials/07-install-dev.md)
