import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import React, { useRef, useState } from 'react'
import Upload from '../../../../public/assets/Icons/upload.svg'
import pdfIcon from '../../../../public/assets/images/pdf.svg'
import { useFileContext } from '../../../context/FileContext'
import theme from '../../../theme'
import { LOCAL_UPLOAD_MODAL } from '../../../utils/constant'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface LocalUploadModalProps {
  onUploadButtonClick: () => void
}

const StackContainer = styled(Stack)({
  justifyContent: 'center',
  alignItems: 'center',
})

const UploadButton = styled(Button)({
  color: theme.palette.text.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
  padding: '8px 24px 8px 24px',
  textTransform: 'none',
  marginTop: theme.spacing(8),
})
const ChooseFileButton = styled(Stack)({
  border: `1px solid ${theme.palette.grays.gray100}`,
  borderRadius: theme.spacing(1),
  padding: '8px 24px 8px 24px',
  marginTop: theme.spacing(8),
})

const LocalUploadModal = ({ onUploadButtonClick }: LocalUploadModalProps) => {
  const { pdfName, setPdfName, setFile } = useFileContext()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedPdf, setSelectedPdf] = useState(false)
  const handleStackClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handlePdfSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0].name) {
      setPdfName(e.target.files?.[0].name)
      setFile(e.target.files?.[0])
    }
    setSelectedPdf(true)
  }

  return (
    <Box>
      <StackContainer>
        {selectedPdf ? (
          <Icon src={pdfIcon} alt="pdfIcon" />
        ) : (
          <Icon src={Upload} alt="upload" />
        )}
        {selectedPdf ? (
          <Typography
            text={pdfName}
            variant="subtitle2"
            color={theme.palette.text.white}
          />
        ) : (
          <Typography
            text={LOCAL_UPLOAD_MODAL.dropText}
            variant="subtitle2"
            color={theme.palette.text.white}
          />
        )}

        {selectedPdf ? (
          <UploadButton onClick={onUploadButtonClick}>
            {LOCAL_UPLOAD_MODAL.uploadFile}
          </UploadButton>
        ) : (
          <ChooseFileButton onClick={handleStackClick}>
            <Typography
              text={LOCAL_UPLOAD_MODAL.chooseFiles}
              variant="body1"
              color={theme.palette.text.white}
              sx={{ cursor: 'pointer' }}
            />
          </ChooseFileButton>
        )}
      </StackContainer>

      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={handlePdfSelect}
        data-testid="file-input"
      />
    </Box>
  )
}

export default LocalUploadModal
