# 🧰 Buat Golden Template

## Tujuan
Mempersiapkan dan menyegel templat tamu Linux yang dapat digunakan kembali tanpa membawa identitas, log, atau rahasia lama ke dalam setiap klon di masa mendatang.

## Kasus Penggunaan
Gunakan ini ketika Anda ingin penerapan VM berulang, bukan mengkloning dari tamu yang sudah digunakan.

## Prasyarat
- VM yang dimaksudkan untuk menjadi sumber templat.
- Akses shell ke tamu dan idealnya ke tuan rumah.
- Template sebelumnya atau ekspor untuk rollback.

## Asumsi Lingkungan
- Contoh di bawah menggabungkan perintah Linux sisi tamu dengan pemeriksaan host gaya libvirt opsional.
- Jika platform Anda berbeda, pertahankan maksud keamanan yang sama dan sesuaikan langkah publikasi ke alat yang setara.

## ⚠️ Catatan Risiko
- Jangan pernah menyetel ulang identitas mesin atau kunci host pada tamu beban kerja langsung.
- Jangan mempublikasikan template jika rahasia atau token admin mungkin masih ada di dalamnya.

## Prosedur Langkah demi Langkah
### 1. Menambal dan membersihkan tamu
Mulai dari dasar paket saat ini.

```bash
if command -v apt >/dev/null 2>&1; then
  sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y && sudo apt clean
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf upgrade -y && sudo dnf clean all
fi
```

### 2. Hapus status spesifik beban kerja
Hapus log, riwayat shell, dan sisa penyediaan.

```bash
sudo cloud-init clean --logs 2>/dev/null || true
sudo journalctl --rotate
sudo journalctl --vacuum-time=1s
sudo rm -f /root/.bash_history /home/*/.bash_history 2>/dev/null || true
```

### 3. Reset artefak identitas unik
Lakukan ini hanya pada sumber templat asli.

```bash
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id
sudo rm -f /etc/ssh/ssh_host_* 2>/dev/null || true
```

### 4. Rekam metadata templat
Tangkap status yang cukup untuk mengidentifikasi dan memutar kembali templat nanti.

```bash
hostnamectl
lsblk -f
sudo virsh dumpxml template-source 2>/dev/null || true
```

## ✅ Titik Validasi
- Tamu ditambal dan dibersihkan.
- Tidak ada rahasia khusus beban kerja atau artefak identitas yang tersisa jika jalur booting pertama Anda akan membuatnya kembali.
- Jalur klon baru didokumentasikan.

## Pemecahan masalah
- Jika cloud-init atau boot pertama tidak dapat membuat ulang kunci dan identitas host, hentikan dan perbaiki sebelum dipublikasikan.
- Jika template masih berisi data aplikasi, periksa kembali direktori layanan dan home.

## ↩️ Catatan Kembalikan / Pemulihan
- Simpan template sebelumnya hingga klon baru lolos validasi.
- Pulihkan templat lama jika boot klon baru atau aliran identitas gagal.

## Dokumen Terkait
- [🧠 Disiplin Templat](../concepts/template-discipline.md)
- [📋 Checklist Hardening VM](../reference/vm-hardening-checklist.md)
- [🧼 04 Kebersihan Templat](../tutorials/04-template-hygiene.md)
