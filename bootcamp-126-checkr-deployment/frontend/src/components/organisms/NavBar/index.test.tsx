import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NavBar from '.'
import {
  AvatarSubtext,
  CancelButton,
  LogoutButton,
  NavBarItems,
} from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}))

describe('NavBar', () => {
  test('should render NavBar without errors', () => {
    render(
      <BrowserRouter>
        <NavBar
          navBarItems={NavBarItems}
          avatarName="John Doe"
          avatarSubtext={AvatarSubtext}
        />
      </BrowserRouter>
    )
    expect(screen.getByText(NavBarItems[0].title)).toBeInTheDocument()
  })
  test('should be abel to click the Buttons', () => {
    const onClick = jest.fn()
    render(
      <BrowserRouter>
        <NavBar
          navBarItems={NavBarItems}
          avatarName="John Doe"
          avatarSubtext={AvatarSubtext}
        />
      </BrowserRouter>
    )
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button) => {
      button.onclick = onClick
      fireEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    })
  })
  test('should be able to click logout icon and clicking cancel button on logout modal', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar
          navBarItems={NavBarItems}
          avatarName="John Doe"
          avatarSubtext={AvatarSubtext}
        />
      </BrowserRouter>
    )
    const logoutButton = getByTestId('logout-button')
    fireEvent.click(logoutButton)
    const cancelButton = screen.getByText(CancelButton)
    fireEvent.click(cancelButton)
    expect(screen.getByText(NavBarItems[0].title)).toBeInTheDocument()
  })
  test('should be able to click logout icon and clicking logout button on logout modal', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavBar
          navBarItems={NavBarItems}
          avatarName="John Doe"
          avatarSubtext={AvatarSubtext}
        />
      </BrowserRouter>
    )
    const logoutButton = getByTestId('logout-button')
    fireEvent.click(logoutButton)
    const logout = screen.getByText(LogoutButton)
    fireEvent.click(logout)
    expect(screen.getByText(NavBarItems[0].title)).toBeInTheDocument()
  })
})
