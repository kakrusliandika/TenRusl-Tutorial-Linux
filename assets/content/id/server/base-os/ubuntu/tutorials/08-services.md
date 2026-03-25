# 📋 Tutorial 08: Layanan

## Tujuan
Tinjau layanan yang diaktifkan, unit yang gagal, dan soket pendengaran sehingga garis dasar akhir bersifat disengaja dan bukan tidak disengaja.

## Prasyarat
- Pekerjaan inti, jaringan, SSH, penyimpanan, dan keamanan dasar telah selesai.

## Asumsi Lingkungan
- Anda masih bekerja pada OS dasar, belum pada peran aplikasi tingkat yang lebih tinggi.

## Langkah Berurutan
### 1. Tinjau unit yang diaktifkan dan gagal
```bash
systemctl list-unit-files --state=enabled | sed -n "1,120p"
systemctl --failed
```

### 2. Tinjau pendengar aktif dan bandingkan dengan peran yang diinginkan
```bash
ss -ltnup
ps aux --sort=-%mem | sed -n "1,20p"
```

### 3. Ambil cuplikan inventaris layanan untuk handoff atau audit selanjutnya
```bash
systemctl list-units --type=service --state=running | sed -n "1,120p" > /tmp/running-services.txt
cat /tmp/running-services.txt
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 09 Pembersihan](./09-cleanup.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
