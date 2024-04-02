import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioButton from '.'

export default {
  title: 'atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof RadioButton>

const Template: StoryFn<typeof RadioButton> = () => (
  <RadioButton
    onChange={action('Radio Button selected')}
    formControl={formControlLabelCOnfigs}
  />
)

export const Radio = Template.bind({})

const formControlLabelCOnfigs = {
  value: 'Option_1',
  label: 'Option 1',
}
