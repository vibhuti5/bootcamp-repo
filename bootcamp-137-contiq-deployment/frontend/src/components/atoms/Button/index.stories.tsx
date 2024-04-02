import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'
import theme from '../../../theme'
import GoogleIcon from '../../../../public/assets/images/google.svg'

export default {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const CreateButton = Template.bind({})
CreateButton.args = {
  children: 'Create account',
  variant: 'contained',
  sx: {
    color: theme.palette.structuralColor.white,
    backgroundColor: theme.palette.primary.main,
    width: '26vw',
    '&:hover': { backgroundColor: theme.palette.primary.main },
  },
  onClick: action('Create button clicked'),
}

export const AuthButton = Template.bind({})
AuthButton.args = {
  children: 'Continue with google',
  variant: 'contained',
  sx: {
    color: theme.palette.grays.gray500,
    backgroundColor: theme.palette.grays.gray600,
    width: '26vw',
    '&:hover': { backgroundColor: theme.palette.grays.gray600 },
  },
  startIcon: <img src={GoogleIcon} alt="Google Icon" />,

  onClick: action('Auth button clicked'),
}
