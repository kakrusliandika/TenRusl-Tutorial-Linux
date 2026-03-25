# 🛠️ Jadwalkan Backup

## Tujuan
Menjadwalkan backup VPS dengan logging dan verifikasi yang cukup untuk mendukung rotasi, alerting, dan drill restore berikutnya.

## Kasus Penggunaan
Gunakan ini ketika prosedur backup manual sudah berfungsi dan Anda ingin run yang berulang tanpa menjadikan verifikasi sebagai renungan belakangan.

## Prasyarat
- Perintah backup manual sudah terbukti berjalan sukses.
- Anda mengetahui runtime kira-kira dan dampak storage dari tiap generasi.
- Anda memiliki rencana alerting atau minimal rutinitas memeriksa log timer.

## Asumsi Lingkungan
- Contoh memakai shell script dan `systemd` timer.
- Verifikasi dan copy offsite dilakukan sebelum prune generasi lama.
- Job berjalan sebagai root atau via sudo karena memasukkan file sistem.

## Langkah Tepat
### 1. Buat script backup
Simpan logika backup sesungguhnya dalam satu shell script agar run manual dan otomatis identik.

```bash
sudo tee /usr/local/sbin/vps-backup.sh >/dev/null <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
HOST=$(hostname -s)
STAMP=$(date +%F-%H%M)
BACKUP_DIR=/srv/backup/vps/$HOST/$STAMP
mkdir -p "$BACKUP_DIR"
dpkg-query -W -f='${binary:Package}\t${Version}\n' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
rpm -qa --qf '%{NAME}\t%{VERSION}-%{RELEASE}\n' > "$BACKUP_DIR/packages.tsv" 2>/dev/null || true
tar --xattrs --acls --numeric-owner -czf "$BACKUP_DIR/system-data.tar.gz" /etc /var/www /srv /home
(cd "$BACKUP_DIR" && sha256sum system-data.tar.gz packages.tsv > SHA256SUMS)
EOF
sudo chmod 0750 /usr/local/sbin/vps-backup.sh
```

### 2. Buat dan aktifkan timer
Systemd timer membuat jadwal, run terakhir, dan kegagalan terlihat dari shell.

```bash
sudo tee /etc/systemd/system/vps-backup.service >/dev/null <<'EOF'
[Unit]
Description=Nightly VPS backup

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/vps-backup.sh
EOF
sudo tee /etc/systemd/system/vps-backup.timer >/dev/null <<'EOF'
[Unit]
Description=Nightly VPS backup schedule

[Timer]
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now vps-backup.timer
```

### 3. Uji dan inspeksi workflow terjadwal
Timer baru dipercaya setelah satu run on-demand dan log-nya benar.

```bash
sudo systemctl start vps-backup.service
sudo systemctl status vps-backup.service --no-pager
journalctl -u vps-backup.service -n 50 --no-pager
systemctl list-timers vps-backup.timer
```

## ✅ Titik Validasi
- Service membuat generasi baru saat dijalankan manual.
- Timer aktif dan menampilkan waktu run berikutnya dengan jelas.
- Log cukup untuk mengidentifikasi path generasi yang dibuat service.

## Pemecahan Masalah
- Jika timer berjalan tetapi menghasilkan arsip kosong, bandingkan environment script dengan shell interaktif dan gunakan path absolut.
- Jika runtime terlalu lama, pisahkan fase arsip dan offsite atau kurangi scope ke path yang benar-benar penting.
- Jika rotasi ditambahkan kemudian, lindungi copy offsite tervalidasi terbaru dari prune yang tidak sengaja.

## ↩️ Catatan Rollback atau Pemulihan
- Nonaktifkan timer jika kegagalan berulang muncul sampai rutinitas backup diperbaiki.
- Simpan setidaknya satu generasi manual di luar rotasi otomatis saat rollout.

## Dokumen Terkait
- [🧠 Strategi Retensi](../concepts/retention-strategy.md)
- [📚 Kebijakan Retensi](../reference/retention-policy.md)
- [☁️ Tutorial 04: Upload Offsite](../tutorials/04-upload-offsite.md)
