import { cn, formatBalance, formatPriceChange, formatSeiEVM } from '@/lib/utils'
import NumberFlow from '@number-flow/react'

interface AssetCardProps {
  logoUrl?: string
  symbol: string
  balance: string | number
  balanceVisible: boolean
  isSeiToken?: boolean
  priceChange?: number
  fiatValue?: number
}

const AssetCard = ({
  logoUrl,
  symbol,
  balance,
  balanceVisible,
  isSeiToken = false,
  priceChange,
  fiatValue,
}: AssetCardProps) => {
  return (
    <div
      className='flex items-center justify-between p-3 rounded-2xl bg-accent/80 hover:bg-accent transition-colors cursor-pointer border border-transparent hover:border-border mb-2'
      style={{ minWidth: 340 }}
    >
      {/* Asset Icon */}
      <img
        className='size-10 rounded-full'
        src={logoUrl ?? '/assets/defaultcoin.svg'}
        alt='asset logo'
      />

      {/* Asset Info */}
      <div className='flex-1 ml-3'>
        <div className='flex items-center'>
          <span className='font-medium text-foreground'>{symbol}</span>
        </div>
        <div className='text-xs text-muted-foreground mt-0.5'>
          {balanceVisible
            ? isSeiToken
              ? `${formatBalance(balance)} ${symbol}`
              : `${balance} ${symbol}`
            : `•••• ${symbol}`}
        </div>
      </div>

      {/* Asset Fiat Value or Price Change (only for SEI token) */}
      {isSeiToken ? (
        <div className='text-right'>
          <div className='font-medium text-foreground'>
            {balanceVisible ? (
              <NumberFlow
                value={fiatValue ?? 0}
                prefix='$'
                format={{ notation: 'standard', minimumFractionDigits: 2 }}
              />
            ) : (
              '$••••'
            )}
          </div>
          <div
            className={cn('text-xs', (priceChange ?? 0) >= 0 ? 'text-green-500' : 'text-red-500')}
          >
            {(priceChange ?? 0) >= 0 ? '+' : ''}
            {formatPriceChange(priceChange ?? 0).toFixed(2)}%
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AssetCard
