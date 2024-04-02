import { TextField, styled } from '@mui/material'
import Theme from '../../../theme'

export const StyledTextField = styled(TextField)({
  width: '23vw',
  '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
    height: '2vh',
  },
  '& label.Mui-focused': {
    color: Theme.palette.text.lowEmphasis,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Theme.palette.structuralColors.stroke,
    },
    '&:hover fieldset': {
      borderColor: Theme.palette.structuralColors.stroke,
    },
    '&.Mui-focused fieldset': {
      borderColor: Theme.palette.structuralColors.stroke,
    },
  },
  '& .css-4tn9e0-MuiFormLabel-root-MuiInputLabel-root': {
    color: Theme.palette.text.lowEmphasis,
  },
})

export const DatePropsStyles = {
  '.MuiPickersCalendarHeader-root': {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    color: Theme.palette.text.mediumEmphasis,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  },
  '.MuiPickersCalendarHeader-root:first-of-type': {
    order: 0,
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  '.MuiPickersArrowSwitcher-root': {
    display: 'inline-flex',
    color: Theme.palette.text.mediumEmphasis,
  },
  '.MuiPickersCalendarHeader-label': {
    textAlign: 'center',
    color: Theme.palette.text.highEmphasis,
    fontSize: '15px',
  },
  '.MuiPickersArrowSwitcher-spacer': {
    width: '210px',
  },
  '.css-31ca4x-MuiPickersFadeTransitionGroup-root': {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  '.css-9reuh9-MuiPickersArrowSwitcher-root': {
    marginLeft: '-2px',
  },
  '.MuiPickersArrowSwitcher-button': {
    paddingRight: '7px',
  },
  '.MuiPickersDay-dayWithMargin': {
    borderRadius: '4px',
  },
  '.css-kjeqyd-PrivatePickersYear-button.Mui-selected ': {
    color: Theme.palette.structuralColors.white,
    backgroundColor: Theme.palette.primary[500],
  },
  '.css-1lweomd-MuiTypography-root-PrivatePickersMonth-root.Mui-selected': {
    color: Theme.palette.structuralColors.white,
    backgroundColor: Theme.palette.primary[500],
  },
  '.css-1vflo3j-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
    color: Theme.palette.structuralColors.white,
    backgroundColor: Theme.palette.primary[500],
  },
  '.MuiPickersCalendarHeader-switchViewIcon': {
    display: 'none',
  },
  '.MuiPickersCalendarHeader-switchViewButton': {
    display: 'none',
  },
}
