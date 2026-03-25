# 📋 Daftar Periksa Layanan

## Tujuan
Gunakan daftar periksa ini sebelum menyerahkan host keluarga RHEL ke anggota tim lain atau sebelum menerapkan perangkat lunak khusus beban kerja di atasnya.

## Data Terstruktur / Referensi
| Daerah | Apa yang Harus Dikonfirmasi | Cuplikan Perintah |
| --- | --- | --- |
| Identitas | Nama host, sinkronisasi waktu, dan DNS sudah benar | `hostnamectl; timedatectl; getent hosts $(hostname -f) 2>/dev/null || true` |
| Akses jarak jauh | SSH diaktifkan dan divalidasi | `systemctl status sshd --no-pager; ss -ltnp | grep :22 || true` |
| Jaringan | Alamat, rute, dan status penyelesai disengaja | `ip -br addr; ip route; resolvectl status || true` |
| Keamanan | Firewall dan perbarui kebijakan kecocokan otomatisasi | `systemctl list-timers --all | grep -Ei "unattended|dnf" || true` |
| Kesehatan | Tidak ada lagi unit gagal yang tidak dapat dijelaskan | `systemctl --failed; journalctl -p err -b --no-pager | tail -n 40` |

## Cuplikan Perintah
```bash
systemctl list-unit-files --state=enabled | sed -n "1,120p"
systemctl --failed
ss -ltnup
```

## Catatan Interpretasi
- Pada sistem keluarga RHEL, pengerasan berarti memahami sshd, firewalld, dan SELinux secara bersamaan sejak hari pertama.
- Simpan keluaran daftar periksa di catatan server sehingga penyimpangan terlihat seiring waktu.

## Dokumen Terkait
- [🧹 Minimisasi Layanan](../concepts/service-minimization.md)
- [📋 Tutorial 08: Layanan](../tutorials/08-services.md)
