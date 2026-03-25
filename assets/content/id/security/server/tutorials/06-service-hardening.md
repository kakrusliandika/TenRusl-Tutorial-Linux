# 🧰 06 Hardening Layanan

## Tujuan
Hapus atau perketat layanan yang tidak perlu.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau unit yang diaktifkan
Layanan yang tidak digunakan harus hilang sebelum pengerasan lebih dalam.

```bash
sudo systemctl list-unit-files --state=enabled --no-pager | sed -n "1,80p"
```

### 2. Nonaktifkan sisa makanan yang terlihat jelas
Hanya setelah mengonfirmasi peran tuan rumah tidak memerlukannya.

```bash
sudo systemctl disable --now avahi-daemon 2>/dev/null || true
sudo systemctl disable --now cups 2>/dev/null || true
```

### 3. Tinjau opsi pengerasan unit
Gunakan layanan drop-in dengan hati-hati.

```bash
sudo systemctl cat sshd 2>/dev/null || sudo systemctl cat ssh
sudo systemctl edit sshd 2>/dev/null || sudo systemctl edit ssh
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 07 Izin File](./07-file-permissions.md)
