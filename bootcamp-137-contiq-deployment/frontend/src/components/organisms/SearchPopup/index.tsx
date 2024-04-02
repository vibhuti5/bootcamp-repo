import { Backdrop, Box, Stack, styled } from '@mui/material'
import BasicImage from '../../../../public/assets/images/basic.svg'
import DocumentImage from '../../../../public/assets/images/document.svg'
import theme from '../../../theme'
import { NOT_FOUND, OTHER, RESULTS } from '../../../utils/constant'
import { FilesDataType } from '../../../utils/interface'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

export interface SearchPopupProps {
  isOpen: boolean
  files: FilesDataType[]
  onFileClick: (fileName: string) => void
}

const imageStyle = {
  width: '146px',
  height: '80px',
}
const StyledButton = styled(Button)({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '8px 0px',
  '&:hover': {
    backgroundColor: theme.palette.structuralColor.white,
  },
  width: '100%',
})
const ContainerBox = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.structuralColor.white,
  position: 'relative',
  border: `1px solid ${theme.palette.grays.gray100}`,
  borderRadius: '4px',
  boxShadow: '0px 21px 32px 0px #D5CEDD',
})
const ImageBox = styled(Stack)({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  backgroundColor: theme.palette.structuralColor.white,
  paddingBottom: '12px',
  borderRadius: '10px',
})
const SearchStack = styled(Stack)({
  padding: '0px 12px',
  maxHeight: 'calc(100% - 150px)',
  overflowY: 'auto',
})

const SearchPopup = ({ isOpen, onFileClick, files }: SearchPopupProps) => {
  return (
    <Backdrop
      open={isOpen}
      invisible={true}
      sx={{
        width: '25.7vw',
        height: '282px',
        top: '10vh',
        left: '55.4vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ContainerBox>
        <Typography
          text={RESULTS}
          variant="body1"
          color={theme.palette.text.black}
          sx={{ paddingLeft: '12px', paddingTop: '6px' }}
        />
        <SearchStack>
          {files ? (
            files.map((item) => (
              <Stack key={item.id}>
                <StyledButton
                  disableRipple
                  onClick={() => onFileClick(item.fileName)}
                >
                  <Typography
                    text={item.fileName}
                    variant="body2"
                    color={theme.palette.text.lowEmphasis}
                  />
                </StyledButton>
              </Stack>
            ))
          ) : (
            <Box>
              <Typography
                text={NOT_FOUND}
                variant="body2"
                color={theme.palette.text.lowEmphasis}
              />
            </Box>
          )}
        </SearchStack>
        <ImageBox>
          <Typography
            text={OTHER}
            variant="body1"
            color={theme.palette.text.black}
            sx={{ paddingLeft: '10px', paddingBottom: '8px' }}
          />
          <Stack direction="row" sx={{ px: '12px' }} spacing={'12px'}>
            <Icon
              src={DocumentImage}
              alt={'Document Image'}
              style={imageStyle}
            />
            <Icon
              src={BasicImage}
              alt={'Basic Image'}
              style={{ ...imageStyle }}
            />
          </Stack>
        </ImageBox>
      </ContainerBox>
    </Backdrop>
  )
}

export default SearchPopup
