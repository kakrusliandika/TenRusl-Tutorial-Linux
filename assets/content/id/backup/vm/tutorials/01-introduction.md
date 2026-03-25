# 🧭 Tutorial 01: Pendahuluan

## Tujuan
Memahami komponen minimum dari satu set backup VM yang benar-benar dapat direstore dan mengapa image disk saja tidak cukup.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Contoh memakai guest libvirt/KVM bernama `app01`.
- Anda sedang mendokumentasikan guest sebelum mengotomatisasi apa pun.

## Langkah Berurutan
### 1. Inventarisasi guest dari hypervisor
Mulai dengan memastikan guest ada, storage yang dipakai, dan asumsi jaringannya.

```bash
VM=app01
virsh dominfo "$VM"
virsh domblklist "$VM"
virsh domiflist "$VM"
```

### 2. Catat apa yang dibutuhkan saat restore
Tulis target restore, VLAN yang diharapkan, dan lokasi generasi backup.

```bash
printf '%s\n' \
  'guest=app01' \
  'target_network=isolated-lab' \
  'backup_root=/srv/backup/vm/app01' \
  > /tmp/app01-recovery-notes.txt
cat /tmp/app01-recovery-notes.txt
```

## ✅ Titik Validasi
- Anda bisa menyebutkan definisi guest, artefak disk, dan langkah validasi yang dibutuhkan saat restore.
- Anda sudah memiliki jalur staging tertulis untuk generasi backup.

## ⚠️ Peringatan
- Jangan menganggap snapshot sebagai generasi backup yang tahan lama.
- Jangan mulai otomatisasi sebelum restore path manual jelas.

## Pembersihan / Pemeriksaan Akhir
- Simpan file catatan recovery dan perbaiki isinya selama tutorial berikutnya.

## Tutorial Berikutnya
[💽 Tutorial 02: Siapkan Storage](./02-prepare-storage.md)
