import { algo, AlgorandClient } from '@algorandfoundation/algokit-utils'
import { useWallet } from '@txnlab/use-wallet-react'
import { useState, useMemo } from 'react'
import { useSnackbar } from 'notistack'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { getAlgodConfigFromViteEnvironment } from '../../utils/network/getAlgoClientConfigs'

interface TransactProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function Transact({ open, onOpenChange }: TransactProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [receiverAddress, setReceiverAddress] = useState<string>('')
  const { enqueueSnackbar } = useSnackbar()
  const { transactionSigner, activeAddress } = useWallet()

  const algorand = useMemo(() => {
    try {
      const algodConfig = getAlgodConfigFromViteEnvironment()
      return AlgorandClient.fromConfig({ algodConfig })
    } catch {
      enqueueSnackbar('Failed to initialize Algorand client', { variant: 'error' })
      return null
    }
  }, [enqueueSnackbar])

  const isValidAddress = receiverAddress.length === 58

  const handleSubmitAlgo = async () => {
    setLoading(true)

    if (!transactionSigner || !activeAddress) {
      enqueueSnackbar('Please connect wallet first', { variant: 'warning' })
      setLoading(false)
      return
    }

    if (!algorand) {
      enqueueSnackbar('Algorand client not initialized', { variant: 'error' })
      setLoading(false)
      return
    }

    try {
      enqueueSnackbar('Sending transaction...', { variant: 'info' })
      const result = await algorand.send.payment({
        signer: transactionSigner,
        sender: activeAddress,
        receiver: receiverAddress,
        amount: algo(1),
      })
      enqueueSnackbar(`Transaction sent: ${result.txIds[0]}`, { variant: 'success' })
      setReceiverAddress('')
      onOpenChange(false)
    } catch (error) {
      enqueueSnackbar('Failed to send transaction', { variant: 'error' })
      console.error('Transaction error:', error)
    }

    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Payment Transaction</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="receiver-address">Receiver Address</Label>
            <Input
              id="receiver-address"
              type="text"
              placeholder="Enter wallet address (58 characters)"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
              data-testid="receiver-address"
            />
            <p className="text-sm text-muted-foreground">
              {receiverAddress.length > 0 ? `${receiverAddress.length}/58` : ''}
            </p>
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              onClick={handleSubmitAlgo}
              disabled={!isValidAddress || loading}
              data-testid="send-algo"
            >
              {loading ? 'Sending...' : 'Send 1 Algo'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
