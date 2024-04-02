import { type Meta, type StoryObj } from '@storybook/react'
import Typography from '.'
import theme from '../../../theme'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Typography>

export const SingUpText: Story = {
  args: {
    text: 'Sign Up',
    variant: 'h2',
  },
}
export const ContiqText: Story = {
  args: {
    text: 'CONTIQ',
    variant: 'body1',
  },
}

export const UserEmailText: Story = {
  args: {
    text: 'Ryan01@gmail.com',
    variant: 'body2',
    color: theme.palette.text.mediumEmphasis,
  },
}

export const ForgotPasswordText: Story = {
  args: {
    text: 'Forgot password?',
    variant: 'caption1',
    color: theme.palette.primary.main,
  },
}
export default meta
