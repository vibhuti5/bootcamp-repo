import { Grid, IconButton, InputAdornment, styled } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../../theme'
import Typography from '../../atoms/Typography'
import Button from '../../atoms/Button'
import { useConfirmPasswordValidation, usePasswordValidation } from './hooks'
import {
  CREATE_PASSWORD_SUB_TEXT,
  CREATE_PASSWORD_TEXT,
  RESET_PASSWORD_TEXT,
} from '../../../utils/constant'
import TypoInput from '../../molecules/TypoInput'
import { IPassword } from '../../../utils/interface'
import VISIBILITY_OFF from '../../../../public/assets/Icons/VisibilityOff.svg'
import VISIBILITY_ON from '../../../../public/assets/Icons/VisibilityOn.svg'
import Icon from '../../atoms/Icon'

export interface CreateNewPasswordFormProps {
  onClick: (password: IPassword) => void
}

const StyledGrid = styled(Grid)({
  maxWidth: theme.spacing(97),
  margin: '100px',
})
const StyledResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.structuralColor.white,
  borderRadius: '4px',
  '&:hover': { backgroundColor: theme.palette.primary.main },
  '&:disabled': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.structuralColor.white,
  },
  backgroundColor: theme.palette.primary.main,
  padding: '13px 8px',
  height: '6.25vh',
  width: '26vw',
}))
const CreateNewPasswordForm = ({ onClick }: CreateNewPasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { password, setPassword, passwordError, validatePassword } =
    usePasswordValidation()

  const {
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    validateConfirmPassword,
  } = useConfirmPasswordValidation(password)

  const disableResetButton =
    password === '' ||
    !!passwordError ||
    !!confirmPasswordError ||
    password !== confirmPassword

  return (
    <StyledGrid
      container
      direction="column"
      justifyContent="center"
      rowGap={8}
      data-testid="create-new-password"
    >
      <Grid item>
        <Typography
          variant="h2"
          text={CREATE_PASSWORD_TEXT}
          marginBottom={'4px'}
        />
        <Typography
          variant="overline"
          color={theme.palette.text.mediumEmphasis}
          width={'60%'}
          display="flex"
          text={CREATE_PASSWORD_SUB_TEXT}
        />
      </Grid>

      <Grid item container direction="column" rowGap={5}>
        <Grid item onBlur={validatePassword} flexGrow={1}>
          <TypoInput
            data-testid="new-password"
            labelValue="New password"
            placeholder="Enter new password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            helperText={passwordError}
            type={showPassword ? 'text' : 'password'}
            error={!!passwordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword((prevShowPassword) => !prevShowPassword)
                  }
                  edge="end"
                  data-testid="show-icon"
                >
                  {showPassword ? (
                    <Icon src={VISIBILITY_ON} alt="visibility-on-icon" />
                  ) : (
                    <Icon src={VISIBILITY_OFF} alt="visibility-off-icon" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item onBlur={validateConfirmPassword} flexGrow={1}>
          <TypoInput
            data-testid="confirm-password"
            labelValue="Confirm new password"
            placeholder="Re-enter password"
            variant="outlined"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            helperText={confirmPasswordError}
            error={!!confirmPasswordError}
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowConfirmPassword(
                      (prevShowConfirmPassword) => !prevShowConfirmPassword
                    )
                  }
                  edge="end"
                  data-testid="show-icon-confirm"
                >
                  {showConfirmPassword ? (
                    <Icon src={VISIBILITY_ON} alt="visibility-on-icon" />
                  ) : (
                    <Icon src={VISIBILITY_OFF} alt="visibility-off-icon" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <StyledResetButton
        variant="contained"
        size="large"
        onClick={() => onClick({ password, confirmPassword })}
        disabled={disableResetButton}
      >
        <Typography variant="body1" text={RESET_PASSWORD_TEXT} />
      </StyledResetButton>
    </StyledGrid>
  )
}

export default CreateNewPasswordForm
