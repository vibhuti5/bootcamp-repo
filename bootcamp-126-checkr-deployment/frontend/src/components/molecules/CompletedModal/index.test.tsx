import React from 'react'
import { render, screen } from '@testing-library/react'
import CompletedModal from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

const mockOnClose = jest.fn()

describe('CompletedModal', () => {
  it('renders the modal with the provided text', () => {
    const modalText = 'Test Modal Text'
    const open = true

    render(
      <BrowserRouter>
        <CompletedModal
          modalText={modalText}
          open={open}
          setOpen={mockOnClose}
          redirect={''}
        />
      </BrowserRouter>
    )

    const modal = screen.getByTestId('completed-modal')
    expect(modal).toBeInTheDocument()

    const modalTextElement = screen.getByText(modalText)
    expect(modalTextElement).toBeInTheDocument()
  })
})
