# 📦 Tutorial 03: Instal Inti

## Tujuan
Patch host dan instal kumpulan paket lean core yang membuat server keluarga RHEL dapat dikelola seiring waktu.

## Prasyarat
- Repositori dan pemeriksaan waktu berlalu di Tutorial 02.

## Asumsi Lingkungan
- Jendela reboot muncul jika kernel atau pustaka inti berubah.
- Garis dasar harus tetap cukup kecil sehingga setiap paket masih mempunyai alasan.

## Langkah Berurutan
### 1. Terapkan pembaruan terkini terlebih dahulu
```bash
sudo dnf makecache
sudo dnf upgrade -y
```

### 2. Instal kumpulan paket dasar
```bash
sudo dnf install -y sudo curl ca-certificates rsync jq less vim-minimal policycoreutils-python-utils openssh-server firewalld dnf-automatic xfsprogs
```

### 3. Segera tinjau status paket dan unit yang gagal
```bash
dnf repoquery --userinstalled | sed -n "1,120p"

systemctl --failed
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 04 Jaringan](./04-network.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
