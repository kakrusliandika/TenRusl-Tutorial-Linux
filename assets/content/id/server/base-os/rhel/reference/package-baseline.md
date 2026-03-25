# 📦 Paket Dasar

## Tujuan
Pertahankan halaman ini sebagai lantai paket yang disengaja untuk server keluarga RHEL yang bersih sebelum perangkat lunak khusus peran ditambahkan.

## Data Terstruktur / Referensi
| Tujuan | Paket atau Alat | Mengapa Itu Penting |
| --- | --- | --- |
| Akses jarak jauh | `openssh-server` | Administrasi SSH yang persisten pada host bergaya perusahaan. |
| tembok api | `firewalld` | Manajemen firewall dasar yang sadar zona. |
| Diagnostik | `curl`, `jq`, `rsync`, `less` | Pemeriksaan kesehatan, inspeksi API, dan peralatan transfer. |
| Pengeditan dan hak istimewa | `vim-minimal`, `sudo` | Pengeditan pemeliharaan dan eskalasi terkontrol. |
| Perbarui otomatisasi | `dnf-automatic` | Irama patch berbasis waktu. |
| Perkakas SELinux | `policycoreutils-python-utils` | Dukungan konteks dan kebijakan untuk beban kerja selanjutnya. |

## Cuplikan Perintah
```bash
sudo dnf makecache
sudo dnf upgrade -y
sudo dnf install -y sudo curl ca-certificates rsync jq less vim-minimal policycoreutils-python-utils openssh-server firewalld dnf-automatic xfsprogs
```

## Catatan Interpretasi
- Jauhkan paket peran opsional dari garis dasar hingga beban kerja benar-benar tiba.
- Tinjau daftar paket manual setelah setiap jendela pemeliharaan yang menambahkan perkakas baru.

## Dokumen Terkait
- [📦 Dasar Server keluarga RHEL](../concepts/rhel-baseline.md)
- [📦 Tutorial 03: Instal Inti](../tutorials/03-install-core.md)
