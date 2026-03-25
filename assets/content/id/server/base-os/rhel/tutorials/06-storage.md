# 💽 Tutorial 06: Penyimpanan

## Tujuan
Tambahkan penyimpanan data yang dapat diprediksi sehingga log, aplikasi, atau cadangan tidak terakumulasi begitu saja di sistem file root.

## Prasyarat
- Disk atau volume tambahan terpasang.
- Anda tahu apakah disk baru dapat diformat dengan aman.

## Asumsi Lingkungan
- Perubahan penyimpanan terjadi sebelum data produksi disalin.

## Langkah Berurutan
### 1. Periksa disk dan mount saat ini
```bash
lsblk -f
df -h
findmnt
```

### 2. Siapkan disk baru dan mount dengan UUID
```bash
sudo dnf install -y xfsprogs
sudo parted -s /dev/sdb mklabel gpt
sudo parted -s /dev/sdb mkpart primary xfs 1MiB 100%
sudo mkfs.xfs /dev/sdb1
sudo mkdir -p /srv/data
UUID=$(sudo blkid -s UUID -o value /dev/sdb1)
echo "UUID=$UUID /srv/data xfs defaults,nofail 0 2" | sudo tee -a /etc/fstab
sudo mount -a
```

### 3. Validasi mount baru dan jalur penulisan dasar
```bash
findmnt /srv/data
lsblk -f
sudo touch /srv/data/.write-test && sudo rm -f /srv/data/.write-test
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 07 Keamanan](./07-security.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
