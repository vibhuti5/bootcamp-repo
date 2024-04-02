import { render, screen } from '@testing-library/react'
import Notification from '.'
import ProfileLogo from '../../../../public/assets/Icons/Profile.svg'

describe('Testing Notification Row molecule', () => {
  const imageUrl = ProfileLogo
  const message = 'Amit has uploaded company agreement.pdf'

  it('should render correctly when selfUser is false', () => {
    render(
      <Notification
        imageUrl={imageUrl}
        message={message}
        dateTime={new Date().toDateString()}
      />
    )
    screen.getByText('Amit')
    screen.getByText('has uploaded company agreement.pdf')
  })
})
