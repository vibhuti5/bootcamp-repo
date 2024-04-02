import { TextField as MuiTextField, styled } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import React, { ReactNode } from 'react'
import Theme from '../../../theme'

interface TextFieldsProps
  extends Omit<TextFieldProps, 'startAdornment' | 'endAdornment'> {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  width?: string
  height?: string
}

const StyledTextField = styled(MuiTextField)(`
.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
  padding: 16px 16px;
}
.css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input{
  padding-left: 6px;
}
`)

const TextField = ({
  startAdornment,
  endAdornment,
  ...props
}: TextFieldsProps) => {
  return (
    <StyledTextField
      {...props}
      InputProps={{
        startAdornment,
        endAdornment,
        sx: {
          color: props.value
            ? Theme.palette.text.highEmphasis
            : Theme.palette.text.mediumEmphasis,
          width: props.width,
          height: props.height ?? '6.25vh',
        },
      }}
    />
  )
}

export default TextField
