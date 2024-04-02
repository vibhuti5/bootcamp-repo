import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignInPage from '.'
import AuthContextProvider from '../../context/AuthContext'
import * as services from '../../services'
import { UserContext } from '../../context/UserContext'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}))

const mockedFileInformation: any[] = [
  {
    id: 1,
    name: 'John',
    email: 'John@zemosolabs.com',
    password: 'John@123',
    notification_count: 1,
  },
  {
    id: 2,
    name: 'Mark',
    email: 'mark@zemosolabs.com',
    password: 'Mark@1234',
    notification_count: 0,
  },
]

jest.spyOn(services, 'getUserByEmail').mockResolvedValue(mockedFileInformation)

describe('testing the sign in page file', () => {
  const renderSignInPage = () => {
    render(
      <BrowserRouter>
        <UserContext>
          <AuthContextProvider>
            <SignInPage />
          </AuthContextProvider>
        </UserContext>
      </BrowserRouter>
    )
  }
  test('testing the left and right sides', () => {
    renderSignInPage()
    const rightchild = screen.getByTestId('rightpannel')
    expect(rightchild).toBeInTheDocument()
    expect(screen.getByTestId('sign-in')).toBeInTheDocument()

    const emailInput =
      screen.getByTestId('email').querySelector('input') ??
      document.createElement('input')

    const passwordInput =
      screen.getByTestId('password').querySelector('input') ??
      document.createElement('input')
    fireEvent.change(emailInput, {
      target: { value: 'John@zemosolabs.com' },
    })
    fireEvent.blur(emailInput)

    fireEvent.change(passwordInput, {
      target: { value: 'John@123' },
    })
    fireEvent.blur(passwordInput)

    const singInButton = screen.getByRole('button', {
      name: 'Sign In',
    })

    expect(singInButton).toBeInTheDocument()
    fireEvent.click(singInButton)
  })

  test('testing with invalid credentials', () => {
    renderSignInPage()
    const rightchild = screen.getByTestId('rightpannel')
    expect(rightchild).toBeInTheDocument()
    expect(screen.getByTestId('sign-in')).toBeInTheDocument()

    const emailInput =
      screen.getByTestId('email').querySelector('input') ??
      document.createElement('input')

    const passwordInput =
      screen.getByTestId('password').querySelector('input') ??
      document.createElement('input')
    fireEvent.change(emailInput, {
      target: { value: 'John@zemosolabs.com' },
    })
    fireEvent.blur(emailInput)

    fireEvent.change(passwordInput, {
      target: { value: 'John@1234' },
    })
    fireEvent.blur(passwordInput)

    const singInButton = screen.getByRole('button', {
      name: 'Sign In',
    })

    expect(singInButton).toBeInTheDocument()
    fireEvent.click(singInButton)
  })

  test('testing google login', () => {
    renderSignInPage()
    const googleButton = screen.getByRole('button', {
      name: 'Google Icon Continue with google',
    })

    fireEvent.click(googleButton)
  })
  test('testig sign-up button', () => {
    renderSignInPage()
    const signUpButton = screen.getByText('Sign Up')

    fireEvent.click(signUpButton)
  })
  test('testig sign-up button', () => {
    renderSignInPage()
    const forgotPassowrdButton = screen.getByText('Forgot Password?')

    fireEvent.click(forgotPassowrdButton)
  })
})
