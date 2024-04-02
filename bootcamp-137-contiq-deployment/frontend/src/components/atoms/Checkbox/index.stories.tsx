import { Meta, StoryObj } from '@storybook/react'
import CheckboxComponent from '.'

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Atoms/CheckBox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    onCheck: {
      action: 'checked',
    },
  },
}
type Story = StoryObj<typeof CheckboxComponent>

const checkbox = {
  color: 'white',
  '&.Mui-checked': {
    color: 'white',
  },
}

export const Checkbox: Story = {
  args: {
    isChecked: false,
    label: 'Check Me',
    controlLabelStyle: { color: 'white' },
    checkboxStyle: checkbox,
  },
}

export default meta
