import { DividerProps, Divider as MuiDivider } from '@mui/material'
import React from 'react'
interface IDividerProps extends DividerProps {
  text?: string
}

const Divider: React.FC<IDividerProps> = ({ text, ...props }) =>
  text ? <MuiDivider {...props}>{text}</MuiDivider> : <MuiDivider {...props} />

export default Divider
