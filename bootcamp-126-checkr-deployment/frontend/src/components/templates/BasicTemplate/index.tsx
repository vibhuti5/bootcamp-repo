import { Grid } from '@mui/material'
import React from 'react'
import Theme from '../../../theme'
import Icon from '../../atoms/Icon'
import basic from '../../../../public/assets/images/basic.svg'

interface BasicTemplateProps {
  rightChildren: React.ReactNode
}
const BasicTemplate = (props: BasicTemplateProps) => {
  return (
    <Grid
      container
      height={'100vh'}
      width={'100%'}
      bgcolor={Theme.palette.primary[50]}
    >
      <Grid item xs={6} p={'32vh 14.5vw'}>
        <Icon src={basic} alt="basic" />
      </Grid>
      <Grid item xs={6} p={'4.5vh 8vw'} data-testid={'rightpannel'}>
        {props.rightChildren}
      </Grid>
    </Grid>
  )
}

export default BasicTemplate
