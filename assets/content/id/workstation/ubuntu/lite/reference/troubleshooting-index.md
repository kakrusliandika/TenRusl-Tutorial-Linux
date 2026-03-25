# 📋 Indeks Troubleshooting

## Tujuan
Gunakan indeks ini untuk memetakan gejala stasiun kerja ke perintah Linux pertama yang harus Anda jalankan sebelum menebak-nebak perbaikannya.

## Materi Referensi Terstruktur
| Gejala | Perintah pertama | Kemungkinan daerah |
|---|---|---|
| Sistem tidak bisa boot | `lsblk -f`, `journalctl -xb`, `efibootmgr -v` | GRUB, tata letak disk, mode boot |
| Login grafis gagal | `systemctl status display-manager`, `journalctl -b -u display-manager` | Tumpukan GPU, pengelola tampilan |
| Tidak ada Wi-Fi | `ip -br link`, `nmcli device`, `lspci -nnk` | Driver atau Manajer Jaringan |
| Tidak ada suara | `aplay -l`, `pactl list short sinks`, `journalctl --user -b` | Tumpukan audio atau pemilihan perangkat |
| Kesalahan paket | `dpkg --configure -a`, `apt --fix-broken install` | Status paket terputus |
| Sistem lambat | `systemd-analyze`, `free -h`, `top` | Tekanan memori, perluasan layanan |

## Perintah / Potongan Pemeriksaan
```bash
systemctl --failed
journalctl -xb -p warning..alert | tail -n 80
dmesg -T | tail -n 80
```

## Catatan Praktis
- Selalu identifikasi domain kegagalan sebelum Anda mengubah paket atau konfigurasi.
- Jika gejala muncul tepat setelah satu perubahan, mulailah dari sana daripada membuat lima perubahan lagi.
- Ketika bukti menjadi tidak jelas, kembali ke rencana rollback.

## Dokumen Terkait
- [🚑 Pulihkan Setelah Boot Gagal](../how-to/recover-after-failed-boot.md)
- [↩️ Rencana Kembalikan](../how-to/rollback-plan.md)
- [📋 Daftar Periksa Pasca Pemasangan](./post-install-checklist.md)
