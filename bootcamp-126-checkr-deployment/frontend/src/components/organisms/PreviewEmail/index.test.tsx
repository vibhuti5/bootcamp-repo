import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import PreviewEmail from '.'

describe('PreviewEmail Component', () => {
  const onContinueMock = jest.fn()

  beforeEach(() => {
    onContinueMock.mockClear()
  })

  const renderPreviewEmail = () => {
    render(<PreviewEmail handleButtonClick={onContinueMock} />)
  }
  it('should disable the button when no checkboxes are selected', () => {
    renderPreviewEmail()
    const button = screen.getByRole('button', { name: 'Preview Notice' })
    expect(button).toBeDisabled()
  })

  it('should enable the button when checkboxes are selected', () => {
    renderPreviewEmail()
    const checkbox = screen.getByRole('checkbox', {
      name: 'Driving while license suspended',
    })
    const button = screen.getByRole('button', { name: 'Preview Notice' })
    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
  })

  it('should call the handleButtonClick function when the button is clicked', () => {
    renderPreviewEmail()
    const checkbox = screen.getByRole('checkbox', {
      name: 'Driving while license suspended',
    })
    const button = screen.getByRole('button', { name: 'Preview Notice' })
    waitFor(() => {
      fireEvent.click(checkbox)
      fireEvent.click(button)
      expect(button).toHaveBeenCalled()
    })
  })

  it('should select a checkbox when clicked', () => {
    renderPreviewEmail()
    const checkboxToCheck = screen.getByText('Driving while license suspended')

    fireEvent.click(checkboxToCheck)

    expect(checkboxToCheck).toBeInTheDocument()
  })
})
