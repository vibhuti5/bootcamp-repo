import { Stack, TextFieldProps, styled } from '@mui/material'
import { ReactNode } from 'react'
import TextField from '../../atoms/TextField'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'

interface TextInputFieldProps {
  labelValue: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}
const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
})

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.grays.gray100,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grays.gray100,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.grays.gray100,
    },
  },
})

const TypoInput = (props: TextFieldProps & TextInputFieldProps) => {
  return (
    <StyledStack spacing={'6px'}>
      <Typography
        variant="body1"
        color={theme.palette.text.black}
        text={props.labelValue}
      ></Typography>
      <StyledTextField
        width="26vw"
        inputProps={{ style: { color: theme.palette.text.black } }}
        {...props}
      />
    </StyledStack>
  )
}

export default TypoInput
