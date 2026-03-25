# 📘 10 Penutup

## Tujuan
Selesaikan pembangunan Ubuntu Lite dengan validasi akhir, dokumentasi, dan rencana langkah selanjutnya untuk keamanan dan pencadangan.

## Prasyarat
- Semua bab tutorial Lite sebelumnya telah selesai.
- Mesin sudah berperilaku seperti stasiun kerja yang dapat digunakan.

## Asumsi Lingkungan
- Penutup adalah tempat Anda mengonfirmasi bahwa stasiun kerja dapat didukung, bukan tempat Anda terus menambahkan perangkat lunak opsional.

## Langkah Berurutan
### 1. Catat inventaris stasiun kerja akhir
Ekspor identitas sistem dan tampilan akhir alat yang dipasang sehingga mesin dapat dibangun kembali atau diaudit nanti.

```bash
hostnamectl
lsblk -f
snap list 2>/dev/null || true
systemctl --failed
```

### 2. Jalankan satu pass penerimaan terakhir
Periksa boot, jaringan, browser, editor, audio, dan alat khusus beban kerja apa pun. Penerimaan adalah tentang perilaku yang berulang, bukan hanya satu kali login yang beruntung.

### 3. Buat rencana langkah selanjutnya
Putuskan penguatan keamanan, cakupan pencadangan, dan pertumbuhan paket opsional apa yang akan dilakukan selanjutnya sehingga stasiun kerja tidak hilang tanpa kepemilikan.

## ✅ Checkpoint Validasi
- Stasiun kerja mempunyai persediaan akhir dan hasil penerimaan yang diketahui baik.
- Media penginstal, catatan, dan artefak rollback masih tersedia jika tahap berikutnya menimbulkan risiko.
- Anda kini dapat beralih ke perencanaan keamanan dan pencadangan dari basis yang stabil.

## ⚠️ Peringatan
- Jangan nyatakan berhasil jika boot, suspend, jaringan, atau beban kerja utama masih tidak konsisten.
- Tahan godaan untuk terus menambahkan alat opsional selama penutup; dokumentasikan mereka untuk izin yang disengaja di kemudian hari.

## Cleanup / Pemeriksaan Akhir
- Simpan catatan akhir dan ekspor dengan cadangan eksternal atau dokumentasi pembuatan.

## Tutorial Berikutnya
Kembali ke [💻 Ubuntu Lite](../index.md) lalu lanjutkan dengan [🛡️ Keamanan](../../../../security/index.md) dan [💾 Cadangan](../../../../backup/index.md).

## Dokumen Terkait
- [📋 Daftar Periksa Pasca Pemasangan](../reference/post-install-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
