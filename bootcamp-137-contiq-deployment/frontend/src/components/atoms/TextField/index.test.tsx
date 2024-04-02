import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import TextField from '.'
describe('TextField', () => {
  test('should show the textField', () => {
    render(<TextField placeholder="email" />)
    const textElement = screen.getByPlaceholderText('email')
    expect(textElement).toBeInTheDocument()
  })

  test('should handles the value change of the input field', () => {
    const handleChange = jest.fn((event) => {
      return {
        target: {
          value: event.target.value,
        },
      }
    })
    render(<TextField placeholder="Test Input" onChange={handleChange} />)
    const inputElement = screen.getByPlaceholderText('Test Input')
    const value = 'test'
    fireEvent.change(inputElement, { target: { value: value } })
    expect(handleChange).toHaveBeenCalled()
  })
})
