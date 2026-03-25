# 🌐 Siapkan Jaringan Terisolasi

## Tujuan
Buat segmen VM yang memisahkan tamu sensitif atau lab dari lalu lintas tamu yang lebih luas.

## Kasus Penggunaan
Gunakan ini saat Anda memerlukan segmen tamu terbatas, bukan satu jaringan datar.

## Prasyarat
- Daftar tamu yang termasuk dalam segmen tersebut.
- Akses ke kontrol jaringan hypervisor atau konfigurasi jembatan host.
- Akses konsol ke setidaknya satu tamu.

## Asumsi Lingkungan
- Contoh libvirt di bawah ini adalah salah satu model ramah shell pada host Linux.
- Jika platform Anda berbeda, pertahankan tujuan keamanan yang sama dan validasi dari tamu setelahnya.

## ⚠️ Catatan Risiko
- Jangan membangun segmen terisolasi tanpa pembaruan atau jalur cadangan yang terdokumentasi.
- Jangan secara tidak sengaja melampirkan tamu laboratorium produksi dan sekali pakai ke segmen yang sama.

## Prosedur Langkah demi Langkah
### 1. Tentukan jaringan virtual yang terisolasi
Contoh ini membuat segmen khusus yang didukung libvirt.

```bash
cat <<'EOF' > isolated-lab.xml
<network>
  <name>isolated-lab</name>
  <bridge name='virbr20'/>
  <ip address='192.168.250.1' netmask='255.255.255.0'>
    <dhcp>
      <range start='192.168.250.100' end='192.168.250.200'/>
    </dhcp>
  </ip>
</network>
EOF
sudo virsh net-define isolated-lab.xml 2>/dev/null || true
sudo virsh net-start isolated-lab 2>/dev/null || true
sudo virsh net-autostart isolated-lab 2>/dev/null || true
```

### 2. Tinjau lampiran tamu
Periksa apakah tamu yang dituju dipetakan ke jaringan yang benar.

```bash
sudo virsh domiflist vm-name 2>/dev/null || true
sudo virsh net-info isolated-lab 2>/dev/null || true
```

### 3. Validasi dari dalam tamu
Rute dan alamat harus sesuai dengan desain yang diinginkan.

```bash
ip -br addr
ip route
ping -c 2 192.168.250.1
```

## ✅ Titik Validasi
- Segmen baru ada dan hanya tamu yang dituju yang dilampirkan.
- Perutean tamu sesuai dengan desain.
- Jangkauan timur-barat yang tidak terduga tidak ada atau terhalang.

## Pemecahan masalah
- Jika tamu masih mencapai jaringan terlarang, tinjau lampiran jembatan, perutean upstream, dan default NAT.
- Jika tamu tidak dapat memperbarui, dokumentasikan jalur keluarnya alih-alih meratakan jaringan lagi.

## ↩️ Catatan Kembalikan / Pemulihan
- Lepaskan tamu dari segmen baru dan pulihkan pemetaan sebelumnya jika validasi gagal.
- Simpan salinan definisi jaringan lama sebelum memperkenalkan definisi jaringan yang terisolasi.

## Dokumen Terkait
- [🌐 Pemikiran Isolasi Jaringan](../concepts/network-isolation-thinking.md)
- [📋 Checklist Isolasi Jaringan](../reference/network-isolation-checklist.md)
- [🌐 03 Isolasi Jaringan](../tutorials/03-network-isolation.md)
