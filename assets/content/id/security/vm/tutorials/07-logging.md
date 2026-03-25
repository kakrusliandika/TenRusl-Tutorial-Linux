# 🧾 07 Pencatatan

## Tujuan
Jadikan tindakan yang berdekatan dengan tamu dan hypervisor dapat ditinjau.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau log tamu
Mulailah dengan log layanan, autentikasi, dan boot.

```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 30 --no-pager || true
```

### 2. Tinjau petunjuk virtualisasi sisi host
Bahkan log tugas sederhana pun membantu dengan garis waktu.

```bash
sudo journalctl -u libvirtd -n 30 --no-pager 2>/dev/null || true
```

### 3. Catat di mana log berada
Insiden di masa depan tidak perlu ditemukan kembali.

```bash
printf "%s\n" "Guest log commands:" "Host log commands:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 08 Backup](./08-backups.md)
