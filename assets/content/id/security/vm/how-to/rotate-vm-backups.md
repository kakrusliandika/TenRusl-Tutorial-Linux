# 💾 Rotasi Backup VM

## Tujuan
Putar pencadangan VM dengan mempertimbangkan retensi, metadata, dan verifikasi pemulihan, bukan hanya menyimpan ekspor terbaru.

## Kasus Penggunaan
Gunakan ini ketika penyimpanan cadangan bertambah atau kepercayaan pemulihan lemah.

## Prasyarat
- Jalur repositori cadangan.
- Akses ke metadata yang mengidentifikasi setiap cadangan dengan benar.
- Aturan retensi tertulis.

## Asumsi Lingkungan
- Contoh di bawah menunjukkan penanganan repositori sisi Linux.
- Perintah ekspor sebenarnya bervariasi menurut hypervisor, namun pengujian retensi, checksum, dan pemulihan tetap penting.

## ⚠️ Catatan Risiko
- Jangan pernah memangkas cadangan lama sebelum cadangan terbaru diverifikasi.
- Jika repositori berisi disk tamu lengkap, lindungi seperti penyimpanan data sensitif lainnya.

## Prosedur Langkah demi Langkah
### 1. Katalog kumpulan cadangan saat ini
Ketahui apa yang ada sebelum Anda menghapus apa pun.

```bash
find /srv/vm-backups -maxdepth 2 -type f -printf '%TY-%Tm-%Td %TH:%TM %p\n' 2>/dev/null | sort || true
```

### 2. Tambahkan metadata integritas
Checksum membuat pemulihan menjadi lebih mudah ditebak.

```bash
find /srv/vm-backups -maxdepth 1 -type f \( -name '*.img' -o -name '*.qcow2' \) 2>/dev/null | while read -r f; do
  sha256sum "$f"
done > /srv/vm-backups/SHA256SUMS
```

### 3. Catat niat retensi
Jaga agar kebijakan tetap tertulis, bukan diasumsikan.

```bash
echo "keep 7 daily, 4 weekly, 6 monthly" > /srv/vm-backups/RETENTION.txt
```

## ✅ Titik Validasi
- File cadangan dapat diidentifikasi berdasarkan nama VM, tanggal, dan format.
- Metadata integritas ada untuk cadangan yang disimpan.
- Jalur pemulihan didokumentasikan.

```bash
ls -lh /srv/vm-backups 2>/dev/null || true
sha256sum -c /srv/vm-backups/SHA256SUMS 2>/dev/null || true
```

## Pemecahan masalah
- Jika checksum gagal, hentikan pemangkasan sampai kerusakan diketahui.
- Jika beberapa alat menulis ke dalam repositori yang sama, normalkan penamaan sebelum pembersihan retensi.

## ↩️ Catatan Kembalikan / Pemulihan
- Simpan set retensi sebelumnya hingga yang baru dikatalogkan dan diperiksa.
- Pulihkan data yang dipangkas dari salinan luar lokasi atau sekunder jika sesuatu yang penting dihapus.

## Dokumen Terkait
- [📋 Checklist Backup](../reference/backup-checklist.md)
- [💾 08 Backup](../tutorials/08-backups.md)
- [🧱 Keamanan VM](../index.md)
