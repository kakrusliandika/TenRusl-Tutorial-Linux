# 🧾 08 Logging

## Tujuan
Jadikan tuan rumah cukup mudah diaudit untuk ditinjau dan ditanggapi insiden.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau sumber log saat ini
Mulailah dengan log jurnal dan autentikasi.

```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 50 --no-pager
```

### 2. Tinjau status audit
Periksa apakah pencatatan audit ada dan apakah berguna.

```bash
sudo systemctl status auditd --no-pager 2>/dev/null || true
sudo auditctl -l 2>/dev/null || true
```

### 3. Konfirmasikan retensi dan sinkronisasi waktu
Kualitas log bergantung pada keduanya.

```bash
sudo timedatectl status
sudo logrotate --debug /etc/logrotate.conf 2>/dev/null | tail -n 20 || true
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 09 Pengerasan](./09-hardening.md)
