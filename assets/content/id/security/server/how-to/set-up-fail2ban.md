# 🚨 Siapkan Fail2ban

## Tujuan
Tambahkan kontrol sisi host ringan yang bereaksi terhadap penyalahgunaan autentikasi berulang pada layanan yang terekspos.

## Kasus Penggunaan
Gunakan ini ketika SSH atau layanan penghasil log lainnya dapat dijangkau melalui internet dan Anda ingin lalu lintas brute force yang bising melambat.

## Prasyarat
- Akses root atau sudo.
- Layanan dengan log yang dapat dibaca, biasanya SSH.
- Backend firewall yang didukung.

## Asumsi Lingkungan
- Titik awalnya biasanya adalah penjara SSH.
- Fail2ban mendukung baseline tetapi tidak menggantikan kebijakan SSH yang baik.

## ⚠️ Catatan Risiko
- Jika sumber log salah, larangan tidak akan pernah terpicu.
- Ambang batas yang agresif dapat melarang operator yang sah.

## Prosedur Langkah demi Langkah
### 1. Instal paketnya
Gunakan manajer paket yang tersedia di host.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt install -y fail2ban
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y fail2ban fail2ban-firewalld
fi
```

### 2. Buat kebijakan penjara lokal
Pertahankan kebijakan lokal di `jail.local` atau drop-in yang setara.

```bash
cat <<'EOF' | sudo tee /etc/fail2ban/jail.local
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
backend = systemd

[sshd]
enabled = true
port = ssh
logpath = %(sshd_log)s
EOF
```

### 3. Aktifkan dan periksa layanan
Konfirmasikan bahwa jail yang dimaksud telah dimuat.

```bash
sudo systemctl enable --now fail2ban
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

## ✅ Titik Validasi
- Layanan aktif.
- Penjara yang dimaksud muncul di `fail2ban-client status`.
- Log fail2ban terbaru menunjukkan startup normal.

```bash
sudo systemctl status fail2ban --no-pager
sudo fail2ban-client status
sudo journalctl -u fail2ban -n 100 --no-pager
```

## Pemecahan masalah
- Jika penjara SSH tidak menunjukkan aktivitas, verifikasi backend dan sumber log.
- Jika larangan tidak berlaku, periksa dukungan backend firewall pada host.

## ↩️ Catatan Kembalikan / Pemulihan
- Nonaktifkan layanan dan hapus penjara lokal jika menyebabkan dampak produksi.
- Batalkan pemblokiran alamat tepercaya secara manual sebelum mengaktifkan kembali kebijakan.

```bash
sudo fail2ban-client set sshd unbanip 203.0.113.10
sudo systemctl disable --now fail2ban
```

## Dokumen Terkait
- [🔐 Kebijakan SSH](../concepts/ssh-policy.md)
- [🔐 Nonaktifkan Login Kata Sandi](./disable-password-login.md)
- [📋 Checklist SSH](../reference/ssh-checklist.md)
