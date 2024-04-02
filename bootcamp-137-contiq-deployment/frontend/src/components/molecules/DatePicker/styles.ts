import theme from '../../../theme'

export const DatePropsStyles = {
  '.MuiPickersCalendarHeader-root': {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    borderBottom: '0.5px solid #454545',
    paddingBottom: '12px',
  },
  '.MuiPickersCalendarHeader-root:first-of-type': {
    order: 0,
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  '.MuiPickersArrowSwitcher-root': {
    display: 'inline-flex',
  },
  '.MuiPickersCalendarHeader-label': {
    textAlign: 'center',
    color: theme.palette.text.white,
    ...theme.typography.body1,
  },
  '.MuiPickersArrowSwitcher-spacer': {
    width: '250px',
  },
  '.css-31ca4x-MuiPickersFadeTransitionGroup-root': {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '90px',
    position: 'absolute',
  },
  '.MuiPickersFadeTransitionGroup-root-MuiDateCalendar-viewTransitionContainer':
    {
      borderTop: `1px solid ${theme.palette.grey[100]}`,
    },
  '.MuiPickersArrowSwitcher-button': {
    paddingRight: '7px',
    color: theme.palette.grey[100],
  },
  '.MuiDayCalendar-weekDayLabel': {
    color: theme.palette.text.highEmphasis,
    ...theme.typography.caption,
  },
  '.MuiPickersDay-root': {
    color: theme.palette.text.white,
    ...theme.typography.body2,
  },
  '.MuiPickersDay-today': {
    background: theme.palette.grey[300],
    borderRadius: '2px',
    color: theme.palette.text.white,
  },
  '.MuiButtonBase-root.MuiPickersDay-root:not(.Mui-selected)': {
    border: '2px',
    background: theme.palette.text.black,
  },
  '.MuiPickersDay-root.Mui-disabled:not(.Mui-selected)': {
    color: theme.palette.text.lowEmphasis,
  },
  '.MuiPickersDay-dayOutsideMonth': {
    color: theme.palette.text.lowEmphasis,
  },
  '.MuiPickersYear-root': {
    color: theme.palette.structuralColor.white,
  },
  '.Mui-disabled.css-1u1csrg-MuiPickersYear-yearButton': {
    color: theme.palette.text.lowEmphasis,
  },
  '.MuiPickersMonth-monthButton': {
    color: theme.palette.structuralColor.white,
  },
  '.Mui-disabled.css-i0jh5j-MuiPickersMonth-monthButton': {
    color: theme.palette.text.lowEmphasis,
  },
  '.css-wmsx6r-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  '.css-vn8ug-MuiDateCalendar-root .MuiPickersDay-today': {
    backgroundColor: theme.palette.text.black,
    borderRadius: '30px',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  '.MuiPickersCalendarHeader-switchViewIcon': {
    display: 'none',
  },
  '.MuiPickersCalendarHeader-switchViewButton': {
    display: 'none',
  },
  background: theme.palette.text.black,
  marginTop: '12px',
  border: `1px solid ${theme.palette.grey[100]}`,
}
