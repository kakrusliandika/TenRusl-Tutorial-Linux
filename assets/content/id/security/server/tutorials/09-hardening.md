# ✅ 09 Hardening

## Tujuan
Jalankan tinjauan akhir host dan catat pengecualian yang tersisa.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Jalankan kembali pemeriksaan dasar inti
Gunakan perintah yang akan Anda percayai nanti.

```bash
hostnamectl
sudo ss -tulpn
sudo systemctl --failed --no-pager
sudo sshd -T | egrep "passwordauthentication|permitrootlogin|pubkeyauthentication"
```

### 2. Tinjau kembali akses dan logging
Pengerasan adalah kombinasi kontrol.

```bash
getent passwd | grep -E "/bin/(bash|zsh|sh)$"
sudo journalctl -u sshd -u ssh -n 30 --no-pager
sudo auditctl -l 2>/dev/null || true
```

### 3. Catat pengecualian yang belum terselesaikan
Pengecualian sementara harus dapat dilihat oleh operator berikutnya.

```bash
printf "%s\n" "Open exceptions:" "Next review date:" >> security-baseline-notes.txt
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 10 Penutup](./10-closeout.md)
