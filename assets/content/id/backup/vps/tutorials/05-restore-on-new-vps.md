# ↩️ Tutorial 05: Restore ke VPS Baru

## Tujuan
Merestore generasi backup ke VPS bersih dan menghidupkan layanan kembali dengan urutan yang terkendali.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- VPS pengganti yang bersih sudah siap dan masih terisolasi dari produksi.
- Generasi backup yang dipilih sudah lolos integritas.

## Langkah Berurutan
### 1. Verifikasi dan stage arsip
Jangan ekstrak sebelum generasi dipastikan utuh.

```bash
BACKUP_DIR=/srv/backup/vps/host01/2026-03-25-0200
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Hentikan service dan ekstrak file
Restore file lebih dulu sebelum trafik aplikasi atau penulisan baru dimulai.

```bash
sudo systemctl stop nginx apache2 httpd php-fpm mariadb mysql postgresql 2>/dev/null || true
sudo tar --xattrs --acls --numeric-owner -xzf system-data.tar.gz -C /
```

### 3. Restart service bertahap
Naikkan stack dengan urutan yang membuat kegagalan pertama mudah terlihat.

```bash
sudo systemctl restart mariadb mysql postgresql 2>/dev/null || true
sudo systemctl restart nginx apache2 httpd php-fpm 2>/dev/null || true
systemctl --failed
```

## ✅ Titik Validasi
- Host target mencapai state layanan yang diharapkan tanpa kegagalan kritis.
- Operator memiliki daftar langkah manual lanjutan yang masih diperlukan.

## ⚠️ Peringatan
- Jangan buka host ke trafik publik sampai tutorial validasi berikutnya selesai.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan restore untuk rehearsal berikutnya.

## Tutorial Berikutnya
[✅ Tutorial 06: Verifikasi Restore](./06-verify-restore.md)
