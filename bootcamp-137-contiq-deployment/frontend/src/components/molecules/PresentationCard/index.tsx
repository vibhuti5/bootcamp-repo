import { Box, styled } from '@mui/material'

import PDF from '../../../../public/assets/images/pdf.svg'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
export interface PresentationCardProps {
  src: string
  label: string
  onClick?: () => void
}

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grays.gray600,
  borderRadius: theme.spacing(2),
}))

const OuterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  cursor: 'pointer',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '21.23vw',
}))
const InnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  color: theme.palette.text.black,
  gap: theme.spacing(3),
  fontSize: theme.spacing(3),
  alignSelf: 'baseline',
}))

const PresentationCard = ({ src, label, onClick }: PresentationCardProps) => {
  return (
    <OuterContainer onDoubleClick={onClick} data-testid="PresentationCard">
      <ImageContainer>
        <Icon
          src={src}
          alt={label}
          style={{ width: '18.8vw', height: 'auto' }}
        />
      </ImageContainer>
      <InnerContainer>
        <Icon src={PDF} alt={'pdf-icon'} />
        <Typography variant="body1" text={label} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default PresentationCard
