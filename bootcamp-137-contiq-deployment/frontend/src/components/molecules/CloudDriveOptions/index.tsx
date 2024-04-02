import { Stack } from '@mui/material'
import theme from '../../../theme'
import { CLOUD_UPLOAD_MODAL } from '../../../utils/constant'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface CloudDriveOptionsProps {
  onDriveClick: () => void
}

const CloudDriveOptions = ({ onDriveClick }: CloudDriveOptionsProps) => {
  return (
    <Stack gap={8} alignItems="center">
      <Typography
        text={CLOUD_UPLOAD_MODAL.dragText}
        variant="subtitle2"
        color={theme.palette.text.white}
        width="211px"
      />
      <Stack direction="row" gap={8}>
        {CLOUD_UPLOAD_MODAL.icons.map((item) => (
          <Icon
            key={item.id}
            src={item.src}
            alt={item.alt}
            onClick={item.id === 1 ? onDriveClick : undefined}
            style={{
              width: '50px',
              height: '50px',
              cursor: item.id === 1 ? 'pointer' : 'default',
            }}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default CloudDriveOptions
