# ↩️ Tutorial 05: Restore VM

## Tujuan
Merestore VM dari generasi backup ke target terisolasi dan mendokumentasikan setiap penyesuaian manual yang diperlukan.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Host target restore tersedia.
- Generasi yang dipilih sudah diverifikasi checksum-nya sebelum restore.

## Langkah Berurutan
### 1. Stage generasi di target
Bawa set backup ke host restore tanpa mengubah artefak aslinya.

```bash
BACKUP_DIR=/srv/backup/vm/app01/2026-03-25-0100
cd "$BACKUP_DIR"
sha256sum -c SHA256SUMS
sudo rsync -aH --sparse app01.qcow2 /var/lib/libvirt/images/restore/
```

### 2. Definisikan dan boot guest
Impor metadata lalu boot ke jaringan terisolasi agar tidak bentrok dengan produksi.

```bash
virsh define app01.xml
virsh start app01
virsh console app01
```

## ✅ Titik Validasi
- Guest berhasil boot di host target dan menunjukkan device yang diharapkan.
- Setiap edit XML atau jaringan yang diperlukan sudah ditulis.

## ⚠️ Peringatan
- Jangan sambungkan guest ke bridge produksi saat drill restore pertama.

## Pembersihan / Pemeriksaan Akhir
- Simpan transkrip console atau catatan manual untuk fase validasi.

## Tutorial Berikutnya
[✅ Tutorial 06: Verifikasi Restore](./06-verify-restore.md)
