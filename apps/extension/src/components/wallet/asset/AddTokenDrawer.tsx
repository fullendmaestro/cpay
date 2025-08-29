import BottomModal from '@/components/ButtomDrawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useAppDispatch, addERC20Asset, useWallet, useApp } from '@metafox/wallet-store'
import { geterc20TokenDetails } from '@metafox/sei-sdk'

const AddTokenDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const dispatch = useAppDispatch()
  const { selectedWalletId, selectedAccountId } = useWallet()
  const { selected_network } = useApp()
  const [address, setAddress] = useState('')
  const [symbol, setSymbol] = useState('')
  const [decimals, setDecimals] = useState('')
  const [name, setName] = useState('')
  const [iconUrl, setIconUrl] = useState('')
  const [autofetching, setAutofetching] = useState(false)
  const [autofetchError, setAutofetchError] = useState('')

  const handleAddToken = () => {
    dispatch(
      addERC20Asset({
        walletId: selectedWalletId,
        accountId: selectedAccountId,
        asset: {
          tokenAddress: address,
          symbol,
          decimals: Number(decimals),
          name,
          iconUrl,
          balance: '0',
        },
      }),
    )
    onClose()
  }

  // Autofetch ERC20 details when address changes
  const handleAddressChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAddress(value)
    setAutofetchError('')
    if (/^0x[a-fA-F0-9]{40}$/.test(value)) {
      setAutofetching(true)
      try {
        const details = await geterc20TokenDetails(selected_network, value)
        console.log('Asset detial', details)
        if (details) {
          setSymbol(details.symbol || '')
          setDecimals(details.decimals !== undefined ? String(details.decimals) : '')
          setName(details.name || '')
        }
      } catch (err: any) {
        setAutofetchError('Could not fetch token details')
      } finally {
        setAutofetching(false)
      }
    }
  }

  return (
    <BottomModal
      isOpen={isOpen}
      onClose={onClose}
      title={<span className='font-semibold text-lg'>Add Token</span>}
      footerComponent={
        <div className='flex gap-2 w-full'>
          <Button variant='secondary' className='flex-1 rounded-full' onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant='default'
            className='flex-1 rounded-full'
            onClick={handleAddToken}
            disabled={!address || !symbol}
          >
            Add Token
          </Button>
        </div>
      }
    >
      <div className='space-y-3'>
        {/* Autofetching indicator and error at the top */}
        {autofetching && <div className='text-xs text-blue-500'>Autofetching token details...</div>}
        {autofetchError && <div className='text-xs text-red-500'>{autofetchError}</div>}
        <p className='text-sm text-muted-foreground mb-2'>
          Paste the token contract address below to auto-fill the details:
        </p>
        <Input
          className='mb-4'
          placeholder='Contract address (ex: 0x...)'
          value={address}
          onChange={handleAddressChange}
        />
        <Input
          className='mb-4'
          placeholder='Symbol/Coin denom (ex: USDC/pyUSD)'
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Input
          className='mb-4'
          placeholder='Coin decimals (ex: 6)'
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
        />
        <Input
          className='mb-4'
          placeholder='Token name (optional)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className='mb-4'
          placeholder='Icon url (optional)'
          value={iconUrl}
          onChange={(e) => setIconUrl(e.target.value)}
        />
      </div>
    </BottomModal>
  )
}

export default AddTokenDrawer
