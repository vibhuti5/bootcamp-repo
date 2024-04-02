import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ForgotPassword from '.'
import {
  ForgotPasswordEmailConstant,
  ForgotPasswordTitle,
} from '../../../utils/constants'
const onClickMock = jest.fn()

describe('ForgotPassword Component', () => {
  test('renders without errors', () => {
    render(<ForgotPassword onClick={onClickMock} />)
    expect(screen.getByText(ForgotPasswordTitle)).toBeInTheDocument()
  })
  test('checking buttons are clickable', () => {
    const onClick = jest.fn()
    render(<ForgotPassword onClick={onClickMock} />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button) => {
      button.onclick = onClick
      fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    })
  })
  test('renders the Input', () => {
    render(<ForgotPassword onClick={onClickMock} />)
    const inputs = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputs, { target: { value: 'test@example.com' } })
    expect(inputs.value).toBe('test@example.com')
  })
  test('should enable the button when email is valid', async () => {
    render(<ForgotPassword onClick={onClickMock} />)
    const emailInput = screen.getByPlaceholderText(ForgotPasswordEmailConstant)
    const resetButton = screen.getByRole('button')
    fireEvent.change(emailInput, {
      target: { value: 'john.doe123@gmail.com' },
    })
    expect(resetButton).not.toBeDisabled()
  })
})
