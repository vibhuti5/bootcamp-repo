import { Card, styled } from '@mui/material'
import Button from '../../atoms/Button'
import Theme from '../../../theme'

export const StyledCard = styled(Card)({
  width: '17.42vw',
  height: '93.75vh',
  borderRadius: '8px',
  boxShadow: `0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
  position: 'fixed',
})

export const StyledNavButton = styled(Button)({
  '&.MuiButton-root': {
    height: '5.72vh',
    borderRadius: '6px',
    textTransform: 'none',
    '&.MuiButtonBase-root': {
      WebkitJustifyContent: 'left',
      justifyContent: 'left',
    },
  },
})
