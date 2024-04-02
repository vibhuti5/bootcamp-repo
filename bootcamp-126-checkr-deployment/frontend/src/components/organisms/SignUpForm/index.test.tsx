import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SignUpForm from '.'
import '@testing-library/jest-dom'
import {
  SigninEmailPlaceholder,
  SigninPasswordPlaceholder,
} from '../../../utils/constants'

describe('SignUpForm', () => {
  const onSignUpMock = jest.fn()
  const onSignInMock = jest.fn()

  beforeEach(() => {
    onSignUpMock.mockClear()
    onSignInMock.mockClear()
  })

  const renderSignUpForm = () => {
    render(
      <SignUpForm handleSignUp={onSignUpMock} handleSignIn={onSignInMock} />
    )
  }

  it('renders without errors', () => {
    renderSignUpForm()
  })

  it('should enables the signup button when form is valid', () => {
    renderSignUpForm()

    const emailTextElement = screen.getByPlaceholderText(
      SigninEmailPlaceholder
    ) as HTMLInputElement
    const passwordTextElement = screen.getAllByPlaceholderText(
      SigninPasswordPlaceholder
    )

    fireEvent.change(emailTextElement, {
      target: { value: 'john.doe@gmail.com' },
    })
    passwordTextElement.forEach((e) => {
      fireEvent.change(e, { target: { value: 'Abcd123#*' } })
      expect(e).toHaveValue('Abcd123#*')
    })
    expect(emailTextElement.value).toBe('john.doe@gmail.com')

    const visibilityButton = screen.getAllByRole('button', {
      name: 'visibility-off-icon',
    })
    visibilityButton.forEach((e) => {
      fireEvent.click(e)
    })

    const checkboxClick = screen.getByRole('checkbox', {
      name: 'I agree to the Privacy Policy',
    })
    fireEvent.click(checkboxClick)

    const signInButton = screen.getByRole('button', { name: 'Sign in' })
    fireEvent.click(signInButton)

    const signUpButton = screen.getByRole('button', { name: 'Sign up' })
    fireEvent.click(signUpButton)
  })

  it('should disable the signup button when form is invalid', () => {
    renderSignUpForm()

    const emailTextElement = screen.getByPlaceholderText(
      SigninEmailPlaceholder
    ) as HTMLInputElement
    const passwordTextElement = screen.getAllByPlaceholderText(
      SigninPasswordPlaceholder
    )

    passwordTextElement.forEach((e) => {
      fireEvent.change(e, { target: { value: 'Abcd123' } })
    })
    fireEvent.change(emailTextElement, {
      target: { value: 'john.doe#gmail' },
    })

    const signUpButton = screen.getByRole('button', { name: 'Sign up' })
    expect(signUpButton).toBeDisabled()
  })
})
