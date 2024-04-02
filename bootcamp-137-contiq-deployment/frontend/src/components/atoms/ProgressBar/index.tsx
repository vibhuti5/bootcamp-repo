import { LinearProgress, LinearProgressProps } from '@mui/material'
import React from 'react'
interface IProgressBarProps extends LinearProgressProps {
  value: number
}
const ProgressBar: React.FC<IProgressBarProps> = ({ value, sx }) => (
  <LinearProgress
    variant="determinate"
    value={value}
    color="primary"
    sx={sx}
    data-testid="linear-progress"
  />
)

export default ProgressBar
