# ✅ Tutorial 10: Penutupan

## Tujuan
Tutup build dasar dengan tinjauan penerimaan akhir sehingga host keluarga RHEL siap untuk modul khusus beban kerja.

## Prasyarat
- Tutorial 01 sampai 09 selesai.

## Asumsi Lingkungan
- Tuan rumah sekarang dapat beralih ke keamanan, proksi terbalik, panel, atau pekerjaan khusus aplikasi.

## Langkah Berurutan
### 1. Jalankan snapshot penerimaan akhir
```bash
hostnamectl
timedatectl
ip -br addr
ss -ltnup
systemctl --failed
findmnt
```

### 2. Konfirmasikan bahwa jalur pengelolaan dan jalur rollback telah didokumentasikan
- Akun Admin dan jalur SSH diuji.
- Kebijakan firewall dituliskan.
- Sumber kebenaran konfigurasi jaringan diketahui.
- Mount penyimpanan dan target cadangan terdaftar.

### 3. Tentukan modul selanjutnya berdasarkan peran host
- Gunakan Keamanan Server untuk pengerasan lebih dalam.
- Gunakan Proxy Terbalik ketika host akan menghentikan HTTP atau HTTPS.
- Gunakan Cadangan sebelum mempercayakan host dengan data yang tidak tergantikan.


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[🖥️ Dasar Server keluarga RHEL](../index.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
