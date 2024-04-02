import { ChangeEvent, useState } from 'react'
import {
  evaluatePasswordStrength,
  validateEmailFormat,
} from '../../../utils/helper/index.d'

interface UserDetails {
  email: string
  password: string
}

interface ErrorState {
  email: string
  password: string
  confirmPassword: string
}

export function useFormValidations() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<ErrorState>({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isChecked, setIsChecked] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    setUserDetails((prevState) => ({
      ...prevState,
      email: value,
    }))

    if (!validateEmailFormat(value) && value.length) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }))
    }
  }

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    setUserDetails((prevState) => ({
      ...prevState,
      password: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: evaluatePasswordStrength(value),
    }))
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    setConfirmPassword(value)
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword:
        userDetails.password !== value ? 'Passwords do not match' : '',
    }))
  }

  const isValidDetails =
    !errors.email &&
    !errors.password &&
    userDetails.email &&
    userDetails.password &&
    userDetails.password === confirmPassword

  return {
    userDetails,
    errors,
    isChecked,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleCheckboxChange,
    handleConfirmPasswordChange,
    isValidDetails,
  }
}
