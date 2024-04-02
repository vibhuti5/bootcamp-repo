import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  styled,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ContentCopyIcon from '../../../../public/assets/Icons/contentCopy.svg'
import ContentListIcon from '../../../../public/assets/Icons/contentList.svg'
import DownIcon from '../../../../public/assets/Icons/downIcon.svg'
import MaximizeIcon from '../../../../public/assets/Icons/maximize.svg'
import MinimiseIcon from '../../../../public/assets/Icons/minimiseIcon.svg'
import UpIcon from '../../../../public/assets/Icons/upIcon.svg'
import theme from '../../../theme'
import Icon from '../../atoms/Icon'
import TextField from '../../atoms/TextField'
import Typography from '../../atoms/Typography'
import CopySnackbar from '../../molecules/Snackbar'
import useStateForSearchBox from './hook'

interface SearchBoxProps {
  searchedText: string
  fileName: string
  searchKeyword: string
  searches: string[]
  onSearch: (keyword: string) => void
  onSearchNext: () => void
  onSearchPrevious: () => void
  totalPages: number
  searchedTextPage: number
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  backgroundColor: theme.palette.grays.gray600,
}))

const StyleTypography = styled(Typography)(() => ({
  '&.marked': {
    color: 'black',
    backgroundColor: '#b4b4cf',
  },
}))
const SearchBox = ({
  searches,
  fileName,
  searchedText,
  onSearch,
  onSearchNext,
  onSearchPrevious,
  totalPages,
  searchedTextPage,
  searchKeyword,
}: SearchBoxProps) => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const maxCounter = searches.length
  const {
    counter,
    expanded,
    showSnackbar,
    setShowSnackbar,
    decrement,
    increment,
    handleExpand,
  } = useStateForSearchBox(0, false, false, maxCounter)
  const highlightText = (textToSearch: string, text: string) => {
    const stringData = text
    const searchRegexp = new RegExp(textToSearch, 'gi')

    const matchIndex = stringData
      .toLowerCase()
      .indexOf(textToSearch.toLowerCase())

    const startIndex = Math.max(matchIndex - 60, 0)
    const endIndex = Math.min(
      matchIndex + textToSearch.length + 60,
      stringData.length
    )

    const context = stringData.substring(startIndex, endIndex)

    const highlightedContext = context.replace(
      searchRegexp,
      '<mark style="color: black; background-color: #F4F5F5;">$&</mark>'
    )

    return startIndex > 0 ? `...${highlightedContext}...` : highlightedContext
  }

  const createMarkup = (text: string) => {
    return { __html: text }
  }

  useEffect(() => {
    setValue(searchKeyword)
    const timeoutId = setTimeout(() => onSearch(searchKeyword), 1000)
    return () => clearTimeout(timeoutId)
  }, [searchKeyword])

  return (
    <Box data-testid={'search-box'} sx={{ width: '100%', marginLeft: '20px' }}>
      <Accordion
        sx={{
          backgroundColor: '#F4F5F5',
          width: '28.258vw',
          borderRadius: '4px',
          minHeight: '40px',
          border: `1px solid ${theme.palette.grays.gray100}`,
        }}
        expanded={expanded}
      >
        <AccordionSummary
          sx={{
            height: '40px',
          }}
          data-testid="maximise"
          expandIcon={
            <Icon
              onClick={handleExpand}
              src={expanded ? MinimiseIcon : MaximizeIcon}
              alt="expand-icon"
              style={{
                cursor: 'pointer',
                pointerEvents: 'auto',
              }}
            />
          }
          disableRipple
          disableTouchRipple
        >
          <Stack
            data-testid="search-content"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Stack direction={'row'}>
              <StyledTextField
                autoComplete="off"
                placeholder="Search..."
                height="30px"
                width="17.7vw"
                inputRef={inputRef}
                disabled={true}
                defaultValue={''}
                onChange={(event) => {
                  const inputValue = (event.target as HTMLInputElement).value
                  setValue(inputValue)
                  onSearch(inputValue)
                }}
                value={value}
                endAdornment={
                  maxCounter ? (
                    <Typography
                      text={counter + 1 + '/' + maxCounter}
                      variant="body1"
                      color={theme.palette.text.black}
                    />
                  ) : (
                    <></>
                  )
                }
                inputProps={{ style: { color: theme.palette.text.black } }}
              />
              <Box>
                <Divider orientation="vertical" />
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              spacing={'16px'}
              px={'16px'}
              data-testid="previous"
            >
              <Icon
                onClick={() => {
                  decrement()
                  onSearchPrevious()
                }}
                src={UpIcon}
                alt="up-icon"
                data-testid="previous"
                style={{
                  cursor: 'pointer',
                }}
              />
              <Icon
                onClick={() => {
                  increment()
                  if (counter < maxCounter - 1) onSearchNext()
                }}
                src={DownIcon}
                data-testid="next-icon"
                alt="down-icon"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 24px',
            borderTop: `1px solid ${theme.palette.grays.gray100}`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingBottom: '12px',
            }}
          >
            <Stack>
              <Typography
                text={fileName}
                variant="body1"
                color={theme.palette.text.black}
              />
              {maxCounter ? (
                <Typography
                  text={`SLIDE ${searchedTextPage + '/' + totalPages}`}
                  variant="overline"
                  color={theme.palette.text.black}
                />
              ) : (
                <></>
              )}
            </Stack>
            <Stack direction={'row'} spacing={'8px'}>
              <Icon
                onClick={() => {
                  navigator.clipboard.writeText(searchedText)
                  setShowSnackbar(!showSnackbar)
                }}
                src={ContentCopyIcon}
                alt="copy-icon"
                style={{
                  cursor: 'pointer',
                  float: 'right',
                }}
              />
              <Icon
                src={ContentListIcon}
                alt="folder-icon"
                style={{
                  cursor: 'pointer',
                  float: 'right',
                }}
              />
            </Stack>
          </Box>
          <Box width={'100%'} sx={{ overflow: 'hidden', height: '80px' }}>
            <StyleTypography
              data-testid="data"
              dangerouslySetInnerHTML={createMarkup(
                highlightText(searchKeyword, searchedText)
              )}
              variant="caption1"
              color={theme.palette.text.lowEmphasis}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <CopySnackbar
        style={{ position: 'relative' }}
        open={showSnackbar}
        vertical={'top'}
        horizontal={'right'}
        onClose={() => setShowSnackbar(!showSnackbar)}
      />
    </Box>
  )
}

export default SearchBox
