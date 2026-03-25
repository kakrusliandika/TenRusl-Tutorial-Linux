# 📋 Tata Letak Jaringan

## Tujuan Referensi Ini
Ringkas jaringan manajemen dan guest untuk Incus sehingga operator bisa mengecek design intent tanpa membaca seluruh runbook.

## Materi Referensi Terstruktur
| Item | Pertanyaan | Contoh Bukti |
|---|---|---|
| Jalur manajemen | Interface, VLAN, dan gateway mana yang dipakai operator? | `ip -br addr; ip route` |
| Jalur guest | Bridge, attachment, atau subnet mana yang dipakai workload? | `bridge link 2>/dev/null || true` |
| Validasi | Dari mana DNS, gateway, dan reachability diuji? | `ping`, `dig`, atau guest test` |

```bash
incus network list
incus network show incusbr0 2>/dev/null || true
ip -br addr
bridge link 2>/dev/null || true
```

## Catatan Interpretasi Praktis
- Jangan biarkan satu nama bridge atau interface punya lebih dari satu arti operasional.
- Jika ada VLAN, tuliskan tujuannya, bukan hanya nomornya.
- Simpan bukti baseline jaringan sebelum dan sesudah perubahan besar.

## Dokumen Terkait
- [🌐 Desain Jaringan](../concepts/network-design.md)
- [🌐 Konfigurasikan Jaringan Tanpa Menebak](../how-to/configure-network.md)
