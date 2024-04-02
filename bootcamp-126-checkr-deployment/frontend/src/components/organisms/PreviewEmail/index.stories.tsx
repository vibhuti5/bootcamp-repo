import { Meta, StoryFn } from '@storybook/react'
import PreviewEmail from '.'
import React from 'react'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Organisms/PreviewEmail',
  component: PreviewEmail,
  argTypes: {},
} as Meta<typeof PreviewEmail>

const Template: StoryFn<typeof PreviewEmail> = (args) => (
  <PreviewEmail {...args} />
)

export const Default = Template.bind({})
Default.args = {
  handleButtonClick: action('Button clicked'),
}
