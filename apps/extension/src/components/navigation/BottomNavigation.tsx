import { Home, Image, ArrowUpDown, Sparkles, Clock } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    path: '/',
  },
  {
    id: 'nfts',
    label: 'NFTs',
    icon: Image,
    path: '/nfts',
  },
  {
    id: 'swap',
    label: 'Swap',
    icon: ArrowUpDown,
    path: '/swap',
  },
  {
    id: 'ai',
    label: 'AI',
    icon: Sparkles,
    path: '/ai',
  },
  {
    id: 'activity',
    label: 'Activity',
    icon: Clock,
    path: '/activity',
  },
]

const rootPages = ['home', 'nfts', 'swap', 'ai', 'activity']

const BottomNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className='gradient-cosmic overflow-hidden mx-auto border-t-1 border-primary w-full z-50 flex absolute justify-around left-0 right-0 bottom-0'>
      {navigationItems.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path

        return (
          <Link
            key={item.id}
            to={`${item.path}`}
            onClick={() => handleNavigation(item.path)}
            className={cn(
              'flex flex-col items-center justify-center space-y-1 py-2 px-1 transition-colors',
              'hover:bg-accent/50 rounded-lg mx-1',
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
            )}
            aria-label={item.label}
          >
            <Icon className={cn('size-6', isActive && 'group-hover:[&_g_path]:fill-current')} />
            <span className='text-xs font-medium leading-none'>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default BottomNavigation
