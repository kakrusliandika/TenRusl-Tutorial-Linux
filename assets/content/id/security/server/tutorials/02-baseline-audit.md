# 📋 02 Audit Baseline

## Tujuan
Kumpulkan audit terverifikasi shell terhadap paket, pengguna, jaringan, mount, dan layanan yang diaktifkan.

## Prasyarat
- Akses Sudo ke host atau jalur inspeksi yang relevan.
- File catatan yang dapat ditulis untuk temuan dan pengecualian.

## Asumsi Lingkungan
- Host cukup stabil untuk pekerjaan peninjauan dan setiap pengeditan yang berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau postur tambalan
Periksa pembaruan yang tertunda dengan manajer paket host.

```bash
if command -v apt >/dev/null 2>&1; then
  apt list --upgradable 2>/dev/null | sed -n "1,20p"
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf check-update || true
fi
```

### 2. Tinjau pengguna dan jalur ketinggian
Temukan akun interaktif dan konsentrasi hak istimewa yang jelas.

```bash
getent passwd | grep -E "/bin/(bash|zsh|sh)$"
sudo getent group sudo wheel || true
sudo ls -l /etc/sudoers /etc/sudoers.d 2>/dev/null
```

### 3. Tinjau jaringan dan penyimpanan
Tangkap keadaan yang cukup untuk menemukan kejutan nanti.

```bash
ip -br addr
ip route
findmnt -lo TARGET,SOURCE,FSTYPE,OPTIONS
df -hT
```

## ✅ Titik Validasi
- Output langkah cocok dengan peran host yang didokumentasikan dan tidak ada layanan, pengguna, atau pendengar baru yang tidak dikenal yang muncul.

## ⚠️ Peringatan
- Jangan pernah menganggap perubahan konfigurasi yang belum diuji sebagai selesai hanya karena perintahnya menghasilkan nol.

## Pembersihan / Pemeriksaan Akhir
- Simpan keluaran yang penting dalam catatan host Anda atau log perubahan.

## Tutorial Berikutnya
[Berikutnya: 03 Pengguna dan SSH](./03-users-and-ssh.md)
