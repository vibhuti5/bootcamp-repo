import { Meta, StoryFn } from '@storybook/react'
import InputField from '.'
import VISIBLE from '../../../../public/assets/images/VisibilityOff.svg'
import { IconButton } from '@mui/material'
import Icon from '../Icon'

export default {
  title: 'atoms/InputField',
  component: InputField,
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
} as Meta<typeof InputField>

const template: StoryFn<typeof InputField> = (args) => <InputField {...args} />

export const Default = template.bind({})
Default.args = {
  variant: 'outlined',
  sx: { width: '384px' },
}

export const VisibilityOff = template.bind({})

VisibilityOff.args = {
  variant: 'outlined',
  endAdornment: (
    <IconButton aria-label="toggle password visibility" edge="start">
      <Icon src={VISIBLE} style={{ width: '24px', height: '24px' }}></Icon>
    </IconButton>
  ),
  placeholder: 'username',
}
