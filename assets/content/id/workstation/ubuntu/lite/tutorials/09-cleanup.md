# 🧹 09 Pembersihan

## Tujuan
Stabilkan workstation Lite setelah pelapisan paket sehingga sistem akhir terdokumentasi, cukup ramping, dan lebih mudah untuk didukung.

## Prasyarat
- Paket yang direncanakan untuk workstation sudah diinstal.
- Mesin dapat melakukan boot ulang, menjangkau jaringan, dan meluncurkan alat pengguna utama.

## Asumsi Lingkungan
- Pembersihan bukan opsional di Lite. Di sinilah Anda memutuskan paket mana yang benar-benar termasuk dalam baseline.

## Langkah Berurutan
### 1. Hapus paket dan cache yang jelas-jelas tidak digunakan
Usahakan permukaan paket cukup kecil sehingga Anda masih memahami pembuatannya.

```bash
sudo apt autoremove --purge
sudo apt clean
```

### 2. Ekspor data dasar paket dan snapshot kesehatan sistem
Ekspor ini membuat pekerjaan rollback dan pembangunan kembali di masa depan menjadi jauh lebih mudah.

```bash
mkdir -p ~/workstation-state
dpkg --get-selections > ~/workstation-state/dpkg-selections.txt
apt-mark showmanual > ~/workstation-state/apt-manual.txt
systemctl --failed > ~/workstation-state/failed-services.txt
journalctl -p err -b --no-pager | tail -n 80 > ~/workstation-state/boot-errors.txt
```

### 3. Tinjau ruang kosong, layanan yang diaktifkan, dan kebisingan yang jelas
Workstation sekarang harus terlihat dapat dimengerti dan didukung, bukan sekedar fungsional.

```bash
df -h /
systemctl list-unit-files --state=enabled | sed -n '1,40p'
```

## ✅ Checkpoint Validasi
- Tidak ada paket rusak yang tersisa dan daftar paket diekspor.
- Mesin memiliki ruang kosong yang cukup untuk pembaruan normal dan aktivitas browser.
- Jejak layanan terlihat masuk akal untuk desktop Lite.

## ⚠️ Peringatan
- Jangan membersihkan paket secara agresif jika Anda tidak ingat lagi mengapa paket tersebut diinstal; periksa catatanmu terlebih dahulu.
- Jika log masih menunjukkan kesalahan boot atau grafis berulang, perbaiki sebelum mesin selesai.

## Cleanup / Pemeriksaan Akhir
- Simpan paket yang diekspor dan file kesehatan dengan catatan dan cadangan stasiun kerja Anda.

## Tutorial Berikutnya
[📘 10 Penutup](./10-closeout.md)

## Dokumen Terkait
- [↩️ Rencana Kembalikan](../how-to/rollback-plan.md)
- [📋 Daftar Periksa Pasca Pemasangan](../reference/post-install-checklist.md)
- [📋 Indeks Troubleshooting](../reference/troubleshooting-index.md)
