import { Divider, Modal, Stack, styled } from '@mui/material'
import Theme from '../../../theme'

export const StyledModal = styled(Modal)`
  top: 20%;
  left: 25%;
  .css-nen11g-MuiStack-root {
    height: 46.61vh;
    width: 51vw;
    background-color: ${Theme.palette.structuralColors.white};
    border-radius: ${Theme.spacing(3)};
  }
`
export const StyledStack = styled(Stack)`
  padding: 1.5vh 1.5vw;
`

export const StyledDivider = styled(Divider)`
  width: auto;
  border-color: ${Theme.palette.structuralColors.stroke};
`
export const ExportButtonStyle = {
  bgcolor: Theme.palette.primary[500],
  color: Theme.palette.structuralColors.white,
  width: '10vw',
  height: '5vh',
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
