import { Card, styled } from '@mui/material'
import Button from '../../atoms/Button'
import Theme from '../../../theme'
import TextInputField from '../../molecules/TextFieldWithLabel'

export const StyledCard = styled(Card)({
  width: '35.139vw',
  height: '87.5vh',
  backgroundColor: Theme.palette.structuralColors.white,
  boxShadow: ` 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
  borderRadius: '6px',
})

export const StyledSigninButton = styled(Button)({
  width: '28.11vw',
  height: '5.72vh',
  backgroundColor: `${Theme.palette.primary[500]}`,
  ':disabled': {
    backgroundColor: Theme.palette.primary[400],
    color: Theme.palette.structuralColors.white,
    opacity: 0.95,
  },
  '&:hover': {
    bgcolor: Theme.palette.primary[500],
  },
  borderRadius: Theme.spacing(3),
})

export const StyledSocialMediaButtton = styled(Button)({
  width: '28.18vw',
  height: '6.25vh',
  alignItems: 'center',
  justifyContent: 'center',
  background: Theme.palette.structuralColors.white,
  border: `1px solid ${Theme.palette.structuralColors.stroke}`,
})
export const StyledTextField = styled(TextInputField)({
  borderColor: Theme.palette.structuralColors.stroke,
  height: '4vh',
  borderRadius: '4px',
})
