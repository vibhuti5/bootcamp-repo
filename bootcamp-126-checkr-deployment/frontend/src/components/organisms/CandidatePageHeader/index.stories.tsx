import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import CandidatePageHeader from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'organisms/CandidatePageHeader',
  component: CandidatePageHeader,
} as Meta<typeof CandidatePageHeader>

const Template: StoryFn<typeof CandidatePageHeader> = (args) => (
  <CandidatePageHeader {...args} />
)
export const Default = Template.bind({})
Default.args = {
  onExport: action('Export button clicked'),
}
