# 🧾 Checklist Logging

## Tujuan
Gunakan daftar periksa ini untuk memverifikasi bahwa host menyimpan bukti operasional dan keamanan yang benar-benar Anda perlukan nanti.

## Referensi Terstruktur
| Kawasan penebangan | Harapan minimal | Mengapa itu penting |
| --- | --- | --- |
| `journald` atau syslog | Layanan dimulai, kegagalan, aktivitas autentikasi | Merekonstruksi perilaku sistem |
| log SSH | Peristiwa sukses dan kegagalan | Menjelaskan aktivitas admin jarak jauh |
| Log audit | Tindakan istimewa atau perubahan file yang diawasi | Meningkatkan akuntabilitas |
| Rotasi | Batas retensi dan penyimpanan ditentukan | Mencegah kehabisan disk |
| Sinkronisasi waktu | Jam host akurat | Membuat garis waktu dapat diandalkan |

## Catatan Interpretasi Praktis
- Log yang tidak dapat bertahan dari rotasi, tekanan disk, atau penyimpangan waktu merupakan bukti lemah.
- Penebangan kayu dalam jumlah besar tanpa perencanaan retensi menimbulkan risiko operasional yang berbeda.

## Cuplikan Perintah
```bash
sudo journalctl -b --no-pager | tail -n 50
sudo journalctl -u sshd -u ssh -n 50 --no-pager
sudo timedatectl status
sudo ausearch -ts today 2>/dev/null | tail -n 20 || true
```

## Dokumen Terkait
- [🧾 Konfigurasikan Logging Audit](../how-to/configure-audit-logging.md)
- [🚨 Checklist Insiden](./incident-checklist.md)
- [🧾 08 Pencatatan](../tutorials/08-logging.md)
