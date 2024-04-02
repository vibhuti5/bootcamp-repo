import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'
import theme from '../../../theme'

export default {
  title: 'atoms/Button',
  component: Button,
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

export const Cancel = Template.bind({})
Cancel.args = {
  children: 'Cancel',
  variant: 'outlined',
  sx: {
    color: theme.palette.structuralColors.white,
    backgroundColor: theme.palette.primary[500],
  },
  onClick: action('cancel button clicked'),
}
