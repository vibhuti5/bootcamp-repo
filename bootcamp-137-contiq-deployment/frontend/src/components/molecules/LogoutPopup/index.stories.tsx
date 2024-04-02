import { type Meta, type StoryObj } from '@storybook/react'
import LogoutPopup from '.'

const meta: Meta<typeof LogoutPopup> = {
  title: 'MOLECULES/LogoutPopup',
  parameters: {
    layout: 'centerd',
  },
  component: LogoutPopup,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof LogoutPopup>

export const Default: Story = {
  args: {
    name: 'John Ross',
    isOpen: true,
    sx: {
      width: '180px',
    },
  },
}

export default meta
