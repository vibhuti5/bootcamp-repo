import {
  Typography as MuiTypography,
  type TypographyProps,
} from '@mui/material'
import React from 'react'

export interface CustomTypographyPropsInterface extends TypographyProps {
  text?: string | number
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption1'
    | 'overline'
    | 'overline2'
  dangerouslySetInnerHTML?: { __html: string }
}

const Typography = ({
  variant,
  text,
  ...props
}: CustomTypographyPropsInterface): React.JSX.Element => (
  <MuiTypography
    data-testid="typography-component"
    variant={variant}
    {...props}
  >
    {text}
  </MuiTypography>
)

export default Typography
