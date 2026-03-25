# 🔐 06 Kontrol Akses

## Tujuan
Tinjau jalur akses konsol, tamu, dan templat.

## Prasyarat
- Akses Shell ke tamu atau jalur inventaris sisi host yang relevan.
- File catatan yang dapat ditulis untuk tinjauan properti.

## Asumsi Lingkungan
- Tamu atau tuan rumah cukup stabil untuk ditinjau dan setiap operasi berisiko dicadangkan terlebih dahulu.

## Langkah Berurutan
### 1. Tinjau akun admin tamu
Identitas bersama sering kali menjadi titik buta.

```bash
getent passwd | grep -E '/bin/(bash|zsh|sh)$'
sudo ls -l /home/*/.ssh/authorized_keys 2>/dev/null || true
```

### 2. Tinjau grup admin sisi host
Lihatlah grup yang relevan dengan akses virtualisasi.

```bash
id
sudo getent group libvirt kvm wheel sudo 2>/dev/null || true
```

### 3. Catat kebijakan pemecah kaca dan konsol
Akses pemulihan harus lebih sempit dan terdokumentasi dengan lebih baik dibandingkan akses normal.

```bash
printf "%s\n" "Console access owner:" "Break-glass procedure:" >> vm-security-notes.txt
```

## ✅ Titik Validasi
- Status saat ini cocok dengan zona kepercayaan yang terdokumentasi, garis keturunan templat, dan jalur pemulihan.

## ⚠️ Peringatan
- Jangan menyebut dasar VM selesai jika asumsi pemulihan atau isolasi masih hanya ada di memori.

## Pembersihan / Pemeriksaan Akhir
- Simpan catatan, ekspor, dan checksum di mana operator berikutnya dapat menemukannya dengan aman.

## Tutorial Berikutnya
[Berikutnya: 07 Pencatatan](./07-logging.md)
