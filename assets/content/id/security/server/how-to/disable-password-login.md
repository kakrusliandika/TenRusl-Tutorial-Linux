# 🔐 Nonaktifkan Login Password

## Tujuan
Pindahkan akses SSH ke kunci dan hapus login jarak jauh berbasis kata sandi tanpa mengunci diri Anda sendiri.

## Kasus Penggunaan
Gunakan ini setelah setiap akun admin yang diperlukan memiliki kunci SSH yang diuji dan Anda memiliki sesi kedua atau jalur konsol yang tersedia.

## Prasyarat
- Akses root atau sudo.
- Kunci publik SSH yang diuji untuk setiap admin yang diperlukan.
- Sesi terhubung kedua.

## Asumsi Lingkungan
- Host menggunakan OpenSSH.
- Anda dapat memuat ulang SSH dengan aman setelah validasi sintaksis.

## ⚠️ Catatan Risiko
- Jangan tutup sesi awal hingga login berbasis kunci baru berfungsi.
- Jika SSH root pecah kaca harus tetap ada, pilih `PermitRootLogin prohibit-password`.

## Prosedur Langkah demi Langkah
### 1. Cadangkan konfigurasi saat ini
Simpan konfigurasi SSH aktif sebelum mengedit.

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak.$(date +%F-%H%M%S)
```

### 2. Periksa pengaturan yang efektif
Konfirmasikan postur autentikasi saat ini terlebih dahulu.

```bash
sudo sshd -T | egrep 'passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
```

### 3. Edit kebijakan
Aktifkan autentikasi kunci dan nonaktifkan metode autentikasi gaya kata sandi.

```bash
sudoedit /etc/ssh/sshd_config
# Ensure these lines are present and not overridden later
PubkeyAuthentication yes
PasswordAuthentication no
KbdInteractiveAuthentication no
PermitRootLogin prohibit-password
```

### 4. Validasi dan muat ulang
Jangan pernah memuat ulang sebelum pemeriksaan sintaksis berhasil.

```bash
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

### 5. Tes dari sesi baru
Konfirmasikan autentikasi kunci berfungsi dan autentikasi hanya kata sandi gagal.

```bash
ssh -o PreferredAuthentications=publickey admin@server.example.com
ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no admin@server.example.com
```

## ✅ Titik Validasi
- Login berbasis kunci baru berhasil.
- Login hanya dengan kata sandi gagal.
- Konfigurasi efektif masih menampilkan `PasswordAuthentication no`.
- Log SSH terbaru bersih.

```bash
sudo sshd -T | egrep 'passwordauthentication|kbdinteractiveauthentication|pubkeyauthentication|permitrootlogin'
sudo journalctl -u sshd -u ssh -n 50 --no-pager
```

## Pemecahan masalah
- Jika `sshd -t` gagal, tinjau duplikat dan arahan yang salah.
- Jika login kunci gagal, periksa izin pada `~/.ssh` dan `authorized_keys`.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi cadangan jika validasi gagal.
- Muat ulang hanya setelah konfigurasi yang dipulihkan melewati `sshd -t`.

```bash
sudo cp /etc/ssh/sshd_config.bak.YYYY-MM-DD-HHMMSS /etc/ssh/sshd_config
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

## Dokumen Terkait
- [🔐 Kebijakan SSH](../concepts/ssh-policy.md)
- [📋 Checklist SSH](../reference/ssh-checklist.md)
- [🔐 03 Pengguna dan SSH](../tutorials/03-users-and-ssh.md)
