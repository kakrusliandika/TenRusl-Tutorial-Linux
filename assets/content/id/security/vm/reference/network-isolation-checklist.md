# 📋 Checklist Isolasi Jaringan

## Tujuan
Gunakan daftar periksa ini untuk mengonfirmasi bahwa batas jaringan virtual masih sesuai dengan model kepercayaan yang diinginkan.

## Referensi Terstruktur
| Periksa | Mengapa itu penting | Verifikasi cepat |
| --- | --- | --- |
| Setiap tamu memiliki zona kepercayaan yang terdokumentasi | Mencegah pencampuran jaringan yang tidak disengaja | Tinjau lembar inventaris |
| Lalu lintas manajemen terpisah jika diperlukan | Melindungi jalur admin | Periksa antarmuka dan desain rute |
| Lalu lintas timur-barat secara eksplisit diperbolehkan atau ditolak | Mengurangi gerakan lateral | Tes dari satu tamu ke tamu lainnya |
| Jaringan build atau template dipisahkan | Menghentikan sistem persiapan agar tidak bercampur dengan beban kerja | Tinjau keanggotaan bridge atau VLAN |
| Jalan keluar pencadangan atau pembaruan didokumentasikan | Mencegah perataan darurat di kemudian hari | Validasi rute dan perilaku DNS |

## Catatan Interpretasi Praktis
- Label di UI bukan bukti isolasi. Tes dari tamu atau tuan rumah.
- Jika suatu segmen tidak memiliki jalur keluar yang terdokumentasi, operator akan melewati isolasi selama pemeliharaan.

## Cuplikan Perintah
```bash
ip -br addr
ip route
ping -c 2 192.168.250.1 2>/dev/null || true
sudo virsh net-list --all 2>/dev/null || true
```

## Dokumen Terkait
- [🌐 Menyiapkan Jaringan Terisolasi](../how-to/set-up-isolated-network.md)
- [🌐 03 Isolasi Jaringan](../tutorials/03-network-isolation.md)
- [🧱 Keamanan VM](../index.md)
