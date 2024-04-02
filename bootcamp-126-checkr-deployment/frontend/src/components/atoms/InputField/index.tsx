import { TextField, styled } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import React, { ReactNode } from 'react'
import Theme from '../../../theme'

interface InputFieldProps
  extends Omit<TextFieldProps, 'startAdornment' | 'endAdornment'> {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  width?: string
  height?: string
}

const StyledTextField = styled(TextField)(`
'& label.Mui-focused': {
  color: ${Theme.palette.text.lowEmphasis},
},
'& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderColor: ${Theme.palette.structuralColors.stroke},
  },
  '&:hover fieldset': {
    borderColor: ${Theme.palette.structuralColors.stroke},
  },
  '&.Mui-focused fieldset': {
    borderColor: ${Theme.palette.structuralColors.stroke},
  },
},
.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    font-size: 14px;
    font-family: ${Theme.typography.fontFamily};
}
.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
  padding: 16px 16px;
}
.css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input{
  padding-left: 6px;
}
`)

const InputField = ({
  startAdornment,
  endAdornment,
  ...props
}: InputFieldProps) => {
  return (
    <StyledTextField
      {...props}
      autoComplete={'off'}
      InputProps={{
        startAdornment,
        endAdornment,
        sx: {
          color: props.value
            ? Theme.palette.text.highEmphasis
            : Theme.palette.text.mediumEmphasis,
          width: props.width ?? '28vw',
          height: props.height ?? '5vh',
        },
      }}
    ></StyledTextField>
  )
}

export default InputField
