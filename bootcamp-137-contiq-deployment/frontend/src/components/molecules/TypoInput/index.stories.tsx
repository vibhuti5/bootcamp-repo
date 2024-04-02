import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { action } from '@storybook/addon-actions'
import TypoInput from '.'

export default {
  title: 'Molecules/TypoInput',
  component: TypoInput,
  argTypes: {},
} as Meta<typeof TypoInput>

const Template: StoryFn<typeof TypoInput> = (args) => <TypoInput {...args} />

export const Default = Template.bind({})
Default.args = {
  labelValue: 'Email',
  placeholder: 'abc@gmail.com',
  onChange: action('onChange'),
}
