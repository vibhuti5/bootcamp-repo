import { Box, Popover, PopoverProps, Stack, SxProps } from '@mui/material'
import theme from '../../../theme'
import { LOGOUT_POPUP, LOGOUT_POPUP_ITEMS } from '../../../utils/constant'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

export interface NavBarProps {
  imageSrc: string
  label: string
}
export const MenuItem = ({ imageSrc, label }: NavBarProps) => {
  return (
    <Stack direction="row" gap={2} py={1}>
      <Icon src={imageSrc} alt="no-icon" />
      <Typography
        text={label}
        variant="body2"
        color={theme.palette.text.black}
      />
    </Stack>
  )
}

export interface LogoutPopupProps {
  isOpen: boolean
  onLogoutClick?: () => void
  onClose?: () => void
  popOverProps?: Partial<PopoverProps>
  sx?: SxProps
  name: string
}

const LogoutPopup = ({
  isOpen,
  onLogoutClick,
  onClose,
  popOverProps,
  sx,
  name,
}: LogoutPopupProps) => {
  return (
    <Popover
      {...popOverProps}
      open={isOpen}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ mt: '7.8vh' }}
    >
      <Box sx={sx} width={'13.104vw'}>
        <Stack px={'12px'} py={'4px'}>
          <Typography
            text={name}
            variant="body1"
            color={theme.palette.text.black}
          />
          <Typography
            text={LOGOUT_POPUP.ID}
            variant="overline"
            color={theme.palette.text.lowEmphasis}
          />
        </Stack>
        <Divider />
        <Stack p={3}>
          {LOGOUT_POPUP_ITEMS.map((item) => (
            <Stack
              key={item.id}
              sx={{ cursor: item.label === 'Logout' ? 'pointer' : 'default' }}
              onClick={
                item.label === 'Logout' && onLogoutClick
                  ? onLogoutClick
                  : undefined
              }
            >
              <MenuItem imageSrc={item.imageSrc} label={item.label} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Popover>
  )
}

export default LogoutPopup
