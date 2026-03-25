# ☁️ Virtualisasi

## Ringkasan
Virtualisasi di repositori ini berarti lebih dari sekadar menyalakan guest. Artinya, Anda membuktikan host benar-benar mendukung virtualisasi perangkat keras, jaringan sudah direncanakan, peran storage jelas, artefak guest terkendali, backup pernah diuji, dan operasi hari-ke-2 tetap bisa dibaca dari perintah Linux. Bagian ini mengikuti subtree English yang sudah dirapikan sebagai sumber kebenaran, lalu menyajikannya dalam bahasa Indonesia pada struktur file yang sama.

## Siapa yang Cocok Menggunakan Bagian Ini
- Pembelajar Linux yang bergerak dari administrasi dasar ke hypervisor, container, HCI, atau orkestrasi cloud.
- Operator homelab, VPS, dan platform internal yang membutuhkan panduan praktis untuk lifecycle guest, backup, dan recovery.
- Admin tingkat menengah yang menginginkan perintah yang bisa diulang dan langkah validasi yang jelas, bukan panduan UI saja.

## Prasyarat
- Dasar shell Linux, akses SSH, dan kenyamanan membaca output service, jaringan, dan storage.
- Host lab, lingkungan nested virtualization, atau platform non-produksi yang aman untuk pengujian.
- Kebiasaan memverifikasi dari shell setelah setiap perubahan penting.

```bash
egrep -c "(vmx|svm)" /proc/cpuinfo
lscpu | grep -i virtualization
ip -br addr
lsblk -f
```

## Jalur Belajar
1. Mulai dari Proxmox jika Anda ingin pintu masuk KVM yang dekat dengan Linux host.
2. Lanjutkan ke Incus jika Anda ingin model container dan VM yang kuat dari CLI.
3. Pindah ke Harvester saat perilaku cluster dan HCI mulai menjadi bagian dari operasi.
4. Baca CloudStack saat zona, cluster, tenant, dan orkestrasi multi-host menjadi penting.
5. Gunakan IDVE saat Anda membutuhkan pola operasi yang konservatif, berbasis Linux, dan tahan terhadap perbedaan istilah produk.

## Apa yang Dibaca Lebih Dulu
- [☁️ Proxmox](./proxmox/index.md) untuk KVM, LXC, bridge, template, dan kebiasaan backup.
- [☁️ Incus](./incus/index.md) untuk image, profile, project, dan pekerjaan control plane yang native Linux.
- [☁️ Harvester](./harvester/index.md) untuk HCI, kesehatan cluster, storage class, dan alur image VM.
- [☁️ CloudStack](./cloudstack/index.md) untuk orkestrasi cloud dan cara berpikir management plane.
- [☁️ IDVE](./idve/index.md) untuk pola validasi sisi host yang tetap berguna ketika istilah vendor berubah.

## Peta Bagian
| Platform | Cocok Untuk | Baca Dulu | Catatan |
|---|---|---|---|
| Proxmox | Operasi KVM dan LXC yang dekat dengan Linux | [Buka Proxmox](./proxmox/index.md) | Titik masuk yang bagus untuk lab dan cluster kecil. |
| Incus | Container dan VM yang dikelola dari CLI | [Buka Incus](./incus/index.md) | Kuat saat Anda butuh project, profile, dan image yang eksplisit. |
| Harvester | Operasi VM yang berorientasi cluster dan HCI | [Buka Harvester](./harvester/index.md) | Cocok saat health node, storage class, dan perilaku cluster harus dibaca bersama. |
| CloudStack | Orkestrasi cloud dan control plane multi-host | [Buka CloudStack](./cloudstack/index.md) | Tepat ketika zona, cluster, dan tenancy menjadi bagian dari desain. |
| IDVE | Operasi virtualisasi konservatif yang berjangkar pada Linux | [Buka IDVE](./idve/index.md) | Berguna saat detail produk berbeda-beda tetapi validasi host tetap penting. |

## Bagian Terkait
- [💻 Workstation](../workstation/index.md)
- [🖥️ Server](../server/index.md)
- [🛡️ Security](../security/index.md)
- [💾 Backup](../backup/index.md)
