# 🛠️ Restore dari Backup

## Tujuan
Merestore backup Linux VPS ke host bersih dengan urutan yang terkendali: verifikasi, stage, ekstraksi, mengaktifkan layanan kembali, lalu validasi.

## Kasus Penggunaan
Gunakan ini saat rehearsal restore atau ketika melakukan recovery ke VPS baru setelah kegagalan disk, host, atau provider.

## Prasyarat
- VPS target yang bersih sudah tersedia dan cukup cocok untuk workload tersebut.
- Generasi backup yang dipilih mencakup arsip, checksum, dan inventaris paket.
- Anda tahu service mana yang harus tetap berhenti selama ekstraksi atau impor data.

## Asumsi Lingkungan
- VPS target terisolasi dari trafik produksi sampai validasi selesai.
- Instalasi paket bisa berbeda antar distribusi, jadi sesuaikan dengan hati-hati.
- Arsip dibuat dengan preserving owner dan ACL.

## Langkah Tepat
### 1. Verifikasi generasi yang dipilih
Jangan ekstrak backup sebelum checksum dan isinya ditinjau.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
tar -tzf system-data.tar.gz | head
```

### 2. Siapkan host target
Pasang paket dasar yang kurang dan hentikan stack aplikasi sebelum restore file.

```bash
sudo systemctl stop nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
less packages.tsv
```

### 3. Ekstrak file dan hidupkan service bertahap
Naikkan host kembali dengan urutan yang membuat kegagalan mudah terlihat.

```bash
sudo tar --xattrs --acls --numeric-owner -xzf system-data.tar.gz -C /
sudo systemctl daemon-reload
sudo systemctl restart nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
systemctl --failed
```

## ✅ Titik Validasi
- Checksum lolos sebelum ekstraksi.
- Host target mencapai state service yang diharapkan tanpa kegagalan kritis.
- Operator dapat menjelaskan secret atau kredensial manual apa yang masih perlu diterapkan kembali.

## Pemecahan Masalah
- Jika service gagal restart, baca log unit satu per satu daripada me-restart seluruh stack berulang kali.
- Jika file hasil ekstrak punya owner yang salah, pastikan arsip dibuat dan diekstrak dengan numeric owner preserved.
- Jika nama paket berbeda antar distro, perlakukan `packages.tsv` sebagai panduan rebuild, bukan script instalasi buta.

## ↩️ Catatan Rollback atau Pemulihan
- Biarkan target tetap terisolasi jika validasi gagal agar data salah tidak menerima trafik.
- Jangan menimpa generasi backup atau menghapus host lama sampai host pengganti tervalidasi.

## Dokumen Terkait
- [🧠 Pola Pikir Restore-First](../concepts/restore-first-thinking.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore ke VPS Baru](../tutorials/05-restore-on-new-vps.md)
