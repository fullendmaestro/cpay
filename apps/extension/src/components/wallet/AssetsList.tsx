import { Button } from '@/components/ui/button'
import AssetCard from './asset/AssetCard'

interface Asset {
  logoUrl?: string
  symbol: string
  balance: string | number
  price_change_24h?: number
  current_price?: number
  enabled?: boolean
}

interface AssetsListProps {
  balanceVisible: boolean
  evmNativeAssets: Asset[]
  erc20Assets: Asset[]
}

const AssetsList = ({
  balanceVisible,
  evmNativeAssets,
  erc20Assets,
}: AssetsListProps) => {

  


  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <div className='w-full max-w-md flex flex-col mb-16'>
        {/* EVM Native asset cards */}
        {evmNativeAssets &&
          evmNativeAssets.length > 0 &&
          evmNativeAssets.map((asset) => (
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

        {/* ERC20 asset cards */}
        {erc20Assets &&
          erc20Assets.length > 0 &&
          erc20Assets
            .filter((t) => t.enabled)
            .map((asset) => (
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

          <Button
            size='icon'
            variant='ghost'
            className='bg-background/80 hover:bg-background border border-border shadow-md rounded-full'
            onClick={() => {}}
            aria-label='Manage erc20Assets'
          >
            Manage Crypto
          </Button>
              </div>

      </div>
  )
}

export default AssetsList
