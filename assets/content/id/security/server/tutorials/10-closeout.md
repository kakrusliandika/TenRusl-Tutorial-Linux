# 📘 10 Penutup

## Tujuan
Gabungkan catatan rollback dan putaran tinjauan berikutnya.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Kemas artefak kunci
Simpan catatan dasar dan keluaran yang disimpan bersama-sama.

```bash
tar czf server-security-pack-$(date +%F).tgz security-baseline-notes.txt nft-before.txt ufw-before.txt 2>/dev/null || true
```

### 2. Rekam catatan pemulihan
Operator masa depan tidak boleh menebak jalur rollback.

```bash
printf "%s\n" "Console path:" "SSH rollback file:" "Firewall rollback file:" > closeout-notes.txt
```

### 3. Jadwalkan review berikutnya
Postur keamanan akan menurun tanpa adanya kepemilikan.

```bash
printf "%s\n" "Next security review: YYYY-MM-DD" >> closeout-notes.txt
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Kembali ke Keamanan Server](../index.md)
