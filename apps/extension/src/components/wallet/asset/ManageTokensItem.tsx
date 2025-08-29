import { MoreVertical } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

interface Token {
  id: string
  symbol: string
  name: string
  hidden?: boolean
}

interface ManageTokensItemProps {
  token: Token
  onHide: (id: string) => void
  onDelete: (id: string) => void
}

const ManageTokensItem = ({ token }: ManageTokensItemProps) => {
  return (
    <div className='flex items-center justify-between bg-[#23242A] rounded-lg px-4 py-3'>
      <div>
        <div className='font-medium'>{token.symbol}</div>
        <div className='text-xs text-gray-400'>{token.name}</div>
        {token.hidden && <span className='text-xs text-yellow-500 ml-1'>(Hidden)</span>}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <button className='p-1 rounded-full hover:bg-[#292A30] focus:outline-none'>
            <MoreVertical size={20} />
          </button>
        </PopoverTrigger>
        <PopoverContent align='end' className='w-36 p-1'>
          <button
            className='block w-full text-left px-4 py-2 text-sm hover:bg-[#292A30] text-yellow-500 rounded'
            onClick={() => {}}
          >
            Hide
          </button>
          <button
            className='block w-full text-left px-4 py-2 text-sm hover:bg-[#292A30] text-red-500 rounded'
            onClick={() => {}}
          >
            Delete
          </button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ManageTokensItem
