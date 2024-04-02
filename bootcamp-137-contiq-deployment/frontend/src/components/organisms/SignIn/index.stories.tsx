import { type Meta, type StoryObj } from '@storybook/react'
import SignIn from '.'

const meta: Meta<typeof SignIn> = {
  title: 'Organisms/SignIn',
  component: SignIn,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof SignIn>

export const SignInElement: Story = {}
export default meta
