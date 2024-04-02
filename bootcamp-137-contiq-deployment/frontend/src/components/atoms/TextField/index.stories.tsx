import { Meta, StoryFn } from '@storybook/react'
import TextField from '.'

export default {
  title: 'atoms/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['outlined', 'standard', 'filled'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'error', 'secondary', 'info', 'success', 'warning'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    width: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof TextField>

const template: StoryFn<typeof TextField> = (args) => <TextField {...args} />

export const Default = template.bind({})
Default.args = {
  variant: 'outlined',
  width: '384px',
  placeholder: 'Create a password',
}
