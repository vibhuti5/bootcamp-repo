import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import LoginPage from '.'
import { BrowserRouter } from 'react-router-dom'
import {
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
} from '../../utils/constants'
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    loginWithRedirect: jest.fn(),
  }),
}))
describe('LoginPage Component', () => {
  it('calls signIn function when the form is submitted', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
    const passwordTextElement = screen.getByPlaceholderText(
      SigninPasswordPlaceholder
    ) as HTMLInputElement
    const emailTextElement = screen.getByPlaceholderText(
      SigninEmailPlaceholder
    ) as HTMLInputElement
    const signInButton = screen.getByTestId('signin button') as HTMLInputElement
    fireEvent.change(passwordTextElement, { target: { value: 'password!' } })

    fireEvent.change(emailTextElement, {
      target: { value: 'jon.doe123@gmail.com' },
    })
    expect(passwordTextElement.value).toBe('password!')
    expect(emailTextElement.value).toBe('jon.doe123@gmail.com')
    expect(signInButton).toBeEnabled()
    fireEvent.click(signInButton)
  })

  it('calls forgotPassword and singleSignon Button', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )
    const forgotPassword = screen.getByTestId('forgotPwd')
    expect(forgotPassword).toBeInTheDocument()
    fireEvent.click(forgotPassword)

    const singleSignon = screen.getByText('Sign in with Google')
    expect(singleSignon).toBeInTheDocument()
    fireEvent.click(singleSignon)

    const signUp = screen.getByText('Sign up')
    expect(signUp).toBeInTheDocument()
    fireEvent.click(signUp)
  })
})
