import { Stack } from '@mui/material'
import Loader from '../../../../public/assets/gif/loader.gif'
import GdriveLogo from '../../../../public/assets/images/GoogleDrive.svg'
import theme from '../../../theme'
import { SYNC_MODAL } from '../../../utils/constant'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import GenericModal from '../GenericModal'

interface SyncModalProps {
  open: boolean
  onCrossClick?: () => void
}

const SyncModal = ({ open, onCrossClick }: SyncModalProps) => {
  return (
    <GenericModal
      isCrossButton={true}
      open={open}
      isBackIcon={false}
      onCrossButtonClick={onCrossClick}
      sx={{ width: '51vw', height: '66.14vh' }}
    >
      <Stack justifyContent="center" alignItems="center" height="70%" gap={5}>
        <Icon
          src={GdriveLogo}
          alt="g-drive logo"
          style={{ width: '86px', height: '86px' }}
        />
        <Stack direction="row" gap={2}>
          <Icon
            src={Loader}
            alt="loader"
            style={{ width: '30px', height: '30px' }}
          />
          <Typography
            text={SYNC_MODAL.tilteText}
            variant="h3"
            color={theme.palette.text.white}
          />
        </Stack>
        <Typography
          text={SYNC_MODAL.bodyText}
          variant="body2"
          color={theme.palette.text.highEmphasis}
          width="189px"
          textAlign="center"
        />
      </Stack>
    </GenericModal>
  )
}

export default SyncModal
