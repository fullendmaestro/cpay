import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import type { ReactNode, ElementType } from 'react'

const SectionCard = ({
  children,
  title,
  className,
}: {
  children: ReactNode
  title?: string
  className?: string
}) => {
  return (
    <div className={cn('overflow-hidden rounded-2xl bg-[#18191D] p-2 mb-4', className)}>
      {title && (
        <div className='px-4 pt-4 pb-2 font-bold text-xs text-white-100 opacity-80'>{title}</div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default SectionCard

export const SectionItem = ({
  title,
  Icon,
  subTitle,
  onClick,
}: {
  title: string
  Icon: ElementType
  subTitle?: string
  onClick: () => void
}) => {
  return (
    <div
      className='flex items-center px-4 h-[56px] cursor-pointer hover:bg-[#23242A] rounded-xl transition-colors duration-100'
      onClick={onClick}
    >
      <Icon className='w-5 h-5 mr-3 text-[#B39DFF]' />
      <div className='flex flex-col flex-grow min-w-0'>
        <span className='text-base font-semibold text-white-100 truncate'>{title}</span>
        {subTitle && <span className='text-xs text-gray-400 font-medium truncate'>{subTitle}</span>}
      </div>
      <ChevronRight className='w-4 h-4 text-gray-500 ml-2' />
    </div>
  )
}

export const SectionDivider = () => <div className='w-full h-px bg-[#23242A] my-1 opacity-60' />
