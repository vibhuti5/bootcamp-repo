import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import PDFViewer from '../../components/organisms/PDFViewer'
import HomeTemplate from '../../components/templates/HomeTemplate'
import { base64toBlob } from '../../utils/helper'

export const FileViewerPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const content = state?.content

  const blob = base64toBlob(content)
  const url =
    typeof URL.createObjectURL === 'function' ? URL.createObjectURL(blob) : ''

  return (
    <HomeTemplate
      main={
        <Box sx={{ padding: '28px' }}>
          <PDFViewer
            onNavBack={() => {
              navigate(-1)
            }}
            filePath={url}
            text={state.name}
          />
        </Box>
      }
    />
  )
}
