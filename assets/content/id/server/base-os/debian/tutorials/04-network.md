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
ls -la /etc/network /etc/systemd/network /etc/netplan 2>/dev/null || true
systemctl is-active networking NetworkManager systemd-networkd 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

### 3. Terapkan model konfigurasi statis atau yang dapat diprediksi yang dipilih
```bash
sudo install -d -m 0755 /etc/systemd/network
sudo editor /etc/systemd/network/10-enp1s0.network
sudo networkctl reload || true
sudo systemctl restart systemd-networkd || true
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
