# 🛠️ Restore Backup VM

## Tujuan
Mengimpor backup VM ke target restore yang aman dengan memakai definisi guest dan image disk hasil ekspor sebagai satu set yang saling cocok.

## Kasus Penggunaan
Gunakan prosedur ini saat rehearsal restore, setelah hypervisor hilang, atau ketika guest harus dibangun ulang ke infrastruktur pengganti.

## Prasyarat
- Anda mempunyai target restore dengan CPU, RAM, dan storage yang cukup.
- Generasi backup mencakup metadata guest dan image disk bersama-sama.
- Anda memiliki jaringan terisolasi atau rencana untuk mencegah benturan IP dan hostname.

## Asumsi Lingkungan
- Set backup tersimpan di `/srv/backup/vm/app01/<stamp>`.
- Target restore adalah host libvirt/KVM lain atau lab host dengan storage dan driver yang kompatibel.
- Guest sebaiknya direstore ke jaringan uji terlebih dahulu.

## Langkah Tepat
### 1. Verifikasi set backup sebelum impor
Validasi integritas sebelum host target diubah.

```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
ls -lh
```

### 2. Stage disk dan tinjau definisi guest
Pastikan penempatan storage benar dan XML masih cocok dengan model boot yang dituju.

```bash
sudo mkdir -p /var/lib/libvirt/images/restore
sudo rsync -aH --sparse app01.qcow2 /var/lib/libvirt/images/restore/
qemu-img info /var/lib/libvirt/images/restore/app01.qcow2
less app01.xml
```

### 3. Definisikan guest dan hubungkan ke jaringan terisolasi
Ubah XML atau gunakan jaringan sementara agar guest hasil restore tidak bentrok dengan produksi.

```bash
virsh net-list --all
virsh define app01.xml
virsh domblklist app01
virsh start app01
```

### 4. Buka console dan catat masalah boot awal
Output boot sering langsung memperlihatkan masalah driver, fstab, atau pemetaan interface.

```bash
virsh console app01
# keluar dari console dengan Ctrl+] saat selesai
```

## ✅ Titik Validasi
- Definisi guest terimpor dengan bersih dan image disk melaporkan ukuran serta format virtual yang sesuai.
- VM bisa boot di target terisolasi dan mencapai login console atau jaringan.
- Edit XML atau penyesuaian network mapping yang diperlukan terdokumentasi untuk rehearsal berikutnya.

## Pemecahan Masalah
- Jika `virsh define` gagal, periksa XML untuk path storage atau definisi jaringan yang tidak ada di target.
- Jika guest macet saat boot, verifikasi bus disk, asumsi firmware, dan apakah path disk hasil restore sesuai XML.
- Jika jaringan gagal, bandingkan nama NIC asal dan asumsi VLAN dengan target lab.

## ↩️ Catatan Rollback atau Pemulihan
- Jika guest hasil restore tidak sengaja terhubung ke VLAN produksi, matikan segera dan perbaiki network mapping sebelum mengulangi.
- Jaga generasi backup asli tetap read-only selama pengujian guest impor.

## Dokumen Terkait
- [🧠 Perencanaan Restore](../concepts/restore-planning.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [↩️ Tutorial 05: Restore VM](../tutorials/05-restore-vm.md)
