import { Grid, styled } from '@mui/material'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import { validateEmail } from '../../../utils/validations'
import Button from '../../atoms/Button'
import TypoInput from '../../molecules/TypoInput'
import {
  RESET_PASSWORD_SUB_TEXT,
  SEND_PASSWORD_TEXT,
  RESET_PASSWORD_TITLE_TEXT,
} from '../../../utils/constant'
import { useEmailValidation } from './hooks'
import { useEffect } from 'react'

export interface ResetPasswordEmailFormProps {
  checkEmail: (email: string) => void
  emailError: string
}

const StyledGrid = styled(Grid)({
  maxWidth: theme.spacing(97),
  margin: '100px',
})
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.structuralColor.white,
  width: '26vw',
  borderRadius: '4px',
  '&:hover': { backgroundColor: theme.palette.primary.main },
  '&:disabled': {
    color: theme.palette.structuralColor.white,
    backgroundColor: theme.palette.primary.light,
  },
  backgroundColor: theme.palette.primary.main,
  padding: '13px 8px',
  height: '6.25vh',
}))
const ResetPasswordEmailForm = ({
  checkEmail,
  emailError,
}: ResetPasswordEmailFormProps) => {
  const {
    email,
    emailHelperText,
    setEmailHelperText,
    validateEmail: validateEmailHandler,
  } = useEmailValidation()
  useEffect(() => {
    setEmailHelperText(emailError)
  }, [emailError])

  return (
    <StyledGrid
      container
      direction="column"
      justifyContent="center"
      rowGap={8}
      data-testid="reset-password-email"
    >
      <Grid item>
        <Typography
          variant="h2"
          text={RESET_PASSWORD_TITLE_TEXT}
          marginBottom={'4px'}
        />
        <Typography
          variant="overline"
          color={theme.palette.text.mediumEmphasis}
          width={'70%'}
          display="flex"
          text={RESET_PASSWORD_SUB_TEXT}
        />
      </Grid>

      <Grid item container direction="column" rowGap={8}>
        <TypoInput
          data-testid="email"
          labelValue="Email ID"
          placeholder="john@example.com"
          variant="outlined"
          value={email}
          onChange={validateEmailHandler}
          type="text"
          helperText={emailHelperText}
          error={!!emailHelperText}
        />
      </Grid>
      <StyledButton
        variant="contained"
        size="large"
        onClick={() => checkEmail(email)}
        disabled={!validateEmail(email)}
      >
        <Typography variant="body1" text={SEND_PASSWORD_TEXT} />
      </StyledButton>
    </StyledGrid>
  )
}

export default ResetPasswordEmailForm
