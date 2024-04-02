import { type Meta, type StoryObj } from '@storybook/react'
import Notification from '.'
import ProfileLogo1 from '../../../../public/assets/Icons/Profile.svg'
import ProfileLogo2 from '../../../../public/assets/Icons/avatar1.svg'

const meta: Meta<typeof Notification> = {
  title: 'MOLECULES/NotificationRow',
  component: Notification,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Notification>

export const OtherUserUploadedNotification: Story = {
  args: {
    imageUrl: ProfileLogo1,
    message: 'Amit has uploaded company agreement.pdf',
    dateTime: '2023-11-10T19:45:04',
    width: '400px',
  },
}

export const UserUploadedNotification: Story = {
  args: {
    imageUrl: ProfileLogo2,
    message: 'John has updated Company agreement.pdf',
    dateTime: '2023-11-10T19:45:04',
    width: '400px',
  },
}

export default meta
