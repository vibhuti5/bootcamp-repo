import { Checkbox as MuiCheckbox, CheckboxProps, styled } from '@mui/material'
import Theme from '../../../theme'

const StyledCheckbox = styled(MuiCheckbox)({
  color: Theme.palette.structuralColors.stroke,
  '&.Mui-checked': {
    color: Theme.palette.primary[500],
  },
})

const CheckBox = ({ onChange, ...props }: CheckboxProps) => {
  return <StyledCheckbox {...props} onChange={onChange} />
}

export default CheckBox
