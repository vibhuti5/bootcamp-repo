import FormControlLabel from '@mui/material/FormControlLabel'
import Radio, { RadioProps as MuiRadioProps } from '@mui/material/Radio'
import React from 'react'
interface FormControls {
  value: string
  label: string | React.ReactNode
}

interface RadioProps extends MuiRadioProps {
  formControl: FormControls
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioButton = (props: RadioProps) => {
  return (
    <FormControlLabel
      sx={{
        color: 'white',
      }}
      value={props.formControl.value}
      control={
        <Radio
          sx={{
            color: 'grey',
            '&.Mui-checked': {
              color: 'white',
            },
          }}
          onChange={props.onChange}
        />
      }
      label={props.formControl.label}
    />
  )
}

export default RadioButton
