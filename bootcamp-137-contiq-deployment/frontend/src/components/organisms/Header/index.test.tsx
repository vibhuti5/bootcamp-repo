import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'
import { UserContext } from '../../../context/UserContext'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}))

describe('Header component', () => {
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <UserContext>
          <Header />
        </UserContext>
      </BrowserRouter>
    )
  }
  it('renders without crashing', () => {
    renderHeader()
  })

  it('should toggle the options on click', () => {
    renderHeader()

    expect(() => screen.getByTestId('profile-options')).toThrow()

    fireEvent.click(screen.getByTestId('profile-picture'))

    expect(screen.getByTestId('profile-options')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('profile-options'))

    fireEvent.click(screen.getByTestId('profile-picture'))

    const logoutButton = screen.getByText('Logout')
    fireEvent.click(logoutButton)
  })

  it('should toggle the notification on click', () => {
    renderHeader()

    fireEvent.click(screen.getByTestId('notification-button'))

    expect(screen.getByText('Notifications')).toBeInTheDocument()

    const button = screen.getByRole('img', { name: 'cross-logo' })
    fireEvent.click(button)
  })

  it('should change the textfield', () => {
    renderHeader()
    const textfield = screen.getByRole('textbox')
    fireEvent.change(textfield, { target: { value: 'Hello' } })
  })
})
