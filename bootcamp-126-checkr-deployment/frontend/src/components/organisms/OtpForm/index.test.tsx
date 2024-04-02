import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import OtpForm from '.'
import '@testing-library/jest-dom'

describe('OtpForm', () => {
  it('renders the component', () => {
    render(<OtpForm />)
    const component = screen.getAllByRole('textbox')
    expect(component).toHaveLength(4)

    component.forEach((input) => {
      fireEvent.change(input, { target: { value: 1 } })
    })
    const continueButton = screen.getByText('Continue')
    fireEvent.click(continueButton)
  })
  it('disables the Continue button when OTP is empty', () => {
    render(<OtpForm />)
    const continueButton = screen.getByText('Continue')
    expect(continueButton).toBeDisabled()
  })
})
