# 🧭 Tutorial 01: Pendahuluan

## Tujuan
Tentukan mengapa host ini ada, apa yang dibawa oleh keluarga RHEL ke dalam pekerjaannya, dan apa yang harus dijamin oleh baseline sebelum aplikasi diinstal.

## Prasyarat
- Calon server atau VM.
- Tempat untuk mencatat nama host, paket IP, dan catatan peran.
- Menyelamatkan akses jika host kemudian kehilangan SSH atau konektivitas jaringan.

## Asumsi Lingkungan
- Keluarga RHEL adalah pilihan kuat di mana dukungan, alur kerja dnf, SELinux, dan penyelarasan perusahaan lebih penting daripada gambar sekecil mungkin.
- Tuan rumah dapat dibangun kembali jika operan pertama memperlihatkan kesalahan dasar.

## Langkah Berurutan
### 1. Catat peran server yang dituju, nama host, dan pemilik dukungan
```bash
printf "role=baseline
hostname=server01
owner=ops-team
"
```

### 2. Tangkap tampilan perangkat keras dan firmware saat ini
```bash
hostnamectl
lscpu | sed -n "1,20p"
free -h
lsblk -f
```

### 3. Putuskan apa yang harus benar sebelum perangkat lunak beban kerja diperbolehkan
- SSH harus diinstal dan diuji.
- Kebijakan firewall harus minimal dan tertulis.
- Jaringan dan penyimpanan harus cukup dapat diprediksi untuk pencadangan dan pemulihan.


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 02 Prapemeriksaan Instalasi](./02-install-preflight.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
