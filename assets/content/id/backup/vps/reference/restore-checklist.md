# 📚 Checklist Restore

## Tujuan
Gunakan checklist ini saat membangun ulang VPS pada infrastruktur baru agar restore berjalan dengan urutan aman, bukan sekadar mengekstrak semua file lalu berharap service graph memperbaiki diri sendiri.

## Referensi Terstruktur
| Langkah | Perintah atau Pemeriksaan | Alasan |
| --- | --- | --- |
| Verifikasi integritas arsip | `sha256sum -c SHA256SUMS` | Mencegah restore dari arsip rusak. |
| Tinjau inventaris paket | `less packages.tsv` | Menjelaskan baseline software. |
| Hentikan atau isolasi service | `systemctl stop ...` | Mencegah penulisan baru saat ekstraksi. |
| Ekstrak dengan owner preserved | `tar --xattrs --acls --numeric-owner -xzf ... -C /` | Mengembalikan permission dan ACL dengan benar. |
| Restore database jika ada | `mysql` / `psql` / `pg_restore` | Membangun ulang state mutable setelah file. |
| Restart dan inspeksi service | `systemctl restart ...` dan `journalctl -u ...` | Menemukan kegagalan runtime lebih dini. |

## Catatan Interpretasi Praktis
- Perlakukan inventaris paket sebagai panduan rebuild, bukan alasan untuk melakukan instalasi massal buta di distro yang berbeda.
- Sediakan tempat untuk langkah pasca-restore manual seperti penerapan secret, sertifikat, atau perubahan hostname.
- Validasi sebaiknya mencakup SSH, port, status service, log, dan health check aplikasi.

## Cuplikan Pemeriksaan
```bash
systemctl --failed
ss -tulpn
journalctl -p err -b --no-pager | tail -n 50
```

## Dokumen Terkait
- [🛠️ Restore dari Backup](../how-to/restore-from-backup.md)
- [🧠 Pola Pikir Restore-First](../concepts/restore-first-thinking.md)
- [↩️ Tutorial 05: Restore ke VPS Baru](../tutorials/05-restore-on-new-vps.md)
