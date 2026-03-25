# 🧱 Baseline Hardening VM

## Ringkasan
Garis dasar pengerasan VM menentukan ekspektasi keamanan minimum untuk tamu, templat, dan alur kerja di sekitarnya.

## Apa Arti Konsep Ini
Ini mencakup identitas tamu, status pembaruan, penempatan jaringan, kontrol akses, disiplin snapshot, kesiapan pencadangan, dan visibilitas log. Tidak seperti pengerasan host umum, pengerasan ini juga harus memperhitungkan perilaku kloning dan lapisan yang menghadap hypervisor.

## Mengapa Itu Penting
VM mudah dibuat dan mudah dilupakan. Garis dasar membuat kawasan tetap terukur dan bukannya membiarkan penyimpangan menjadi normal.

## Konteks Ancaman / Paparan
Garis dasar VM yang lemah membuat Anda rentan terhadap duplikat identitas, lalu lintas timur-barat yang tidak terkontrol, pemulihan yang rapuh, dan akses konsol yang tidak terkelola.

## Prinsip Desain
- Perlakukan tamu dan bidang kendali di sekitarnya sebagai satu sistem keamanan.
- Jaga agar peran, zona kepercayaan, sumber templat, dan jalur pemulihan tetap terlihat.
- Lebih memilih snapshot permanen yang lebih sedikit dan jaringan bersama yang lebih sedikit.
- Validasi dari shell tamu dan inventaris host jika memungkinkan.

## Trade-off Operasional
- Lebih banyak segmentasi meningkatkan keamanan tetapi menambahkan pemeliharaan jaringan dan firewall.
- Retensi snapshot singkat mengurangi hutang penyimpanan namun memperkecil jendela rollback.
- Kontrol tamu yang kuat tetap tidak menghilangkan kebutuhan akan kontrol akses sisi hypervisor.

## Kesalahan Umum
- Dengan asumsi tamu yang dikeraskan tetap mengeras setelah kloning berulang kali.
- Memanggil cadangan snapshot.
- Mengabaikan tes pemulihan karena ekspor ada di suatu tempat.

## Dokumen Terkait
- [🧠 Disiplin Templat](./template-discipline.md)
- [📋 Checklist Hardening VM](../reference/vm-hardening-checklist.md)
- [✅ 09 Pengerasan](../tutorials/09-hardening.md)
