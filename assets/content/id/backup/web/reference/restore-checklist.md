# 📚 Checklist Restore

## Tujuan
Gunakan checklist ini agar pekerjaan restore web tetap terurut dan dapat diaudit, mulai dari verifikasi integritas sampai validasi HTTP.

## Referensi Terstruktur
| Langkah | Pemeriksaan atau Perintah | Alasan |
| --- | --- | --- |
| Verifikasi checksum | `sha256sum -c SHA256SUMS` | Menghindari restore dari generasi yang korup. |
| Restore file lebih dulu | `tar --xattrs --acls --numeric-owner -xzf ... -C /` | Membangun path dan ownership sebelum impor DB. |
| Impor database | `mysql`, `psql`, atau `pg_restore` | Mengembalikan data mutable. |
| Terapkan ulang secret dan ownership | review env file, `chown` | Mencegah kegagalan runtime karena config hilang atau permission salah. |
| Restart service berurutan | `systemctl restart ...` | Membuat lapisan yang pertama gagal lebih mudah terlihat. |
| Validasi HTTP dan perilaku aplikasi | `curl`, log, smoke test | Membuktikan restore benar-benar berguna. |

## Catatan Interpretasi Praktis
- File + database + referensi secret adalah satu unit restore; memisahkannya ke generasi berbeda akan melemahkan recovery.
- Jika kunci TLS atau file `.env` sengaja dikecualikan, jalur pemulihan amannya harus ada di runbook.
- Functional testing sebaiknya mencakup sedikitnya satu path yang bergantung pada data dan satu path aset upload/static.

## Cuplikan Pemeriksaan
```bash
systemctl --failed
journalctl -u nginx -u apache2 -u httpd -u php*-fpm -n 50 --no-pager 2>/dev/null || true
curl -I http://127.0.0.1 2>/dev/null || true
```

## Dokumen Terkait
- [🛠️ Restore Aplikasi Web](../how-to/restore-web-app.md)
- [🧠 Rehearsal Restore](../concepts/restore-rehearsal.md)
- [↩️ Tutorial 05: Restore Stack](../tutorials/05-restore-stack.md)
