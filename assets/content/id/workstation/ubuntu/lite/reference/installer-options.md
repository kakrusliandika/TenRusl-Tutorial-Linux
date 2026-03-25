# 📋 Opsi Pemasang

## Tujuan
Gunakan halaman ini untuk membandingkan pilihan penginstal dan menjaga agar Ubuntu Lite tetap selaras dengan hasil yang minimal.

## Materi Referensi Terstruktur
| Keputusan pemasang | Lebih suka ketika... | Hindari ketika... | Catatan |
|---|---|---|---|
| Opsi pemasangan minimal | Anda menginginkan kumpulan aplikasi default yang lebih kecil | Rilis ini tidak lagi menawarkan label atau peran sistem menuntut default yang luas | Kata-kata UI mungkin berbeda berdasarkan rilis |
| Opsi pemasangan normal atau lebih lengkap | Anda tetap mengarah ke perilaku Standard | Anda ingin visibilitas paket Lite | Nilai kembali pilihan jalur jika ini terus terjadi |
| Partisi terpandu | Disk tujuan tunggal dengan cadangan yang baik | Boot ganda, tata letak yang tidak biasa, atau tujuan partisi yang ketat | Kesederhanaan mengalahkan kepintaran |
| Partisi manual | Anda memerlukan kontrol eksplisit atas penggunaan kembali root, home, atau ESP | Anda belum memahami tata letak disk saat ini | Gunakan hanya setelah memeriksa disk terlebih dahulu |
| Pemilihan driver pihak ketiga di penginstal | Anda sudah tahu bahwa perangkat keras memerlukannya | Anda masih tidak yakin apakah driver kernel default cukup | Pengaktifan driver pasca-instal seringkali lebih mudah untuk dipikirkan |

## Perintah / Potongan Pemeriksaan
```bash
lsblk -f
sudo parted -l
```

## Catatan Praktis
- Pilih jalur penginstal terkecil yang masih sesuai dengan peran stasiun kerja.
- Ketika bahasa penginstal berubah di antara rilis, terjemahkan kembali ke hasil: ukuran paket, perilaku disk, penyertaan driver, dan kebenaran mode boot.

## Dokumen Terkait
- [🖥️ Instal di UEFI](../how-to/install-on-uefi.md)
- [🖥️ Instal di BIOS / Legacy](../how-to/install-on-bios-legacy.md)
- [🧠 Minimal Pertama](../concepts/minimal-first.md)
