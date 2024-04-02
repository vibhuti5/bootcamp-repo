import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResetPasswordEmailForm from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'

describe('ResetPasswordEmailForm', () => {
  it('renders the component and handles email validation', async () => {
    const checkEmailMock = jest.fn()
    const { getByTestId, getByText, queryByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <ResetPasswordEmailForm checkEmail={checkEmailMock} emailError={''} />
      </ThemeProvider>
    )

    expect(getByTestId('reset-password-email')).toBeInTheDocument()
    const emailInput =
      getByTestId('email').querySelector('input') ??
      document.createElement('input')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })

    await waitFor(() => {
      expect(
        getByText('Please enter a valid email address')
      ).toBeInTheDocument()
    })

    fireEvent.change(emailInput, {
      target: { value: 'valid-email@example.com' },
    })

    await waitFor(() => {
      expect(queryByText('Please enter a valid email address')).toBeNull()
    })

    const resetButton = getByRole('button')
    fireEvent.click(resetButton)

    expect(checkEmailMock).toHaveBeenCalledWith('valid-email@example.com')
  })
})
