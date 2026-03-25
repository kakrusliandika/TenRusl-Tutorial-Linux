# 🌐 Tutorial 04: Jaringan

## Tujuan
Jadikan nama host, pengalamatan, perutean, dan perilaku penyelesai cukup dapat diprediksi untuk SSH, DNS, dan penerbitan layanan yang lebih baru.

## Prasyarat
- Baseline paket inti diinstal.

## Asumsi Lingkungan
- Perubahan jaringan dapat mengganggu konektivitas sebentar.
- Anda dapat memulihkan dari konsol jika perutean rusak.

## Langkah Berurutan
### 1. Tetapkan atau konfirmasi identitas nama host
```bash
sudo hostnamectl set-hostname server01.example.internal
hostnamectl
getent hosts $(hostname -f) 2>/dev/null || true
```

### 2. Periksa penyaji jaringan saat ini dan status rute
```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
ls -la /etc/netplan 2>/dev/null || true
sudo netplan get 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

### 3. Terapkan model konfigurasi statis atau yang dapat diprediksi yang dipilih
```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak 2>/dev/null || true
sudo editor /etc/netplan/01-static.yaml
sudo netplan try
sudo netplan apply
ip -br addr
ip route
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 05 Pengguna Dan Ssh](./05-users-and-ssh.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
