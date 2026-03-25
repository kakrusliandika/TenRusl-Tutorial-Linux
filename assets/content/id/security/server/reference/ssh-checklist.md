# 📋 Checklist SSH

## Tujuan
Gunakan daftar periksa ini sebelum dan sesudah perubahan SSH sehingga administrasi jarak jauh tetap aman dan dapat dipulihkan.

## Referensi Terstruktur
### Poin tinjauan kebijakan
- Setiap administrator menggunakan akun bernama.
- Otentikasi berbasis kunci berfungsi untuk setiap admin yang diperlukan.
- Kata sandi dan postur interaktif keyboard didokumentasikan.
- Kebijakan login root bersifat eksplisit.
- Jalur rollback dan sesi kedua ada sebelum perubahan berisiko.

### Poin tinjauan pemulihan
- Ada cadangan konfigurasi SSH terakhir yang berfungsi.
- Akses out-of-band atau konsol didokumentasikan.
- Log SSH terbaru mudah ditinjau.

## Catatan Interpretasi Praktis
- Tinjauan SSH harus mencakup kebijakan dan pemulihan. Kontrol akses yang kuat tanpa jalur pemulihan masih lemah secara operasional.

## Cuplikan Perintah
```bash
sudo sshd -T | egrep 'port|listenaddress|passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
sudo journalctl -u sshd -u ssh -n 50 --no-pager
getent passwd | grep -E '/bin/(bash|zsh|sh)$'
```

## Dokumen Terkait
- [🔐 Kebijakan SSH](../concepts/ssh-policy.md)
- [🔐 Nonaktifkan Login Kata Sandi](../how-to/disable-password-login.md)
- [🔐 03 Pengguna dan SSH](../tutorials/03-users-and-ssh.md)
