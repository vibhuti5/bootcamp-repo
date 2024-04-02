import { Meta, StoryFn } from '@storybook/react'
import TextInputField from '.'
import React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/TextInputField',
  component: TextInputField,
  argTypes: {},
} as Meta<typeof TextInputField>

const Template: StoryFn<typeof TextInputField> = (args) => (
  <TextInputField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Email',
  placeholder: 'abc@gmail.com',
  onChange: action('onChange'),
}
