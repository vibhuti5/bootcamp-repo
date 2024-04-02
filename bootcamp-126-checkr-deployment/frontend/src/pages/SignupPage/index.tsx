import React from 'react'
import BasicTemplate from '../../components/templates/BasicTemplate'
import { useNavigate } from 'react-router'
import SignUpForm from '../../components/organisms/SignUpForm'
import { Alert, Snackbar } from '@mui/material'
import { SignupFailedAlert } from '../../utils/constants'
import { useEmbededAuth } from '../../utils/hooks/useEmbeded'
import useSnackBar from '../../utils/hooks/useSnackBar'

const SignupPage = () => {
  const navigate = useNavigate()
  const webAuth = useEmbededAuth()
  const { openSnackBar, handleClick, handleClose } = useSnackBar()

  const handleSignUp = (email: string, password: string) => {
    const redirectUrl = window.location.origin + '/login'

    webAuth.signup(
      {
        email: email,
        password: password,
        username: '',
        connection: 'Username-Password-Authentication',
      },
      (err) => {
        if (err) {
          handleClick()
        } else {
          window.location.href = redirectUrl
        }
      }
    )
  }
  const handleSignIn = () => {
    navigate('/login')
  }
  return (
    <BasicTemplate
      rightChildren={
        <>
          <Snackbar
            open={openSnackBar}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Set anchorOrigin to 'top'
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              {SignupFailedAlert}
            </Alert>
          </Snackbar>
          <SignUpForm
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
          ></SignUpForm>
        </>
      }
    />
  )
}

export default SignupPage
