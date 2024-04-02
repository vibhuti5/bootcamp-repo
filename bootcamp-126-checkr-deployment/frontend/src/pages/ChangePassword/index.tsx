import BasicTemplate from '../../components/templates/BasicTemplate'
import ForgotPassword from '../../components/organisms/ForgotPassword'
import React from 'react'
import { OtpSentSuccessfully } from '../../utils/constants'
import OtpForm from '../../components/organisms/OtpForm'
import CompletedModal from '../../components/molecules/CompletedModal'
import { useNavigate } from 'react-router'

const ChangePasswordPage = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const [forgotPassword, setForgotPassword] = React.useState(true)
  const handleClick = () => {
    setOpen(true)
    setTimeout(() => {
      setForgotPassword(false)
      setOpen(false)
    }, 4000)
  }
  return (
    <>
      <BasicTemplate
        rightChildren={
          forgotPassword ? (
            <ForgotPassword onClick={handleClick} goBack={() => navigate(-1)} />
          ) : (
            <OtpForm
              goBack={() => setForgotPassword(true)}
              continueButtonClick={() => navigate('/login')}
            />
          )
        }
      ></BasicTemplate>
      <CompletedModal
        open={open}
        modalText={OtpSentSuccessfully}
        setOpen={setOpen}
        redirect={''}
      ></CompletedModal>
    </>
  )
}

export default ChangePasswordPage
