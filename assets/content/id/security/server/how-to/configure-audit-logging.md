# 🧾 Konfigurasikan Logging Audit

## Tujuan
Aktifkan pencatatan audit sisi host untuk tindakan istimewa dan perubahan file sensitif.

## Kasus Penggunaan
Gunakan ini ketika log layanan standar tidak cukup untuk akuntabilitas atau rekonstruksi insiden.

## Prasyarat
- Akses root atau sudo.
- Penyimpanan yang cukup untuk log audit.
- Backup aturan audit yang ada.

## Asumsi Lingkungan
- Contoh di bawah ini menggunakan `auditd` karena umum di server Linux.
- Nama paket sedikit berbeda di sistem Debian/Ubuntu dan mirip RHEL.

## ⚠️ Catatan Risiko
- Aturan audit yang luas dapat menghasilkan log yang berisik dan tekanan disk yang tidak perlu.
- Jangan mengganti kumpulan aturan terkelola yang ada tanpa meninjaunya terlebih dahulu.

## Prosedur Langkah demi Langkah
### 1. Instal dan aktifkan auditd
Gunakan manajer paket host dan mulai layanan.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt install -y auditd audispd-plugins
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y audit audit-libs
fi
sudo systemctl enable --now auditd
```

### 2. Cadangkan dan tinjau aturan saat ini
Tangkap kebijakan saat ini sebelum menambahkan kebijakan lainnya.

```bash
sudo mkdir -p /root/audit-backups
sudo cp -a /etc/audit /root/audit-backups/audit.$(date +%F-%H%M%S)
sudo auditctl -l
```

### 3. Tambahkan aturan terfokus
Mulailah dengan file identitas dan eksekusi istimewa.

```bash
cat <<'EOF' | sudo tee /etc/audit/rules.d/99-security-baseline.rules
-w /etc/passwd -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/sudoers -p wa -k privilege
-w /etc/ssh/sshd_config -p wa -k ssh_policy
-a always,exit -F arch=b64 -S execve -C uid!=euid -F euid=0 -k privileged_exec
EOF
sudo augenrules --load
```

### 4. Menghasilkan dan menanyakan event pengujian
Validasi bahwa peristiwa dapat ditemukan dengan kunci aturan.

```bash
sudo true
sudo ausearch -k privileged_exec --start recent
sudo ausearch -k ssh_policy --start recent
```

## ✅ Titik Validasi
- `auditd` aktif dan diaktifkan.
- Aturan khusus muncul setelah `augenrules --load`.
- Acara uji dapat ditemukan dengan `ausearch`.

```bash
sudo systemctl status auditd --no-pager
sudo auditctl -l
sudo ausearch -k privileged_exec --start today | tail -n 20
```

## Pemecahan masalah
- Jika `auditd` tidak dapat dimulai, periksa `journalctl -u auditd` dan sintaks aturan.
- Jika peristiwa hilang, konfirmasikan tindakan tersebut benar-benar sesuai dengan ketentuan aturan.

## ↩️ Catatan Kembalikan / Pemulihan
- Hapus file aturan khusus dan muat ulang garis dasar jika diperlukan.

```bash
sudo rm -f /etc/audit/rules.d/99-security-baseline.rules
sudo augenrules --load
sudo systemctl restart auditd
```

## Dokumen Terkait
- [🧠 Dasar Pengerasan](../concepts/hardening-baseline.md)
- [🧾 Checklist Pencatatan](../reference/logging-checklist.md)
- [🧾 08 Pencatatan](../tutorials/08-logging.md)
