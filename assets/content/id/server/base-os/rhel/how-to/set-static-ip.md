# 🌐 Tetapkan IP Statis

## Tujuan
Jadikan identitas jaringan pada keluarga RHEL cukup dapat diprediksi sehingga SSH, DNS, perutean proksi terbalik, dan pemantauan tidak bergantung pada perubahan sewa DHCP.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika host memerlukan alamat tetap, DNS yang dapat diprediksi, atau kebijakan antarmuka yang stabil untuk beban kerja produksi.

## Prasyarat
- Akses konsol atau out-of-band jika host kehilangan konektivitas.
- Alamat, gateway, awalan, dan server DNS yang dituju.
- Pengetahuan tentang antarmuka mana yang harus membawa alamat manajemen.

## Asumsi Lingkungan
- Sistem keluarga RHEL biasanya menggunakan NetworkManager dan nmcli untuk perubahan jaringan yang persisten. Pertahankan konteks firewalld dan SELinux sambil menyesuaikan konektivitas.
- Anda akan memeriksa penyaji aktif sebelum mengedit apa pun.

## Langkah Tepat
### 1. Temukan model jaringan aktif dan kondisi saat ini
```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
nmcli connection show
nmcli device status
```

### 2. Buat konfigurasi statis menggunakan renderer yang sebenarnya digunakan oleh host
Contoh konfigurasi:
```bash
sudo nmcli connection modify enp1s0 ipv4.method manual \
  ipv4.addresses 192.0.2.10/24 \
  ipv4.gateway 192.0.2.1 \
  ipv4.dns "1.1.1.1 9.9.9.9"
sudo nmcli connection up enp1s0
```

### 3. Terapkan perubahan dengan hati-hati dan uji ulang perutean sebelum menutup sesi
```bash
nmcli connection show
sudo nmcli connection modify enp1s0 ipv4.method manual ipv4.addresses 192.0.2.10/24 ipv4.gateway 192.0.2.1 ipv4.dns "1.1.1.1 9.9.9.9"
sudo nmcli connection up enp1s0
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
