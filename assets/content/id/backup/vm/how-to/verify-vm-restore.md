# 🛠️ Verifikasi Restore VM

## Tujuan
Memastikan VM hasil restore tidak hanya terimpor, tetapi juga dapat boot, dapat dijangkau di zona isolasi yang benar, dan cukup sehat untuk dipercaya dalam insiden nyata.

## Kasus Penggunaan
Gunakan ini setelah setiap restore rehearsal dan sebelum mempertimbangkan guest hasil restore siap untuk cutover produksi.

## Prasyarat
- Target restore sudah mengimpor guest dengan sukses.
- Anda dapat menjangkau guest melalui console, SSH, atau health check aplikasi.
- Guest masih terisolasi dari trafik produksi selama validasi.

## Asumsi Lingkungan
- Guest perlu divalidasi dari sisi hypervisor dan dari dalam guest.
- Operator punya akses ke boot console, inspeksi jaringan, dan log layanan.
- Contoh mengasumsikan workload menyediakan SSH dan mungkin port aplikasi.

## Langkah Tepat
### 1. Periksa status dari sisi hypervisor
Verifikasi guest berjalan dengan disk dan interface yang diharapkan.

```bash
VM=app01
virsh domstate "$VM"
virsh domblklist "$VM"
virsh domiflist "$VM"
```

### 2. Validasi boot dan identitas guest
Login melalui console atau SSH lalu periksa hostname, mount, dan layanan penting.

```bash
hostnamectl
findmnt -rno TARGET,SOURCE,FSTYPE
systemctl --failed
journalctl -p err -b --no-pager | tail -n 50
```

### 3. Jalankan pemeriksaan tingkat layanan
Restore VM hanya berguna jika workload di dalam guest juga lolos health check.

```bash
ip -brief address
ss -tulpn
curl -I http://127.0.0.1:8080 2>/dev/null || true
```

## ✅ Titik Validasi
- Guest mencapai boot target yang diharapkan dan tidak menunjukkan error boot kritis yang belum terselesaikan.
- Interface, route, dan listener aplikasi hasil restore cocok dengan rencana recovery.
- Operator bisa menyebutkan remediation manual yang masih diperlukan sebelum cutover produksi.

## Pemecahan Masalah
- Jika guest boot tetapi layanan gagal, periksa log aplikasi sebelum menyalahkan copy disk.
- Jika mount hilang, bandingkan `/etc/fstab` dengan pemetaan disk target restore.
- Jika guest mendapatkan jaringan tetapi aplikasi masih gagal, pastikan secret, sertifikat, dan layanan dependensi ikut direstore.

## ↩️ Catatan Rollback atau Pemulihan
- Jika validasi gagal, tetap biarkan guest terisolasi dan simpan log untuk iterasi rehearsal berikutnya.
- Jangan menimpa generasi backup sampai penyebab kegagalan dipahami.

## Dokumen Terkait
- [🧠 Perencanaan Restore](../concepts/restore-planning.md)
- [📚 Checklist Restore](../reference/restore-checklist.md)
- [✅ Tutorial 06: Verifikasi Restore](../tutorials/06-verify-restore.md)
