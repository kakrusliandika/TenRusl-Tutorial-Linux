# 📚 Checklist Restore

## Tujuan
Gunakan checklist ini saat merestore VM ke lab, recovery host, atau VLAN terisolasi. Checklist ini menjaga proses tetap terarah dan mengurangi kemungkinan menyalakan guest yang rusak atau bentrok.

## Referensi Terstruktur
| Langkah | Pemeriksaan | Alasan |
| --- | --- | --- |
| 1 | Verifikasi checksum | Menghindari impor disk atau metadata yang korup. |
| 2 | Tinjau XML atau metadata guest | Mengonfirmasi NIC, storage, dan asumsi firmware. |
| 3 | Pastikan jaringan target terisolasi | Mencegah benturan IP atau hostname dengan produksi. |
| 4 | Impor disk dan definisikan guest | Membangun ulang VM secara terprediksi. |
| 5 | Boot ke console lebih dulu | Menemukan masalah boot sebelum ada trafik aplikasi. |
| 6 | Validasi layanan di dalam guest | Membuktikan restore benar-benar berguna, bukan sekadar berhasil boot. |

## Catatan Interpretasi Praktis
- “Berhasil impor” dan “benar-benar melayani workload” adalah dua gerbang yang berbeda.
- Jika guest bergantung pada storage eksternal atau reachability VLAN tertentu, catat itu di runbook sebelum insiden.
- Simpan tempat untuk menulis perbaikan manual yang ditemukan selama rehearsal.

## Cuplikan Pemeriksaan
```bash
VM=app01
virsh define app01.xml
virsh start "$VM"
virsh console "$VM"
virsh domiflist "$VM"
```

## Dokumen Terkait
- [🧠 Perencanaan Restore](../concepts/restore-planning.md)
- [🛠️ Verifikasi Restore VM](../how-to/verify-vm-restore.md)
- [↩️ Tutorial 05: Restore VM](../tutorials/05-restore-vm.md)
