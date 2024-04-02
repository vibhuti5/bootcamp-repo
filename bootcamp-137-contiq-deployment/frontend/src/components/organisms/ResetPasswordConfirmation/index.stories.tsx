import { type Meta, type StoryObj } from '@storybook/react'
import ResetPasswordConfirmation from './index'

const meta: Meta<typeof ResetPasswordConfirmation> = {
  title: 'Organisms/ResetPasswordConfirmation',
  component: ResetPasswordConfirmation,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof ResetPasswordConfirmation>

export const ResetPasswordConfirm: Story = {
  args: {
    onClick: () => {
      console.log(`Confirmation`)
    },
  },
}

export default meta
