# 🚨 Checklist Insiden

## Tujuan
Gunakan daftar periksa ini ketika ada tamu yang tampak terganggu, mencurigakan, atau berisik secara tidak terduga.

## Referensi Terstruktur
### Tindakan segera
- Catat nama tamu, IP, node host, dan peran saat ini.
- Pertahankan bukti yang mudah menguap sebelum tindakan penutupan atau snapshot.
- Putuskan apakah penahanan berarti isolasi jaringan, pembatasan konsol, atau pemadaman listrik.
- Jaga agar tindakan pencadangan dan snapshot dilakukan dengan sengaja sehingga Anda tidak merusak titik pemulihan yang bersih.

### Bukti yang perlu dilestarikan
- Pohon proses tamu dan soket pendengaran.
- Auth terbaru, sudo, dan log layanan di dalam tamu.
- Log peristiwa atau tugas sisi Hypervisor jika tersedia.
- Snapshot saat ini dan inventaris cadangan untuk tamu.

## Catatan Interpretasi Praktis
- Menutup tamu terlalu dini dapat menghapus bukti berguna yang mudah berubah.
- Memotret tamu yang disusupi dapat berguna, tetapi hanya jika tamu tersebut diberi label dengan jelas dan tidak disalahartikan sebagai titik pengembalian yang bersih.

## Cuplikan Perintah
```bash
hostnamectl
ip -br addr
sudo ss -tulpn
sudo ps -ef --forest
sudo journalctl -S -2h --no-pager > incident-journal.txt
sudo virsh domiflist vm-name 2>/dev/null || true
```

## Dokumen Terkait
- [🌐 Pemikiran Isolasi Jaringan](../concepts/network-isolation-thinking.md)
- [🧾 07 Pencatatan](../tutorials/07-logging.md)
- [🧱 Keamanan VM](../index.md)
