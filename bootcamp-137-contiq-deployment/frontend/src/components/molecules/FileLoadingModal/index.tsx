import { Stack, SxProps } from '@mui/material'
import Pdfcon from '../../../../public/assets/images/pdf.svg'
import theme from '../../../theme'
import Icon from '../../atoms/Icon'
import ProgressBar from '../../atoms/ProgressBar'
import Typography from '../../atoms/Typography'
import GenericModal from '../GenericModal'
interface FileLoadingModalProps {
  fileName: string
  onCrossButtonClick?: () => void
  value: number
  sx?: SxProps
}

const FileLoadingModal = ({
  fileName,
  onCrossButtonClick,
  value,
  sx,
}: FileLoadingModalProps) => {
  return (
    <GenericModal
      isCrossButton={true}
      open={true}
      isBackIcon={false}
      onCrossButtonClick={onCrossButtonClick}
      sx={sx}
    >
      <Stack justifyContent="center" height="70%" gap={8}>
        <Stack alignItems="center" gap={2}>
          <Icon src={Pdfcon} alt="pdf" style={{ width: theme.spacing(21.5) }} />
          <Typography
            text={fileName}
            variant="body1"
            color={theme.palette.text.white}
          />
        </Stack>
        <Stack px={25}>
          <ProgressBar value={value} />
          <Stack alignSelf="self-end">
            <Typography
              text="Uploading 1/1"
              variant="caption1"
              color={theme.palette.text.highEmphasis}
            />
          </Stack>
        </Stack>
      </Stack>
    </GenericModal>
  )
}

export default FileLoadingModal
