# 🧽 Tutorial 09: Pembersihan

## Tujuan
Hilangkan ambiguitas dari garis dasar dengan membersihkan artefak sementara, meninjau log, dan mempersiapkan host untuk serah terima.

## Prasyarat
- Konfigurasi dasar dan tinjauan layanan telah selesai.

## Asumsi Lingkungan
- Anda sedang mempersiapkan host untuk dokumentasi, pencitraan, atau peran server berikutnya.

## Langkah Berurutan
### 1. Hapus file sementara dan konfirmasi integritas paket
```bash
sudo apt-get autoremove -y
sudo apt-get clean

systemctl --failed
```

### 2. Tinjau kebisingan log dan status paket atau layanan saat ini untuk terakhir kalinya
```bash
apt-mark showmanual | sed -n "1,120p"

journalctl -p err -b --no-pager | tail -n 40
ss -ltnup
```

### 3. Catat ringkasan akhir host
```bash
hostnamectl
ip -br addr
findmnt
cat /etc/fstab
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 10 Penutupan](./10-closeout.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
