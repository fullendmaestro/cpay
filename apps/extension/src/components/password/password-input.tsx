import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

interface PasswordInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  autoFocus?: boolean
  className?: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = 'Password',
  disabled = false,
  autoFocus = false,
  className = '',
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <Input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full h-12 px-4 pr-12 bg-neutral-900 border-none text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:outline-none text-base'
        autoFocus={autoFocus}
        disabled={disabled}
      />
      <button
        type='button'
        className='absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white focus:outline-none'
        onClick={() => setShowPassword((v) => !v)}
        tabIndex={-1}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
      </button>
    </div>
  )
}

export default PasswordInput
