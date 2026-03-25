# 🔐 Instal OpenSSH

## Tujuan
Instal dan verifikasi OpenSSH di Debian sehingga server memiliki jalur administrasi jarak jauh yang stabil dan dapat diuji sebelum perubahan peran di kemudian hari.

## Kapan Menggunakan Prosedur Ini
Gunakan ini segera setelah OS dasar diinstal atau ketika paket server SSH hilang, dinonaktifkan, atau tidak tepercaya.

## Prasyarat
- Akses konsol, penyelamatan, atau hypervisor.
- Akun admin terencana dan setidaknya satu jaringan manajemen yang diizinkan.

## Asumsi Lingkungan
- Repositori paket dan sinkronisasi waktu sudah berfungsi.
- Anda dapat membiarkan satu sesi tetap terbuka saat menguji sesi kedua.

## Langkah Tepat
### 1. Instal server SSH dan aktifkan layanan
```bash
sudo apt-get update
sudo apt-get install -y openssh-server
sudo systemctl enable --now ssh
```

### 2. Konfirmasikan bahwa daemon mendengarkan dan meninjau log terbaru
```bash
systemctl status ssh --no-pager
ss -ltnp | grep ':22' || true
journalctl -u ssh -n 50 --no-pager
```

### 3. Buat atau konfirmasi akun admin bernama sebelum memperketat kebijakan
```bash
id adminops 2>/dev/null || sudo useradd -m -s /bin/bash adminops
sudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true
sudo install -d -m 0700 -o adminops -g adminops /home/adminops/.ssh
```

### 4. Uji SSH dari terminal kedua
```bash
ssh adminops@server-ip
```

## ✅ Pos Pemeriksaan Validasi
- Layanan SSH diaktifkan dan aktif.
- Port 22 mendengarkan alamat yang diharapkan.
- Sesi SSH kedua berhasil sebelum sesi asli ditutup.

## Pemecahan masalah
- Layanan gagal setelah instalasi: periksa status unit dan log terbaru terlebih dahulu.
- Port 22 hilang: konfirmasikan apakah daemon mendengarkan pada alamat yang berbeda atau gagal memulai.
- Login gagal: verifikasi shell, kepemilikan rumah, dan kebijakan firewall secara bersamaan.

## ↩️ Catatan Kembalikan / Pemulihan
- Jika daemon gagal dan Anda belum memerlukan akses jarak jauh, hapus paket dan atasi masalah dari konsol.
- Jangan pernah menonaktifkan jalur akses saat ini hingga jalur pengganti terbukti.

## Dokumen Terkait
- [🔐 SSH Pertama](../concepts/ssh-first.md)
- [🛡️ Konfigurasi Firewall](./configure-firewall.md)
- [🔐 Tutorial 05: Pengguna dan SSH](../tutorials/05-users-and-ssh.md)
