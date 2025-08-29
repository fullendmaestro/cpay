import type { ReactNode } from 'react'
import { cn } from './lib/utils'
import { BottomNavigation } from './components/navigation'
import { useLocation } from 'react-router-dom'

type GlobalLayoutProps = {
  children?: ReactNode
  location?: Location
}

const fullPanelPaths = ['/settings', '/ai', '/signtransaction', '/login']

const fullScreenPaths = ['/welcome']

export const GlobalLayout = (props: GlobalLayoutProps) => {
  const location = useLocation()
  const isBottomNavVisible = !fullPanelPaths.includes(location.pathname)
  const isFullScreen = fullScreenPaths.includes(location.pathname)

  return (
    <>
      {!isFullScreen && (
        <div
          id='drawer-boundry'
          className={cn('gradient-cosmic relative overflow-auto', !isFullScreen ? 'panel' : '')}
        >
          {props.children}
          {isBottomNavVisible && <BottomNavigation />}
        </div>
      )}

      {isFullScreen && (
        <div
          id='drawer-boundry'
          className={cn(
            'gradient-cosmic relative m-auto overflow-auto',
            !isFullScreen ? 'panel' : '',
          )}
        >
          {props.children}
        </div>
      )}
    </>
  )
}
