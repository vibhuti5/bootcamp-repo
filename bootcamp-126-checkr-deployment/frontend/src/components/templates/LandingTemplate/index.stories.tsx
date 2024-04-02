import { Meta, StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import LandingTemplate from '.'
import Theme from '../../../theme'
import { Box } from '@mui/material'

export default {
  title: 'templates/LandingTemplate',
  component: LandingTemplate,
} as Meta<typeof LandingTemplate>

const Template: StoryFn<typeof LandingTemplate> = (args) => (
  <BrowserRouter>
    <LandingTemplate {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  header: (
    <Box
      sx={{
        width: '100%',
        height: '5vh',
        backgroundColor: Theme.palette.structuralColors.white,
        boxShadow: ` 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
        borderRadius: '6px',
      }}
    ></Box>
  ),
  main: (
    <Box
      sx={{
        width: '100%',
        height: '75vh',
        backgroundColor: Theme.palette.structuralColors.white,
        boxShadow: ` 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
        borderRadius: '6px',
      }}
    ></Box>
  ),
}
