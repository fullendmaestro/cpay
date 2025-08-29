import { calculateFiatBalance } from '@/lib/utils'
import { useAssets } from '@/hooks/useAssets'
import { useState } from 'react'
import { SlidersHorizontal, Plus, Trash2, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BottomModal from '@/components/ButtomDrawer'
import AssetCard from './asset/AssetCard'
import AddTokenDrawer from './asset/AddTokenDrawer'
import ManageTokensDrawer from './asset/ManageTokensDrawer'

interface AssetsListProps {
  balanceVisible: boolean
}

// Drawer for adding a token

const AssetsList = ({ balanceVisible }: AssetsListProps) => {
  const { selectedAccount, seiTokenAsset, erc20Assets } = useAssets()
  const [manageDrawerOpen, setManageDrawerOpen] = useState(false)
  const [addDrawerOpen, setAddDrawerOpen] = useState(false)

  // Simulated tokens state (should be replaced with Redux or context)
  const [tokens, setTokens] = useState(
    erc20Assets?.map((a: any) => ({ ...a, enabled: true })) || [],
  )

  const handleRemoveToken = (token: any) => {
    setTokens(tokens.filter((t: any) => t.symbol !== token.symbol))
  }
  const handleToggleToken = (token: any) => {
    setTokens(
      tokens.map((t: any) => (t.symbol === token.symbol ? { ...t, enabled: !t.enabled } : t)),
    )
  }

  if (!selectedAccount || !seiTokenAsset) {
    return null
  }

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-full max-w-md flex flex-col mb-16'>
        {/* SEI asset card */}
        <AssetCard
          logoUrl={seiTokenAsset.logoUrl}
          symbol={seiTokenAsset.symbol}
          balance={seiTokenAsset.balance}
          balanceVisible={balanceVisible}
          isSeiToken={true}
          priceChange={seiTokenAsset.price_change_24h}
          fiatValue={Number(seiTokenAsset.balance) * (seiTokenAsset.current_price || 0)}
        />

        {/* ERC20 asset cards */}
        {tokens &&
          tokens.length > 0 &&
          tokens
            .filter((t: any) => t.enabled)
            .map((asset: any) => (
              <AssetCard
                key={asset.symbol}
                logoUrl={asset.logoUrl || '/assets/defaultcoin.svg'}
                symbol={asset.symbol}
                balance={asset.balance}
                balanceVisible={balanceVisible}
                isSeiToken={false}
                priceChange={asset.price_change_24h}
                fiatValue={Number(asset.balance) * (asset.current_price || 0)}
              />
            ))}

        <div className='w-full max-w-md flex justify-end mt-2'>
          <Button
            size='icon'
            variant='ghost'
            className='bg-background/80 hover:bg-background border border-border shadow-md rounded-full'
            onClick={() => setManageDrawerOpen(true)}
            aria-label='Manage tokens'
          >
            <SlidersHorizontal className='w-5 h-5' />
          </Button>
        </div>
      </div>

      {/* Drawers */}
      <ManageTokensDrawer
        isOpen={manageDrawerOpen}
        onClose={() => setManageDrawerOpen(false)}
        tokens={tokens}
      />
      <AddTokenDrawer isOpen={addDrawerOpen} onClose={() => setAddDrawerOpen(false)} />
    </div>
  )
}

export default AssetsList
