import React from 'react'
import PasswordInput from './password-input'
import { Button } from '@/components/ui/button'

interface EnterPasswordViewProps {
  password: string
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  disabled?: boolean
  actionLabel?: string
  onForgotPassword?: () => void
}

const EnterPasswordView: React.FC<EnterPasswordViewProps> = ({
  password,
  onPasswordChange,
  onSubmit,
  disabled = false,
  actionLabel = 'Unlock wallet',
  onForgotPassword,
}) => {
  return (
    <form onSubmit={onSubmit} className='w-full'>
      <PasswordInput value={password} onChange={onPasswordChange} disabled={disabled} autoFocus />
      <div className='flex justify-between items-center mb-6 mt-2'>
        <span
          className='text-xs text-gray-500 cursor-pointer hover:underline'
          onClick={onForgotPassword}
          role={onForgotPassword ? 'button' : undefined}
          tabIndex={onForgotPassword ? 0 : -1}
        >
          Forgot Password?
        </span>
      </div>
      <Button
        type='submit'
        disabled={!password || disabled}
        className='w-full h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-none disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200'
      >
        {actionLabel}
      </Button>
    </form>
  )
}

export default EnterPasswordView
