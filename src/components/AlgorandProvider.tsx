import { ReactNode } from 'react'
import { SupportedWallet, WalletId, WalletManager, WalletProvider } from '@txnlab/use-wallet-react'
import { SnackbarProvider } from 'notistack'
import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

interface AlgorandProviderProps {
  children: ReactNode
}

export default function AlgorandProvider({ children }: AlgorandProviderProps) {
  let supportedWallets: SupportedWallet[]
  
  try {
    if (import.meta.env.VITE_ALGOD_NETWORK === 'localnet') {
      const kmdConfig = getKmdConfigFromViteEnvironment()
      supportedWallets = [
        {
          id: WalletId.KMD,
          options: {
            baseServer: kmdConfig.server,
            token: String(kmdConfig.token),
            port: String(kmdConfig.port),
          },
        },
      ]
    } else {
      supportedWallets = [
        { id: WalletId.DEFLY },
        { id: WalletId.PERA },
        { id: WalletId.EXODUS },
        // If you are interested in WalletConnect v2 provider
        // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
      ]
    }
  } catch (error) {
    console.warn('Failed to load wallet configuration, using testnet defaults:', error)
    supportedWallets = [
      { id: WalletId.DEFLY },
      { id: WalletId.PERA },
      { id: WalletId.EXODUS },
    ]
  }

  let algodConfig
  try {
    algodConfig = getAlgodConfigFromViteEnvironment()
  } catch (error) {
    console.warn('Algod configuration not set, using testnet defaults')
    algodConfig = {
      server: 'https://testnet-api.algonode.cloud',
      port: 443,
      token: '',
      network: 'testnet',
    }
  }

  const walletManager = new WalletManager({
    wallets: supportedWallets,
    defaultNetwork: algodConfig.network,
    networks: {
      [algodConfig.network]: {
        algod: {
          baseServer: algodConfig.server,
          port: algodConfig.port,
          token: String(algodConfig.token),
        },
      },
    },
    options: {
      resetNetwork: true,
    },
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider manager={walletManager}>
        {children}
      </WalletProvider>
    </SnackbarProvider>
  )
}
