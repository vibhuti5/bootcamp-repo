import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import SignIn from '../../components/organisms/SignIn'
import AuthTemplate from '../../components/templates/AuthTemplate'
import { useData } from '../../context/UserContext'
import { userLogin } from '../../services'
import { auth0Config } from '../../utils/constant'
import { jwtDecoder } from '../../utils/helper'
import { ISignIn } from '../../utils/interface'

const SignInPage = () => {
  const { updateData } = useData()
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const onSignInHandler = (loginData: ISignIn) => {
    userLogin(loginData).then((res) => {
      if (res) {
        localStorage.setItem('userToken', res.token)
        updateData(jwtDecoder(res.token))
        navigate('/home')
      } else alert('either email or password is wrong')
    })
  }
  const onOAuthBtnClickHandler = () => {
    loginWithRedirect(auth0Config)
  }

  const onSignUpToggleHandler = () => {
    navigate('/sign-up')
  }

  const onForgotPasswordClickHandler = () => {
    navigate('/forgot-password')
  }

  return (
    <AuthTemplate
      rightChildren={
        <SignIn
          onSignUpToggle={onSignUpToggleHandler}
          onSignIn={onSignInHandler}
          onOAuthBtnClick={onOAuthBtnClickHandler}
          handleForgetPasswordClick={onForgotPasswordClickHandler}
        />
      }
    />
  )
}

export default SignInPage
