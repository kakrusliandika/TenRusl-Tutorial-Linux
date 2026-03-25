# 📦 05 Pembaruan

## Tujuan
Jadikan patching dapat diprediksi dan ditinjau.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Periksa otomatisasi saat ini
Periksa pengatur waktu pembaruan dan paket yang tertunda.

```bash
systemctl list-timers --all | grep -Ei "apt|dnf|packagekit|unattended" || true
```

### 2. Terapkan siklus pembaruan terkontrol
Tambal dengan sengaja dan lihat hasilnya.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt upgrade -y
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf upgrade -y
fi
```

### 3. Tinjau reboot dan status layanan
Transaksi paket yang berhasil bukanlah akhir dari tugas.

```bash
needs-restarting -r 2>/dev/null || true
sudo systemctl --failed --no-pager
sudo ss -tulpn
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 06 Pengerasan Layanan](./06-service-hardening.md)
