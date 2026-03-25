# 🖼️ 04 Instal GUI

## Tujuan
Tambahkan lapisan desktop grafis ramping ke basis Lite yang stabil tanpa mengubah workstation menjadi tumpukan gaya Standard sekaligus.

## Prasyarat
- Sistem dasar melakukan booting dengan bersih dan jaringan berfungsi.
- Anda dapat masuk ke sistem teks dan menggunakan `sudo`.

## Asumsi Lingkungan
- Shell desktop minimal sudah cukup untuk Lite. Anda tidak perlu menginstal metapackage desktop yang luas di sini.

## Langkah Berurutan
### 1. Instal sesi grafis ramping
Gunakan kumpulan paket eksplisit sehingga Anda tahu apa yang sebenarnya ditambahkan oleh lapisan GUI.

```bash
sudo apt update
sudo apt install xorg lightdm xfce4 xfce4-terminal thunar network-manager-gnome
```

### 2. Tetapkan target default dan reboot ke grafik
Penginstalan desktop hanya dapat dilakukan jika sistem mencapai login grafis dengan andal.

```bash
sudo systemctl set-default graphical.target
sudo reboot
```

### 3. Validasi grafik dan perilaku input
Uji resolusi, tata letak keyboard, perangkat penunjuk, dan setidaknya satu siklus logout dan login sebelum Anda melanjutkan instalasi browser.

```bash
systemctl get-default
loginctl session-status
xrandr --query 2>/dev/null || true
```

## ✅ Checkpoint Validasi
- Login grafis muncul dan workstation bertahan logout dan reboot.
- Resolusi tampilan dan perangkat input berfungsi.
- Mesin masih terasa cukup stabil untuk melanjutkan rencana pelapisan paket.

## ⚠️ Peringatan
- Jika login grafis gagal, beralihlah ke konsol teks dan periksa manajer tampilan sebelum menambahkan lebih banyak paket desktop.
- Jangan menginstal browser, editor, dan codec terlebih dahulu dan baru kemudian menyadari bahwa GUI itu sendiri tidak stabil.

## Cleanup / Pemeriksaan Akhir
- Jika lapisan desktop mengganggu kestabilan mesin, bersihkan kumpulan paket GUI terakhir atau instal ulang dari basis stabil alih-alih melakukan improvisasi pada beberapa lingkungan desktop.

## Tutorial Berikutnya
[🌐 05 Instal Peramban](./05-install-browser.md)

## Dokumen Terkait
- [🧩 Aktifkan Driver Pihak Ketiga](../how-to/enable-third-party-drivers.md)
- [🚑 Pulihkan Setelah Boot Gagal](../how-to/recover-after-failed-boot.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
