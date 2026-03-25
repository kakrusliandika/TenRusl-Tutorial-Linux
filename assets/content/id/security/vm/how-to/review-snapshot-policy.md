# 📸 Tinjau Kebijakan Snapshot

## Tujuan
Tinjau apakah snapshot digunakan sebagai titik pengembalian jangka pendek dan bukan sebagai pengganti cadangan yang tidak terbatas.

## Kasus Penggunaan
Gunakan ini ketika rekam jepret terus terakumulasi, penggunaan penyimpanan meningkat, atau tim mengandalkan rekam jepret tanpa rencana pemulihan.

## Prasyarat
- Inventarisasi VM penting.
- Akses CLI atau API ke inventaris snapshot jika tersedia.
- Tempat mencatat keputusan retensi.

## Asumsi Lingkungan
- Peralatan snapshot bervariasi berdasarkan platform. Perintah libvirt di bawah ini adalah salah satu contoh sisi shell yang konkret.
- Sasaran keamanan tetap sama di seluruh platform: titik pengembalian yang berumur pendek, alasan yang jelas, dan pembersihan rutin.

## ⚠️ Catatan Risiko
- Menghapus snapshot yang salah dapat menghapus satu-satunya titik pengembalian untuk perubahan terkini.
- Snapshot berumur panjang membuat penyimpanan dan memulihkan risiko secara diam-diam.

## Prosedur Langkah demi Langkah
### 1. Inventarisasi tamu dan foto
Hitung apa yang ada saat ini sebelum memutuskan apa yang harus tetap ada.

```bash
sudo virsh list --all 2>/dev/null || true
sudo virsh snapshot-list vm-name 2>/dev/null || true
```

### 2. Tujuan dan penyimpanan dokumen
Setiap snapshot yang disimpan memerlukan alasan dan keputusan kedaluwarsa.

```bash
cat <<'EOF' > snapshot-policy-review.md
VM | Snapshot | Reason | Created | Expiry | Action
--- | --- | --- | --- | --- | ---
EOF
```

### 3. Pisahkan pemikiran snapshot dari pemikiran cadangan
Tuliskan jalur pencadangan sebenarnya di sebelah catatan snapshot.

```bash
printf "%s\n" "backup source for vm-name:" >> snapshot-policy-review.md
```

## ✅ Titik Validasi
- Setiap snapshot yang disimpan memiliki tujuan dan keputusan kedaluwarsa.
- Tidak ada yang memanggil cadangan snapshot tanpa rencana pencadangan dan pemulihan terpisah.

## Pemecahan masalah
- Jika jumlah snapshot sangat tinggi, tinjau otomatisasi dan pembersihan yang gagal.
- Jika database eksternal atau penyimpanan terlampir penting, kegunaan snapshot mungkin terbatas dan harus didokumentasikan.

## ↩️ Catatan Kembalikan / Pemulihan
- Simpan snapshot hingga ada jalur rollback atau cadangan alternatif yang terverifikasi.
- Jika tidak yakin, tandai snapshot untuk ditinjau segera daripada menghapusnya secara membabi buta.

## Dokumen Terkait
- [🧱 Dasar Pengerasan VM](../concepts/vm-hardening-baseline.md)
- [📋 Checklist Backup](../reference/backup-checklist.md)
- [📸 05 Kebijakan Cuplikan](../tutorials/05-snapshot-policy.md)
