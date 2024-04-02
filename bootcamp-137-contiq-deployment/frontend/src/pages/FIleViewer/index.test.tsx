import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FileViewerPage } from '.'
import { ThemeProvider } from '@mui/material'
import theme from '../../theme'
import { BrowserRouter } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
jest.mock(
  '@react-pdf-viewer/zoom/lib/styles/index.css',
  () => 'identity-obj-proxy'
)
jest.mock(
  '@react-pdf-viewer/thumbnail/lib/styles/index.css',
  () => 'identity-obj-proxy'
)
jest.mock(
  '@react-pdf-viewer/search/lib/styles/index.css',
  () => 'identity-obj-proxy'
)
jest.mock(
  '@react-pdf-viewer/core/lib/styles/index.css',
  () => 'identity-obj-proxy'
)
jest.mock('@react-pdf-viewer/core', () => ({
  ...jest.requireActual('@react-pdf-viewer/core'),
  Worker: jest.fn(() => <div />),
  searchPlugin: jest.fn(),
}))

jest.mock('@react-pdf-viewer/search', () => {
  const actualSearch = jest.requireActual('@react-pdf-viewer/search')
  return {
    ...actualSearch,
    searchPlugin: () => ({
      highlight: jest.fn(),
      clearHighlights: jest.fn(),
      jumpToPreviousMatch: jest.fn(),
      jumpToNextMatch: jest.fn(),
    }),
  }
})

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    state: { content: 'SGVsbG8=' },
  }),
}))
describe('FileViewerPage', () => {
  it('renders Page initially', () => {
    render(
      <BrowserRouter>
        <UserContext>
          <ThemeProvider theme={theme}>
            <FileViewerPage />
          </ThemeProvider>
        </UserContext>
      </BrowserRouter>
    )
  })
})
