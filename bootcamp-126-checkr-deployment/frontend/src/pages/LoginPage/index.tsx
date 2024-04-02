import React from 'react'
import BasicTemplate from '../../components/templates/BasicTemplate'
import Signin from '../../components/organisms/SigninForm'
import { useNavigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { Alert, Snackbar } from '@mui/material'
import { useEmbededAuth } from '../../utils/hooks/useEmbeded'
import useSnackBar from '../../utils/hooks/useSnackBar'
import { LoginFailedAlert } from '../../utils/constants'

const LoginPage = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const webAuth = useEmbededAuth()
  const { openSnackBar, handleClick, handleClose } = useSnackBar()

  const signIn = (email: string, password: string) => {
    const redirectUrl = window.location.origin + '/dashboard'

    webAuth.login(
      {
        email: email,
        password: password,
        realm: 'Username-Password-Authentication',
        redirectUri: redirectUrl,
        responseType: 'token',
      },
      (error: any) => {
        if (error) {
          handleClick()
        }
      }
    )
  }
  const forgotPassword = () => {
    navigate('/forgotPassword')
  }

  const singleSignOn = () => {
    const redirectUrl = window.location.origin + '/dashboard'
    loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        connection: 'google-oauth2',
        redirect_uri: redirectUrl,
      },
    })
  }
  const signUp = () => {
    navigate('/')
  }
  return (
    <BasicTemplate
      rightChildren={
        <>
          <Snackbar
            open={openSnackBar}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              {LoginFailedAlert}
            </Alert>
          </Snackbar>
          <Signin
            signIn={signIn}
            forgotPassword={forgotPassword}
            singleSignOn={singleSignOn}
            signUp={signUp}
          />
        </>
      }
    />
  )
}

export default LoginPage
