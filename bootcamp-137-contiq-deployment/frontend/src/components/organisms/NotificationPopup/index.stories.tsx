import { type Meta, type StoryObj } from '@storybook/react'
import { NOTIFICATIONS_MOCK } from '../../../utils/constant'
import NotificationPopup from './index'

const meta: Meta<typeof NotificationPopup> = {
  title: 'Organisms/NotificationPopup',
  component: NotificationPopup,
  tags: ['autodocs'],
  argTypes: {
    onCrossButtonClick: {
      action: 'onCrossButtonClick',
    },
    onClose: {
      action: 'onClose',
    },
  },
}
type Story = StoryObj<typeof NotificationPopup>

export const Default: Story = {
  args: {
    open: true,
    notifications: NOTIFICATIONS_MOCK,
    sx: {
      width: '400px',
      height: '470px',
    },
  },
}

export default meta
