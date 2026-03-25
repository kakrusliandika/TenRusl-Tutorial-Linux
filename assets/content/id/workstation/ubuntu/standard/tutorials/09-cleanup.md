# 🧹 09 Pembersihan

## Tujuan
Stabilkan stasiun kerja Standard setelah gelombang aplikasi besar sehingga alat berat cukup lebar untuk bekerja namun tetap dapat didukung.

## Prasyarat
- Lapisan aplikasi Standard yang direncanakan telah diinstal.
- Mesin secara fungsional dapat digunakan untuk peran yang dimaksudkan.

## Asumsi Lingkungan
- Pembersihan pada Standard adalah saat Anda memangkas kelebihan dan mengunci garis dasar akhir.

## Langkah Berurutan
### 1. Bersihkan sisa paket dan periksa jejak yang terpasang
Desktop yang lebih lengkap masih mendapat manfaat dari menghilangkan sisa-sisa makanan yang tidak diperlukan.

```bash
sudo apt autoremove --purge
sudo apt clean
df -h /
```

### 2. Ekspor status paket akhir dan cuplikan kesehatan
Hal ini membuat pembangunan kembali atau audit selanjutnya menjadi lebih mudah.

```bash
mkdir -p ~/standard-workstation-state
dpkg --get-selections > ~/standard-workstation-state/dpkg-selections.txt
apt-mark showmanual > ~/standard-workstation-state/apt-manual.txt
systemctl --failed > ~/standard-workstation-state/failed-services.txt
```

### 3. Tinjau mesin terhadap definisi peran aslinya
Jika workstation sekarang menyertakan perangkat lunak yang tidak diminta oleh siapa pun, hapus perangkat tersebut sebelum penutup.

## ✅ Checkpoint Validasi
- Permukaan paket akhir cukup sesuai dengan peran yang dimaksudkan agar dapat ditopang.
- Daftar paket dan cuplikan kesehatan diekspor untuk penggunaan di masa mendatang.

## ⚠️ Peringatan
- Stasiun kerja Standard masih dapat menimbulkan kebisingan jika tidak ada orang yang memiliki permukaan paket akhir.

## Cleanup / Pemeriksaan Akhir
- Simpan status yang diekspor dengan catatan dan target cadangan Anda sebelum melanjutkan ke penutup.

## Tutorial Berikutnya
[📘 10 Penutup](./10-closeout.md)

## Dokumen Terkait
- [📋 Dasar Paket](../reference/package-baseline.md)
- [📋 Paket Diperluas](../reference/package-expanded.md)
- [💾 Cadangan](../../../../backup/index.md)
