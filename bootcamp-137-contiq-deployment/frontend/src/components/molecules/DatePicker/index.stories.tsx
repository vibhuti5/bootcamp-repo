import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import DateSelector from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/DateSelector',
  component: DateSelector,
} as Meta

const Template: StoryFn<typeof DateSelector> = (args) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateSelector {...args} />
    </LocalizationProvider>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  text: 'Start Date',
  onChange: action('Date Changed'),
}
