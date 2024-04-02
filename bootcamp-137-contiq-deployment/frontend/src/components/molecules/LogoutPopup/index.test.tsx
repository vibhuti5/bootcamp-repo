import { fireEvent, render, screen } from '@testing-library/react'
import LogoutPopup from '.'

describe('testing Logout popup molecule', () => {
  it('should render correctly with default props', () => {
    render(<LogoutPopup isOpen={true} name={'John Ross'} />)
    screen.getByText('John Ross')
  })

  it('should able to logout when click on logout', () => {
    const mockOnLogoutClick = jest.fn()

    render(
      <LogoutPopup
        isOpen={true}
        onLogoutClick={mockOnLogoutClick}
        name={'John Ross'}
      />
    )
    const logoutButton = screen.getByText('Logout')
    fireEvent.click(logoutButton)
    expect(mockOnLogoutClick).toBeCalledTimes(1)
  })
})
