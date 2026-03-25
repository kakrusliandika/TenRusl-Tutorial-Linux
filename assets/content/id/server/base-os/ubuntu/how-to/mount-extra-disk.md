# 💽 Pasang Disk Ekstra

## Tujuan
Siapkan dan pasang disk tambahan di Ubuntu menggunakan pengidentifikasi persisten sehingga data aplikasi tidak hidup secara tidak terduga di sistem file root.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika host menerima disk virtual atau fisik baru untuk data aplikasi, log, cadangan, atau konten situs.

## Prasyarat
- Anda mengetahui perangkat mana yang baru dan tidak berisi data yang diperlukan.
- Anda memiliki akses konsol jika host gagal melakukan booting karena kesalahan `/etc/fstab`.

## Asumsi Lingkungan
- Disk baru dapat dihapus atau dipartisi baru.
- Peran server mendapat manfaat dari pemisahan data dari `/`.

## Langkah Tepat
### 1. Periksa inventaris perangkat sebelum mempartisi
```bash
lsblk -f
blkid || true
sudo fdisk -l /dev/sdb 2>/dev/null || true
```

### 2. Buat partisi dan sistem file
```bash
sudo apt-get update
sudo apt-get install -y e2fsprogs
sudo parted -s /dev/sdb mklabel gpt
sudo parted -s /dev/sdb mkpart primary ext4 1MiB 100%
sudo mkfs.ext4 /dev/sdb1
```

### 3. Pasang dengan UUID dan tambahkan entri persisten
```bash
sudo mkdir -p /srv/data
UUID=$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID=$UUID /srv/data ext4 defaults,nofail 0 2" | sudo tee -a /etc/fstab
sudo mount -a
findmnt /srv/data
lsblk -f
```

### 4. Uji kepemilikan dan akses tulis
```bash
sudo touch /srv/data/.baseline-write-test
ls -la /srv/data
sudo rm -f /srv/data/.baseline-write-test
```

## ✅ Pos Pemeriksaan Validasi
- Mount muncul di `findmnt` dan `lsblk -f`.
- Entri `fstab` berbasis UUID berfungsi dengan `mount -a`.
- Pengguna jasa yang dituju dapat menggunakan titik pemasangan dengan aman.

## Pemecahan masalah
- `mount -a` gagal: periksa baris `/etc/fstab` baru untuk mengetahui kesalahan jenis, UUID, atau opsi.
- Disk yang dipilih salah: segera hentikan dan konfirmasi inventaris sebelum memformat ulang lagi.
- Izin salah: perbaiki kepemilikan dan konteks SELinux jika berlaku sebelum memasukkan data aplikasi.

## ↩️ Catatan Kembalikan / Pemulihan
- Hapus atau beri komentar pada baris `fstab` yang buruk dari mode penyelamatan jika host gagal melakukan booting dengan bersih.
- Jaga agar pemasangan lama dan pemasangan baru dipisahkan dengan jelas selama migrasi untuk menghindari jalur data tercampur.

## Dokumen Terkait
- [💽 Tutorial 06: Penyimpanan](../tutorials/06-storage.md)
- [💾 Cadangan](../../../../backup/index.md)
