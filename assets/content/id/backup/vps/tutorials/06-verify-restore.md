# ✅ Tutorial 06: Verifikasi Restore

## Tujuan
Memastikan VPS hasil restore bisa dijangkau, melayani workload yang dimaksud, dan terdokumentasi cukup baik untuk dipercaya saat insiden nyata.

## Prasyarat
- Akses root atau sudo ke VPS.
- Penyimpanan backup yang terpisah dari disk workload.
- Target VPS bersih atau rehearsal target untuk uji restore.

## Asumsi Lingkungan
- VPS pengganti sudah direstore dan boot.

## Langkah Berurutan
### 1. Periksa identitas host dan layanan kritis
Konfirmasi dasar-dasar dari shell sebelum tes aplikasi lebih lanjut.

```bash
hostnamectl
systemctl --failed
journalctl -p err -b --no-pager | tail -n 50
ss -tulpn
```

### 2. Jalankan validasi yang menghadap workload
Gunakan pemeriksaan yang sama seperti kesiapan produksi.

```bash
curl -I http://127.0.0.1 2>/dev/null || true
ssh -o StrictHostKeyChecking=no localhost 'echo ssh-ok' 2>/dev/null || true
```

### 3. Catat hasil rehearsal
Rehearsal restore bernilai hanya jika pelajarannya ditulis.

```bash
printf '%s\n' "restore_date=$(date +%F)" 'result=pass-or-fail' 'notes=update runbook if needed' >> /srv/backup/vps/restore-history.txt
tail -n 5 /srv/backup/vps/restore-history.txt
```

## ✅ Titik Validasi
- SSH, log, dan pemeriksaan service mengonfirmasi host dapat dipakai.
- Restore history menangkap apa yang berhasil dan apa yang masih perlu perbaikan.

## ⚠️ Peringatan
- Jika validasi gagal, jangan menyatakan workflow backup siap hanya karena ekstraksi berhasil.

## Pembersihan / Pemeriksaan Akhir
- Jadwalkan rehearsal berikutnya dan perbarui scope backup bila ada yang masih kurang.

## Tutorial Berikutnya
[💾 Backup VPS](../index.md)
