import { Box, styled } from '@mui/material'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
export interface NoFileInfoProps {
  src: string
  title: string
  subTitle: string
}

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: theme.spacing(1),
  // borderRadius: theme.spacing(2),
}))

const OuterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  gap: theme.spacing(0.1),
  alignItems: 'center',
}))

const NoFileInfo = ({ src, title, subTitle }: NoFileInfoProps) => {
  return (
    <OuterContainer data-testid="NoFileInfo">
      <ImageContainer>
        <Icon src={src} alt={title} />
      </ImageContainer>
      <Typography variant="subtitle1" text={title} />
      <Typography variant="body2" text={subTitle} />
    </OuterContainer>
  )
}

export default NoFileInfo
