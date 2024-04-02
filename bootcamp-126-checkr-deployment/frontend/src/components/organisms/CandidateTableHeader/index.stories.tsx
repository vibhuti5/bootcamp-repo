import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CandidateTableHeader from '.'

export default {
  title: 'Organisms/CandidateTableHeader',
  component: CandidateTableHeader,
} as Meta

const Template: StoryFn<typeof CandidateTableHeader> = (args) => {
  return <CandidateTableHeader {...args}/>
}

export const Default = Template.bind({})
Default.args = {}
