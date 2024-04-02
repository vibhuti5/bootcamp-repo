import { Box, Divider, Stack, styled } from '@mui/material'
import theme from '../../../theme'
import { NOTIFICATION_ROW } from '../../../utils/constant'
import { formatDate } from '../../../utils/helper'
import Avatar from '../../atoms/Avatar'
import Typography from '../../atoms/Typography'

export interface NotificationRowProps {
  imageUrl: string
  message: string
  dateTime: string
  width?: string
}

const StyledStack = styled(Stack)({
  flexDirection: 'row',
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

const Notification = ({
  imageUrl,
  message,
  dateTime,
  width,
}: NotificationRowProps) => {
  const label = message.split(' ')
  const name = label[0]
  const updateText = label.slice(1).join(' ')

  const formattedDate = formatDate(dateTime)

  return (
    <Box width={width}>
      <Divider />
      <StyledStack>
        <Avatar
          src={imageUrl}
          alt={NOTIFICATION_ROW.NO_IMAGE}
          width="42px"
          height="42px"
        />
        <Box>
          <Stack direction="row" gap={1}>
            <Typography
              text={name ?? ''}
              variant="body1"
              color={theme.palette.text.black}
            />
            <Typography
              text={updateText}
              variant="body2"
              color={theme.palette.text.mediumEmphasis}
            />
          </Stack>
          <Typography
            text={formattedDate}
            variant="caption1"
            color={theme.palette.text.mediumEmphasis}
          />
        </Box>
      </StyledStack>
      <Divider />
    </Box>
  )
}

export default Notification
