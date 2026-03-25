# 🌐 Tetapkan IP Statis

## Tujuan
Jadikan identitas jaringan di Ubuntu cukup mudah diprediksi sehingga SSH, DNS, perutean proksi terbalik, dan pemantauan tidak bergantung pada perubahan sewa DHCP.

## Kapan Menggunakan Prosedur Ini
Gunakan ini ketika host memerlukan alamat tetap, DNS yang dapat diprediksi, atau kebijakan antarmuka yang stabil untuk beban kerja produksi.

## Prasyarat
- Akses konsol atau out-of-band jika host kehilangan konektivitas.
- Alamat, gateway, awalan, dan server DNS yang dituju.
- Pengetahuan tentang antarmuka mana yang harus membawa alamat manajemen.

## Asumsi Lingkungan
- Server Ubuntu biasanya menggunakan netplan, tetapi cloud-init mungkin masih memiliki sumber utamanya. Konfirmasikan lapisan mana yang menulis konfigurasi terakhir sebelum melakukan perubahan statis.
- Anda akan memeriksa penyaji aktif sebelum mengedit apa pun.

## Langkah Tepat
### 1. Temukan model jaringan aktif dan kondisi saat ini
```bash
ip -br addr
ip route
resolvectl status || systemd-resolve --status || true
ls -la /etc/netplan 2>/dev/null || true
sudo netplan get 2>/dev/null || true
cloud-init status 2>/dev/null || true
```

### 2. Buat konfigurasi statis menggunakan renderer yang sebenarnya digunakan oleh host
Contoh konfigurasi:
```yaml
network:
  version: 2
  ethernets:
    enp1s0:
      dhcp4: false
      addresses:
        - 192.0.2.10/24
      routes:
        - to: default
          via: 192.0.2.1
      nameservers:
        addresses: [1.1.1.1, 9.9.9.9]
```

### 3. Terapkan perubahan dengan hati-hati dan uji ulang perutean sebelum menutup sesi
```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak 2>/dev/null || true
sudo editor /etc/netplan/01-static.yaml
sudo netplan try
sudo netplan apply
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
