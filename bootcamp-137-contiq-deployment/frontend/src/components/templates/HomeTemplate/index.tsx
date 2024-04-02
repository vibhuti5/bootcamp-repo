import { Box, Stack } from '@mui/material'
import Header from '../../organisms/Header'
import SideBar from '../../organisms/SideBar'

interface LandingTemplateProps {
  main: React.ReactNode
}

const HomeTemplate = (props: LandingTemplateProps) => {
  return (
    <Stack
      direction={'column'}
      sx={{ width: '100%', height: '100vh' }}
      data-testid="gridItems"
    >
      <Box width={'100%'}>
        <Header></Header>
      </Box>
      <Stack direction={'row'} height={'92.3177vh'}>
        <Box width={'6%'}>
          <SideBar height="100%"></SideBar>
        </Box>
        <Box width={'94%'}>{props.main}</Box>
      </Stack>
    </Stack>
  )
}

export default HomeTemplate
