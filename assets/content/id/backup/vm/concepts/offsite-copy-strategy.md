# 🧠 Strategi Salinan Offsite

## Ringkasan
Strategi offsite menentukan bagaimana generasi backup VM keluar dari platform sumber, bagaimana diverifikasi dari sisi remote, dan berapa banyak copy yang realistis untuk dipertahankan.

## Apa Arti Konsep Ini
Backup VM baru benar-benar offsite ketika salinan remote lengkap, checksum-nya bisa diverifikasi, dan dapat direstore tanpa bergantung pada hypervisor atau datastore sumber.

## Mengapa Ini Penting secara Operasional
- Artefak VM yang besar mengubah profil bandwidth dan jendela backup.
- Backup lokal di cluster yang sama melindungi dari mode kegagalan yang lebih sedikit dibanding salinan offsite.
- Salinan remote harus menyimpan metadata yang cukup untuk restore tanpa menebak disk mana milik generasi guest tertentu.

## Cara Pandang Restore-First
Pertanyaan restore-first-nya sederhana: jika hypervisor hilang, apakah Anda masih bisa menemukan generasi yang benar, mempercayai integritasnya, dan mengimpornya ke platform lain? Jika jawabannya masih bergantung pada pengetahuan lisan, desain offsite belum selesai.

## Implikasi Retensi, Offsite, dan Konsistensi
- Kebijakan retensi lokal dan offsite sering berbeda karena storage remote lebih lambat tetapi lebih bernilai saat kegagalan site.
- File checksum dan manifest kecil harus ikut berpindah bersama hasil ekspor disk agar verifikasi bisa terjadi di sisi remote.
- Jika backup sumber hanya crash-consistent, catatan itu juga harus ikut ke offsite.

## Kesalahan Umum
- Menghapus satu-satunya copy lokal sebelum copy remote diperiksa.
- Menyimpan copy remote tanpa manifest yang menjelaskan nama guest, waktu ekspor, dan format storage.
- Mengabaikan kegagalan transfer karena tool sinkronisasi keluar setelah menyalin image besar secara parsial.

## Dokumen Terkait
- [🛠️ Jadwalkan Backup VM](../how-to/schedule-vm-backups.md)
- [📚 Kebijakan Retensi](../reference/retention-policy.md)
- [☁️ Tutorial 04: Salin Offsite](../tutorials/04-copy-offsite.md)
