import React from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SelectionSectionCardProps {
  title?: string
  children: ReactNode
  className?: string
}

export const SelectionSectionCard = ({ title, children, className }: SelectionSectionCardProps) => (
  <div className={cn('overflow-hidden rounded-2xl bg-[#18191D] p-2 mb-4', className)}>
    {title && (
      <div className='px-4 pt-4 pb-2 font-bold text-xs text-white-100 opacity-80'>{title}</div>
    )}
    <div>{children}</div>
  </div>
)

interface SelectionSectionItemProps {
  title: string
  Icon: ReactNode
  subTitle?: string
  selected?: boolean
  onClick: () => void
}

export const SelectionSectionItem = ({
  title,
  Icon,
  subTitle,
  selected,
  onClick,
}: SelectionSectionItemProps) => (
  <div
    className={cn(
      'flex items-center px-4 h-[56px] cursor-pointer hover:bg-[#23242A] rounded-xl transition-colors duration-100',
      selected && 'bg-[#23242A] border border-primary',
    )}
    onClick={onClick}
  >
    <Icon className='w-5 h-5 mr-3 text-[#B39DFF]' />
    <div className='flex flex-col flex-grow min-w-0'>
      <span className='text-base font-semibold text-white-100 truncate'>{title}</span>
      {subTitle && <span className='text-xs text-gray-400 font-medium truncate'>{subTitle}</span>}
    </div>
    {selected && <span className='ml-2 w-2 h-2 bg-primary rounded-full inline-block' />}
  </div>
)

export const SelectionSectionDivider = () => (
  <div className='w-full h-px bg-[#23242A] my-1 opacity-60' />
)
