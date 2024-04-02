import { useState } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'

import { useNavigate } from 'react-router'
import CreateNewPasswordForm from '../../components/organisms/CreateNewPassword'
import ResetPasswordConfirmation from '../../components/organisms/ResetPasswordConfirmation'
import ResetPasswordEmailForm from '../../components/organisms/ResetPasswordEmail'
import { getUserByEmail, updatePassword } from '../../services'
import { EMAIL_ID_DOES_NOT_EXISTS } from '../../utils/constant'
import { IPassword } from '../../utils/interface'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [userEmail, setUserEmail] = useState(null)
  const [emailError, setEmailError] = useState('')
  const [isSentEmail, setIsSentEmail] = useState(true)
  const checkEmail = async (email: string) => {
    const user = await getUserByEmail(email)
    if (user) {
      setIsSentEmail(false)
      setUserEmail(user.email)
      setEmailError('')
    } else {
      setIsSentEmail(true)
      setUserEmail(null)
      setEmailError(EMAIL_ID_DOES_NOT_EXISTS)
    }
  }
  const createPasswordHandler = async (password: IPassword) => {
    if (userEmail != null) {
      const user = await updatePassword(userEmail, password.password)
      if (user) setSuccess(true)
      else setSuccess(false)
    }
  }
  const onConfirmHandler = () => {
    navigate('/')
  }

  let rightChildren

  if (isSentEmail) {
    rightChildren = (
      <ResetPasswordEmailForm emailError={emailError} checkEmail={checkEmail} />
    )
  } else if (success) {
    rightChildren = <ResetPasswordConfirmation onClick={onConfirmHandler} />
  } else {
    rightChildren = <CreateNewPasswordForm onClick={createPasswordHandler} />
  }

  return <AuthTemplate rightChildren={rightChildren} />
}
