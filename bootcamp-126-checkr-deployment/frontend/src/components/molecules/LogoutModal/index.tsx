import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  styled,
} from '@mui/material'
import {
  ConfirmLogout,
  LogoutText,
  CancelButton,
  LogoutButton,
} from '../../../utils/constants'
import Theme from '../../../theme'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'

export interface LogoutProps {
  open: boolean
  onCancel: () => void
  onLogout: () => void
}
const StyledButton = styled(Button)({
  borderRadius: '6px',
  padding: '8px 16px 8px 16px',
  boxShadow: 'none',
})
const StyledModal = styled(Dialog)({
  '& .MuiPaper-root': {
    width: '33.68vw',
    borderRadius: '0.5vw',
    boxShadow: `0px 4px 16px ${Theme.palette.structuralColors.boxShadow}`,
  },
})

const LogoutModal = (props: LogoutProps) => {
  return (
    <StyledModal open={props.open} onClose={props.onCancel}>
      <DialogTitle>
        {
          <Typography
            variant="h1"
            children={ConfirmLogout}
            color={Theme.palette.text.highEmphasis}
          ></Typography>
        }
      </DialogTitle>
      <DialogContent>
        {
          <Typography
            variant="body2"
            children={LogoutText}
            color={Theme.palette.text.mediumEmphasis}
          ></Typography>
        }
      </DialogContent>
      <DialogActions sx={{ padding: '1.3rem' }}>
        <Stack spacing={5} direction="row">
          <StyledButton
            variant="outlined"
            style={{ borderColor: Theme.palette.structuralColors.stroke }}
            onClick={props.onCancel}
          >
            {
              <Typography
                variant="body1"
                children={CancelButton}
                color={Theme.palette.text.mediumEmphasis}
              ></Typography>
            }
          </StyledButton>
          <StyledButton variant="contained" onClick={props.onLogout}>
            {
              <Typography
                variant="body1"
                children={LogoutButton}
                color={Theme.palette.structuralColors.white}
              ></Typography>
            }
          </StyledButton>
        </Stack>
      </DialogActions>
    </StyledModal>
  )
}

export default LogoutModal
