import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CheckBox from '.'

export default {
  title: 'atoms/CheckBox',
  component: CheckBox,
} as Meta

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: action('onChange'),
}
