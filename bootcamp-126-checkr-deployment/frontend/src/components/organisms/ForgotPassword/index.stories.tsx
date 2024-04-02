import { Meta, StoryFn } from '@storybook/react'
import ForgotPassword from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'organisms/ForgotPassword',
  component: ForgotPassword,
} as Meta<typeof ForgotPassword>

const Template: StoryFn<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onClick: action('button Clicked'),
}
