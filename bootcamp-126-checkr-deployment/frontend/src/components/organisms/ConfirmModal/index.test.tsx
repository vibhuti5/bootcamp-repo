import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ConfirmModal, { ConfirmModalProps } from '.'

const mockOnClose = jest.fn()

const testProps: ConfirmModalProps = {
  from: 'sahith@example.com',
  to: 'Johnsmith@example.com',
  name: 'John Smith',
  open: true,
  onClose: mockOnClose,
  submitNotice: mockOnClose,
}

describe('ConfirmModal', () => {
  test('renders without errors', () => {
    render(<ConfirmModal {...testProps} />)
    expect(screen.getByText('Attachments')).toBeInTheDocument()
  })
  test('calls handleClick and updates open state when the "Submit" button is clicked', () => {
    render(<ConfirmModal {...testProps} />)
    expect(testProps.open).toBe(true)
    const submitButton = screen.getByRole('button', { name: /Submit Notice/i })
    fireEvent.click(submitButton)
  })
  test('calls onClose when the "Close" button is clicked', () => {
    render(<ConfirmModal {...testProps} />)
    const closeButton = screen.getByRole('button', { name: /Close/i })
    fireEvent.click(closeButton)
    expect(testProps.onClose).toHaveBeenCalled()
  })
})
