import { type Meta, type StoryObj } from '@storybook/react'
import ResetPasswordEmailForm from './index'

const meta: Meta<typeof ResetPasswordEmailForm> = {
  title: 'Organisms/ResetPasswordEmail',
  component: ResetPasswordEmailForm,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof ResetPasswordEmailForm>

export const ResetPasswordEmail: Story = {
  args: {
    checkEmail: (email) => {
      console.log(`Email Id ${email}`)
      return true
    },
  },
}

export default meta
