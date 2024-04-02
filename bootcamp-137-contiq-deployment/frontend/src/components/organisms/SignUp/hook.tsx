import { useState } from 'react'
import {
  EMAIL_NOT_VALID_ERROR,
  NAME_ERROR,
  PASSWORD_ERROR,
} from '../../../utils/constant'
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../../utils/validations'

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

export const useNameValidation = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  const validateNameHandler = () => {
    setNameError('')
    if (!validateName(name)) {
      setNameError(NAME_ERROR)
    }
  }

  return {
    name,
    setName,
    nameError,
    validateName: validateNameHandler,
  }
}
