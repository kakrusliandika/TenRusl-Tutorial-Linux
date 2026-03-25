# 🔐 Fix BitLocker Issues

## Objective
Identify and safely clear BitLocker-related blockers before attempting Ubuntu installation or dual boot changes.

## Use Case
Use this when the existing Windows installation uses BitLocker, device encryption, or recovery-key-protected volumes and you intend to repartition or dual boot.

## Prerequisites
- Access to the existing Windows installation or recovery documentation.
- A verified backup and the BitLocker recovery key stored somewhere safe.
- Shell access from a Linux live session if you need to inspect the disk layout before or after changes.

## ⚠️ Risk Notes
- Changing partitions on a BitLocker-protected system without preparation can trigger recovery mode or data access problems.
- Do not rely on memory for the recovery key.

## Environment Assumptions
- The target machine currently boots Windows or has Windows-based encrypted partitions.
- You are willing to pause installation until storage protection is understood.

## Step-by-Step Procedure
### 1. Document the current disk state from Linux if needed
Even before touching Windows-side settings, record what the Linux environment can see so you understand which partitions you are about to protect or shrink.

```bash
lsblk -f
sudo blkid
sudo parted -l
```

### 2. Check BitLocker status from Windows before partition changes
Use Windows administrative tools or PowerShell to confirm whether BitLocker is active and whether you have the recovery key. The exact workflow can vary by Windows version and vendor policy.

```powershell
manage-bde -status
```

### 3. Suspend or fully decrypt only when your policy and support plan allow it
Many dual-boot failures happen because users skip this step and discover the protection change only after the partition table already moved. Choose the least disruptive path that still keeps recovery predictable.

### 4. Re-check bootability after any Windows-side encryption change
Do not proceed to Ubuntu installation until Windows still boots cleanly and the recovery key is available.

## ✅ Validation Checkpoints
- You know whether BitLocker is active, suspended, or fully disabled on the target disk.
- You have access to the recovery key before you resize or repartition anything.
- The existing Windows system still boots after the encryption change.

## Troubleshooting Notes
- If Linux sees NTFS volumes but they mount read-only or show inconsistent metadata, resolve Windows shutdown and hibernation state before blaming Ubuntu.
- If the recovery key is missing, stop. Do not continue with partition changes.

## ↩️ Rollback / Recovery Notes
- If Windows becomes unbootable after storage changes, use the recovery key and vendor-approved repair path first.
- If the encryption status remains unclear, treat the machine as not ready for dual boot and keep Ubuntu off the disk until you clarify it.

## Related Docs
- [🪟 Dual Boot](./dual-boot.md)
- [🧩 Fix Intel RST Issues](./fix-intel-rst.md)
- [📋 02 Install Preflight](../tutorials/02-install-preflight.md)

Next: translate to id
