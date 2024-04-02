import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {},
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = () => <Header />

export const Default = Template.bind({})
Default.args = {}
