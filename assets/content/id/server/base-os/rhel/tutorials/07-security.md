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
sudo dnf install -y firewalld
sudo systemctl enable --now firewalld
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

### 2. Aktifkan kebijakan pembaruan otomatis
```bash
sudo dnf install -y dnf-automatic
sudo systemctl enable --now dnf-automatic.timer
systemctl status dnf-automatic.timer --no-pager
```

### 3. Tinjau hasil status relevan dengan keamanan
```bash
ss -ltnup
systemctl --failed
getenforce 2>/dev/null || true
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
