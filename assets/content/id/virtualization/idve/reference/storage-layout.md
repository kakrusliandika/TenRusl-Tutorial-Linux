# 📋 Tata Letak Storage

## Tujuan Referensi Ini
Merangkum role storage pada IDVE agar operator cepat tahu storage mana untuk workload aktif, artefak dasar, backup, dan restore staging.

## Materi Referensi Terstruktur
| Role | Pertanyaan | Contoh Bukti |
|---|---|---|
| Workload aktif | Di mana disk guest utama berjalan? | `df -h; lsblk -f` |
| Artefak dasar | Di mana image dasar dan template disimpan? | inventaris image atau template |
| Backup | Di mana arsip backup berada? | `ls -lh /var/backups 2>/dev/null || true` |
| Restore staging | Target mana yang aman untuk uji restore? | definisi storage dan ruang kosong |

```bash
lsblk -f
df -h
findmnt
qemu-img info /var/lib/libvirt/images/base.qcow2 2>/dev/null || true
```

## Catatan Interpretasi Praktis
- Satu storage boleh punya lebih dari satu fungsi hanya bila alasannya jelas dan terdokumentasi.
- Jika storage shared dipakai banyak node, validasi dari lebih dari satu node sebelum menganggapnya sehat.
- Tuliskan role storage dengan nama yang mudah dipahami operator lain.

## Dokumen Terkait
- [💽 Desain Storage](../concepts/storage-design.md)
- [💽 Tambahkan Storage dengan Aman](../how-to/add-storage.md)
