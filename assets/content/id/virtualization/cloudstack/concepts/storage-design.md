# 💽 Desain Storage

## Apa Arti Konsep Ini
Desain storage berarti memutuskan di mana workload aktif berjalan, di mana template dan image dasar disimpan, di mana backup ditempatkan, dan bagaimana restore dilakukan tanpa menimpa data yang salah. Tujuannya bukan sekadar menambah kapasitas, tetapi menambah kapasitas dengan peran yang jelas.

## Mengapa Ini Penting Secara Operasional
- Storage yang bercampur fungsi membuat troubleshooting dan capacity planning lebih sulit.
- Workload aktif, artefak dasar, dan backup punya pola I/O serta risiko recovery yang berbeda.
- Restore akan lebih lambat dan lebih berbahaya bila target storage tidak dibedakan sejak awal.

## Prinsip Desain Inti
- Tetapkan role storage dengan tegas: workload aktif, image/template, backup, atau staging restore.
- Simpan nama storage sesuai tujuan, bukan sesuai nama disk atau backend saja.
- Uji ruang kosong, mount state, dan akses node sebelum guest penting ditempatkan.
- Anggap backup belum benar sampai restore pernah dicoba.

## Kesalahan Umum
- Menaruh semuanya pada satu backend hanya karena paling mudah.
- Tidak menulis role storage pada runbook dan berharap semua operator mengingatnya.
- Mengabaikan thin provisioning atau shared storage behavior saat menilai kapasitas.
- Memakai backup target yang belum pernah diuji untuk restore nyata.

## Panduan Pengambilan Keputusan
- Mulai dari sedikit storage role yang benar-benar dibutuhkan.
- Tambahkan backend baru hanya bila fungsi, kapasitas, atau kebutuhan restore memang memerlukannya.
- Jika behavior backend berbeda menurut rilis, pegang pada pemeriksaan mount, capacity, dan inventory yang tahan lama.

## Cara Berpikir Saat Verifikasi
Setelah setiap perubahan storage, buktikan visibilitas backend, headroom, dan satu alur baca atau tulis yang nyata.

```bash
df -h
lsblk -f
findmnt -t nfs,nfs4 2>/dev/null || true
grep -Ev "^(#|$)" /etc/cloudstack/management/server.properties 2>/dev/null | head -n 20
```

## File Terkait Dalam Modul Ini
- [🧠 Ikhtisar CloudStack](./cloudstack-overview.md)
- [💽 Tambahkan Storage dengan Aman](../how-to/add-storage.md)
- [📋 Tata Letak Storage](../reference/storage-layout.md)
