# 📦 Kelola Template dan Image Dasar

## Tujuan
Menjaga template dan image dasar tetap terkendali, terdokumentasi, dan tervalidasi sebelum dijadikan sumber workload baru.

## Kapan Prosedur Ini Digunakan
Gunakan saat Anda mengimpor, menerbitkan, memperbarui, atau menonaktifkan template dan image dasar.

## Prasyarat
- Anda mengetahui asal artefak dan apakah artefak itu tepercaya, berversi, dan cocok untuk platform ini.
- Ada workload uji yang bisa dijalankan sebelum artefak dipromosikan secara lebih luas.

## Asumsi Lingkungan
- Lifecycle artefak berbeda menurut platform dan rilis.
- Validasi tidak berhenti pada inventaris; selalu uji satu alur boot, clone, atau attach yang nyata.

## Prosedur Langkah demi Langkah
1. **Periksa inventaris artefak saat ini**
Lihat artefak yang sudah ada lebih dulu supaya tidak membuat duplikasi atau naming drift.
```bash
command -v cloudmonkey >/dev/null && cloudmonkey list templates templatefilter=self || true
df -h
journalctl -u cloudstack-management -n 50 --no-pager 2>/dev/null || true
```

2. **Impor atau publikasikan artefak baru**
Gunakan alur yang didukung platform. Catat sumber, tanggal, dan tujuan penggunaan pada saat yang sama.

3. **Jalankan satu workload validasi**
Impor yang sukses belum cukup. Boot workload uji, cek jaringan, dan pastikan layanan atau guest agent berjalan sesuai harapan.

## Poin Validasi
- Inventaris menampilkan artefak baru dengan jelas.
- Satu workload uji dapat dijalankan atau di-clone dengan benar.
- Sumber, tanggal validasi, dan tujuan penggunaan tercatat rapi.

## Catatan Troubleshooting
- Artefak masuk tetapi workload uji gagal: periksa placement storage, log boot guest, dan tugas platform.
- Jika inventaris sudah berantakan, berhenti dan rapikan naming sebelum menambah artefak baru.
- Jika artefak sensitif versi, pertahankan artefak lama yang sudah terbukti baik sampai pengganti benar-benar lolos uji.

## Catatan Rollback atau Recovery
- Simpan atau aktifkan kembali artefak lama yang sudah diketahui stabil.
- Hentikan promosi artefak baru sampai masalah validasinya dipahami.
- Jangan hapus artefak lama sebelum workload pengganti benar-benar terbukti aman.

## Dokumen Terkait
- [🧠 Ikhtisar CloudStack](../concepts/cloudstack-overview.md)
- [📋 Checklist Operasional](../reference/operations-checklist.md)
