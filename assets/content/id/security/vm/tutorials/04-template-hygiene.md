# 🧼 04 Kebersihan Template

## Tujuan
Siapkan sumber templat yang dapat digunakan kembali dan aman.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Menambal dan membersihkan tamu
Hapus status paket basi dan residu yang terlihat jelas.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt full-upgrade -y && sudo apt clean
fi
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
```

### 2. Hapus artefak identitas unik
Hanya pada sumber templat yang sebenarnya.

```bash
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id
sudo rm -f /etc/ssh/ssh_host_* 2>/dev/null || true
```

### 3. Rekam versi template
Pembuatan versi adalah bagian dari keamanan karena memungkinkan rollback.

```bash
printf "%s\n" "Template version:" "Patch date:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 05 Kebijakan Cuplikan](./05-snapshot-policy.md)
