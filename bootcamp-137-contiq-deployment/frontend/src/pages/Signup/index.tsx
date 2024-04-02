import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import SignUp from '../../components/organisms/SignUp'
import AuthTemplate from '../../components/templates/AuthTemplate'
import { createUser, getUserByEmail } from '../../services'
import { auth0Config } from '../../utils/constant'
import { ISignUp } from '../../utils/interface'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const onSignUpHandler = (email: string, password: string, name: string) => {
    const signUpRequestBody: ISignUp = {
      email: email,
      password: password,
      name: name,
    }

    getUserByEmail(email).then((res) => {
      if (!res) {
        createUser(signUpRequestBody)
        navigate('/sign-in')
      } else alert('user with this email already exists')
    })
  }
  const onOAuthBtnClickHandler = () => {
    loginWithRedirect(auth0Config)
  }

  const onSignInToggleHandler = () => {
    //Sign in toggle - Will be implemented in routing
    navigate('/sign-in')
  }

  return (
    <AuthTemplate
      rightChildren={
        <SignUp
          onSignInToggle={onSignInToggleHandler}
          onSignUp={onSignUpHandler}
          onOAuthBtnClick={onOAuthBtnClickHandler}
        />
      }
    />
  )
}

export default SignUpPage
