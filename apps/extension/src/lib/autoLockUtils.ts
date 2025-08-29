import browser from 'webextension-polyfill'
import { LAST_LOGIN, PASSWORD } from './storageKeys'
import { defualtAutoLockTimeOut } from './const'

/**
 * Updates the last login timestamp in storage
 * This should be called whenever the user performs authentication
 * or when we want to reset the auto-lock timer
 */
export const updateLastLogin = async (): Promise<void> => {
  try {
    await browser.storage.local.set({
      [LAST_LOGIN]: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to update last login time:', error)
  }
}

/**
 * Gets the last login timestamp from storage
 */
export const getLastLogin = async (): Promise<Date | null> => {
  try {
    const result = await browser.storage.local.get([LAST_LOGIN])
    const lastLoginStr = result[LAST_LOGIN]
    return typeof lastLoginStr === 'string' ? new Date(lastLoginStr) : null
  } catch (error) {
    console.error('Failed to get last login time:', error)
    return null
  }
}

/**
 * Gets the auto-lock timeout value from storage (in minutes)
 * Returns default of 15 minutes if not set
 */
export const getAutoLockTimeout = async (): Promise<number> => {
  try {
    const result = await browser.storage.local.get(['auto-lock-timeout'])
    const value = result['auto-lock-timeout']
    return typeof value === 'number' ? value : defualtAutoLockTimeOut // Default 15 minutes
  } catch (error) {
    console.error('Failed to get auto-lock timeout:', error)
    return 15 // Default fallback
  }
}

/**
 * Sets the auto-lock timeout value in storage (in minutes)
 */
export const setAutoLockTimeout = async (timeoutMinutes: number): Promise<void> => {
  try {
    await browser.storage.local.set({
      'auto-lock-timeout': timeoutMinutes,
    })
  } catch (error) {
    console.error('Failed to set auto-lock timeout:', error)
  }
}

/**
 * Sets the user's password in browser storage (encrypted or plain for now)
 */
export const setPassword = async (password: string): Promise<void> => {
  try {
    await browser.storage.session.set({
      [PASSWORD]: password,
    })
  } catch (error) {
    console.error('Failed to set wallet password:', error)
  }
}

/**
 * Gets the user's password from browser storage
 */
export const getPassword = async (): Promise<string | null> => {
  try {
    const result = await browser.storage.session.get([PASSWORD])
    const value = result[PASSWORD]
    return typeof value === 'string' ? value : null
  } catch (error) {
    console.error('Failed to get wallet password:', error)
    return null
  }
}

/**
 * Clear the user's password from browser storage
 */
export const clearPassword = async (): Promise<void> => {
  try {
    await browser.storage.session.set({
      [PASSWORD]: '',
    })
  } catch (error) {
    console.error('Failed to set wallet password:', error)
  }
}
