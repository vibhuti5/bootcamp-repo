import { Meta, StoryFn } from '@storybook/react'
import InfoTab from '.'
import React from 'react'
import name from '../../../../public/assets/images/name.svg'

export default {
  title: 'Molecules/InfoTab',
  component: InfoTab,
  argTypes: {},
} as Meta<typeof InfoTab>

const Template: StoryFn<typeof InfoTab> = (args) => <InfoTab {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Name',
  value: 'John Smith',
  icon: name,
}
