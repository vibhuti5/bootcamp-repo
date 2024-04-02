import { Stack, TextFieldProps, styled } from '@mui/material'
import InputField from '../../atoms/InputField'
import Typography from '../../atoms/Typography'
import Theme from '../../../theme'
import { ReactNode } from 'react'

interface TextInputFieldProps {
  name: string
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

const TextInputField = (props: TextFieldProps & TextInputFieldProps) => {
  return (
    <StyledStack spacing={Theme.spacing(5)}>
      <Typography variant="caption1" color={Theme.palette.text.mediumEmphasis}>
        {props.name}
      </Typography>
      <InputField {...props} />
    </StyledStack>
  )
}

export default TextInputField
