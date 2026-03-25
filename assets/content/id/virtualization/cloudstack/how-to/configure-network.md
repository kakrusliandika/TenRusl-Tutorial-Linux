# 🌐 Konfigurasikan Jaringan Tanpa Menebak

## Tujuan
Menyiapkan atau mengubah jalur jaringan pada CloudStack dengan cara yang bisa dijelaskan, diuji, dan dibalik bila hasilnya tidak sesuai.

## Kapan Prosedur Ini Digunakan
Gunakan ini saat Anda menambah bridge, VLAN, uplink, network attachment, atau mengubah jalur guest maupun manajemen.

## Prasyarat
- Anda tahu jaringan mana yang khusus untuk manajemen dan mana yang dipakai guest.
- Anda memiliki akses konsol atau jalur pemulihan jika perubahan membuat node tidak dapat dijangkau.

## Asumsi Lingkungan
- Cara menerapkan perubahan bisa berbeda menurut platform atau rilis.
- Validasi dilakukan dari host dan, bila mungkin, dari guest uji.

## Prosedur Langkah demi Langkah
1. **Ambil baseline jaringan yang ada**
Simpan output host sebelum mengubah apa pun.
```bash
ip -br addr
ip route
bridge link 2>/dev/null || true
grep -Ev "^(#|$)" /etc/cloudstack/agent/agent.properties 2>/dev/null || true
```

2. **Terapkan perubahan dengan ruang lingkup sekecil mungkin**
Mulai dari satu jalur manajemen yang stabil dan satu jalur guest yang jelas. Hindari menambah banyak interface sekaligus.

3. **Uji reachability secara nyata**
Buktikan host tetap punya jalur manajemen, guest uji mendarat pada jaringan yang benar, dan DNS atau gateway bekerja sesuai desain.

## Poin Validasi
- Host tetap bisa dijangkau melalui jalur manajemen yang diharapkan.
- Guest uji mendapat identitas jaringan yang sesuai desain.
- Tidak ada bridge, VLAN, atau attachment yang aktif tanpa tujuan yang terdokumentasi.

## Catatan Troubleshooting
- Link tampak aktif tetapi guest tetap gagal: periksa VLAN, gateway, DNS, dan mapping bridge atau attachment.
- Setelah perubahan, host tidak stabil: bandingkan baseline output dengan state terbaru sebelum menebak-nebak.
- Jika platform memakai control plane tambahan, cek juga log service terkait agar tidak hanya mengandalkan UI.

## Catatan Rollback atau Recovery
- Kembalikan definisi terakhir yang sudah terbukti stabil.
- Bila perubahan menyentuh jalur manajemen, prioritaskan pemulihan akses host sebelum memperbaiki guest.
- Simpan baseline output bersama catatan perubahan untuk mempersingkat rollback.

## Dokumen Terkait
- [🌐 Desain Jaringan](../concepts/network-design.md)
- [📋 Tata Letak Jaringan](../reference/network-layout.md)
