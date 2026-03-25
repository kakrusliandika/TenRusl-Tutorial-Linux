# 🧩 Aktifkan Driver Pihak Ketiga

## Tujuan
Instal atau konfirmasi driver vendor opsional hanya setelah sistem dasar Ubuntu Lite sudah stabil.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika Wi-Fi, akselerasi GPU, atau dukungan perangkat keras lainnya tidak lengkap dengan driver kernel default dan peran stasiun kerja memerlukan paket vendor.

## Prasyarat
- Instalasi dasar yang berfungsi dan sudah melakukan booting secara konsisten.
- Akses internet pada sistem yang diinstal.
- Pengetahuan tentang perangkat keras mana yang sebenarnya memerlukan driver pihak ketiga.

## ⚠️ Catatan Risiko
- Perubahan driver dapat merusak login grafis, menangguhkan, atau perilaku tampilan eksternal.
- Jangan menginstal driver secara spekulatif untuk berjaga-jaga.

## Asumsi Lingkungan
- Anda menggunakan sistem Ubuntu Lite yang terinstal, bukan hanya sesi langsung.
- Anda telah menyimpan USB penginstal sehingga pemulihan tetap dapat dilakukan jika perubahan driver berjalan buruk.

## Prosedur Langkah demi Langkah
### 1. Inventarisasi perangkat keras saat ini dan driver yang aktif
Catat apa yang sudah digunakan kernel sebelum Anda mengubah apa pun.

```bash
lspci -nnk
lsusb
ubuntu-drivers devices || true
```

### 2. Instal hanya kelas driver yang benar-benar Anda perlukan
Gunakan alat Ubuntu terlebih dahulu daripada mengambil paket acak dari panduan pihak ketiga.

```bash
sudo apt update
sudo ubuntu-drivers autoinstall
```

### 3. Nyalakan ulang dan uji jalur perangkat keras yang terpengaruh
Keberhasilan driver bukan hanya dari paket yang diinstal. Uji login, rendering, Wi-Fi, tangguhkan, lanjutkan, dan tampilan eksternal jika relevan.

```bash
systemctl reboot
```

### 4. Pastikan driver baru benar-benar digunakan
Gunakan perintah inspeksi yang sesuai dengan kelas perangkat keras.

```bash
lspci -nnk | sed -n '1,160p'
modinfo -F filename $(lspci -nnk | awk '/Kernel modules:/ {print $3; exit}') 2>/dev/null || true
nvidia-smi 2>/dev/null || true
```

## ✅ Checkpoint Validasi
- Mesin masih melakukan booting dengan bersih dan mencapai sesi grafis.
- Masalah perangkat keras yang ingin diselesaikan oleh driver sebenarnya telah diperbaiki.
- Suspend, resume, dan reboot tetap berfungsi setelah driver diganti.

## Catatan Troubleshooting
- Jika sistem menjadi layar hitam setelah login, beralihlah ke konsol teks dan hapus paket driver terakhir sebelum mencoba perubahan lebih lanjut.
- Jika nirkabel membaik tetapi jeda terhenti, perhatikan bahwa pilihan driver mungkin masih tidak dapat diterima untuk alur kerja laptop.

## ↩️ Catatan Rollback / Recovery
- Simpan daftar paket sebelumnya dan bersihkan driver yang baru ditambahkan jika workstation menjadi kurang dapat diandalkan.
- Jika tumpukan grafis rusak, gunakan mode pemulihan atau live USB untuk menghapus kumpulan paket yang mengganggu sebelum melanjutkan.

## Dokumen Terkait
- [🖼️ 04 Instal GUI](../tutorials/04-install-gui.md)
- [🚑 Pulihkan Setelah Boot Gagal](./recover-after-failed-boot.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
