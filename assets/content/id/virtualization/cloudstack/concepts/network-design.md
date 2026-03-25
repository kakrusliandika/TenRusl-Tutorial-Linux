# 🌐 Desain Jaringan

## Apa Arti Konsep Ini
Desain jaringan untuk CloudStack berarti menetapkan jalur manajemen, jalur guest, VLAN, bridge, dan DNS atau gateway dengan peran yang jelas. Anda tidak sedang membuat koneksi sampai "kelihatan jalan". Anda sedang membangun peta traffic yang tetap bisa dipahami ketika guest bertambah, backup dijadwalkan, atau restore dilakukan di bawah tekanan.

## Mengapa Ini Penting Secara Operasional
- Jalur manajemen yang bercampur dengan jalur guest memperbesar blast radius saat ada salah konfigurasi.
- VLAN atau bridge yang tidak terdokumentasi membuat validasi guest menjadi lambat dan rawan asumsi salah.
- Restore yang terlihat sukses tetap berisiko bila guest mendarat pada jaringan yang salah atau tidak punya akses ke DNS, gateway, atau layanan penting.

## Prinsip Desain Inti
- Bedakan traffic manajemen dan traffic guest sedini mungkin.
- Dokumentasikan setiap bridge, VLAN, subnet, dan gateway berdasarkan perannya.
- Simpan naming yang konsisten antara host, control plane, dan catatan operasional.
- Pastikan ada satu cara cepat untuk membuktikan reachability dari host dan dari guest.

## Kesalahan Umum
- Mengubah network path di production tanpa baseline output sebelum perubahan.
- Mewarisi naming interface atau bridge yang tidak menjelaskan tujuan.
- Menambahkan banyak network attachment sebelum satu jalur guest dasar benar-benar stabil.
- Menguji dari UI saja tanpa membaca state interface dan route dari host.

## Panduan Pengambilan Keputusan
- Mulai dengan desain kecil yang mudah dijelaskan ke operator lain.
- Tambahkan VLAN atau jalur tambahan hanya bila ada kebutuhan workload yang jelas.
- Tuliskan jaringan mana yang memerlukan kontrol akses, firewall, atau audit ekstra.

## Cara Berpikir Saat Verifikasi
Lakukan validasi dari host lebih dulu, lalu dari guest. Targetnya bukan sekadar link-up, tetapi jalur komunikasi yang memang sesuai desain.

```bash
ip -br addr
ip route
bridge link 2>/dev/null || true
grep -Ev "^(#|$)" /etc/cloudstack/agent/agent.properties 2>/dev/null || true
```

## File Terkait Dalam Modul Ini
- [🧠 Ikhtisar CloudStack](./cloudstack-overview.md)
- [🌐 Konfigurasikan Jaringan Tanpa Menebak](../how-to/configure-network.md)
- [📋 Tata Letak Jaringan](../reference/network-layout.md)
