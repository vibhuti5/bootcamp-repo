import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import HomeTemplate from '.'
import { Box } from '@mui/material'
import theme from '../../../theme'

export default {
  title: 'templates/HomeTemplate',
  Component: HomeTemplate,
} as Meta<typeof HomeTemplate>

const Template: StoryFn<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  main: (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.primary.light,
      }}
    ></Box>
  ),
}
