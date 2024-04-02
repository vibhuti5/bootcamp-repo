import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  IconButton,
  ClickAwayListener,
  TextField,
  Box,
  styled,
} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import imageR from '../../../../public/assets/images/rightArrow.svg'
import imageL from '../../../../public/assets/images/leftArrow.svg'
import CalenderImageDown from '../../../../public/assets/Icons/chevronDown.svg'
import CalenderImageUp from '../../../../public/assets/Icons/chevronUp.svg'
import { DatePropsStyles } from './styles'
import Icon from '../../atoms/Icon'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import CloseIcon from '../../../../public/assets/Icons/cross.svg'
import theme from '../../../theme'

type DateSelectorCallback = (date: Date | Dayjs | null) => void

export interface DateSelectorProps {
  text: string
  onChange: DateSelectorCallback
}

const MainBoxStyle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

const LeftArrow = () => <Icon src={imageL} alt="leftArrow" />

const RightArrow = () => <Icon src={imageR} alt="rightArrow" />

const DateSelector = (props: DateSelectorProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | Dayjs | null>(null)

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format('DD MMM YYYY')
    : props.text

  const toggleCalendarIcon = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const handleDateChange = (date: Date | Dayjs | null) => {
    setSelectedDate(date)
    props.onChange(date)
    setIsCalendarOpen(false)
  }

  return (
    <MainBoxStyle>
      <ClickAwayListener onClickAway={() => setIsCalendarOpen(false)}>
        <Box>
          <Box>
            <TextField
              value={formattedDate}
              variant="outlined"
              InputProps={{
                endAdornment: selectedDate ? (
                  <IconButton
                    onClick={() => handleDateChange(null)} // Clear the selected date
                    sx={{ marginTop: '6px' }}
                  >
                    <Icon src={CloseIcon} alt={'Close Icon'}></Icon>
                  </IconButton>
                ) : (
                  <IconButton onClick={toggleCalendarIcon}>
                    <Icon
                      src={isCalendarOpen ? CalenderImageUp : CalenderImageDown}
                      alt="calendar"
                      style={{ marginTop: '8px' }}
                    />
                  </IconButton>
                ),
                sx: {
                  color: theme.palette.text.black,
                  backgroundColor: selectedDate
                    ? theme.palette.primary.light
                    : theme.palette.structuralColor.white,
                  width: '170px',
                  height: '36px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.grays.gray100,
                  },
                },
              }}
              onClick={toggleCalendarIcon}
            />
          </Box>
          {isCalendarOpen && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
                views={['year', 'month', 'day']}
                disableFuture
                showDaysOutsideCurrentMonth
                slots={{
                  leftArrowIcon: LeftArrow,
                  rightArrowIcon: RightArrow,
                }}
                sx={{
                  ...DatePropsStyles,
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 5,
                }}
              />
            </LocalizationProvider>
          )}
        </Box>
      </ClickAwayListener>
    </MainBoxStyle>
  )
}

export default DateSelector
