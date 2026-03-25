# 🛡️ Tutorial 07: Keamanan

## Tujuan
Terapkan kontrol defensif pertama: firewall minimal, kebijakan patch, dan tinjauan layanan yang terbuka.

## Prasyarat
- Akses SSH stabil.
- Perubahan jaringan dan penyimpanan telah selesai untuk tahap dasar.

## Asumsi Lingkungan
- Hanya akses pengelolaan yang boleh bersifat publik pada saat ini.

## Langkah Berurutan
### 1. Terapkan kebijakan firewall dasar
```bash
sudo apt-get update
sudo apt-get install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw --force enable
sudo ufw status verbose
```

### 2. Aktifkan kebijakan pembaruan otomatis
```bash
sudo apt-get update
sudo apt-get install -y unattended-upgrades apt-listchanges
sudo dpkg-reconfigure -plow unattended-upgrades
systemctl status unattended-upgrades --no-pager || true
```

### 3. Tinjau hasil status relevan dengan keamanan
```bash
ss -ltnup
systemctl --failed
journalctl -p warning -b --no-pager | tail -n 30 || true
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 08 Layanan](./08-services.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
