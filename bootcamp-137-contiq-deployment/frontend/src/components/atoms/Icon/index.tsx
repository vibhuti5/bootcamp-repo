import { Box } from '@mui/material'
import React from 'react'

interface IconProps {
  src: string
  alt: string
  style?: React.CSSProperties
  onClick?: () => void
}

const Icon: React.FC<IconProps> = ({ src, alt, style, onClick }) => (
  <Box onClick={onClick}>
    <img src={src} alt={alt} style={style} />
  </Box>
)
export default Icon
