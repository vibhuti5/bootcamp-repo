import { Stack, styled } from '@mui/material'
import Theme from '../../../theme'
import Button from '../../atoms/Button'
import TextInputField from '../../molecules/TextFieldWithLabel'

export const StyledStack = styled(Stack)`
  padding: 4vh 3vw;
  background-color: ${Theme.palette.structuralColors.white};
  width: 28vw;
  height: 80vh;
  box-shadow: 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow};
  border-radius: 6px;
`
export const StyledResetButton = styled(Button)({
  bgcolor: Theme.palette.primary[500],
  height: '6vh',
  borderRadius: Theme.spacing(3),
  '&:disabled': {
    backgroundColor: Theme.palette.primary[400],
    color: Theme.palette.structuralColors.white,
    opacity: 0.95,
  },
  '&:hover': {
    bgcolor: Theme.palette.primary[500],
  },
})

export const StyledTextField = styled(TextInputField)({
  borderColor: Theme.palette.structuralColors.stroke,
  height: '4vh',
  outline: 'none',
  borderRadius: '4px',
})
