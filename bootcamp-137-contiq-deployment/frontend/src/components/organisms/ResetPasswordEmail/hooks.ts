import React, { useState } from 'react'
import { validateEmail } from '../../../utils/validations'
import { EMAIL_NOT_VALID_ERROR } from '../../../utils/constant'

export const useEmailValidation = () => {
  const [email, setEmail] = useState('')
  const [emailHelperText, setEmailHelperText] = useState('')

  const validateEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (!validateEmail(value)) setEmailHelperText(EMAIL_NOT_VALID_ERROR)
    else setEmailHelperText('')
  }

  return {
    email,
    emailHelperText,
    setEmailHelperText,
    validateEmail: validateEmailHandler,
  }
}
