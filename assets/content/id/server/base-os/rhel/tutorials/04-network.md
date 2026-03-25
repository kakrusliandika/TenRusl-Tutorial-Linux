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
nmcli connection show
nmcli device status
```

### 3. Terapkan model konfigurasi statis atau yang dapat diprediksi yang dipilih
```bash
nmcli connection show
sudo nmcli connection modify enp1s0 ipv4.method manual ipv4.addresses 192.0.2.10/24 ipv4.gateway 192.0.2.1 ipv4.dns "1.1.1.1 9.9.9.9"
sudo nmcli connection up enp1s0
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
