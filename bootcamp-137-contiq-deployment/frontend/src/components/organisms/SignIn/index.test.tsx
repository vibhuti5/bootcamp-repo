import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignIn from '.'

describe('Testing Sign-in organism', () => {
  const onClickMockGoogle = jest.fn()
  const loginCLickMock = jest.fn()
  const handleForgetPasswordClickMock = jest.fn()
  it('renders the component and handles email validation', async () => {
    const { getByTestId, getByText, getByRole } = render(
      <SignIn
        onOAuthBtnClick={onClickMockGoogle}
        onSignIn={loginCLickMock}
        handleForgetPasswordClick={handleForgetPasswordClickMock}
      />
    )

    expect(getByTestId('sign-in')).toBeInTheDocument()

    const emailInput =
      getByTestId('email').querySelector('input') ??
      document.createElement('input')

    const passwordInput =
      getByTestId('password').querySelector('input') ??
      document.createElement('input')

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
      expect(getByText('Please enter password')).toBeInTheDocument()
    })

    fireEvent.change(emailInput, {
      target: { value: 'valid-email@example.com' },
    })
    fireEvent.blur(emailInput)

    fireEvent.change(passwordInput, {
      target: { value: 'Vv@123' },
    })
    fireEvent.blur(passwordInput)

    const singInButton = getByRole('button', {
      name: 'Sign In',
    })

    expect(singInButton).toBeInTheDocument()
    fireEvent.click(singInButton)
    expect(loginCLickMock).toHaveBeenCalled()
  })
})
