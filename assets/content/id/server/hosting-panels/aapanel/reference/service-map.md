# 📋 Peta Layanan

## Tujuan
Pertahankan satu tampilan operasional layanan yang menjadi sandaran aaPanel sehingga perubahan bidang kontrol selalu diperiksa silang dengan status host sebenarnya.

## Data Terstruktur / Referensi
| Daerah | Apa yang Harus Dikonfirmasi | Interpretasi |
| --- | --- | --- |
| Layanan panel | Lapisan admin sedang berjalan dan dapat dimulai ulang | `Use systemctl, container inspection, or both depending on install method.` |
| server web | Pendengar dan pemilik konfigurasi dipahami | Validasi pendengar dan log terbaru setelah setiap perubahan panel. |
| Lapisan waktu proses | Pekerjaan runtime di aaPanel sering kali berarti versi PHP, penulisan ulang tingkat situs, tugas cron, status SSL, dan pemetaan database yang dibuat dari panel. | Periksa PHP-FPM, proses upstream, atau container secara eksplisit. |
| Lapisan basis data | Layanan basis data lokal diketahui dan sengaja hanya bersifat lokal atau diekspos | Jangan berasumsi bahwa kesehatan panel UI berarti kesehatan basis data. |

## Cuplikan Perintah
```bash
systemctl list-units --type=service | grep -Ei 'nginx|apache|php|mysql|mariadb|bt|panel' || true

systemctl status mysql mariadb --no-pager 2>/dev/null || true

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
