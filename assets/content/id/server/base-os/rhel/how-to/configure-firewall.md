# 🛡️ Konfigurasikan Firewall

## Tujuan
Terapkan kebijakan firewall masuk minimal pada keluarga RHEL sehingga host hanya memaparkan apa yang sebenarnya diperlukan pada tahap dasar.

## Kapan Menggunakan Prosedur Ini
Gunakan ini setelah SSH diinstal dan diuji, sebelum host terkena lalu lintas publik atau menambahkan port aplikasi.

## Prasyarat
- Sesi SSH kedua atau akses konsol.
- Daftar tertulis port yang harus tetap dapat dijangkau saat ini.

## Asumsi Lingkungan
- Tahap dasar biasanya hanya membutuhkan SSH inbound.
- Port web, database, atau aplikasi akan ditambahkan nanti ketika layanan terkait sudah siap.

## Langkah Tepat
### 1. Terapkan kebijakan firewall distro-asli
```bash
sudo dnf install -y firewalld
sudo systemctl enable --now firewalld
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

### 2. Bandingkan status firewall dengan pendengar sebenarnya
```bash
ss -ltnup
systemctl --failed
```

### 3. Tes ulang SSH dari sesi kedua sebelum melanjutkan
```bash
ssh adminops@server-ip
```

## ✅ Pos Pemeriksaan Validasi
- Alat firewall melaporkan kebijakan aktif.
- Hanya port pengelolaan yang dituju yang tetap dapat dijangkau.
- Koneksi ulang SSH berfungsi sebelum masa pemeliharaan berakhir.

## Pemecahan masalah
- SSH gagal setelah menerapkan firewall: gunakan konsol, tinjau perubahan aturan terakhir, dan bandingkan pendengar dengan status firewall.
- Terlalu banyak port yang tetap terbuka: identifikasi layanan pemiliknya sebelum menambahkan lebih banyak aturan.
- Firewall cloud dan firewall host tidak setuju: dokumentasikan kedua lapisan dan selaraskan dengan sengaja.

## ↩️ Catatan Kembalikan / Pemulihan
- Jika akses manajemen terputus, segera kembalikan perubahan terakhir dari konsol.
- Pertahankan kebijakan minimal hingga peran aplikasi terinstal dan diuji sepenuhnya.

## Dokumen Terkait
- [🔐 Instal OpenSSH](./install-openssh.md)
- [🌐 Matriks Port](../reference/port-matrix.md)
- [🛡️ Tutorial 07: Keamanan](../tutorials/07-security.md)
