import { Box, Grid, Stack, styled } from '@mui/material'
import {
  DocumentLoadEvent,
  PageChangeEvent,
  Viewer,
  Worker,
} from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { searchPlugin } from '@react-pdf-viewer/search'
import '@react-pdf-viewer/search/lib/styles/index.css'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import back from '../../../../public/assets/Icons/back.svg'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import Pagination from '../../molecules/Pagination'
import SearchBox from '../SearchBox'

export const StylePagination = styled(Box)({
  position: 'fixed',
  bottom: '5%',
  left: '50%',
})
export interface PDFViewerProps {
  onNavBack: () => void
  filePath: string
  text: string
}
const StyledThumbnailBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '20%',
  '& .rpv-thumbnail__item': {
    backgroundColor: 'transparent',
    padding: 0,
    border: `1px solid ${theme.palette.grays.gray100}`,
  },
  '& .rpv-thumbnail__item--selected': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}))
const PDFViewer = ({ onNavBack, filePath, text }: PDFViewerProps) => {
  const { state } = useLocation()
  const searchQuery = state?.searchQuery
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchedTextPage, setSearchedTextPage] = useState<number>(0)
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [searches, setSearches] = useState<any[]>([])
  const [searchedText, setSearchedText] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string>(searchQuery)
  /* istanbul ignore next */
  const thumbnailPluginInstance = thumbnailPlugin({
    thumbnailWidth: 200,
    renderCurrentPageLabel: () => <></>,
  })

  const { Thumbnails } = thumbnailPluginInstance
  const zoomPluginInstance = zoomPlugin()
  const { zoomTo } = zoomPluginInstance
  const searchPluginInstance = searchPlugin()
  const { highlight, jumpToNextMatch, jumpToPreviousMatch, clearHighlights } =
    searchPluginInstance
  /* istanbul ignore next */
  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    setTotalPages(e.doc.numPages)
  }
  /* istanbul ignore next */
  const onPageChangeHandler = (pageChangeEvent: PageChangeEvent) => {
    setCurrentPage(pageChangeEvent.currentPage)
  }
  const handleZoomOut = () => {
    const newZoomLevel = zoomLevel + 0.1
    setZoomLevel(newZoomLevel > 0.1 ? newZoomLevel : 0.1)
    zoomTo(newZoomLevel)
  }

  const handleZoomIn = () => {
    const newZoomLevel = zoomLevel - 0.1
    setZoomLevel(newZoomLevel > 0.1 ? newZoomLevel : 0.1)
    zoomTo(newZoomLevel)
  }

  const handleSearch = async (keyword: string) => {
    if (keyword == '') clearHighlights()
    else {
      /* istanbul ignore next */
      const matches = await highlight(keyword)
      if (matches.length > 0 && matches[0]) {
        setSearches(matches)
        setSearchedText(matches[0].pageText)
        setSearchedTextPage(matches[0]?.pageIndex + 1)
        setSearchKeyword(keyword)
      }
    }
  }
  const previousMatch = () => {
    const previousMatch = jumpToPreviousMatch()
    if (previousMatch) {
      setSearchedText(previousMatch.pageText ?? '')
      setSearchedTextPage(
        previousMatch.pageIndex ? previousMatch.pageIndex + 1 : 0
      )
    }
  }
  const nextMatch = () => {
    const nextMatch = jumpToNextMatch()
    /* istanbul ignore next */
    if (nextMatch) {
      setSearchedText(nextMatch.pageText ?? '')
      setSearchedTextPage(nextMatch.pageIndex ? nextMatch.pageIndex + 1 : 0)
    }
  }

  return (
    <Grid container direction="row" position={'relative'}>
      <Grid item xs={12} paddingBlockEnd={10}>
        <Stack
          direction={'row'}
          justifyContent={'flex-start'}
          alignItems={'baseline'}
          gap={2}
          sx={{ cursor: 'pointer' }}
        >
          <Icon
            data-testid="back-icon"
            src={back}
            alt="nav-back"
            onClick={onNavBack}
          />
          <Typography variant="h2" text={text} />
          <Box sx={{ position: 'absolute', right: '24px', zIndex: 1 }}>
            <SearchBox
              searches={searches}
              searchedText={searchedText}
              fileName={text}
              totalPages={totalPages}
              searchKeyword={searchKeyword || ''}
              searchedTextPage={searchedTextPage ?? 0}
              onSearch={handleSearch}
              onSearchPrevious={previousMatch}
              onSearchNext={nextMatch}
            />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Stack direction="row" sx={{ height: '100vh' }}>
              <StyledThumbnailBox>
                <Thumbnails />
              </StyledThumbnailBox>
              <Box sx={{ flex: 1 }}>
                <Viewer
                  fileUrl={filePath}
                  onDocumentLoad={handleDocumentLoad}
                  onPageChange={onPageChangeHandler}
                  plugins={[
                    thumbnailPluginInstance,
                    zoomPluginInstance,
                    searchPluginInstance,
                  ]}
                />
              </Box>
            </Stack>
          </Worker>
        </Box>
      </Grid>
      <StylePagination data-testid="pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage + 1}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          zoomPercent={Math.floor(zoomLevel * 100)}
        />
      </StylePagination>
    </Grid>
  )
}

export default PDFViewer
