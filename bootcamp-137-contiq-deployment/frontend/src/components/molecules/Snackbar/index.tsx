import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Alert, Snackbar, SnackbarProps, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import { COPIED } from '../../../utils/constant'
import Typography from '../../atoms/Typography'

interface CopySnackbarProps extends SnackbarProps {
  open: boolean
  onClose?: () => void
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

const IconStyle = {
  color: theme.palette.structuralColor.white,
}

const AlertStyle = styled(Alert)({
  backgroundColor: theme.palette.grays.gray400,
  '.css-ptiqhd-MuiSvgIcon-root': {
    color: theme.palette.structuralColor.white,
    marginLeft: '1.5rem',
  },
})

const CopySnackbar = (props: CopySnackbarProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    if (props.onClose) props.onClose()
  }

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
      sx={{ marginTop: '38.28vh' }}
    >
      <AlertStyle
        onClose={handleClose}
        sx={{}}
        icon={<CheckCircleIcon sx={IconStyle} />}
      >
        <Typography
          text={COPIED}
          variant={'body1'}
          color={theme.palette.text.white}
        />
      </AlertStyle>
    </Snackbar>
  )
}
export default CopySnackbar
