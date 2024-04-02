import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Chip from '.'

describe('CustomChip', () => {
  test('renders chip with provided label', () => {
    render(<Chip label="Test Chip" />)

    const chipElement = screen.getByText('Test Chip')
    expect(chipElement).toBeInTheDocument()
  })

  test('should call onClick handler when Chip is clicked', () => {
    const onClickMock = jest.fn()
    render(<Chip label="Clickable Chip" onClick={onClickMock} />)

    const chipElement = screen.getByText('Clickable Chip')
    chipElement.click()

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
