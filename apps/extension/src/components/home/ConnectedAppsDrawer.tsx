import { Button } from '@/components/ui/button'
import BottomModal from '@/components/ButtomDrawer'
import { Globe2, Settings, Shield } from 'lucide-react'
import { DrawerTitle } from '../ui/drawer-title'

interface ConnectedAppsDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const ConnectedAppsDrawer = ({ isOpen, onClose }: ConnectedAppsDrawerProps) => {
  return (
    <BottomModal
      isOpen={isOpen}
      onClose={onClose}
      title={DrawerTitle('Connected Applications')}
      footerComponent={
        <div className='flex gap-2 w-full'>
          <Button
            variant='secondary'
            className='flex-1 px-6 py-2 w-full rounded-full'
            onClick={onClose}
          >
            Close
          </Button>
          <Button className='flex-1 px-6 py-2 w-full rounded-full' onClick={() => {}}>
            <Settings className='w-4 h-4 mr-1' />
            Manage All
          </Button>
        </div>
      }
    >
      <div className='space-y-4'>
        <div className='space-y-3'>
          <div className='p-4 border-2 border-dashed border-muted rounded-lg text-center'>
            <Globe2 className='w-8 h-8 text-muted-foreground mx-auto mb-2' />
            <p className='text-sm text-muted-foreground mb-3'>
              When you connect to dApps, they'll appear here
            </p>
            <Button variant='outline' size='sm'>
              Browse dApps
            </Button>
          </div>
        </div>
      </div>
    </BottomModal>
  )
}

export default ConnectedAppsDrawer
