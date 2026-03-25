# 🌐 Tetapkan IP Statis

## Tujuan
Jadikan identitas jaringan di Debian cukup dapat diprediksi sehingga SSH, DNS, perutean proksi terbalik, dan pemantauan tidak bergantung pada perubahan sewa DHCP.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika host memerlukan alamat tetap, DNS yang dapat diprediksi, atau kebijakan antarmuka yang stabil untuk beban kerja produksi.

## Prasyarat
- Akses konsol atau out-of-band jika host kehilangan konektivitas.
- Alamat, gateway, awalan, dan server DNS yang dituju.
- Pengetahuan tentang antarmuka mana yang harus membawa alamat manajemen.

## Asumsi Lingkungan
- Debian dapat hadir dengan ifupdown, NetworkManager, cloud-init, atau systemd-networkd tergantung pada penginstal dan silsilah gambar. Identifikasi penyaji aktif sebelum mengedit status jaringan.
- Anda akan memeriksa penyaji aktif sebelum mengedit apa pun.

## Langkah Tepat
### 1. Temukan model jaringan aktif dan kondisi saat ini
```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
ls -la /etc/network /etc/systemd/network /etc/netplan 2>/dev/null || true
systemctl is-active networking NetworkManager systemd-networkd 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

### 2. Buat konfigurasi statis menggunakan renderer yang sebenarnya digunakan oleh host
Contoh konfigurasi:
```ini
[Match]
Name=enp1s0

[Network]
Address=192.0.2.10/24
Gateway=192.0.2.1
DNS=1.1.1.1
DNS=9.9.9.9
```

### 3. Terapkan perubahan dengan hati-hati dan uji ulang perutean sebelum menutup sesi
```bash
sudo install -d -m 0755 /etc/systemd/network
sudo editor /etc/systemd/network/10-enp1s0.network
sudo networkctl reload || true
sudo systemctl restart systemd-networkd || true
ip -br addr
ip route
```

### 4. Validasi resolusi nama setelah perubahan jaringan
```bash
getent hosts example.com
ping -c 2 1.1.1.1 || true
```

## ✅ Pos Pemeriksaan Validasi
- Antarmuka yang dimaksudkan menyimpan alamat statis yang diharapkan setelah memuat ulang.
- Rute default dan resolusi DNS masih berfungsi.
- SSH tetap dapat dijangkau dari sesi kedua.

## Pemecahan masalah
- Beberapa penyaji tampak aktif: hentikan dan identifikasi mana yang otoritatif sebelum mengedit lagi.
- Host kehilangan DNS: verifikasi konfigurasi server nama dan apakah cloud-init menerapkan kembali pengaturan lama.
- Alamat berlaku tetapi rute salah: periksa kembali gateway, panjang awalan, dan rute kebijakan.

## ↩️ Catatan Kembalikan / Pemulihan
- Kembalikan konfigurasi sebelumnya dari konsol jika host tidak dapat dijangkau.
- Simpan satu salinan file jaringan yang terakhir diketahui bagus sebelum diedit.

## Dokumen Terkait
- [📋 Daftar Periksa Layanan](../reference/service-checklist.md)
- [🌐 Tutorial 04: Jaringan](../tutorials/04-network.md)
