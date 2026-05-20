import { useWallet } from '@txnlab/use-wallet-react'
import { useMemo } from 'react'
import { ellipseAddress } from '../../utils/ellipseAddress'
import { getAlgodConfigFromViteEnvironment } from '../../utils/network/getAlgoClientConfigs'

export default function Account() {
  const { activeAddress } = useWallet()
  
  const algoConfig = useMemo(() => {
    try {
      return getAlgodConfigFromViteEnvironment()
    } catch {
      return { network: 'testnet' }
    }
  }, [])

  const networkName = useMemo(() => {
    return algoConfig.network === '' ? 'localnet' : algoConfig.network.toLowerCase()
  }, [algoConfig.network])

  if (!activeAddress) return null

  return (
    <div className="space-y-2 p-4 bg-muted rounded-lg">
      <div className="text-sm">
        <span className="font-semibold">Address:</span>{' '}
        <a
          href={`https://lora.algokit.io/${networkName}/account/${activeAddress}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {ellipseAddress(activeAddress)}
        </a>
      </div>
      <div className="text-sm">
        <span className="font-semibold">Network:</span> {networkName}
      </div>
    </div>
  )
}
