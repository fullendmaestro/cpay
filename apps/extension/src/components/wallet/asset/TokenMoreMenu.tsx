import React from 'react'

interface TokenMoreMenuProps {
  onHide: () => void
  onDelete: () => void
  onClose: () => void
}

const TokenMoreMenu = ({ onHide, onDelete, onClose }: TokenMoreMenuProps) => {
  return (
    <div className='absolute right-0 mt-2 w-32 bg-[#23242A] rounded shadow-lg z-20 border border-[#292A30]'>
      <button
        className='block w-full text-left px-4 py-2 text-sm hover:bg-[#292A30] text-yellow-500'
        onClick={onHide}
      >
        Hide
      </button>
      <button
        className='block w-full text-left px-4 py-2 text-sm hover:bg-[#292A30] text-red-500'
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default TokenMoreMenu
