import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ForgotPasswordPage } from '.'
import * as services from '../../services'
import theme from '../../theme'
const mockedUserInformation: any[] = [
  {
    id: 1,
    name: 'John',
    email: 'John@zemosolabs.com',
    password: 'Password#123',
    notification_count: 1,
  },
]

jest.spyOn(services, 'getUserByEmail').mockResolvedValue(mockedUserInformation)
jest.spyOn(services, 'updatePassword')
describe('ForgotPasswordPage', () => {
  it('renders ResetPasswordEmailForm initially', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ForgotPasswordPage />
        </ThemeProvider>
      </BrowserRouter>
    )

    const emailForm = screen.getByTestId('reset-password-email')
    expect(emailForm).toBeInTheDocument()
  })

  it('renders CreateNewPasswordForm after email is checked', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ForgotPasswordPage />
        </ThemeProvider>
      </BrowserRouter>
    )

    const emailInput =
      screen.getByTestId('email').querySelector('input') ??
      document.createElement('input')
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'John@zemosolabs.com' } })
    fireEvent.click(submitButton)

    const newPasswordForm = await screen.findByTestId('create-new-password')
    expect(newPasswordForm).toBeInTheDocument()
  })

  it('renders ResetPasswordConfirmation after password is created', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ForgotPasswordPage />
        </ThemeProvider>
      </BrowserRouter>
    )

    const emailInput =
      screen.getByTestId('email').querySelector('input') ??
      document.createElement('input')
    const submitButton = screen.getByRole('button')

    fireEvent.change(emailInput, { target: { value: 'John@zemosolabs.com' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      const passwordInput =
        screen.getByTestId('new-password').querySelector('input') ??
        document.createElement('input')
      const confirmPasswordInput =
        screen.getByTestId('confirm-password').querySelector('input') ??
        document.createElement('input')
      const createPasswordButton = screen.getByText('Reset password')

      fireEvent.change(passwordInput, { target: { value: 'newPassword123' } })
      fireEvent.change(confirmPasswordInput, {
        target: { value: 'newPassword123' },
      })
      fireEvent.click(createPasswordButton)
    })
  })
})
