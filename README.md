<p align="center">
  <img src="https://raw.githubusercontent.com/Nakshatra05/Verix/main/public/Verix.png" width="120" alt="Verix Logo" />
</p>

<h1 align="center">VERIX</h1>

<p align="center">
  <strong>The Decentralized Data Passport — Own, Verify, and Selectively Share Your Identity</strong>
</p>

<p align="center">
  Portable Identity • Verifiable Credentials • Consent Infrastructure • Selective Sharing • Algorand Native
</p>

<p align="center">
  <a href="https://github.com/Nakshatra05/Verix/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT License" />
  </a>
  <a href="https://developer.algorand.org/">
    <img src="https://img.shields.io/badge/built%20on-Algorand-00B4AB?style=flat-square&logo=algorand&logoColor=white" alt="Built on Algorand" />
  </a>
  <img src="https://img.shields.io/badge/network-mainnet-success?style=flat-square" alt="Mainnet" />
  <img src="https://img.shields.io/badge/contracts-live-brightgreen?style=flat-square" alt="Contracts Live" />
  <img src="https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Vite-blue?style=flat-square" alt="Stack" />
  <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="Status" />
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-problem">Problem</a> •
  <a href="#-solution">Solution</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-smart-contract">Smart Contract</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-local-development">Local Dev</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

# Overview

**Verix** is a decentralized identity and credential infrastructure platform built on Algorand that enables users to create a reusable **Data Passport** for the modern internet.

Verix gives users a portable identity layer where credentials, permissions, and reputation become:
- user-owned
- cryptographically verifiable
- selectively shareable
- transparently permissioned
- portable across applications

Instead of repeatedly onboarding, verifying identity, connecting wallets, and exposing sensitive information on every platform, users maintain a single reusable identity passport that travels seamlessly across the Web3 ecosystem.

Verix combines:
- decentralized identity
- verifiable credentials
- on-chain permission management
- consent infrastructure
- portable reputation

into a unified identity layer powered by Algorand.

---

# Problem

Identity in Web3 is fragmented.

Users repeatedly:
- connect wallets
- fill onboarding forms
- verify the same credentials
- upload social proofs
- repeat KYC-style flows
- expose unnecessary information
- rebuild reputation across every app

At the same time, applications struggle with:
- fake identities
- Sybil attacks
- spam participation
- onboarding drop-offs
- trustless verification
- poor conversion rates
- manual moderation overhead

Current onboarding systems are:
- centralized
- repetitive
- privacy-invasive
- fragmented
- non-portable

Users do not truly own their digital identity.

---

# Solution

Verix introduces a reusable decentralized Data Passport built on Algorand.

Users create a single portable identity profile containing:
- wallet ownership
- social profiles
- educational credentials
- DAO memberships
- contribution history
- verification badges
- attendance proofs
- community reputation

Applications request only the specific credentials they require.

Users can:
- approve access
- deny access
- expire permissions
- revoke permissions instantly
- manage all shared data from one dashboard

Verix transforms identity into a user-controlled and permission-based layer for Web3.

---

# Why Verix?

| Problem | Traditional Systems | Verix |
|---|---|---|
| Identity Ownership | Platform-owned | User-owned |
| Data Sharing | Full exposure | Selective sharing |
| Verification | Repeated everywhere | Reusable credentials |
| Permissions | Opaque | Transparent |
| Consent | Hidden in databases | Auditable on-chain |
| Reputation | Locked per app | Portable |
| Revocation | Difficult | Instant |
| Trust | Centralized | Cryptographically verifiable |

---

# Key Features

## Decentralized Data Passport

A reusable portable identity containing:
- wallet addresses
- social accounts
- educational credentials
- DAO memberships
- attendance proofs
- community reputation
- verification badges

Users create identity once and reuse it everywhere.

---

## Selective Credential Sharing

Applications request only the exact credentials they need.

Example:

```txt
Hackathon Platform requests:
  ✓ University verification
  ✓ GitHub profile
  ✓ Wallet ownership
  ✗ DAO voting history
  ✗ Private social credentials
```

Users maintain complete control over what gets shared.

---

## On-Chain Permission Management

Every:
- consent approval
- permission grant
- permission revocation
- verification event

is recorded on Algorand for:
- transparency
- immutability
- auditability
- tamper resistance

Sensitive personal data never touches the blockchain directly.

---

## Verifiable Credentials

Supports:
- Wallet verification
- GitHub verification
- Social verification
- Educational credentials
- DAO participation
- Event attendance proofs
- Contributor reputation
- Community trust signals

---

## Dynamic Identity Score

A live reputation score generated using:
- verification completeness
- credential quality
- contribution history
- community reputation
- participation signals

The score remains fully user-controlled and portable.

---

## Permission Dashboard

Users can:
- monitor connected applications
- manage active permissions
- revoke access instantly
- track credential activity
- review sharing history
- monitor verification requests

---

## Privacy-First Design

Verix is built with:
- minimal data exposure
- selective disclosure
- revocable permissions
- cryptographic verification
- user sovereignty

as core design principles.

---

# Architecture

```txt
┌───────────────────────────────────────────────────────────────┐
│                           VERIX                              │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Frontend Layer                                              │
│   ├── Passport UI                                             │
│   ├── Permission Dashboard                                    │
│   ├── Verification Flows                                      │
│   └── Wallet Integration                                      │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Smart Contract Layer                                        │
│   ├── Passport Creation                                       │
│   ├── Permission Management                                   │
│   ├── Credential Verification                                 │
│   ├── Identity Scoring                                        │
│   └── Consent Tracking                                        │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   Algorand Infrastructure                                     │
│   ├── AVM Smart Contracts                                     │
│   ├── Box Storage                                              │
│   ├── ARC Standards                                            │
│   └── Immutable Audit Trails                                   │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

# Why Algorand?

Verix is deeply optimized for the Algorand ecosystem.

## Fast Finality

Identity systems require:
- real-time verification
- instant permission updates
- low latency onboarding

Algorand provides near-instant transaction finality.

---

## Ultra-Low Fees

Credential operations happen frequently.

Algorand enables:
- scalable onboarding
- affordable identity infrastructure
- mass credential verification

without expensive gas fees.

---

## AVM Smart Contracts

Verix uses:
- AVM Smart Contracts
- AlgoKit
- PuyaTS
- ARC Standards

to build scalable decentralized identity infrastructure.

---

## Box Storage

Verix leverages Algorand Box Storage for:
- scalable per-user identity state
- efficient permission management
- decentralized credential storage patterns

---

## Security & Scalability

Algorand provides:
- secure decentralized infrastructure
- enterprise-grade scalability
- reliability
- energy efficiency

making it ideal for identity systems.

---

# How It Works

```txt
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. CREATE         2. VERIFY         3. SHARE             │
│                                                             │
│   Create your   →   Link wallets,   →  Applications        │
│   identity          socials, edu,      request only        │
│   passport          DAOs, POAPs         required data      │
│                                                             │
│   4. MANAGE         5. REVOKE                              │
│                                                             │
│   Dashboard     →   Instantly remove                       │
│   tracks all        permissions from                       │
│   activity          connected apps                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# Step-by-Step Flow

## 1. Create Passport

Users create a decentralized identity profile containing:
- username
- wallet address
- bio
- social accounts
- GitHub profile
- educational credentials

---

## 2. Verify Credentials

Users verify:
- wallet ownership
- GitHub accounts
- social profiles
- DAO memberships
- educational affiliations

---

## 3. Receive Credential Requests

Applications request specific fields.

Example:
```txt
Devfolio requests:
✓ University verification
✓ GitHub profile
✓ Wallet address
```

---

## 4. Selective Sharing

Users approve:
- exactly what data gets shared
- which app receives access
- permission duration
- revocation conditions

---

## 5. Manage Permissions

Users manage:
- connected applications
- active permissions
- revoked credentials
- activity history

through a unified dashboard.

---

# Use Cases

| Vertical | What Verix Enables |
|---|---|
| Web3 Hackathons | Instant GitHub + student + wallet verification |
| DAOs | Portable contributor reputation |
| Creator Economy | Verified creator identity |
| Web3 Social | Sybil-resistant onboarding |
| Education | Tamper-proof diplomas |
| Communities | Portable trust and participation records |
| Events | Attendance proofs and credential badges |

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite |
| Routing | TanStack Router, TanStack Start |
| Styling | Tailwind CSS v4, Radix UI |
| Animation | Framer Motion |
| Blockchain | Algorand, AlgoKit, PuyaTS |
| Smart Contracts | AVM Smart Contracts |
| Wallets | Pera Wallet, Defly, Exodus |
| State Management | TanStack Query |
| Deployment | Cloudflare Workers |

---

# Project Structure

```bash
Verix/
├── src/
│   ├── routes/
│   ├── components/
│   │   ├── verix/
│   │   ├── algos/
│   │   └── ui/
│   ├── hooks/
│   ├── utils/
│   └── interfaces/
│
├── smart_contracts/
│   └── verix_contract.ts
│
├── public/
│   ├── favicon.svg
│   └── Verix.png
│
├── package.json
├── wrangler.jsonc
└── README.md
```

---

# Smart Contract

The Verix smart contract is deployed live on Algorand Mainnet.

| Property | Value |
|---|---|
| Application ID | `762955376` |
| App Address | `A65HIKWADS7DXX2ZCDSJE25GRXTLRS3IKXPCWZFBMQLXWGSHY4WFSPQWWI` |
| Creator Address | `37CCCODNNLA74IAE5YYVF6QUQCYKVO7MJHCFCWSF7VHORIRVSI5DXRMQVA` |
| Deployment Transaction ID | `6V6T7UIR6VVJMOOASPSHCLIXXAT4RPFXLHUSDYPOP4O4COH2BB5A` |

---

# Contract Methods

| Method | Description |
|---|---|
| `createPassport` | Create decentralized identity passport |
| `updatePassport` | Update profile information |
| `verifyCredential` | Add verification and update identity score |
| `grantPermission` | Grant scoped permissions to applications |
| `revokePermission` | Instantly revoke permissions |
| `isPermissionActive` | Check permission validity |
| `getIdentityScore` | Read trust score |

---

# Local Development

## Prerequisites

- Node.js 20+
- Python 3.10+
- AlgoKit CLI

---

## Clone Repository

```bash
git clone https://github.com/Nakshatra05/Verix.git
```

---

## Install Dependencies

```bash
cd Verix
npm install
```

---

## Configure Environment

```bash
cp .env.template .env
```

---

## LocalNet Configuration

```env
VITE_ENVIRONMENT=local
VITE_ALGOD_SERVER=http://localhost
VITE_ALGOD_PORT=4001
VITE_ALGOD_NETWORK=localnet
```

---

## TestNet Configuration

```env
VITE_ENVIRONMENT=testnet
VITE_ALGOD_SERVER=https://testnet-api.algonode.cloud
VITE_ALGOD_PORT=443
VITE_ALGOD_NETWORK=testnet
```

---

## Run Frontend

```bash
npm run dev
```

---

# Smart Contract Development

## Start LocalNet

```bash
algokit localnet start
```

---

## Compile Contracts

```bash
npm run build
```

---

## Deploy Contracts

```bash
algokit project deploy localnet
```

---

# Security Model

Verix follows a privacy-first architecture:
- personal data never stored publicly on-chain
- permissions are revocable
- credential sharing is selective
- immutable audit trails exist for approvals
- users remain full owners of identity

---

# Roadmap

## Privacy & Verification

- [ ] Zero-Knowledge Proof integration
- [ ] Encrypted credential storage
- [ ] Selective disclosure proofs
- [ ] Anonymous verification flows

---

## Identity Infrastructure

- [ ] Decentralized identity graph
- [ ] Multi-wallet identity linking
- [ ] Cross-chain identity support
- [ ] Portable reputation system

---

## Algorand Ecosystem

- [ ] ARC-compliant credential NFTs
- [ ] Algorand Name Service integration
- [ ] Soulbound reputation assets
- [ ] Attendance proof credentials

---

## Platform Expansion

- [ ] DAO reputation layers
- [ ] Contributor scoring
- [ ] Web2 OAuth integrations
- [ ] Mobile application
- [ ] Identity APIs for developers

---

# Vision

Verix aims to become the universal decentralized identity layer for the Algorand ecosystem and beyond.

The long-term vision is a world where:
- users fully own their identity
- credentials are portable
- onboarding becomes frictionless
- privacy becomes default
- reputation becomes reusable
- permissions become transparent

Verix transforms identity from a platform-controlled asset into a user-controlled protocol layer.

---

# Contributing

Contributions are welcome.

Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

For major changes, open an issue first to discuss architecture and implementation plans.

---

# License

MIT License © [Nakshatra Goel](https://github.com/Nakshatra05)
