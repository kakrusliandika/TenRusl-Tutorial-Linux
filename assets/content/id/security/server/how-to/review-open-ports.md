# 🌐 Tinjau Port Terbuka

## Tujuan
Inventarisasi pendengar sebenarnya dari tuan rumah dan bandingkan mereka dengan paparan layanan yang diinginkan.

## Kasus Penggunaan
Gunakan ini setelah instalasi perangkat lunak, sebelum perubahan firewall, dan setiap kali peran host berubah.

## Prasyarat
- Akses root atau sudo.
- Gagasan tertulis tentang apa yang seharusnya dijalankan oleh server.
- Akses opsional dari host kedua untuk pemindaian eksternal.

## Asumsi Lingkungan
- Host menyediakan `ss` dan `systemctl`.
- Satu atau lebih alat firewall mungkin ada tergantung pada kebijakan distro.

## ⚠️ Catatan Risiko
- Jangan menutup port secara membabi buta tanpa mengidentifikasi layanan pemiliknya.
- Ingat, pendengar khusus localhost masih penting untuk jalur penyalahgunaan internal.

## Prosedur Langkah demi Langkah
### 1. Catat inventaris pendengar saat ini
Kumpulkan pendengar TCP dan UDP dengan proses yang dimiliki.

```bash
sudo ss -tulpn
sudo lsof -i -P -n | grep LISTEN || true
```

### 2. Bandingkan pendengar dengan layanan yang sedang berjalan
Temukan unit layanan yang kemungkinan memiliki port tersebut.

```bash
sudo systemctl list-units --type=service --state=running --no-pager
sudo systemctl list-unit-files --state=enabled --no-pager
```

### 3. Tinjau postur firewall
Periksa apakah firewall host cocok dengan inventaris pendengar.

```bash
sudo nft list ruleset 2>/dev/null || true
sudo ufw status verbose 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

### 4. Validasi secara eksternal jika memungkinkan
Pemindaian jarak jauh menemukan kejutan yang mungkin terlewatkan oleh ulasan localhost.

```bash
nmap -Pn -sT -sU --top-ports 50 server.example.com
```

## ✅ Titik Validasi
- Setiap port mendengarkan dipetakan ke layanan yang diharapkan.
- Pendengar tak terduga dinonaktifkan, dilindungi firewall, atau didokumentasikan sebagai pengecualian.
- Hasil scan eksternal sesuai dengan paparan yang diinginkan.

## Pemecahan masalah
- Jika port muncul kembali setelah menghentikan layanan, tinjau unit soket, kontainer, dan supervisor.
- Jika tampilan eksternal menunjukkan lebih banyak port dari yang diharapkan, periksa juga firewall upstream dan penyeimbang beban.

## ↩️ Catatan Kembalikan / Pemulihan
- Pulihkan status firewall atau layanan terakhir yang diketahui baik jika pembersihan merusak jalur aplikasi.

## Dokumen Terkait
- [🧠 Dasar Pengerasan](../concepts/hardening-baseline.md)
- [📋 Checklist Firewall](../reference/firewall-checklist.md)
- [🌐 04 Firewall](../tutorials/04-firewall.md)
