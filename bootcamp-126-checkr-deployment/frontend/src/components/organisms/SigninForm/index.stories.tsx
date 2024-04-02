import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Signin from '.'

export default {
  title: 'organisms/Signin',
  component: Signin,
} as Meta<typeof Signin>

const Template: StoryFn<typeof Signin> = (args) => <Signin {...args} />

export const Default = Template.bind({})
Default.args = {}
