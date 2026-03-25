# 🚨 Checklist Insiden

## Tujuan
Gunakan referensi ini selama jendela respons pertama pada server Linux yang mencurigakan sehingga pengumpulan bukti tidak hilang dalam tekanan pembersihan.

## Referensi Terstruktur
### Daftar periksa respons pertama
- Catat identitas host, nama responden, tanggal, dan zona waktu.
- Pertahankan bukti yang mudah menguap sebelum melakukan boot ulang atau memuat ulang layanan utama.
- Putuskan apakah penahanan berarti isolasi jaringan, penghentian layanan, atau rotasi kredensial.
- Simpan satu cangkang untuk pengumpulan bukti dan satu lagi untuk tindakan penahanan.

### Bukti yang perlu dilestarikan
- Pohon proses dan soket pendengaran.
- Auth terbaru, sudo, dan log layanan.
- Salinan konfigurasi, file unit, atau skrip yang mencurigakan.
- Firewall dan postur SSH saat ini sebelum mengeditnya.

## Catatan Interpretasi Praktis
- Penahanan tanpa pengumpulan bukti menciptakan titik buta.
- Jika tekanan bisnis memaksa tindakan cepat, setidaknya catat proses, soket, dan log terbaru terlebih dahulu.

## Cuplikan Perintah
```bash
hostnamectl
sudo ss -tulpn
sudo ps -ef --forest
sudo last -a | head -n 20
sudo journalctl -S -2h --no-pager > /root/incident-journal.txt
```

## Dokumen Terkait
- [🧾 Checklist Pencatatan](./logging-checklist.md)
- [🧾 Konfigurasikan Logging Audit](../how-to/configure-audit-logging.md)
- [🧾 08 Pencatatan](../tutorials/08-logging.md)
