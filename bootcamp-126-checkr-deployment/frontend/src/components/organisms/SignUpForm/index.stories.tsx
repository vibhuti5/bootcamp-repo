import { Meta, StoryFn } from '@storybook/react'
import SignUpForm from '.'
import React from 'react'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Organisms/SignUpForm',
  component: SignUpForm,
  argTypes: {},
} as Meta<typeof SignUpForm>

const Template: StoryFn<typeof SignUpForm> = (args) => <SignUpForm {...args} />

export const Default = Template.bind({})
Default.args = {
  handleSignUp: action('SignUp Button clicked'),
  handleSignIn: action('SignIn Button clicked'),
}
