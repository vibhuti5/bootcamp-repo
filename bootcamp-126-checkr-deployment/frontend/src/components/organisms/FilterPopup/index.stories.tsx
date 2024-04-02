import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import FilterPopup from '.'
import {
  AdverseActionFilterPopupMenu,
  filterFields,
} from '../../../utils/constants'

export default {
  title: 'Organisms/FilterPopup',
  component: FilterPopup,
} as Meta

const Template: StoryFn<typeof FilterPopup> = (args) => {
  const [open, setOpen] = useState(true)

  return <FilterPopup {...args} open={open} setOpen={setOpen} />
}

export const CandidatePageFilterPopup = Template.bind({})
CandidatePageFilterPopup.args = {
  filterFields: filterFields,
}

export const AdverseActionFilterPopup = Template.bind({})
AdverseActionFilterPopup.args = {
  filterFields: AdverseActionFilterPopupMenu,
}
