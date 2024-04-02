import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from '.'

describe('Button atom renders', () => {
  test('OnClick event is working correctly', () => {
    const onClick = jest.fn()
    render(
      <Button variant="text" onClick={onClick}>
        Cancel
      </Button>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('text rendering correctly', () => {
    render(<Button variant="text">Save</Button>)
    const buttonText = screen.getByText('Save')
    expect(buttonText).toBeInTheDocument()
  })
})
