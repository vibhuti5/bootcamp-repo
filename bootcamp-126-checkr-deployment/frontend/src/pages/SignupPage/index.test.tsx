import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignupPage from '.'
import {
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
} from '../../utils/constants'

describe('SignupPage Component', () => {
  const onSignUpMock = jest.fn()
  const onSignInMock = jest.fn()

  beforeEach(() => {
    onSignUpMock.mockClear()
    onSignInMock.mockClear()
  })

  const renderSignupPage = () => {
    render(
      <BrowserRouter>
        <SignupPage></SignupPage>
      </BrowserRouter>
    )
  }

  it('should enables the signup button when form in page is valid', () => {
    renderSignupPage()

    const emailElement = screen.getByPlaceholderText(
      SigninEmailPlaceholder
    ) as HTMLInputElement
    const passwordElement = screen.getAllByPlaceholderText(
      SigninPasswordPlaceholder
    )

    fireEvent.change(emailElement, {
      target: { value: 'mark.tol@gmail.com' },
    })
    passwordElement.forEach((e) => {
      fireEvent.change(e, { target: { value: 'Abcd123#*' } })
      expect(e).toHaveValue('Abcd123#*')
    })
    expect(emailElement.value).toBe('mark.tol@gmail.com')

    const checkboxClick = screen.getByRole('checkbox', {
      name: 'I agree to the Privacy Policy',
    })
    fireEvent.click(checkboxClick)

    const signUpButton = screen.getByRole('button', { name: 'Sign up' })
    expect(signUpButton).toBeInTheDocument()
    fireEvent.click(signUpButton)
  })

  it('should show password on the visibility click', () => {
    renderSignupPage()

    const passwordElement = screen.getAllByPlaceholderText(
      SigninPasswordPlaceholder
    )
    passwordElement.forEach((e) => {
      fireEvent.change(e, { target: { value: 'Abcd1234#*' } })
      expect(e).toHaveValue('Abcd1234#*')
    })

    const visibilityButton = screen.getAllByRole('button', {
      name: 'visibility-off-icon',
    })
    visibilityButton.forEach((e) => {
      fireEvent.click(e)
    })
  })

  it('should navigate to login page when clicked', () => {
    renderSignupPage()

    const signInButton = screen.getByRole('button', { name: 'Sign in' })
    expect(signInButton).toBeInTheDocument()
    fireEvent.click(signInButton)
  })
})
