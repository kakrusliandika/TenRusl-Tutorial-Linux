# 🔐 03 Pengguna dan SSH

## Tujuan
Stabilkan identitas admin, distribusi kunci, dan kebijakan akses jarak jauh.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Buat atau tinjau akun admin bernama
Hindari identitas bersama.

```bash
sudo useradd -m -s /bin/bash adminops 2>/dev/null || true
sudo usermod -aG sudo adminops 2>/dev/null || sudo usermod -aG wheel adminops 2>/dev/null || true
id adminops
```

### 2. Instal kunci publik admin
Tetapkan izin yang benar sebelum menyentuh kebijakan SSH.

```bash
sudo install -d -m 700 -o adminops -g adminops /home/adminops/.ssh
sudo install -m 600 -o adminops -g adminops /dev/null /home/adminops/.ssh/authorized_keys
sudoedit /home/adminops/.ssh/authorized_keys
```

### 3. Validasi postur SSH
Periksa sintaks sebelum memuat ulang.

```bash
sudo sshd -t
sudo systemctl reload sshd 2>/dev/null || sudo systemctl reload ssh
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 04 Firewall](./04-firewall.md)
