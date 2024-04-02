import { Checkbox, CheckboxProps } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import * as React from 'react'

interface CheckBoxProperties extends CheckboxProps {
  isChecked: boolean
  onCheck?: () => void
  label: string
  controlLabelStyle: React.CSSProperties
  checkboxStyle: React.CSSProperties
}

const CheckboxComponent = (props: CheckBoxProperties) => {
  return (
    <FormControlLabel
      style={props.controlLabelStyle}
      control={
        <Checkbox
          checked={props.isChecked}
          onClick={props.onCheck}
          style={props.checkboxStyle}
        />
      }
      label={props.label}
    />
  )
}

export default CheckboxComponent
