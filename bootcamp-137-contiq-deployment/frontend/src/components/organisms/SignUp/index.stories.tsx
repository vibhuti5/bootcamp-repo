import { type Meta, type StoryObj } from '@storybook/react'
import SignUp from '.'

const meta: Meta<typeof SignUp> = {
  title: 'Organisms/SignUp',
  component: SignUp,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof SignUp>

export const SignUpElement: Story = {}
export default meta
