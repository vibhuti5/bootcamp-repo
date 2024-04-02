import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignIn from '.'

describe('Testing Sign-in organism', () => {
  const onClickMockGoogle = jest.fn()
  const signUpOnClick = jest.fn()
  it('renders the component and handles email validation', async () => {
    const { getByTestId, getByText, getByRole } = render(
      <SignIn onOAuthBtnClick={onClickMockGoogle} onSignUp={signUpOnClick} />
    )

    expect(getByTestId('sign-up')).toBeInTheDocument()

    const emailInput =
      getByTestId('email').querySelector('input') ??
      document.createElement('input')

    const passwordInput =
      getByTestId('password').querySelector('input') ??
      document.createElement('input')

    const nameInput =
      getByTestId('user-name').querySelector('input') ??
      document.createElement('input')

    fireEvent.change(nameInput, { target: { value: '' } })
    fireEvent.blur(nameInput)
    await waitFor(() => {
      expect(
        getByText('Please enter name only with characters and spaces')
      ).toBeInTheDocument()
    })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)
    await waitFor(() => {
      expect(
        getByText('Please enter a valid email address')
      ).toBeInTheDocument()
    })

    fireEvent.change(passwordInput, { target: { value: '' } })
    fireEvent.blur(passwordInput)
    await waitFor(() => {
      expect(
        getByText(
          'Password should be atleast 8 characters long with 1 uppercase, 1 lowercase and 1 special character'
        )
      ).toBeInTheDocument()
    })

    fireEvent.change(nameInput, {
      target: { value: 'sss sss' },
    })
    fireEvent.blur(nameInput)

    fireEvent.change(emailInput, {
      target: { value: 'validemail@example.com' },
    })
    fireEvent.blur(emailInput)

    fireEvent.change(passwordInput, {
      target: { value: 'Password@123' },
    })
    fireEvent.blur(passwordInput)

    const signUpButton = getByRole('button', {
      name: 'Sign Up',
    })

    expect(signUpButton).toBeInTheDocument()
    fireEvent.click(signUpButton)
    expect(signUpOnClick).toHaveBeenCalled()
  })
})
