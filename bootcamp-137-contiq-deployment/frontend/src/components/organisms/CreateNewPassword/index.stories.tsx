import { type Meta, type StoryObj } from '@storybook/react'
import CreateNewPasswordForm from './index'

const meta: Meta<typeof CreateNewPasswordForm> = {
  title: 'Organisms/CreateNewPassword',
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof CreateNewPasswordForm>

export const CreateNewPassword: Story = {
  args: {
    onClick: () => {
      console.log('resetPassword')
    },
  },
}

export default meta
