# 🌐 03 Isolasi Jaringan

## Tujuan
Verifikasi bahwa tamu ditempatkan di segmen yang disengaja.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Catat peta zona yang dituju
Jadikan segmentasi eksplisit.

```bash
printf "%s\n" "guest | zone | allowed peers | allowed egress" >> vm-security-notes.txt
```

### 2. Periksa perutean tamu
Periksa apakah tampilan tamu sesuai dengan desain.

```bash
ip -br addr
ip route
resolvectl status 2>/dev/null | sed -n "1,40p" || true
```

### 3. Bandingkan dengan inventaris jaringan sisi host
Gunakan CLI apa pun yang diekspos oleh lingkungan.

```bash
sudo virsh net-list --all 2>/dev/null || true
sudo virsh domiflist vm-name 2>/dev/null || true
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 04 Kebersihan Templat](./04-template-hygiene.md)
