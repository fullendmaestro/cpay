import { useState } from 'react'
import BottomModal from '@/components/ButtomDrawer'
import { DrawerTitle } from '../../ui/drawer-title'
import ManageTokensItem from './ManageTokensItem'

interface Token {
  id: string
  symbol: string
  name: string
  hidden?: boolean
}

interface ManageTokensDrawerProps {
  isOpen: boolean
  onClose: () => void
  tokens: Token[]
}

const ManageTokensDrawer = ({ isOpen, onClose, tokens }: ManageTokensDrawerProps) => {
  return (
    <BottomModal isOpen={isOpen} onClose={onClose} title={DrawerTitle('Manage Tokens')}>
      <div className='space-y-2'>
        {tokens.map((token) => (
          <ManageTokensItem key={token.id} token={token} />
        ))}
      </div>
    </BottomModal>
  )
}

export default ManageTokensDrawer
