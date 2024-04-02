import { Box, Modal as MuiModal, Stack, SxProps, styled } from '@mui/material'
import BackIcon from '../../../../public/assets/Icons/backIcon.svg'
import CrossIcon from '../../../../public/assets/Icons/crossIcon.svg'
import theme from '../../../theme'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface ModalProps {
  open: boolean
  onBackDropClose?: () => void
  children: React.ReactNode
  isBackIcon: boolean
  isCrossButton: boolean
  titleLabel?: string
  onCrossButtonClick?: () => void
  onBackButtonClick?: () => void
  sx?: SxProps
}

const HeaderStack = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(6),
})

const BackIconStack = styled(Stack)({
  flexDirection: 'row',
  gap: theme.spacing(3),
})

const ModalOverlay = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  position: 'fixed',
  zIndex: 1000,
  backgroundColor: theme.palette.structuralColor.overlay,
})

const ModalContent = styled(Box)({
  display: 'flex',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grays.gray400,
  margin: theme.spacing(2.5),
})

const Modal = ({
  open,
  onBackDropClose,
  children,
  isBackIcon,
  isCrossButton,
  titleLabel,
  onCrossButtonClick,
  onBackButtonClick,
  sx,
}: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onBackDropClose}>
      <ModalOverlay>
        <ModalContent>
          <Stack sx={sx}>
            <HeaderStack>
              <BackIconStack>
                {isBackIcon && (
                  <>
                    <Icon
                      src={BackIcon}
                      alt="back-icon"
                      onClick={onBackButtonClick}
                      style={{ cursor: 'pointer' }}
                    />
                    <Typography
                      text={titleLabel ?? ''}
                      variant="h3"
                      color={theme.palette.text.white}
                    />
                  </>
                )}
              </BackIconStack>
              {isCrossButton && (
                <Icon
                  src={CrossIcon}
                  alt="cross-icon"
                  onClick={onCrossButtonClick}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </HeaderStack>
            {isBackIcon && <Divider color={theme.palette.grays.gray300} />}
            {children}
          </Stack>
        </ModalContent>
      </ModalOverlay>
    </MuiModal>
  )
}

export default Modal
