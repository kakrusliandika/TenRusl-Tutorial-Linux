# 🔐 Tutorial 05: Pengguna dan SSH

## Tujuan
Tetapkan jalur akses admin yang aman menggunakan pengguna bernama, SSH, dan pengujian sesi kedua sebelum dilakukan pengerasan nanti.

## Prasyarat
- Identitas jaringan stabil.
- Anda telah menyiapkan kunci publik admin.

## Asumsi Lingkungan
- Akses konsol masih tersedia jika kebijakan SSH perlu dikembalikan.

## Langkah Berurutan
### 1. Instal dan validasi layanan SSH jika belum aktif
```bash
sudo apt-get update
sudo apt-get install -y openssh-server
sudo systemctl enable --now ssh

systemctl status ssh --no-pager
```

### 2. Buat akun admin dan muat kunci publik
```bash
id adminops 2>/dev/null || sudo useradd -m -s /bin/bash adminops
sudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true
sudo install -d -m 0700 -o adminops -g adminops /home/adminops/.ssh
sudo install -m 0600 -o adminops -g adminops /dev/stdin /home/adminops/.ssh/authorized_keys <<'EOF'
ssh-ed25519 AAAA...replace-with-real-key... adminops@example
EOF
```

### 3. Uji SSH dari sesi kedua sebelum menutup sesi pertama
```bash
ssh adminops@server-ip
```


## ✅ Pos Pemeriksaan Validasi
- Tujuan yang dinyatakan untuk tutorial ini dapat diverifikasi dari shell.
- Catatan untuk operator selanjutnya lebih jelas dibandingkan sebelum tutorial dimulai.

## ⚠️ Peringatan
- Jangan menyebut host siap jika SSH, firewall, penyimpanan, dan tinjauan layanan masih tidak terdokumentasi.

## Pembersihan / Pasca-Pemeriksaan
- Simpan status host yang dihasilkan di catatan server.

## Tutorial Selanjutnya
[➡️ 06 Penyimpanan](./06-storage.md)

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🛡️ Keamanan](../../../../security/index.md)
- [💾 Cadangan](../../../../backup/index.md)
