# ↩️ Rencana Kembalikan

## Tujuan
Siapkan jalur rollback praktis untuk Ubuntu Lite sebelum pekerjaan paket, boot, atau driver yang berisiko mengubah pemulihan menjadi dugaan.

## Kapan Menggunakan Prosedur Ini
Gunakan ini sebelum fase instalasi besar, perubahan driver grafis, perbaikan boot-loader, atau penambahan paket secara luas.

## Prasyarat
- Penyimpanan gratis yang cukup untuk menyimpan daftar paket, salinan `/etc`, dan cadangan data pengguna.
- USB langsung atau mesin kedua jika workstation nantinya tidak dapat di-boot.
- Perbedaan yang jelas antara status sistem yang dapat Anda bangun kembali dan data pengguna yang tidak boleh hilang.

## ⚠️ Catatan Risiko
- Rencana rollback yang hanya ada di memori bukanlah rencana rollback.
- Cadangan yang diambil setelah perubahan berisiko tidak berguna untuk mengembalikan perubahan tersebut.

## Asumsi Lingkungan
- Anda bersiap untuk perubahan di masa depan, bukan bereaksi setelah kegagalan telah membuat sistem menjadi ambigu.
- Peran stasiun kerja cukup penting sehingga waktu penginstalan ulang atau kehilangan data akan menjadi masalah.

## Prosedur Langkah demi Langkah
### 1. Ekspor status paket saat ini
Tangkap apa yang diinstal dan apa yang secara eksplisit ditandai sebagai manual sebelum Anda mengubah sesuatu yang besar.

```bash
mkdir -p ~/workstation-rollback
cd ~/workstation-rollback
dpkg --get-selections > dpkg-selections.txt
apt-mark showmanual > apt-manual.txt
snap list > snap-list.txt 2>/dev/null || true
```

### 2. Cadangkan permukaan konfigurasi penting
Di stasiun kerja Ubuntu, `/etc`, konfigurasi boot, dan data pengguna lebih penting daripada kebanyakan cache paket.

```bash
sudo tar --xattrs --acls -czf etc-backup-$(date +%F).tar.gz /etc
rsync -aAX --delete --info=progress2 "$HOME/" /path/to/backup/home/
```

### 3. Catat kesehatan dasar sebelum perubahan berisiko
Target rollback harus menjelaskan apa arti kebaikan sebelum Anda menyentuh sistem.

```bash
systemd-analyze
systemctl --failed
journalctl -p err -b --no-pager | tail -n 40
```

### 4. Tulis pemicu pemulihan dalam bahasa sederhana
Misalnya: jika login grafis gagal setelah perubahan driver, boot live USB, bersihkan paket GPU terakhir, dan pulihkan `/etc` jika diperlukan. Pemicu tersebut mengurangi kepanikan selama kegagalan itu sendiri.

## ✅ Checkpoint Validasi
- Anda memiliki ekspor paket, cadangan konfigurasi, dan cadangan data pengguna yang diambil sebelum tindakan berisiko.
- Anda dapat menyatakan langkah pemulihan pertama tanpa berimprovisasi.
- Anda tahu apakah menginstal ulang dengan bersih lebih murah daripada memperbaiki lebih dalam jika perubahan gagal total.

## Catatan Troubleshooting
- Jika jalur pencadangan Anda berada pada disk yang sama dengan yang akan Anda partisi ulang, itu bukan target rollback yang aman.
- Jika ekspor paket menunjukkan perangkat lunak pihak ketiga yang tidak dikenal, dokumentasikan sekarang sebelum pemulihan menjadi mendesak.

## ↩️ Catatan Rollback / Recovery
- Berlatihlah membaca catatan rollback Anda sendiri sebelum Anda benar-benar membutuhkannya.
- Segarkan artefak rollback setelah setiap lapisan paket utama diterima, tidak hanya sekali di awal.

## Dokumen Terkait
- [🚑 Pulihkan Setelah Boot Gagal](./recover-after-failed-boot.md)
- [🛠️ Instal ulang GRUB](./reinstall-grub.md)
- [🧹 09 Pembersihan](../tutorials/09-cleanup.md)
