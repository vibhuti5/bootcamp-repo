import { useAuth0 } from '@auth0/auth0-react'
import { Box, CircularProgress, Grid, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import NoFileSvg from '../../../public/assets/images/noFileInfo.svg'
import Typography from '../../components/atoms/Typography'
import NoFileInfo from '../../components/molecules/NoFileInfo'
import PresentationCard from '../../components/molecules/PresentationCard'
import HomeTemplate from '../../components/templates/HomeTemplate'
import { useData } from '../../context/UserContext'
import {
  createAuthUser,
  getAllFiles,
  isFileAlreadyExists,
} from '../../services'
import theme from '../../theme'
import {
  HOMEPAGE_SUBTITLE,
  HOMEPAGE_TITLE,
  IMG_SUBTITLE,
  IMG_TITLE,
} from '../../utils/constant'
import { getRandomPdfSrc, jwtDecoder } from '../../utils/helper'
import { IFilesDataType } from '../../utils/interface'

const HeaderBox = styled(Box)({
  padding: '28px 24px',
  display: 'flex',
})

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

const CardStyle = styled(Box)({
  overflowY: 'auto',
  maxHeight: '100%',
  padding: '0px 24px 24px 24px',
})

const LoadingBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70%',
})

const HomePage = () => {
  const { data, updateData } = useData()
  const { isAuthenticated, user } = useAuth0()
  const navigate = useNavigate()
  const [filesData, setFilesData] = useState<IFilesDataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async () => {
    try {
      const result = await getAllFiles()
      const filterFiles = result.filter(
        (file: IFilesDataType) => file.userId === data.loggedInUserId
      )
      setFilesData(filterFiles)
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch data from the server:', error)
      setLoading(false)
    }
  }

  /* istanbul ignore next */
  const handleNewUser = async () => {
    if (isAuthenticated) {
      const userData = {
        name: user?.name,
        email: user?.email,
      }
      const res = await createAuthUser(userData)
      localStorage.setItem('userToken', res.token)
      updateData(jwtDecoder(res.token))
    }
  }

  useEffect(() => {
    fetchData()
  }, [isAuthenticated])

  useEffect(() => {
    if (isAuthenticated && user) {
      handleNewUser()
    }
  }, [isAuthenticated])

  /* istanbul ignore next */
  const handlePDFDoubleClick = async (name: string) => {
    //Navigate to PDF Viewer Page'
    const res = await isFileAlreadyExists(name)
    const content = res[0].content
    navigate(`/file-viewer/${res[0].id}`, { state: { content } })
  }

  return (
    <HomeTemplate
      main={
        <Container>
          <HeaderBox>
            <Typography text={HOMEPAGE_TITLE} variant="h2"></Typography>
          </HeaderBox>
          {loading ? (
            <LoadingBox>
              <CircularProgress />
            </LoadingBox>
          ) : (
            <>
              {filesData.length > 0 ? (
                <>
                  <Box sx={{ padding: '24px 24px' }}>
                    <Typography
                      text={HOMEPAGE_SUBTITLE}
                      variant="h3"
                      color={theme.palette.text.lowEmphasis}
                    />
                  </Box>
                  <CardStyle>
                    <Grid container spacing={3}>
                      {filesData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                          <PresentationCard
                            src={getRandomPdfSrc()}
                            label={item.name}
                            onClick={() => handlePDFDoubleClick(item.name)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardStyle>
                </>
              ) : (
                <LoadingBox>
                  <NoFileInfo
                    src={NoFileSvg}
                    title={IMG_TITLE}
                    subTitle={IMG_SUBTITLE}
                  />
                </LoadingBox>
              )}
            </>
          )}
        </Container>
      }
    ></HomeTemplate>
  )
}

export default HomePage
