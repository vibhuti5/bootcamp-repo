import { Stack, styled } from '@mui/material'
import theme from '../../../theme'
import { ALREADY_EXIST_MODAL } from '../../../utils/constant'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import GenericModal from '../GenericModal'

interface AlreadyExistModalProps {
  fileName: string
  onCancelClick?: () => void
  onUploadClick?: () => void
}

const ParentStack = styled(Stack)({
  padding: '0px 24px 24px 24px',
})

const StyledButton = styled(Button)({
  textTransform: 'none',
  color: theme.palette.text.white,
  borderRadius: '4px',
})

const AlreadyExistModal = ({
  fileName,
  onCancelClick,
  onUploadClick,
}: AlreadyExistModalProps) => {
  return (
    <GenericModal
      isBackIcon={false}
      isCrossButton={false}
      open={true}
      sx={{ width: '484px', height: '246px' }}
    >
      <ParentStack gap={5}>
        <Typography
          text={ALREADY_EXIST_MODAL.title}
          variant="h3"
          color={theme.palette.text.white}
        />

        <Typography
          text={`${fileName} ${ALREADY_EXIST_MODAL.body}`}
          variant="subtitle2"
          width={theme.spacing(108)}
          color={theme.palette.text.highEmphasis}
        />
        <Stack direction="row" alignSelf="self-end" gap={5}>
          <StyledButton
            sx={{
              border: `1px solid ${theme.palette.grays.gray100}`,
              width: '63px',
              height: '36px',
            }}
            onClick={onCancelClick}
          >
            Cancel
          </StyledButton>
          <StyledButton
            sx={{
              bgcolor: theme.palette.primary.main,
              '&:hover': { bgcolor: theme.palette.primary.main },
              width: '96px',
              height: '36px',
            }}
            onClick={onUploadClick}
          >
            Upload
          </StyledButton>
        </Stack>
      </ParentStack>
    </GenericModal>
  )
}

export default AlreadyExistModal
