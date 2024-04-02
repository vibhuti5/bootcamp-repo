import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import CopySnackbar from '.'

export default {
  title: 'MOLECULES/CopySnackbar',
  component: CopySnackbar,
} as Meta

const Template: StoryFn<typeof CopySnackbar> = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState<boolean>(true)

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false)
  }
  return (
    <CopySnackbar
      open={isSnackbarOpen}
      onClose={handleCloseSnackbar}
      vertical={'top'}
      horizontal={'center'}
    />
  )
}

export const OpenSnackbar = Template.bind({})
OpenSnackbar.args = {}
