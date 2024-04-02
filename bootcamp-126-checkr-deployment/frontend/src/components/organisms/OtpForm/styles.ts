import { Stack, styled } from '@mui/material'
import Theme from '../../../theme'

export const StyledStack = styled(Stack)`
  padding: 4vh 3vw;
  background-color: ${Theme.palette.structuralColors.white};
  width: 28vw;
  height: 80vh;
  box-shadow: 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow};
  border-radius: 6px;
`
export const ContinueButtonStyle = {
  bgcolor: Theme.palette.primary[500],
  color: Theme.palette.structuralColors.white,
  flexGrow: 1,
  height: '6vh',
  '&:hover': {
    bgcolor: Theme.palette.primary[500],
  },
  borderRadius: Theme.spacing(3),
  '&:disabled': {
    backgroundColor: Theme.palette.primary[400],
    color: Theme.palette.structuralColors.white,
    opacity: 0.95,
  },
}

export const OtpInputStyle = {
  border: '1px solid' + Theme.palette.structuralColors.stroke,
  flexGrow: 1,
  height: '5vh',
  outline: 'none',
  borderRadius: '4px',
}
