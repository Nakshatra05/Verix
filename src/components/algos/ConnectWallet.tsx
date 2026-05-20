import { useWallet, Wallet, WalletId } from '@txnlab/use-wallet-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import Account from './Account'

interface ConnectWalletProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConnectWallet({ open, onOpenChange }: ConnectWalletProps) {
  const { wallets, activeAddress } = useWallet()

  const isKmd = (wallet: Wallet) => wallet.id === WalletId.KMD

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Wallet Provider</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {activeAddress && (
            <>
              <Account />
              <div className="border-t" />
            </>
          )}

          {!activeAddress && (
            <div className="space-y-2">
              {wallets?.map((wallet) => (
                <Button
                  key={`provider-${wallet.id}`}
                  onClick={() => wallet.connect()}
                  variant="outline"
                  className="w-full justify-start"
                  data-testid={`${wallet.id}-connect`}
                >
                  {!isKmd(wallet) && (
                    <img
                      alt={`wallet_icon_${wallet.id}`}
                      src={wallet.metadata.icon}
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  <span>{isKmd(wallet) ? 'LocalNet Wallet' : wallet.metadata.name}</span>
                </Button>
              ))}
            </div>
          )}

          {activeAddress && (
            <Button 
              variant="default" 
              className="w-full"
              onClick={() => onOpenChange(false)}
            >
              Done
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
