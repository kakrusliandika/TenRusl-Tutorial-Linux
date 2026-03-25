# 📋 Paket Opsional

## Tujuan
Gunakan halaman ini untuk memutuskan paket non-esensial mana yang harus dimasukkan ke dalam Ubuntu Lite hanya jika peran stasiun kerja membenarkannya.

## Materi Referensi Terstruktur
| Paket atau grup | Mengapa ini opsional | Tambahkan ketika... |
|---|---|---|
| `vlc` atau `mpv` | Pemutaran media tidak diperlukan di setiap workstation | Mesin ini juga digunakan untuk pemutaran audio dan video |
| `libreoffice` | Berat untuk beberapa bangunan ramping | Alur kerja kantor adalah bagian dari peran |
| `remmina` | Hanya diperlukan untuk admin atau dukungan jarak jauh | Anda secara rutin menjangkau desktop jarak jauh |
| `gnome-disk-utility` | Berguna tetapi tidak diperlukan di semua tempat | Mesin sering menangani media eksternal |
| `flatpak` | Memperluas sumber aplikasi dan permukaan dukungan | Anda sengaja menginginkan pengorbanan itu |
| `virt-manager` | Tidak semua stasiun kerja menghosting VM lokal | Mesin ini juga merupakan konsol virtualisasi lokal |

## Perintah / Potongan Pemeriksaan
```bash
apt-cache policy vlc mpv libreoffice remmina gnome-disk-utility flatpak virt-manager
```

## Catatan Praktis
- Opsional bukan berarti buruk; artinya bergantung pada peran.
- Setiap paket opsional harus memiliki alasan tertulis untuk ada di Lite.

## Dokumen Terkait
- [📋 Matriks Aplikasi](./application-matrix.md)
- [🎵 Instal Codec](../how-to/install-codecs.md)
- [🧰 08 Alat Opsional](../../standard/tutorials/08-optional-tools.md)
