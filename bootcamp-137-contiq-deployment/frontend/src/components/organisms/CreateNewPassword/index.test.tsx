import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import CreateNewPasswordForm from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../../theme'

describe('CreateNewPasswordForm', () => {
  it('calls onClick when the reset button is clicked with valid passwords', async () => {
    const mockOnClick = jest.fn()
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const newPasswordInput =
      getByTestId('new-password').querySelector('input') ??
      document.createElement('input')
    const confirmPasswordInput =
      getByTestId('confirm-password').querySelector('input') ??
      document.createElement('input')
    const resetButton = getByText('Reset password')

    fireEvent.change(newPasswordInput, { target: { value: 'ValidPassword1#' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'ValidPassword1#' },
    })
    fireEvent.click(resetButton)

    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled()
    })
  })

  it('does not call onClick when the reset button is clicked with invalid passwords', async () => {
    const mockOnClick = jest.fn()
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const newPasswordInput =
      getByTestId('new-password').querySelector('input') ??
      document.createElement('input')
    const confirmPasswordInput =
      getByTestId('confirm-password').querySelector('input') ??
      document.createElement('input')
    const resetButton = getByText('Reset password')

    fireEvent.change(newPasswordInput, { target: { value: 'invalidpassword' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'invalidpassword2' },
    })
    fireEvent.click(resetButton)

    await waitFor(() => {
      expect(mockOnClick).not.toHaveBeenCalled()
    })
  })
  it('does not call onClick when the reset button is clicked with empty passwords', async () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const resetButton = getByText('Reset password')

    fireEvent.click(resetButton)

    await waitFor(() => {
      expect(mockOnClick).not.toHaveBeenCalled()
    })
  })
  it('does not call onClick when the reset button is clicked with mismatched passwords', async () => {
    const mockOnClick = jest.fn()
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const newPasswordInput =
      getByTestId('new-password').querySelector('input') ??
      document.createElement('input')
    const confirmPasswordInput =
      getByTestId('confirm-password').querySelector('input') ??
      document.createElement('input')
    const resetButton = getByText('Reset password')

    fireEvent.change(newPasswordInput, { target: { value: 'Password123#' } })
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'DifferentPassword123#' },
    })
    fireEvent.blur(confirmPasswordInput)
    fireEvent.click(resetButton)

    await waitFor(() => {
      expect(mockOnClick).not.toHaveBeenCalled()
    })
  })
  it('disables the button when the reset button is clicked with a password validation error', async () => {
    const mockOnClick = jest.fn()
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )

    const newPasswordInput =
      getByTestId('new-password').querySelector('input') ??
      document.createElement('input')
    const confirmPasswordInput =
      getByTestId('confirm-password').querySelector('input') ??
      document.createElement('input')
    const resetButton = getByRole('button', { name: 'Reset password' })
    fireEvent.blur(newPasswordInput)
    fireEvent.blur(confirmPasswordInput)

    await act(async () => {
      fireEvent.click(resetButton)
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(resetButton).toBeDisabled()
    expect(mockOnClick).not.toHaveBeenCalled()
  })
  it('should show and hide password for create password input', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const createPasswordInput =
      getByTestId('new-password').querySelector('input') ??
      document.createElement('input')
    const showCreatePasswordIcon = getByTestId('show-icon')

    expect(createPasswordInput.type).toBe('password')

    fireEvent.click(showCreatePasswordIcon)
    expect(createPasswordInput.type).toBe('text')

    fireEvent.click(showCreatePasswordIcon)
    expect(createPasswordInput.type).toBe('password')
  })

  it('should show and hide password for confirm password input', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CreateNewPasswordForm onClick={mockOnClick} />
      </ThemeProvider>
    )
    const confirmPasswordInput =
      getByTestId('confirm-password').querySelector('input') ??
      document.createElement('input')
    const showConfirmPasswordIcon = getByTestId('show-icon-confirm')

    expect(confirmPasswordInput.type).toBe('password')

    fireEvent.click(showConfirmPasswordIcon)
    expect(confirmPasswordInput.type).toBe('text')

    fireEvent.click(showConfirmPasswordIcon)
    expect(confirmPasswordInput.type).toBe('password')
  })
})
