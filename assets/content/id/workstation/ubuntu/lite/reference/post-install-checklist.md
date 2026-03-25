# 📋 Daftar Periksa Pasca Pemasangan

## Tujuan
Gunakan daftar periksa ini setelah boot pertama berhasil dan lagi sebelum panggilan workstation selesai.

## Materi Referensi Terstruktur
| Daerah | Apa yang harus dikonfirmasi |
|---|---|
| sepatu bot | Boot tanpa USB, mode boot yang diharapkan, reboot stabil |
| Penyimpanan | Titik pemasangan yang benar, ruang kosong yang cukup, tidak ada partisi misteri |
| Jaringan | Antarmuka, DNS, rute, sinkronisasi waktu |
| Grafik | Login berfungsi, resolusi yang diharapkan, tidak ada masalah rendering langsung |
| Audio | Perangkat keluaran dan masukan terlihat jika stasiun kerja membutuhkannya |
| Paket | Tidak ada ketergantungan yang rusak, metadata paket terkini |
| Log | Tidak ada kesalahan berulang yang jelas setelah pembaruan pertama dan reboot |
| Pemulihan | Penginstal USB dipertahankan, catatan rollback ditulis |

## Perintah / Potongan Pemeriksaan
```bash
lsblk -f
ip -br addr
systemctl --failed
journalctl -p err -b --no-pager | tail -n 40
df -h /
```

## Catatan Praktis
- Jalankan daftar periksa sebelum penambahan paket besar dan lagi saat penutup.
- Login yang berhasil saja tidak cukup; memperlakukan boot, jaringan, dan log sebagai permukaan validasi kelas satu.

## Dokumen Terkait
- [📋 Daftar Periksa Jaringan](./network-checklist.md)
- [🧹 09 Pembersihan](../tutorials/09-cleanup.md)
- [📘 10 Penutup](../tutorials/10-closeout.md)
