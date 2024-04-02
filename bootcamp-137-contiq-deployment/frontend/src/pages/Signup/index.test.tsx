import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUpPage from '.'

import * as services from '../../services'

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

describe('testing the sign up page file', () => {
  test('testing the left and right sides', () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )

    const rightchild = screen.getByTestId('rightpannel')
    expect(rightchild).toBeInTheDocument()
    expect(screen.getByTestId('sign-up')).toBeInTheDocument()

    const userNameInput =
      screen.getByTestId('user-name').querySelector('input') ??
      document.createElement('input')

    const emailInput =
      screen.getByTestId('email').querySelector('input') ??
      document.createElement('input')

    const passwordInput =
      screen.getByTestId('password').querySelector('input') ??
      document.createElement('input')

    fireEvent.change(userNameInput, {
      target: { value: 'John' },
    })

    fireEvent.change(emailInput, {
      target: { value: 'John@zemosolabs.com' },
    })
    fireEvent.blur(emailInput)

    fireEvent.change(passwordInput, {
      target: { value: 'John@123' },
    })
    fireEvent.blur(passwordInput)

    const singInButton = screen.getByRole('button', {
      name: 'Sign Up',
    })

    expect(singInButton).toBeInTheDocument()
    fireEvent.click(singInButton)
  })

  test('testing google login', () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )
    const googleButton = screen.getByRole('button', {
      name: 'Google Icon Continue with google',
    })

    fireEvent.click(googleButton)
  })
  test('testig sign-up button', () => {
    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    )
    const signUpButton = screen.getByText('Sign In')

    fireEvent.click(signUpButton)
  })
})
