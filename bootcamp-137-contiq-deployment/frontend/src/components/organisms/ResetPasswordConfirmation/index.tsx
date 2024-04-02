import { Grid, styled } from '@mui/material'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import success from '../../../../public/assets/Icons/reset-success.gif'
import {
  RESET_PASSWORD_SUCCESS_TEXT,
  RESET_PASSWORD_SUCCESS_SUB_TEXT,
  CONTINUE_TEXT,
} from '../../../utils/constant'
export interface ResetPasswordConfirmationProps {
  onClick: () => void
}

const StyledGrid = styled(Grid)({
  maxWidth: theme.spacing(97),
  margin: '100px',
})
const StyledContinueButton = styled(Button)(({ theme }) => ({
  height: '6.25vh',
  width: '26vw',
  color: theme.palette.structuralColor.white,
  backgroundColor: theme.palette.primary.main,
  padding: '13px 8px',
  borderRadius: '4px',
  '&:disabled': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.structuralColor.white,
  },
  '&:hover': { backgroundColor: theme.palette.primary.main },
}))
const ResetPasswordConfirmation = ({
  onClick,
}: ResetPasswordConfirmationProps) => {
  return (
    <StyledGrid
      container
      direction="column"
      rowGap={8}
      data-testid="reset-success"
    >
      <Grid item flexGrow={1}>
        <Grid container item columnGap={5} alignItems="baseline">
          <Typography variant="h2" text={RESET_PASSWORD_SUCCESS_TEXT} />
          <Icon src={success} style={{ height: '22px' }} alt="reset success" />
        </Grid>
        <Typography
          marginTop={'4px'}
          variant="overline"
          display="flex"
          width="70%"
          color={theme.palette.text.mediumEmphasis}
          text={RESET_PASSWORD_SUCCESS_SUB_TEXT}
        />
      </Grid>
      <StyledContinueButton variant="contained" size="large" onClick={onClick}>
        <Typography variant="body1" text={CONTINUE_TEXT} />
      </StyledContinueButton>
    </StyledGrid>
  )
}

export default ResetPasswordConfirmation
