import React from 'react'
import {
  LocalizationProvider,
  DesktopDatePicker as MuiDatePicker,
} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IconButton, Stack } from '@mui/material'
import { Dayjs } from 'dayjs'
import Theme from '../../../theme'
import imageR from '../../../../public/assets/images/rightArrow.svg'
import imageL from '../../../../public/assets/images/leftArrow.svg'
import { DatePropsStyles, StyledTextField } from './styles'
import CustomTypography from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import CalenderImage from '../../../../public/assets/images/Calendar.svg'
export interface DateSelectorProps {
  text?: string
  value: Date | Dayjs
  onChange: any
}

const LeftArrow = () => (
  <IconButton
    style={{
      border: '1px solid ' + Theme.palette.structuralColors.stroke,
      borderRadius: 0,
    }}
  >
    <img src={imageL} alt="leftArrow" />
  </IconButton>
)

const RightArrow = () => (
  <IconButton
    style={{
      border: '1px solid ' + Theme.palette.structuralColors.stroke,
      borderRadius: 0,
    }}
  >
    <img src={imageR} alt="rightArrow" />
  </IconButton>
)

const CalenderIcon = () => <Icon src={CalenderImage} alt="calender" />

const DateSelector = (props: DateSelectorProps) => {
  return (
    <Stack direction={'column'} height={'6vh'} gap={'1.5vh'}>
      <CustomTypography
        variant={'body2'}
        color={Theme.palette.text.mediumEmphasis}
      >
        {props.text}
      </CustomTypography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
          renderInput={(params) => (
            <StyledTextField
              {...params}
              error={false}
              placeholder="MM-DD-YYYY"
              value={props.value}
              onKeyDown={(e) => {
                e.preventDefault()
              }}
            />
          )}
          {...props}
          components={{
            OpenPickerIcon: CalenderIcon,
            LeftArrowIcon: LeftArrow,
            RightArrowIcon: RightArrow,
          }}
          views={['year', 'month', 'day']}
          PopperProps={{
            sx: DatePropsStyles,
          }}
          disableFuture
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>
    </Stack>
  )
}

export default DateSelector
