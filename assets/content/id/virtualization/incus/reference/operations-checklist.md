# 📋 Checklist Operasional

## Tujuan Referensi Ini
Gunakan halaman ini sebagai checklist hari-ke-2 untuk Incus sebelum maintenance, sesudah perubahan, saat insiden, dan saat review rutin.

## Materi Referensi Terstruktur
| Interval | Yang Ditinjau | Perintah Inti |
|---|---|---|
| Harian | Health host atau cluster, inventaris workload, headroom storage | `lihat blok perintah di bawah` |
| Sebelum perubahan | Umur backup, peta jaringan, akses konsol, ruang kosong | `ip -br addr; df -h` |
| Sesudah perubahan | Reachability guest, role storage, log service | `journalctl -xe | tail -n 40` |

```bash
incus info
incus list
incus warning list
incus storage list
incus network list
```

## Catatan Interpretasi Praktis
- Jika control plane dan host Linux bercerita berbeda, jangan percaya salah satunya sebelum penyebabnya dipahami.
- Pertahankan kebiasaan inspeksi yang sama antaroperator agar handoff insiden tetap cepat.
- Checklist yang sederhana tetapi konsisten lebih berguna daripada dashboard yang ramai tetapi tidak terdokumentasi.

## Dokumen Terkait
- [🧠 Ikhtisar Incus](../concepts/incus-overview.md)
- [↩️ Pulihkan Backup dengan Validasi](../how-to/restore-backup.md)
