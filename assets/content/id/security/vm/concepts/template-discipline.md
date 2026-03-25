# 🧠 Disiplin Template

## Ringkasan
Disiplin templat berarti memperlakukan templat VM sebagai artefak keamanan yang terkontrol, bukan sebagai tiruan dari mesin yang pernah berfungsi.

## Apa Arti Konsep Ini
Proses templat yang disiplin mencakup tingkat patch, perilaku booting pertama, pengaturan ulang identitas, penghapusan rahasia, dan pelacakan versi. Templat harus aman untuk dikloning berulang kali tanpa mewarisi kepercayaan yang sudah basi.

## Mengapa Itu Penting
Setiap klon mewarisi kekuatan dan kesalahan template. Kebersihan template yang buruk melipatgandakan risiko di seluruh perkebunan.

## Konteks Ancaman / Paparan
Praktik templat yang lemah menyebarkan identitas mesin duplikat, paket usang, kredensial yang disimpan, dan data pemecahan masalah yang mengganggu ke setiap tamu baru.

## Prinsip Desain
- Buat templat dari dasar yang diketahui, bukan dari tamu langsung secara acak.
- Reset artefak yang membawa identitas sebelum menerbitkan template.
- Versi dan pensiunkan templat dengan sengaja.
- Simpan templat yang dikenal bagus sebelumnya untuk dikembalikan.

## Trade-off Operasional
- Proses penyegelan dan pelepasan yang lebih ketat memperlambat kloning ad hoc namun mencegah kesalahan bawaan yang berulang.
- Templat yang lebih bersih memerlukan otomatisasi dan pengujian boot pertama yang lebih baik.
- Mempertahankan template lama membantu melakukan rollback tetapi menambah overhead inventaris.

## Kesalahan Umum
- Menerbitkan templat langsung dari VM pemecahan masalah.
- Lupa menghapus rahasia, kunci host, atau ID mesin.
- Menyimpan template lama selamanya tanpa catatan penghentian yang jelas.

## Dokumen Terkait
- [🧱 Dasar Pengerasan VM](./vm-hardening-baseline.md)
- [🧰 Buat Templat Emas](../how-to/create-golden-template.md)
- [🧼 04 Kebersihan Templat](../tutorials/04-template-hygiene.md)
