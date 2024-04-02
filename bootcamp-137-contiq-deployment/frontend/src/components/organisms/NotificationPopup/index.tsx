import NotificationsIcon from '@mui/icons-material/Notifications'
import { Box, Popover, Stack, SxProps, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import CrossLogo from '../../../../public/assets/Icons/cross.svg'
import NotificationLoader from '../../../../public/assets/gif/notificationLoader.gif'
import theme from '../../../theme'
import { NO_NOTIFICATION } from '../../../utils/constant'
import { getRandomAvatarSrc } from '../../../utils/helper'
import { NotificationType } from '../../../utils/interface'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import Notification from '../../molecules/NotificationRow'
export interface NotificationPopupProps {
  open: boolean
  notifications: NotificationType[]
  onCrossButtonClick?: () => void
  onClose?: () => void
  sx?: SxProps
}

const StyledLoaderBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '60px',
  flexDirection: 'column',
})

const NotificationPopup = ({
  open,
  notifications,
  onCrossButtonClick,
  onClose,
  sx,
}: NotificationPopupProps) => {
  const [showLoader, setShowLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false)
    }, 1000)
  }, [])

  const sortedNotifications = notifications.sort((a, b) => {
    const dateA: Date = new Date(a.updatedAt)
    const dateB: Date = new Date(b.updatedAt)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ mt: '7.8vh' }}
    >
      <Stack sx={sx}>
        <Stack
          sx={{
            position: 'sticky',
            top: 0,
            backgroundColor: theme.palette.structuralColor.white,
            zIndex: 2,
            width: '100%',
          }}
        >
          <Stack p={3} justifyContent="space-between" direction="row">
            <Typography text="Notifications" variant="h3" />
            <Icon
              src={CrossLogo}
              alt="cross-logo"
              onClick={onCrossButtonClick}
              style={{ cursor: 'pointer' }}
            />
          </Stack>
          <Divider color={theme.palette.grays.gray100} />
        </Stack>
        {showLoader && (
          <StyledLoaderBox>
            <Icon
              src={NotificationLoader}
              alt="loader"
              style={{ width: '250px', height: '150px' }}
            />
          </StyledLoaderBox>
        )}
        {!showLoader && (
          <Stack sx={{ height: '100%', overflowY: 'scroll' }}>
            {notifications.length > 0 && notifications ? (
              <>
                {sortedNotifications.map((item) => (
                  <Notification
                    key={item.id}
                    dateTime={item.updatedAt}
                    imageUrl={getRandomAvatarSrc()}
                    message={item.message}
                    width="100%"
                  />
                ))}
              </>
            ) : (
              <StyledLoaderBox>
                <NotificationsIcon
                  sx={{ height: '80px', width: '80px' }}
                  color="disabled"
                />
                <Typography
                  text={NO_NOTIFICATION}
                  variant={'body2'}
                  color={theme.palette.text.lowEmphasis}
                ></Typography>
              </StyledLoaderBox>
            )}
          </Stack>
        )}
      </Stack>
    </Popover>
  )
}

export default NotificationPopup
