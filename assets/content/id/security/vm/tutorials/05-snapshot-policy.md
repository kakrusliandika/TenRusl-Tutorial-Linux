# 📸 05 Kebijakan Snapshot

## Tujuan
Pisahkan titik rollback dari cadangan sebenarnya.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Inventarisasi snapshot terkini
Hitung apa yang ada saat ini.

```bash
sudo virsh snapshot-list vm-name 2>/dev/null || true
```

### 2. Tandai tujuan dan kadaluwarsa
Setiap snapshot yang disimpan memerlukan alasan.

```bash
printf "%s\n" "snapshot | vm | reason | expiry | owner" >> vm-security-notes.txt
```

### 3. Catat juga jalur pencadangannya
Snapshot bukanlah keseluruhan cerita pemulihan.

```bash
printf "%s\n" "backup source for vm-name:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 06 Kontrol Akses](./06-access-control.md)
