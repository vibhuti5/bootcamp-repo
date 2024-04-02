import React from 'react'
import { Meta, Story } from '@storybook/react'
import OtpForm from '.'

export default {
  title: 'Organisms/OtpForm',
  component: OtpForm,
} as Meta

const Template: Story = (args) => <OtpForm {...args} />

export const Default = Template.bind({})
Default.args = {}
