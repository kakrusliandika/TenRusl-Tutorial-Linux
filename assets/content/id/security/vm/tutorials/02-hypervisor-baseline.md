# 🧱 02 Baseline Hypervisor

## Tujuan
Tinjau asumsi sisi tuan rumah yang membentuk keamanan tamu.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau identitas dan inventaris host
Gunakan alat yang diekspos oleh lingkungan Anda.

```bash
hostnamectl
sudo virsh list --all 2>/dev/null || true
sudo virsh net-list --all 2>/dev/null || true
```

### 2. Tinjau lokasi penyimpanan dan pencadangan
Ketahui di mana sebenarnya disk tamu dan repositori cadangan berada.

```bash
lsblk -f
findmnt -lo TARGET,SOURCE,FSTYPE,OPTIONS
find /srv /var/lib -maxdepth 2 -type d \( -name images -o -name backups \) 2>/dev/null
```

### 3. Catat ekspektasi jalur pengelolaan
Tuliskan bagaimana operator menjangkau tuan rumah dan tamu.

```bash
printf "%s\n" "Hypervisor admin path:" "Guest console path:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 03 Isolasi Jaringan](./03-network-isolation.md)
