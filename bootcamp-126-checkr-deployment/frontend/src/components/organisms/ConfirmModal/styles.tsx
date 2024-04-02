import { Box, Card, styled } from '@mui/material'
import Theme from '../../../theme'
import Button from '../../atoms/Button'

export const StyledCard = styled(Card)({
  width: '50.952vw',
  height: '88.5vh',
  backgroundColor: Theme.palette.structuralColors.white,
  marginTop: '5.33vh',
  marginLeft: '24.52vw',
  outline: 'none',
})

export const StyledBox = styled(Box)({
  width: '43.485vw',
  height: '9.24vh',
  borderRadius: '4px',
  background: Theme.palette.accentColors.lightRed,
  color: Theme.palette.accentColors.darkRed,
})

export const StyledButton = styled(Button)({
  borderRadius: '6px',
  padding: '8px 16px 8px 16px',
  height: '4.68vh',
  marginLeft: '42vw',
  marginTop: '1.5vh',
})
