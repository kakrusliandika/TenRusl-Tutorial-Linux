# 📋 Paket Dasar

## Tujuan
Gunakan referensi ini sebagai lantai paket Lite default setelah instalasi dasar berjalan dengan baik.

## Materi Referensi Terstruktur
| Paket atau grup | Mengapa menyimpannya di baseline |
|---|---|
| `openssh-client` | Dibutuhkan di banyak stasiun kerja admin dan pengembang |
| `curl` dan `wget` | Unduhan praktis dan alat inspeksi API |
| `ca-certificates` | Diperlukan untuk lalu lintas HTTPS tepercaya |
| `git` | Garis dasar stasiun kerja umum untuk catatan dan manajemen sumber |
| `vim`, `nano`, atau `micro` | Selalu simpan setidaknya satu editor yang dapat diandalkan |
| perkakas `network-manager` | Dibutuhkan di laptop dan lingkungan Wi-Fi desktop |
| `pciutils`, `usbutils`, `lshw` | Inspeksi perangkat keras yang cepat selama pemecahan masalah |

## Perintah / Potongan Pemeriksaan
```bash
apt-cache policy openssh-client curl wget ca-certificates git vim nano micro pciutils usbutils lshw
```

## Catatan Praktis
- Garis dasar harus tetap cukup kecil sehingga Anda dapat menjelaskan setiap paket pada mesin.
- Jika suatu paket hanya untuk tugas satu kali, instal nanti dan pertimbangkan untuk menghapusnya setelah digunakan.

## Dokumen Terkait
- [🧠 Minimal Pertama](../concepts/minimal-first.md)
- [📋 Paket Opsional](./package-optional.md)
- [🧪 07 Instal Pengembang](../tutorials/07-install-dev.md)
