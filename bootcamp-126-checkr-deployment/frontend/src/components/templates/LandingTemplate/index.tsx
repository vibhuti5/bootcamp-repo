import { Grid } from '@mui/material'
import Theme from '../../../theme'
import NavBar from '../../organisms/NavBar'
import { NavBarItems } from '../../../utils/constants'
import { useAuth0 } from '@auth0/auth0-react'

interface LandingTemplateProps {
  header: React.ReactNode
  main: React.ReactNode
}

const LandingTemplate = (props: LandingTemplateProps) => {
  const { user } = useAuth0()
  return (
    <Grid
      container
      minHeight={'100vh'}
      width={'100%'}
      bgcolor={Theme.palette.primary[100]}
      data-testid="gridItems"
      paddingBottom={'3.125vh'}
    >
      <Grid item width={'20%'} paddingTop={'3.125vh'} paddingLeft={'1.75vw'}>
        <NavBar
          navBarItems={NavBarItems}
          avatarName={String(user?.name) ?? String(user?.email).split('@')[0]}
          avatarSubtext={String(user?.email)}
        ></NavBar>
      </Grid>
      <Grid item width={'80%'} paddingTop={'6.5vh'} paddingLeft={'1vw'}>
        <Grid container spacing={'2vh'} direction={'column'}>
          <Grid item width={'77.30vw'}>
            {props.header}
          </Grid>
          <Grid item width={'77.30vw'}>
            {props.main}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingTemplate
