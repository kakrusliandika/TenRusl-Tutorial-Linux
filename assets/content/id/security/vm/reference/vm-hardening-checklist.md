# 📋 Checklist Hardening VM

## Tujuan
Gunakan daftar periksa ini untuk tinjauan singkat mengenai tamu, templat, dan postur pemulihan sebelum menyelesaikan dasar VM.

## Referensi Terstruktur
### Ulasan tamu dan templat
- Peran tamu dan zona kepercayaan didokumentasikan.
- Sumber template dan tanggal patch diketahui.
- Identitas dan rahasia mesin ditangani dengan sengaja.
- Jalur akses Admin didokumentasikan dan dapat ditinjau.
- Log dan metadata cadangan dapat dijangkau dari shell.

### Tinjauan pemulihan
- Backup terkini ada dan dikatalogkan.
- Kebijakan snapshot ditulis.
- Templat atau tiruan yang diketahui bagus sebelumnya ada untuk rollback.

## Catatan Interpretasi Praktis
- Tinjauan VM harus mencakup bidang kontrol di sekitarnya, bukan hanya shell tamu.
- Jika Anda tidak dapat menjelaskan bagaimana tamu akan dibangun kembali besok, maka garis dasarnya tidak lengkap.

## Cuplikan Perintah
```bash
systemd-detect-virt || true
hostnamectl
sudo ss -tulpn
sudo journalctl -b --no-pager | tail -n 30
```

## Dokumen Terkait
- [🧱 Dasar Pengerasan VM](../concepts/vm-hardening-baseline.md)
- [🧼 04 Kebersihan Templat](../tutorials/04-template-hygiene.md)
- [✅ 09 Pengerasan](../tutorials/09-hardening.md)
