import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import theme from '../src/theme'
import './storybook.css'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Story {...context} />
      </BrowserRouter>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
