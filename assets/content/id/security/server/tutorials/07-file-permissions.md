# 📁 07 Izin File

## Tujuan
Perbaiki kepemilikan berisiko dan jalur yang dapat ditulis dunia.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Cari mode berisiko yang jelas
Jalur yang ditulis oleh dunia memerlukan penjelasan atau koreksi.

```bash
sudo find /etc -xdev \( -type f -o -type d \) -perm -0002 -ls
sudo find /usr/local -xdev \( -type f -o -type d \) -perm -0002 -ls
```

### 2. Tinjau file sensitif
Konfigurasi administratif harus memiliki mode yang sempit.

```bash
sudo ls -l /etc/ssh/sshd_config /etc/shadow /etc/sudoers 2>/dev/null
sudo find /home -maxdepth 2 -name authorized_keys -ls
```

### 3. Perbaiki masalah tertentu
Ubah hanya jalur yang Anda pahami.

```bash
sudo chmod 600 /path/to/secret
sudo chown root:root /path/to/secret
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 08 Pencatatan](./08-logging.md)
