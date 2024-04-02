import { Box, Grid, Stack, styled } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import noFileInfo from '../../../public/assets/images/noFileInfo.svg'
import NoFileInfo from '../../components/molecules/NoFileInfo'
import PresentationCard from '../../components/molecules/PresentationCard'
import Tabs from '../../components/molecules/Tabs'
import FileUploadModal from '../../components/organisms/FileUploadModal'
import FilterRow from '../../components/organisms/FilterRow'
import HomeTemplate from '../../components/templates/HomeTemplate'
import useFileFilter from '../../hooks/useFilesFilter'
import { isFileAlreadyExists } from '../../services'
import { NO_FILE_INFO_SUBTITLE, NO_FILE_INFO_TITLE } from '../../utils/constant'
import { getRandomPdfSrc } from '../../utils/helper'

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

const FilePage = () => {
  const navigate = useNavigate()
  const { filteredFiles, handleFilterChange } = useFileFilter()
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false)
  const handlePDFDoubleClick = async (name: string) => {
    //Navigate to PDF Viewer Page'
    const res = await isFileAlreadyExists(name)
    const content = res[0].content
    navigate(`/file-viewer/${res[0].id}`, { state: { content } })
  }
  return (
    <>
      <HomeTemplate
        main={
          <StyledBox>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <FilterRow
                onAddFileClick={() =>
                  setIsFileUploadModalOpen(!isFileUploadModalOpen)
                }
                onFilterChange={(filterValues) =>
                  handleFilterChange(filterValues)
                }
              />
            </Box>
            <Box sx={{ padding: '24px 24px' }}>
              <Tabs
                tabs={[
                  { label: 'All Files', content: '' },
                  { label: 'Slides', content: '' },
                  { label: 'Docs', content: '' },
                ]}
                value={0}
              />
            </Box>
            <Box
              sx={{
                overflowY: 'auto',
                maxHeight: '100%',
                px: '24px',
                paddingBottom: '24px',
              }}
            >
              <Grid container spacing={2}>
                {filteredFiles.length > 0 || filteredFiles ? (
                  <>
                    {filteredFiles?.map((item) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <PresentationCard
                          src={getRandomPdfSrc()}
                          label={item.name}
                          onClick={() => handlePDFDoubleClick(item.name)}
                        />
                      </Grid>
                    ))}
                  </>
                ) : (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                  >
                    <NoFileInfo
                      src={noFileInfo}
                      subTitle={NO_FILE_INFO_SUBTITLE}
                      title={NO_FILE_INFO_TITLE}
                    />
                  </Stack>
                )}
              </Grid>
            </Box>
          </StyledBox>
        }
      ></HomeTemplate>
      {isFileUploadModalOpen && (
        <FileUploadModal
          isOpen={true}
          onCrossButtonClicked={() => {
            setIsFileUploadModalOpen(!isFileUploadModalOpen)
          }}
          onBackButtonClicked={() => {
            setIsFileUploadModalOpen(!isFileUploadModalOpen)
          }}
        />
      )}
    </>
  )
}

export default FilePage
