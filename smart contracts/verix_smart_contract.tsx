import {
  Contract,
  GlobalState,
  BoxMap,
  Txn,
  Global,
  assert,
  bytes,
  uint64,
  clone,
} from '@algorandfoundation/algorand-typescript'

type Passport = {
  username: bytes
  emailHash: bytes
  university: bytes
  github: bytes
  bio: bytes
  identityScore: uint64
  createdAt: uint64
}

type Permission = {
  appId: bytes
  sharedFields: bytes
  grantedAt: uint64
  expiresAt: uint64
  active: uint64
}

export class VerixContract extends Contract {
  totalPassports = GlobalState<uint64>({
    key: 'TOTAL_USERS',
  })

  passports = BoxMap<bytes, Passport>({
    keyPrefix: 'passport',
  })

  permissions = BoxMap<bytes, Permission>({
    keyPrefix: 'permission',
  })

  // =========================
  // CREATE PASSPORT
  // =========================
  createPassport(
    username: bytes,
    emailHash: bytes,
    university: bytes,
    github: bytes,
    bio: bytes
  ): void {
    const sender = Txn.sender.bytes

    assert(!this.passports(sender).exists)

    this.passports(sender).value = {
      username,
      emailHash,
      university,
      github,
      bio,
      identityScore: 50,
      createdAt: Global.latestTimestamp,
    }

    this.totalPassports.value += 1
  }

  // =========================
  // UPDATE PASSPORT
  // =========================
  updatePassport(
    username: bytes,
    university: bytes,
    github: bytes,
    bio: bytes
  ): void {
    const sender = Txn.sender.bytes

    assert(this.passports(sender).exists)

    const passport = clone(this.passports(sender).value)

    passport.username = username
    passport.university = university
    passport.github = github
    passport.bio = bio

    this.passports(sender).value = clone(passport)
  }

  // =========================
  // VERIFY CREDENTIAL
  // =========================
  verifyCredential(scoreBoost: uint64): void {
    const sender = Txn.sender.bytes

    assert(this.passports(sender).exists)

    const passport = clone(this.passports(sender).value)

    passport.identityScore += scoreBoost

    this.passports(sender).value = clone(passport)
  }

  // =========================
  // GRANT PERMISSION
  // =========================
  grantPermission(
    permissionKey: bytes,
    appId: bytes,
    sharedFields: bytes,
    expiresAt: uint64
  ): void {
    assert(this.passports(Txn.sender.bytes).exists)

    this.permissions(permissionKey).value = {
      appId,
      sharedFields,
      grantedAt: Global.latestTimestamp,
      expiresAt,
      active: 1,
    }
  }

  // =========================
  // REVOKE PERMISSION
  // =========================
  revokePermission(permissionKey: bytes): void {
    assert(this.permissions(permissionKey).exists)

    const permission = clone(this.permissions(permissionKey).value)

    permission.active = 0

    this.permissions(permissionKey).value = clone(permission)
  }

  // =========================
  // CHECK PERMISSION STATUS
  // =========================
  isPermissionActive(permissionKey: bytes): uint64 {
    assert(this.permissions(permissionKey).exists)

    const permission = clone(this.permissions(permissionKey).value)

    if (permission.active === 0) {
      return 0
    }

    if (permission.expiresAt < Global.latestTimestamp) {
      return 0
    }

    return 1
  }

  // =========================
  // GET IDENTITY SCORE
  // =========================
  getIdentityScore(user: bytes): uint64 {
    assert(this.passports(user).exists)

    return this.passports(user).value.identityScore
  }
}