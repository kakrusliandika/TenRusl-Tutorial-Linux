# 🔄 Aktifkan Pembaruan Otomatis

## Tujuan
Konfigurasikan keluarga RHEL untuk menangani aktivitas pembaruan rutin dengan cara yang terkendali dan dapat ditinjau.

## Kapan Menggunakan Prosedur Ini
Gunakan ini setelah server memiliki jangkauan jaringan yang stabil dan kebijakan repositori yang diketahui.

## Prasyarat
- Repositori paket dapat dijangkau.
- Anda telah memutuskan apakah host dapat menerapkan pembaruan secara otomatis atau hanya menampilkannya untuk ditinjau.

## Asumsi Lingkungan
- Host dasar memerlukan irama patch, namun masih memerlukan tinjauan log dan kesadaran rollback.

## Langkah Tepat
### 1. Instal dan aktifkan komponen otomatisasi distro-native
```bash
sudo dnf install -y dnf-automatic
sudo systemctl enable --now dnf-automatic.timer
systemctl status dnf-automatic.timer --no-pager
```

### 2. Tinjau konfigurasi yang dihasilkan dan timer atau status layanan
```bash
systemctl list-timers --all | grep -Ei 'unattended|dnf' || true
grep -R '1' /etc/apt/apt.conf.d/20auto-upgrades /etc/apt/apt.conf.d/50unattended-upgrades 2>/dev/null || true
systemctl cat dnf-automatic.timer 2>/dev/null || true
```

### 3. Konfirmasikan riwayat pembaruan terkini terlihat untuk audit
```bash
grep -R . /var/log/unattended-upgrades 2>/dev/null | tail -n 20 || true
journalctl -u unattended-upgrades -u dnf-automatic.timer -u dnf-automatic.service -n 40 --no-pager 2>/dev/null || true
```

## ✅ Pos Pemeriksaan Validasi
- Perkakas otomasi pembaruan diinstal.
- File pengatur waktu, layanan, atau kebijakan dengan jelas menunjukkan perilaku yang diharapkan.
- Anda tahu di mana harus meninjau proses otomatis berikutnya.

## Pemecahan masalah
- Tidak ada aktivitas pengatur waktu yang terlihat: periksa apakah distro menggunakan pemicu layanan dan bukan pengatur waktu.
- Pembaruan gagal secara diam-diam: periksa log unit dan jangkauan repositori.
- Pembaruan otomatis terasa terlalu berisiko: beralihlah ke kebijakan peninjauan terlebih dahulu daripada mengabaikan disiplin patch.

## ↩️ Catatan Kembalikan / Pemulihan
- Nonaktifkan pengatur waktu atau kembalikan konfigurasi jika kebijakan terbukti terlalu agresif.
- Catat setiap pengecualian sehingga operator selanjutnya mengetahui apakah patching dilakukan secara manual atau otomatis.

## Dokumen Terkait
- [📦 Paket Dasar](../reference/package-baseline.md)
- [🛡️ Tutorial 07: Keamanan](../tutorials/07-security.md)
- [🧽 Tutorial 09: Pembersihan](../tutorials/09-cleanup.md)
