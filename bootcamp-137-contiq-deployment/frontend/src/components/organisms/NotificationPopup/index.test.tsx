import { act, render, screen } from '@testing-library/react'
import NotificationPopup from '.'

jest.useFakeTimers()

const notification = [
  {
    id: '1',
    message: 'Amit has uploaded Company Profile.pdf',
    type: 'UPDATED',
    createdAt: '2023-11-10T19:45:04',
    updatedAt: '2023-11-10T19:45:04',
    userId: ' 1',
    filesId: '1',
  },
]
describe('testing notification popup componenet', () => {
  it('should renders with default props', () => {
    render(<NotificationPopup open={true} notifications={notification} />)
    screen.getByText('Notifications')
  })
  it('should show all notification after notification loader', () => {
    render(<NotificationPopup open={true} notifications={notification} />)
    screen.getByText('Notifications')
  })
  it('should show all notification after notification loader', () => {
    render(<NotificationPopup open={true} notifications={notification} />)
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    screen.getAllByText('Amit')
  })
})
