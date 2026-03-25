# 📚 00 Indeks Tutorial

## Tujuan
Gunakan peta bab ini untuk membangun Ubuntu Lite dalam lapisan terkontrol dan hindari mengubah stasiun kerja menjadi eksperimen paket acak.

## Prasyarat
- Anda sudah memutuskan Lite adalah trek yang tepat untuk mesin ini.
- Anda dapat berkomitmen untuk menyelesaikan urutannya daripada berhenti setelah penginstal berhasil.

## Asumsi Lingkungan
- Workstation akan dibangun secara bertahap: preflight, base install, GUI, browser, editor, dev, media, cleanup, closeout.
- Anda akan menghentikan sementara urutan jika satu lapisan tidak stabil daripada melanjutkan secara membabi buta.

## Langkah Berurutan
### 1. Tinjau urutan bab sebelum Anda mulai
Urutan ini dirancang untuk menjaga agar kegagalan hanya disebabkan oleh satu lapisan pada satu waktu, bukan karena angkanya terlihat rapi.

```text
01 Introduction -> 02 Install Preflight -> 03 Install Core -> 04 Install GUI -> 05 Install Browser -> 06 Install Editor -> 07 Install Dev -> 08 Install Media -> 09 Cleanup -> 10 Closeout
```

### 2. Siapkan catatan build dan catatan rollback Anda terlebih dahulu
Instalasi Lite paling mudah didukung ketika Anda mencatat penambahan paket dan hasil validasi setelah setiap tutorial.

```bash
mkdir -p ~/workstation-notes
printf 'Host: %s
Date: %s
' "$(hostnamectl --static 2>/dev/null || echo target-host)" "$(date -Iseconds)" > ~/workstation-notes/build-notes.txt
```

## ✅ Checkpoint Validasi
- Anda mengetahui file selanjutnya yang harus dibaca sebelum menyentuh media penginstal.
- Direktori catatan Anda ada dan dapat menyimpan daftar paket dan pemeriksaan kesehatan nanti secara berurutan.

## ⚠️ Peringatan
- Jangan perlakukan indeks tutorial sebagai bacaan opsional; ini mendefinisikan tatanan ramah pemulihan.
- Jika mesin Anda melakukan dual-boot, baca halaman petunjuk BitLocker dan Intel RST sebelum tutorial 03.

## Cleanup / Pemeriksaan Akhir
- Biarkan direktori catatan dan USB penginstal tersedia hingga tutorial 10 selesai.

## Tutorial Berikutnya
[📘 01 Pendahuluan](./01-introduction.md)

## Dokumen Terkait
- [🧠 Apa Arti Ubuntu Lite Di Sini](../concepts/what-is-lite.md)
- [✅ Verifikasi ISO](../how-to/verify-iso.md)
- [↩️ Rencana Kembalikan](../how-to/rollback-plan.md)
