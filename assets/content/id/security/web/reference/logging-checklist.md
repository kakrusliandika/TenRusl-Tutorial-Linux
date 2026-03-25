# 🧾 Checklist Logging

## Tujuan
Gunakan daftar periksa ini untuk memverifikasi bahwa web edge mencatat cukup detail untuk menyelidiki penyalahgunaan, pemadaman, dan kesalahan penerapan.

## Referensi Terstruktur
| Kawasan penebangan | Harapan minimal | Mengapa itu penting |
| --- | --- | --- |
| Akses log | Metode, jalur, status, IP klien, agen pengguna, waktu upstream jika memungkinkan | Merekonstruksi perilaku permintaan |
| Log kesalahan | Kegagalan startup, masalah TLS, kegagalan upstream | Mempercepat pekerjaan akar permasalahan |
| Sinyal batas kecepatan atau WAF | Bukti bahwa penyalahgunaan kendali dipicu | Membedakan penyalahgunaan dari pemadaman |
| Catatan penerapan | Kapan konfigurasi diubah dan oleh siapa | Mengkorelasikan insiden dengan mengubah peristiwa |
| Sinkronisasi jam | Stempel waktu yang andal | Membuat garis waktu dapat dipercaya |

## Catatan Interpretasi Praktis
- Jika edge hanya mencatat kode status tanpa konteks, penyelidikan selanjutnya menjadi dugaan.
- Log akses harus berguna tetapi tidak gegabah dengan rahasia atau badan.

## Cuplikan Perintah
```bash
sudo journalctl -u nginx -u caddy -n 50 --no-pager 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/access.log 2>/dev/null || true
sudo tail -n 50 /var/log/nginx/error.log 2>/dev/null || true
timedatectl status
```

## Dokumen Terkait
- [🚨 Checklist Insiden](./incident-checklist.md)
- [🚦 Atur Pembatasan Tarif](../how-to/set-up-rate-limiting.md)
- [📝 07 Pencatatan](../tutorials/07-logging.md)
