import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LogoutModal from '.'
import {
  CancelButton,
  ConfirmLogout,
  LogoutButton,
  LogoutText,
} from '../../../utils/constants'

const onCancelMock = jest.fn()
const onLogoutMock = jest.fn()

const initialProps = {
  open: true,
  onCancel: onCancelMock,
  onLogout: onLogoutMock,
}

describe('LogoutModal', () => {
  test('renders correctly', () => {
    render(<LogoutModal {...initialProps} />)
    expect(screen.getByText(ConfirmLogout)).toBeInTheDocument()
    expect(screen.getByText(LogoutText)).toBeInTheDocument()
    expect(screen.getByText(CancelButton)).toBeInTheDocument()
    expect(screen.getByText(LogoutButton)).toBeInTheDocument()
  })

  test('calls onCancel when clicking the Cancel button', () => {
    render(<LogoutModal {...initialProps} />)
    const cancelButton = screen.getByText(CancelButton)
    fireEvent.click(cancelButton)
    expect(onCancelMock).toHaveBeenCalledTimes(1)
  })

  test('calls onLogout when clicking the Logout button', () => {
    render(<LogoutModal {...initialProps} />)
    const logoutButton = screen.getByText(LogoutButton)
    fireEvent.click(logoutButton)
    expect(onLogoutMock).toHaveBeenCalledTimes(1)
  })
})
