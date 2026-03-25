# 🌐 04 Firewall

## Tujuan
Kurangi paparan dan dokumentasikan lalu lintas yang diizinkan.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Simpan status firewall saat ini
Lakukan ini sebelum ada perubahan kebijakan.

```bash
sudo nft list ruleset > nft-before.txt 2>/dev/null || true
sudo ufw status verbose > ufw-before.txt 2>/dev/null || true
```

### 2. Bandingkan port terbuka dengan layanan yang diinginkan
Jangan hanya mengandalkan firewall saja.

```bash
sudo ss -tulpn
sudo systemctl --type=service --state=running --no-pager
```

### 3. Periksa kembali tampilan firewall yang aktif
Konfirmasikan kebijakan saat ini cocok dengan peran tersebut.

```bash
sudo nft list ruleset 2>/dev/null || true
sudo ufw status numbered 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 05 Pembaruan](./05-updates.md)
