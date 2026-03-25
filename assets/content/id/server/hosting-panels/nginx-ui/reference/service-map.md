# 📋 Peta Layanan

## Tujuan
Pertahankan satu tampilan operasional dari layanan yang menjadi tempat Nginx UI bergantung sehingga perubahan bidang kontrol selalu diperiksa silang dengan status host sebenarnya.

## Data Terstruktur / Referensi
| Daerah | Apa yang Harus Dikonfirmasi | Interpretasi |
| --- | --- | --- |
| Layanan panel | Lapisan admin sedang berjalan dan dapat dimulai ulang | `Use systemctl, container inspection, or both depending on install method.` |
| server web | Pendengar dan pemilik konfigurasi dipahami | Validasi pendengar dan log terbaru setelah setiap perubahan panel. |
| Lapisan waktu proses | Pekerjaan runtime di Nginx UI biasanya berarti definisi upstream, blok server, pengaturan TLS, header proxy, dan tinjauan log daripada tumpukan LAMP yang dikelola panel penuh. | Periksa PHP-FPM, proses upstream, atau container secara eksplisit. |
| Lapisan basis data | Layanan basis data lokal diketahui dan sengaja hanya bersifat lokal atau diekspos | Jangan berasumsi bahwa kesehatan panel UI berarti kesehatan basis data. |

## Cuplikan Perintah
```bash
systemctl list-units --type=service | grep -Ei 'nginx|nginx-ui' || true
docker ps --format 'table {{.Names}}	{{.Status}}	{{.Ports}}' 2>/dev/null || true

echo 'Nginx UI itself does not imply a local database requirement; inspect upstream app data separately.'

ss -ltnp
systemctl --failed
```

## Catatan Interpretasi
- Dasbor panel hijau bukan pengganti validasi layanan sisi host.
- Tinjau peta layanan setelah peningkatan, perubahan runtime, pembuatan situs, dan operasi pemulihan.

## Dokumen Terkait
- [🌐 Tambahkan Situs Baru](../how-to/add-new-site.md)
- [↩️ Kembalikan Konfigurasi Panel](../how-to/restore-config.md)
- [✅ 09 Pengerasan](../tutorials/09-hardening.md)
