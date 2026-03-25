# 📋 Checklist Firewall

## Tujuan
Gunakan daftar periksa ini untuk memverifikasi bahwa layanan yang terekspos, aturan host, dan lalu lintas yang diinginkan masih sesuai setelah perubahan.

## Referensi Terstruktur
| Periksa | Mengapa itu penting | Verifikasi cepat |
| --- | --- | --- |
| Sikap masuk default didokumentasikan | Mencegah penyimpangan aturan diam | `sudo nft list ruleset` |
| Setiap port terbuka memiliki pemilik layanan | Mengurangi pendengar yatim piatu | `sudo ss -tulpn` |
| Port admin dibatasi sumbernya jika memungkinkan | Mengurangi paparan kekerasan | Tinjau aturan host dan upstream |
| Ekspektasi jalan keluar dipahami | Batasi jalur keluar yang tersembunyi | Periksa firewall dan kebijakan rute |
| Pengecualian sementara mempunyai catatan kadaluwarsa | Mencegah lubang darurat permanen | Tinjau catatan perubahan |

## Catatan Interpretasi Praktis
- Tinjauan firewall tidak lengkap kecuali Anda membandingkan pendengar, aturan, dan kontrol upstream secara bersamaan.
- Jika peran host berubah baru-baru ini, bangun kembali peta layanan sebelum mempercayai kumpulan aturan.

## Cuplikan Perintah
```bash
sudo ss -tulpn
sudo nft list ruleset 2>/dev/null || true
sudo ufw status verbose 2>/dev/null || true
sudo firewall-cmd --list-all 2>/dev/null || true
```

## Dokumen Terkait
- [🌐 Tinjau Port Terbuka](../how-to/review-open-ports.md)
- [🌐 04 Firewall](../tutorials/04-firewall.md)
- [🛡️ Keamanan Server](../index.md)
