# ✅ Tutorial 06: Verifikasi Restore

## Tujuan
Membuktikan bahwa guest hasil restore cukup sehat untuk dipercaya dan menutup rehearsal dengan catatan yang bisa ditindaklanjuti.

## Prasyarat
- Akses shell atau konsol ke host hypervisor.
- Penyimpanan backup yang berbeda dari datastore atau host sumber.
- Target lab, VLAN terisolasi, atau lingkungan rehearsal restore.

## Asumsi Lingkungan
- Guest sudah direstore dan dinyalakan di target terisolasi.

## Langkah Berurutan
### 1. Jalankan pemeriksaan hypervisor dan guest
Validasi state VM dari luar dan state layanan di dalam guest.

```bash
VM=app01
virsh domstate "$VM"
virsh domiflist "$VM"
# di dalam guest setelah login
hostnamectl
systemctl --failed
ss -tulpn
```

### 2. Catat hasil rehearsal
Drill restore hanya bernilai jika hasilnya ditulis untuk operator berikutnya.

```bash
printf '%s\n' "restore_test=$(date +%F)" 'result=pass-or-fail' 'notes=update runbook with any manual fixes' >> /srv/backup/vm/app01/restore-history.txt
cat /srv/backup/vm/app01/restore-history.txt | tail -n 5
```

## ✅ Titik Validasi
- Guest mencapai boot state yang diharapkan dan layanan kritis merespons sesuai kebutuhan.
- File restore history merekam apa yang lolos dan apa yang masih perlu diperbaiki.

## ⚠️ Peringatan
- Jika validasi gagal, jangan mempromosikan generasi atau workflow itu sebagai “sudah teruji”.

## Pembersihan / Pemeriksaan Akhir
- Tinjau index modul dan jadwalkan jendela rehearsal berikutnya.

## Tutorial Berikutnya
[💾 Backup VM](../index.md)
