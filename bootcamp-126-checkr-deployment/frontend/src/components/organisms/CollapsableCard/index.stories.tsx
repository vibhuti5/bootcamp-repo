import { Meta, StoryFn } from '@storybook/react'
import CollapsableCard from '.'
import React from 'react'
import { CandidateInfoValues, ReportInfoValues } from '../../../utils/constants'

export default {
  title: 'Organisms/CollapsableCard',
  component: CollapsableCard,
  argTypes: {},
} as Meta<typeof CollapsableCard>

const Template: StoryFn<typeof CollapsableCard> = (args) => (
  <CollapsableCard {...args} />
)

export const CandidateInfo = Template.bind({})
CandidateInfo.args = {
  label: 'Candidate Information',
  details: CandidateInfoValues,
}

export const ReportInfo = Template.bind({})
ReportInfo.args = {
  label: 'Report Information',
  details: ReportInfoValues,
}
