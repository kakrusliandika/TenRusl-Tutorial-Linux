# 🧭 04 Aplikasi Bawaan

## Tujuan
Tetapkan default desktop Standard sehingga pengguna diarahkan ke browser, editor, dan alur email yang diinginkan, bukan status acak pasca-instalasi.

## Prasyarat
- Pemasangan dasar Standard sehat.
- Aplikasi default pilihan sudah diinstal atau dipilih.

## Asumsi Lingkungan
- Default harus mencerminkan peran stasiun kerja dan harapan pengguna, bukan paket yang diinstal pertama kali.

## Langkah Berurutan
### 1. Periksa default saat ini
Ketahui apa yang dilakukan sesi hari ini sebelum Anda mengubahnya.

```bash
xdg-settings get default-web-browser
xdg-mime query default text/plain
xdg-mime query default x-scheme-handler/mailto
```

### 2. Atur default yang dipilih
Terapkan hanya asosiasi yang benar-benar dibutuhkan stasiun kerja.

```bash
xdg-settings set default-web-browser firefox.desktop
xdg-mime default org.gnome.TextEditor.desktop text/plain
xdg-mime default thunderbird.desktop x-scheme-handler/mailto
```

### 3. Uji tindakan pengguna sebenarnya
Buka tautan web, file teks, dan tautan mailto untuk mengonfirmasi bahwa pengaturan berfungsi di luar shell.

## ✅ Checkpoint Validasi
- Default yang dimaksud adalah aktif dan dapat diulang.
- Defaultnya didokumentasikan bersama dengan peran stasiun kerja.

## ⚠️ Peringatan
- Jika asosiasi tidak melekat, periksa pengenal `.desktop` yang sebenarnya daripada mengeluarkan perintah yang sama berulang kali.

## Cleanup / Pemeriksaan Akhir
- Simpan sedikit catatan default sehingga pengaturan ulang atau pembuatan ulang profil dapat dipulihkan dengan cepat.

## Tutorial Berikutnya
[📚 05 Produktivitas](./05-productivity.md)

## Dokumen Terkait
- [🧭 Tetapkan Aplikasi Default](../how-to/set-default-apps.md)
- [📋 Matriks Aplikasi](../reference/application-matrix.md)
- [📦 Instal Aplikasi Ekstra](../how-to/install-extra-apps.md)
