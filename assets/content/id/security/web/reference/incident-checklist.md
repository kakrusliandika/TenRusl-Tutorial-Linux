# 🚨 Checklist Insiden

## Tujuan
Gunakan daftar periksa ini ketika tepi publik berperilaku mencurigakan, menunjukkan pola penyalahgunaan, atau tampak disusupi.

## Referensi Terstruktur
### Daftar periksa respons pertama
- Catat nama host, jalur, waktu, dan gejala klien yang terpengaruh.
- Pertahankan akses dan log kesalahan sebelum rotasi atau pembersihan.
- Putuskan apakah penahanan berarti menonaktifkan rute, membatasi sumber, merotasi kredensial, atau mengisolasi backend.
- Tangkap konfigurasi tepi aktif sebelum mengeditnya.

### Bukti yang perlu dilestarikan
- Akses terkini dan log kesalahan.
- Header respons saat ini dan detail TLS.
- Konfigurasi edge saat ini dan riwayat penerapan terkini.
- Memantau peringatan atau peristiwa batas tarif yang tidak biasa.

## Catatan Interpretasi Praktis
- Jangan memulai ulang atau memuat ulang edge sebelum menyimpan log dan konfigurasi aktif jika insiden masih berlangsung.
- Jika CDN atau edge terkelola terlibat, kumpulkan bukti dari sisi penyedia bersama dengan log di host.

## Cuplikan Perintah
```bash
curl -I https://example.com
openssl s_client -connect example.com:443 -servername example.com </dev/null | tail -n 20
sudo tar czf web-edge-config-$(date +%F-%H%M%S).tgz /etc/nginx /etc/caddy 2>/dev/null || true
sudo journalctl -u nginx -u caddy -S -2h --no-pager > web-edge-journal.txt 2>/dev/null || true
```

## Dokumen Terkait
- [🧾 Checklist Pencatatan](./logging-checklist.md)
- [📋 Checklist TLS](./tls-checklist.md)
- [📝 07 Pencatatan](../tutorials/07-logging.md)
