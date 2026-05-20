# Algorand Integration for Verix Identity Verse

This directory contains Algorand integration for the Verix Identity Verse project, adapted from the AlgoKit project template.

## Overview

The Algorand integration provides:
- Wallet connection management via `use-wallet`
- Network configuration for LocalNet, TestNet, and MainNet
- Transaction utilities for sending payments and interacting with smart contracts
- Error handling and account information display

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file based on `.env.template`:

```bash
cp .env.template .env
```

Then fill in the appropriate values for your network:

**For LocalNet (Development):**
```env
VITE_ENVIRONMENT=local
VITE_ALGOD_TOKEN=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
VITE_ALGOD_SERVER=http://localhost
VITE_ALGOD_PORT=4001
VITE_ALGOD_NETWORK=localnet
```

**For TestNet:**
```env
VITE_ENVIRONMENT=testnet
VITE_ALGOD_TOKEN=
VITE_ALGOD_SERVER=https://testnet-api.algonode.cloud
VITE_ALGOD_PORT=443
VITE_ALGOD_NETWORK=testnet
```

### 3. Wrap Your App with AlgorandProvider

In your main app component or root layout:

```tsx
import AlgorandProvider from '@/components/AlgorandProvider'

export default function App() {
  return (
    <AlgorandProvider>
      {/* Your app content */}
    </AlgorandProvider>
  )
}
```

## Components

### AlgorandProvider

Wraps your application with wallet management and notification support.

```tsx
<AlgorandProvider>
  <YourApp />
</AlgorandProvider>
```

### ConnectWallet

Dialog component for users to connect their wallet.

```tsx
import { useState } from 'react'
import ConnectWallet from '@/components/algos/ConnectWallet'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Connect Wallet</button>
      <ConnectWallet open={open} onOpenChange={setOpen} />
    </>
  )
}
```

### Account

Displays the connected account address and current network.

```tsx
import Account from '@/components/algos/Account'

export default function AccountInfo() {
  return <Account />
}
```

### Transact

Dialog for sending payment transactions.

```tsx
import { useState } from 'react'
import Transact from '@/components/algos/Transact'

export default function PaymentForm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Send Payment</button>
      <Transact open={open} onOpenChange={setOpen} />
    </>
  )
}
```

### ErrorBoundary

Wraps components to catch and display errors, especially helpful for configuration issues.

```tsx
import ErrorBoundary from '@/components/algos/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <YourApp />
    </ErrorBoundary>
  )
}
```

## Utilities

### getAlgodConfigFromViteEnvironment()

Retrieves Algod client configuration from environment variables.

```tsx
import { getAlgodConfigFromViteEnvironment } from '@/utils/network/getAlgoClientConfigs'

const config = getAlgodConfigFromViteEnvironment()
```

### getKmdConfigFromViteEnvironment()

Retrieves KMD (Key Management Daemon) configuration for LocalNet development.

```tsx
import { getKmdConfigFromViteEnvironment } from '@/utils/network/getAlgoClientConfigs'

const kmdConfig = getKmdConfigFromViteEnvironment()
```

### ellipseAddress()

Utility function to format long addresses for display.

```tsx
import { ellipseAddress } from '@/utils/ellipseAddress'

const shortened = ellipseAddress('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
// Output: 'AAAAAA...AAAAAA'
```

## Supported Wallets

- **LocalNet**: KMD (Algorand Key Management Daemon)
- **TestNet/MainNet**: 
  - Pera Wallet
  - Defly Wallet
  - Exodus Wallet
  - Daffi Wallet (can be added)

## Wallet Integration

The `use-wallet` hook provides wallet management:

```tsx
import { useWallet } from '@txnlab/use-wallet-react'

export default function MyComponent() {
  const { wallets, activeAddress, transactionSigner } = useWallet()
  
  // Use wallet data in your component
}
```

## Smart Contracts

To integrate with smart contracts:

1. Use AlgoKit to generate TypeScript client from your smart contract
2. Place the generated client in `src/contracts/`
3. Import and use it in your components

Refer to the [AlgoKit documentation](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/generate.md) for more details.

## Resources

- [AlgoKit CLI](https://github.com/algorandfoundation/algokit-cli)
- [AlgoKit Utils TS](https://github.com/algorandfoundation/algokit-utils-ts)
- [use-wallet](https://github.com/txnlab/use-wallet)
- [Algorand Documentation](https://developer.algorand.org/)

## Troubleshooting

### Configuration Error

If you see "Attempt to get default algod configuration" error:
- Ensure `.env` file exists and is properly configured
- Check that `VITE_ALGOD_SERVER` and other required variables are set
- For LocalNet, ensure your local Algorand network is running

### Network Connection Issues

- Verify the Algod server URL and port are correct
- Check that your network is running (LocalNet, TestNet, MainNet)
- Ensure no firewall is blocking the connection

### Wallet Connection Issues

- For LocalNet: Ensure KMD is running (started with AlgoKit LocalNet)
- For TestNet/MainNet: Ensure the wallet app is installed and running
- Check browser console for detailed error messages
