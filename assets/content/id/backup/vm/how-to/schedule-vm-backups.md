# 🛠️ Jadwalkan Backup VM

## Tujuan
Menjalankan backup VM pada jadwal yang dapat diprediksi dengan tahap terpisah untuk ekspor, verifikasi, dan salinan offsite bila diperlukan.

## Kasus Penggunaan
Gunakan ini setelah backup manual dan test restore sama-sama berhasil, sehingga otomatisasi memperkuat proses yang sudah terbukti, bukan mempercepat proses yang masih salah.

## Prasyarat
- Satu kali backup manual sudah menghasilkan generasi yang valid dan ter-checksum.
- Anda mengetahui jendela backup, laju pertumbuhan storage, dan batas bandwidth offsite.
- Host hypervisor menyediakan `systemd` untuk timer atau penjadwal lain yang Anda percayai.

## Asumsi Lingkungan
- Script backup akan disimpan di `/usr/local/sbin`.
- Timer berjalan pada host hypervisor yang dapat mengakses definisi guest dan jalur disk.
- Pruning retensi hanya dilakukan setelah generasi baru lolos validasi.

## Langkah Tepat
### 1. Buat script backup
Tangkap ekspor metadata, copy disk, checksum, dan logging dalam satu script.

```bash
sudo install -d /usr/local/sbin
sudo tee /usr/local/sbin/vm-backup-app01.sh >/dev/null <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
VM=app01
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vm/$VM/$STAMP
mkdir -p "$BACKUP_DIR"
virsh dumpxml "$VM" > "$BACKUP_DIR/$VM.xml"
rsync -aH --sparse /var/lib/libvirt/images/$VM.qcow2 "$BACKUP_DIR/"
(cd "$BACKUP_DIR" && sha256sum * > SHA256SUMS)
EOF
sudo chmod 0750 /usr/local/sbin/vm-backup-app01.sh
```

### 2. Buat service dan timer systemd
Gunakan `systemd` agar jadwal, log, dan missed run terlihat dari shell.

```bash
sudo tee /etc/systemd/system/vm-backup-app01.service >/dev/null <<'EOF'
[Unit]
Description=VM backup for app01

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/vm-backup-app01.sh
EOF
sudo tee /etc/systemd/system/vm-backup-app01.timer >/dev/null <<'EOF'
[Unit]
Description=Nightly VM backup for app01

[Timer]
OnCalendar=*-*-* 01:30:00
Persistent=true

[Install]
WantedBy=timers.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now vm-backup-app01.timer
```

### 3. Uji satu kali jalan dan tinjau log
Jangan percaya timer sebelum satu eksekusi service manual berhasil dan log-nya bersih.

```bash
sudo systemctl start vm-backup-app01.service
sudo systemctl status vm-backup-app01.service --no-pager
journalctl -u vm-backup-app01.service -n 50 --no-pager
```

## ✅ Titik Validasi
- Timer aktif dan service menghasilkan direktori backup baru yang bertanggal.
- Log service menunjukkan ekspor metadata, copy disk, dan pembuatan checksum tanpa kegagalan.
- Waktu run berikutnya terlihat di `systemctl list-timers`.

## Pemecahan Masalah
- Jika timer tidak pernah berjalan, periksa timezone, `OnCalendar`, dan apakah timer benar-benar enabled.
- Jika script gagal di bawah systemd tetapi berjalan interaktif, gunakan path absolut dan hindari ketergantungan pada shell profile.
- Jika job memenuhi storage, tambahkan pruning retensi hanya setelah validasi dan desain offsite jelas.

## ↩️ Catatan Rollback atau Pemulihan
- Nonaktifkan timer segera jika verifikasi mulai gagal atau pruning retensi berjalan tidak semestinya.
- Simpan sedikitnya satu generasi lama yang diketahui baik saat rollout otomatisasi.

## Dokumen Terkait
- [🧠 Strategi Salinan Offsite](../concepts/offsite-copy-strategy.md)
- [📚 Kebijakan Retensi](../reference/retention-policy.md)
- [☁️ Tutorial 04: Salin Offsite](../tutorials/04-copy-offsite.md)
