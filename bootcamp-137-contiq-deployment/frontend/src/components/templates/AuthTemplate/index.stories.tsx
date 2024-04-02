import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Box } from '@mui/material'
import Theme from '../../../theme'
import AuthTemplate from '.'

export default {
  title: 'templates/AuthTemplate',
  Component: AuthTemplate,
} as Meta<typeof AuthTemplate>

const Template: StoryFn<typeof AuthTemplate> = (args) => (
  <AuthTemplate {...args} />
)

export const AuthTemplateForm = Template.bind({})

AuthTemplateForm.args = {
  rightChildren: (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: Theme.palette.structuralColor.background1,
        boxShadow: `10px 10px 10px 10px ${Theme.palette.structuralColor.overlay}`,
      }}
    ></Box>
  ),
}
