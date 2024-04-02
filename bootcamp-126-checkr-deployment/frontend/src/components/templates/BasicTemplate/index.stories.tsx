import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import BasicTemplate from '.'
import { Box } from '@mui/material'
import Theme from '../../../theme'

export default {
  title: 'templates/BasicTemplate',
  Component: BasicTemplate,
} as Meta<typeof BasicTemplate>

const Template: StoryFn<typeof BasicTemplate> = (args) => (
  <BasicTemplate {...args} />
)

export const formtemp = Template.bind({})

formtemp.args = {
  rightChildren: (
    <Box
      sx={{
        width: '35.139vw',
        height: '87.5vh',
        backgroundColor: Theme.palette.structuralColors.white,
        boxShadow: ` 0px 4px 28px 0px ${Theme.palette.structuralColors.shadow}`,
        borderRadius: '6px',
      }}
    ></Box>
  ),
}
