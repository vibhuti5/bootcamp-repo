import { Grid } from '@mui/material'
import React from 'react'
import Icon from '../../atoms/Icon'
import theme from '../../../theme'
import HomeImage from '../../../../public/assets/images/login.png'

interface AuthTemplateProps {
  rightChildren: React.ReactNode
}

const GridStyle = {
  width: '100%',
  height: '100vh',
}
const AuthTemplate = (props: AuthTemplateProps) => {
  return (
    <Grid
      container
      height={'100vh'}
      width={'100%'}
      bgcolor={theme.palette.structuralColor.white}
      sx={{ display: 'flex', flexDirection: 'row', padding: '0px' }}
    >
      <Grid item xs={7} sx={{}}>
        <Icon src={HomeImage} alt="Auth Image" style={GridStyle} />
      </Grid>
      <Grid item xs={5} data-testid={'rightpannel'} sx={GridStyle}>
        {props.rightChildren}
      </Grid>
    </Grid>
  )
}

export default AuthTemplate
