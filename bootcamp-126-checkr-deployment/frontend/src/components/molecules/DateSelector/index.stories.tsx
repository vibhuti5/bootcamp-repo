import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import DateSelector from '.'

export default {
  title: 'Molecules/DateSelectorInput',
  component: DateSelector,
} as Meta

const Template: Story<typeof DateSelector> = () => {
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs>(dayjs())

  const handleDateChange = (date: dayjs.Dayjs) => {
    setSelectedDate(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateSelector value={selectedDate} onChange={handleDateChange} />
    </LocalizationProvider>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
