import { useState } from 'react'
import {
  EMAIL_NOT_VALID_ERROR,
  SIGNIN_PASSWORD_ERROR,
} from '../../../utils/constant'
import {
  validateEmail,
  validateSignInPassword,
} from '../../../utils/validation'

export const usePasswordValidation = () => {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validatePasswordHandler = () => {
    setPasswordError('')
    if (!validateSignInPassword(password)) {
      setPasswordError(SIGNIN_PASSWORD_ERROR)
    }
  }

  return {
    password,
    setPassword,
    passwordError,
    validatePassword: validatePasswordHandler,
  }
}

export const useEmailValidation = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmailHandler = () => {
    setEmailError('')
    if (!validateEmail(email)) {
      setEmailError(EMAIL_NOT_VALID_ERROR)
    }
  }

  return {
    email,
    setEmail,
    emailError,
    validateEmail: validateEmailHandler,
  }
}
