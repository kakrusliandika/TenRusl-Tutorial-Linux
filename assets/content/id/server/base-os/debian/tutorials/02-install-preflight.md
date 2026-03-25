# 🧪 Tutorial 02: Prapemeriksaan Instalasi

## Tujuan
Konfirmasikan bahwa repositori, waktu, tautan jaringan, dan fallback konsol sudah siap sebelum pekerjaan paket dasar dimulai.

## Prasyarat
- Catatan Tutorial 01 selesai.

## Asumsi Lingkungan
- Tuan rumah dapat mencapai mirror paket yang diperlukan.
- Anda masih dapat menjangkau server melalui konsol atau alat penyelamat jika pekerjaan paket atau jaringan berjalan buruk.

## Langkah Berurutan
### 1. Validasi identitas, waktu, dan jaringan saat ini
```bash
hostnamectl
timedatectl
ip -br addr
ip route
```

### 2. Validasi keterjangkauan repositori paket
```bash
ping -c 2 1.1.1.1 || true
getent hosts example.com
sudo apt-get update
```

### 3. Tinjau tata letak disk sebelum Anda menambahkan paket atau mount
```bash
lsblk -f
df -h
mount | sed -n "1,40p"
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 03 Instal Inti](./03-install-core.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
