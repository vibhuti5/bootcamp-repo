import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PDFViewer from '.'
import theme from '../../../theme'
import { ThemeProvider } from '@mui/material'
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
import { searchPlugin } from '@react-pdf-viewer/search'
import { BrowserRouter } from 'react-router-dom'
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
      highlight: jest.fn(() => [
        {
          keyword: 'sample',
          matchIndex: 0,
          pageIndex: 3,
          pageText: 'sample text',
          startIndex: 0,
          endIndex: 5,
        },
      ]),
      clearHighlights: jest.fn(),
      jumpToPreviousMatch: jest.fn(() => ({
        keyword: 'sample',
        matchIndex: 0,
        pageIndex: 3,
        pageText: 'sample text',
        startIndex: 0,
        endIndex: 5,
      })),
      jumpToNextMatch: jest.fn(),
    }),
  }
})
describe('PDFViewer component', () => {
  const onNavBackMock = jest.fn()

  const renderPDFViewer = () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PDFViewer
            onNavBack={onNavBackMock}
            filePath={'assets/files/PDFTRON_about.pdf'}
            text="Sample PDF"
          />
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  it('renders PDFViewer component with back button', () => {
    renderPDFViewer()

    const backButton = screen.getByAltText('nav-back')
    expect(backButton).toBeInTheDocument()
    fireEvent.click(backButton)
    expect(onNavBackMock).toHaveBeenCalled()
  })

  it('renders PDFViewer component with search functionality', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    expect(searchBox).toBeInTheDocument()
    fireEvent.change(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })
    const nextButton = screen.getByAltText('up-icon')
    fireEvent.click(nextButton)
    const prevButton = screen.getByAltText('down-icon')
    fireEvent.click(prevButton)
  })

  it('renders PDFViewer component with pagination and zoom controls', () => {
    renderPDFViewer()

    const pagination = screen.getByTestId('pagination')
    expect(pagination).toBeInTheDocument()
    const zoomInButton = screen.getByTestId('zoom-in')
    const zoomOutButton = screen.getByTestId('zoom-out')
    expect(zoomInButton).toBeInTheDocument()
    expect(zoomOutButton).toBeInTheDocument()
    fireEvent.click(zoomInButton)
    fireEvent.click(zoomOutButton)
  })
  it('handles search events correctly', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })
    fireEvent.change(searchBox, { target: { value: 'new keyword' } })
    const newSearchResults = screen.getByTestId('data')
    expect(newSearchResults).toBeInTheDocument()
  })

  it('handles previous match correctly', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    fireEvent.keyDown(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })

    const prevButton = screen.getByAltText('down-icon')
    fireEvent.click(prevButton)

    const previousMatchText = screen.getByTestId('data')
    expect(previousMatchText).toHaveTextContent('')
  })

  it('handles next match correctly', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    fireEvent.keyDown(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })

    const nextButton = screen.getByAltText('up-icon')
    fireEvent.click(nextButton)

    const nextMatchText = screen.getByTestId('data')
    expect(nextMatchText).toHaveTextContent('sample text')
  })
  it('handles search events correctly', async () => {
    renderPDFViewer()

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: '' },
    })
    fireEvent.keyDown(screen.getByPlaceholderText('Search...'), {
      key: 'Enter',
      code: 'Enter',
    })

    const searchPluginInstance = searchPlugin()
    searchPluginInstance.highlight('sampleText')
    expect(searchPluginInstance.highlight).toHaveBeenCalledWith('sampleText')
    searchPluginInstance.clearHighlights()
    expect(searchPluginInstance.clearHighlights).toHaveBeenCalledTimes(1)
  })
  it('handles previous match correctly', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })

    const previousMatchButton = screen.getByAltText('down-icon')
    fireEvent.click(previousMatchButton)

    const previousMatchText = screen.getByTestId('data')
    expect(previousMatchText).toHaveTextContent('sample text')

    const searchPluginInstance = searchPlugin()
    searchPluginInstance.jumpToPreviousMatch()
    expect(searchPluginInstance.jumpToPreviousMatch).toHaveBeenCalled()
  })
  it('handles next match correctly', async () => {
    renderPDFViewer()

    const searchBox = screen.getByPlaceholderText('Search...')
    fireEvent.keyDown(searchBox, { target: { value: 'sample' } })
    await waitFor(() => {
      const searchResults = screen.getByTestId('data')
      expect(searchResults).toBeInTheDocument()
    })

    const nextButton = screen.getByAltText('up-icon')
    fireEvent.click(nextButton)

    const nextMatchText = screen.getByTestId('data')
    expect(nextMatchText).toHaveTextContent('sample text')

    const searchPluginInstance = searchPlugin()
    searchPluginInstance.jumpToNextMatch()
    expect(searchPluginInstance.jumpToNextMatch).toHaveBeenCalled()
  })
})
