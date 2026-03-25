# 🧭 Tetapkan Aplikasi Default

## Tujuan
Jadikan desktop Standard dapat diprediksi dengan mengatur default browser, editor, email, dan penanganan file secara sengaja.

## Kapan Menggunakan Prosedur Ini
Gunakan ini setelah pilihan aplikasi utama sudah terinstal dan peran workstation jelas.

## Prasyarat
- Aplikasi pilihan sudah terinstal.
- Anda tahu tindakan mana yang paling penting bagi pengguna: tautan web, file teks, tautan mailto, PDF, gambar, dan file media.

## ⚠️ Catatan Risiko
- Mengubah default tanpa persetujuan pengguna dapat terasa seperti kerusakan pada mesin bersama.

## Asumsi Lingkungan
- Anda sedang mengonfigurasi sesi desktop lokal, bukan mesin kebijakan seluruh armada.

## Prosedur Langkah demi Langkah
### 1. Periksa default saat ini
Baca asosiasi aplikasi saat ini sebelum Anda mengubahnya.

```bash
xdg-settings get default-web-browser
xdg-mime query default text/plain
xdg-mime query default x-scheme-handler/mailto
```

### 2. Terapkan default baru
Gunakan alat desktop yang benar-benar dihormati oleh sesi ini. Nama MIME berbeda-beda menurut paket aplikasi, jadi konfirmasikan nama tersebut setelah instalasi.

```bash
xdg-settings set default-web-browser firefox.desktop
xdg-mime default org.gnome.TextEditor.desktop text/plain
xdg-mime default thunderbird.desktop x-scheme-handler/mailto
```

### 3. Periksa kembali asosiasi setelah logout atau login jika diperlukan
Beberapa sesi desktop menyimpan cache bagian dari status asosiasi default hingga sesi pengguna disegarkan.

## ✅ Checkpoint Validasi
- Browser, editor, dan pengendali email yang dimaksud kini menjadi default yang aktif.
- Peran stasiun kerja dan defaultnya didokumentasikan bersama.

## Catatan Troubleshooting
- Jika lingkungan desktop mengabaikan pengaturan, periksa nama file `.desktop` yang sebenarnya dan asosiasi MIME daripada menerapkan perintah yang sama berulang kali.

## ↩️ Catatan Rollback / Recovery
- Catat secara singkat pengaturan default yang dipilih sehingga instalasi ulang nanti atau pengaturan ulang profil pengguna dapat dipulihkan dengan cepat.

## Dokumen Terkait
- [🧭 04 Aplikasi Bawaan](../tutorials/04-default-apps.md)
- [📦 Instal Aplikasi Ekstra](./install-extra-apps.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
