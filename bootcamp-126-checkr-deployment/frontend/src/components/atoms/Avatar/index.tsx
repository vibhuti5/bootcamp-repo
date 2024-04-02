import React from 'react'
import { styled } from '@mui/material/styles'
import { Avatar, AvatarProps } from '@mui/material'

interface CustomAvatarProps extends AvatarProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}

const StyledAvatar = styled(Avatar)<CustomAvatarProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
`

const CustomAvatar = (props: CustomAvatarProps) => {
  return <StyledAvatar {...props} />
}

export default CustomAvatar
