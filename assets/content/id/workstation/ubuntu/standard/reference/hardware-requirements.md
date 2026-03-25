# 📋 Persyaratan Perangkat Keras

## Tujuan
Gunakan panduan ini untuk memutuskan apakah mesin dapat mendukung profil desktop Standard yang lebih luas dengan nyaman.

## Materi Referensi Terstruktur
| Sumber Daya | Minimal realistis | Target Standard Nyaman | Catatan |
|---|---|---|---|
| CPU | Modern 2-inti dan 4-utas | 4 atau lebih inti | Layanan desktop latar belakang dan browser mendapat manfaat dari CPU yang lebih kuat |
| RAM | 8 GiB | 16 GiB | Standard tetap dapat digunakan pada 8 GiB, namun multitasking meningkat secara signifikan di atas |
| Penyimpanan | SSD 64 GiB | SSD 128 GiB atau lebih | Media, cache kantor, alat pengembangan, dan pembaruan memerlukan ruang |
| Grafik | GPU terintegrasi yang stabil | GPU diskrit yang terintegrasi atau didukung | Desktop kelas GNOME lebih menginginkan grafis yang andal daripada kinerja ekstrem |
| Jaringan | Kabel atau Wi-Fi yang stabil | Wi-Fi dual-band atau Ethernet dock yang andal | Penting untuk pembaruan, pekerjaan jarak jauh, dan beban kerja media |

## Perintah / Potongan Pemeriksaan
```bash
lscpu | sed -n '1,20p'
free -h
lsblk -d -o NAME,SIZE,MODEL,ROTA
```

## Catatan Praktis
- Mesin yang secara teknis melakukan booting Standard mungkin masih terasa buruk jika ruang kepala RAM atau SSD terlalu sempit.
- Jika ragu, bandingkan perangkat keras dengan beban kerja pengguna sebenarnya, bukan hanya beban minimum penginstal.

## Dokumen Terkait
- [🧠 Kapan Memilih Standard](../concepts/when-to-choose-standard.md)
- [📋 02 Instal Preflight](../tutorials/02-install-preflight.md)
- [💻 Referensi Perangkat Keras Ubuntu Lite](../../lite/reference/hardware-requirements.md)
