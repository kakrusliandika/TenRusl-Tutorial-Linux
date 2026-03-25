# 🛠️ Buat Backup VM

## Tujuan
Membuat backup VM yang siap direstore, mencakup metadata guest, isi disk, checksum integritas, dan catatan konsistensi yang jelas.

## Kasus Penggunaan
Gunakan prosedur ini ketika VM memerlukan backup manual sebelum otomatisasi dipercaya, setelah perubahan konfigurasi besar, atau sebelum maintenance guest yang berisiko.

## Prasyarat
- Anda mengetahui nama guest, jalur disk, dan lokasi staging backup.
- Anda dapat menerima beban I/O baca dan, jika perlu, jendela quiesce singkat.
- Target backup memiliki ruang kosong yang cukup untuk sedikitnya satu generasi ekspor penuh.

## Asumsi Lingkungan
- Contoh guest adalah `app01` pada host libvirt/KVM.
- Image disk berada di `/var/lib/libvirt/images` dan staging backup di `/srv/backup/vm`.
- Jika memakai hypervisor lain, pertahankan pola metadata-plus-disk walaupun perintah ekspornya berbeda.

## Langkah Tepat
### 1. Periksa identitas guest dan storage
Pastikan definisi guest, status daya, dan disk yang terpasang benar sebelum menyalin apa pun.

```bash
VM=app01
virsh dominfo "$VM"
virsh domblklist "$VM"
qemu-img info /var/lib/libvirt/images/$VM.qcow2
```

### 2. Buat direktori backup bertanggal dan simpan metadata
Simpan setiap generasi dalam timestamp yang dapat diprediksi agar pruning retensi dan drill restore tetap sederhana.

```bash
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
printf '%s\n' "guest=$VM" "stamp=$STAMP" "consistency=crash-consistent" > "$BACKUP_DIR/manifest.txt"
```

### 3. Salin artefak disk
Gunakan copy yang sadar sparse agar backup mempertahankan disk guest tanpa menggembungkan blok kosong.

```bash
rsync -aH --sparse --numeric-ids /var/lib/libvirt/images/$VM.qcow2 "$BACKUP_DIR/"
```

### 4. Buat data integritas dan listing file
Checksum dan listing sederhana membuat validasi restore jauh lebih cepat.

```bash
cd "$BACKUP_DIR"
sha256sum * > SHA256SUMS
ls -lh > FILES.txt
```

## ✅ Titik Validasi
- Direktori backup berisi XML guest, image disk, file checksum, dan manifest sederhana.
- Menjalankan `sha256sum -c SHA256SUMS` menghasilkan `OK` untuk semua artefak.
- Operator dapat menjelaskan apakah backup bersifat crash-consistent atau app-consistent.

## Pemecahan Masalah
- Jika disk yang salah tersalin, periksa kembali `virsh domblklist` dan apakah guest memiliki beberapa volume.
- Jika proses terlalu lambat, pindahkan ke jendela yang lebih sepi atau pasangkan dengan snapshot storage yang nanti diekspor.
- Jika guest berubah terlalu cepat saat copy berlangsung, gunakan metode quiesce yang tepat atau ekspor berbasis snapshot hypervisor.

## ↩️ Catatan Rollback atau Pemulihan
- Jangan hapus sumber atau generasi lama yang masih baik sebelum verifikasi checksum berhasil.
- Jika backup tidak konsisten, beri label dengan jelas dan ulangi, jangan diam-diam memasukkannya ke retensi.

## Dokumen Terkait
- [🧠 Snapshot vs Backup](../concepts/snapshot-vs-backup.md)
- [📚 Tata Letak Backup](../reference/backup-layout.md)
- [📦 Tutorial 03: Buat Backup](../tutorials/03-create-backup.md)
