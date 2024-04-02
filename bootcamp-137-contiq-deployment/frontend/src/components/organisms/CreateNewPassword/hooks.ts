import { useState } from 'react'
import { validatePassword } from '../../../utils/validations'
import { CONFIRM_PASSWORD_ERROR, PASSWORD_ERROR } from '../../../utils/constant'

export const usePasswordValidation = () => {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validatePasswordHandler = () => {
    setPasswordError('')
    if (!validatePassword(password)) {
      setPasswordError(PASSWORD_ERROR)
    }
  }

  return {
    password,
    setPassword,
    passwordError,
    validatePassword: validatePasswordHandler,
  }
}

export const useConfirmPasswordValidation = (passwordToMatch: string) => {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const validateConfirmPasswordHandler = () => {
    setConfirmPasswordError('')
    if (passwordToMatch !== confirmPassword) {
      setConfirmPasswordError(CONFIRM_PASSWORD_ERROR)
    }
  }

  return {
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword: validateConfirmPasswordHandler,
  }
}
