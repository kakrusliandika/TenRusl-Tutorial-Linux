# ✅ Verify the ISO

## Objective
Confirm that the Ubuntu ISO you downloaded is intact before you create installer media or boot a target machine from it.

## Use Case
Use this before every fresh install, reinstall, or recovery attempt. It matters most when the network was unreliable, the mirror was unfamiliar, or you are about to touch a production laptop.

## Prerequisites
- The Ubuntu ISO file.
- The official checksum file for the same release.
- Optional but recommended: the signed checksum file if Ubuntu publishes one for that release.

## ⚠️ Risk Notes
- Checksum verification only proves integrity against the checksum file you are using; pair it with signature verification when available.
- Do not skip this step just because the download completed without browser errors.

## Environment Assumptions
- You are working in a shell on Linux.
- The ISO filename you compare matches the actual release you intend to install.

## Step-by-Step Procedure
### 1. Place the ISO and checksum files in one working directory
Keeping the files together reduces path mistakes and makes later notes easier.

```bash
mkdir -p ~/Downloads/ubuntu-verify
cd ~/Downloads/ubuntu-verify
ls -lh
```

### 2. Calculate the SHA256 checksum of the ISO
Run the hash locally and record the result.

```bash
sha256sum <ubuntu-iso>.iso
```

### 3. Compare the hash with the vendor checksum file
Search the checksum file for the exact ISO filename and compare the values character by character.

```bash
grep '<ubuntu-iso>.iso' SHA256SUMS
```

### 4. Verify the signed checksum file when it is available
Signature verification is the better integrity chain. Import the signing key only from a trusted source and verify the checksum file itself.

```bash
gpg --keyid-format long --verify SHA256SUMS.gpg SHA256SUMS
```

## ✅ Validation Checkpoints
- The checksum output for the ISO matches the published checksum exactly.
- If you used GPG verification, the signature is good and tied to the expected checksum file.
- Your notes include the ISO filename, checksum result, and verification date.

## Troubleshooting Notes
- If the checksum does not match, delete the ISO and download it again from a trusted mirror.
- If the GPG signature cannot be verified, do not treat the checksum file as trusted until you resolve the key source and file origin.
- If multiple ISO files exist in the directory, double-check you hashed the right one.

## ↩️ Rollback / Recovery Notes
- There is no rollback beyond deleting the suspect ISO and starting over with a clean download.
- If your local storage is unreliable, test the download path or disk health before trusting any future installer media.

## Related Docs
- [🛠️ Create a Bootable USB](./create-bootable-usb.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)
- [📋 Hardware Requirements](../reference/hardware-requirements.md)

Next: translate to id
