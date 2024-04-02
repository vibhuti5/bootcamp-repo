import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import ChangePasswordPage from '.'
import {
  ForgotPasswordEmailConstant,
  OtpFialedText,
  OtpSentSuccessfully,
} from '../../utils/constants'
import { BrowserRouter } from 'react-router-dom'

describe('ChangePasswordPage', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <ChangePasswordPage />
      </BrowserRouter>
    )
  })
  test('should able to click button and open modal and close modal after delay', async () => {
    jest.useFakeTimers()
    render(
      <BrowserRouter>
        <ChangePasswordPage />
      </BrowserRouter>
    )
    const emailInput = screen.getByPlaceholderText(ForgotPasswordEmailConstant)
    const resetButton = screen.getByRole('button')
    fireEvent.change(emailInput, {
      target: { value: 'john.doe123@gmail.com' },
    })
    expect(resetButton).not.toBeDisabled()
    fireEvent.click(resetButton)
    expect(screen.getByText(OtpSentSuccessfully)).toBeInTheDocument()
    jest.advanceTimersByTime(4000)

    await waitFor(() => {
      expect(screen.getByText(OtpFialedText)).toBeInTheDocument()
    })
  })
  test('should go back on click from ForgotPassword', () => {
    render(
      <BrowserRouter>
        <ChangePasswordPage />
      </BrowserRouter>
    )
    const backButton = screen.getByText('Go Back')
    fireEvent.click(backButton)
  })
})
