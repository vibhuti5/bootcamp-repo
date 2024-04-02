import { Box, Grid, IconButton, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import VISIBILITY_OFF from '../../../../public/assets/Icons/VisibilityOff.svg'
import VISIBILITY_ON from '../../../../public/assets/Icons/VisibilityOn.svg'
import GoogleIcon from '../../../../public/assets/images/google.svg'
import theme from '../../../theme'
import Button from '../../atoms/Button'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import TypoInput from '../../molecules/TypoInput'
import {
  useEmailValidation,
  useNameValidation,
  usePasswordValidation,
} from './hook'
interface SignUpProps {
  onSignUp: (email: string, password: string, name: string) => void
  onOAuthBtnClick: () => void
  onSignInToggle?: () => void
}

const HeadTypography = styled(Typography)(`
    color: 'var(--text-black, #2A3238)',
    font-family: 'Manrope';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    padding-left:10px;
`)

const SignUpTypography = styled(Typography)(
  `color: var(--primary-500, #8B3DFF);
  padding-left: 3px;`
)

const EmailFieldTypoInputGrid = styled(Grid)(`
    margin-top: 30px;
    width: 356px;
    height: 76px;
`)

const NameFieldTypoInputGrid = styled(Grid)(`
    margin-top: 30px;
    width: 356px;
    height: 76px;
`)

const ContinueWithGoogleGrid = styled(Grid)({
  marginTop: '28px',
  width: '90%',
  backgroundColor: 'background: var(--structural-structural, #F4F5F5)',
})

const SignUpBUtton = styled(Button)({
  '&.MuiButton-contained.Mui-disabled': {
    background: '#F2EAFD',
    color: '#FFFFFF',
  },

  color: theme.palette.structuralColor.white,
  backgroundColor: theme.palette.primary.main,
  width: '26vw',
  height: '6.25vh',
  '&:hover': { backgroundColor: theme.palette.primary.main },
})

const SignUp = (props: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { password, setPassword, passwordError, validatePassword } =
    usePasswordValidation()
  const { email, setEmail, emailError, validateEmail } = useEmailValidation()
  const { name, setName, nameError, validateName } = useNameValidation()

  const SignUpButtonConfig = {
    onClick: () => props.onSignUp(email, password, name),
    children: 'Sign Up',
  }

  const ContinueWithGoogleConfig = {
    children: 'Continue with google',
    onClick: props.onOAuthBtnClick,
    sx: {
      color: theme.palette.grays.gray500,
      backgroundColor: theme.palette.grays.gray600,
      width: '26vw',
      height: '6.25vh',
      '&:hover': { backgroundColor: theme.palette.grays.gray600 },
    },
    startIcon: <img src={GoogleIcon} alt="Google Icon" />,
  }

  const SignInToggleBoxConfig = {
    sx: { float: 'left', cursor: 'pointer' },
    onClick: props.onSignInToggle,
  }

  const disableSignUpButton =
    password === '' ||
    !!passwordError ||
    email === '' ||
    !!emailError ||
    name === '' ||
    !!nameError
  return (
    <Box data-testid="sign-up" sx={{ margin: '100px', width: '40%' }}>
      <Grid container direction="column" justifyContent="center">
        <Grid xs={8}>
          <HeadTypography
            text="Sign Up"
            variant="h2"
            color={theme.palette.text.black}
          />
        </Grid>
        <Grid direction="column" sx={{ marginLeft: 3 }}>
          <NameFieldTypoInputGrid onBlur={validateName}>
            <TypoInput
              labelValue="Name"
              placeholder="john cene"
              onChange={(event) => setName(event.target.value)}
              helperText={nameError}
              data-testid="user-name"
              value={name}
              error={!!nameError}
            />
          </NameFieldTypoInputGrid>
          <EmailFieldTypoInputGrid onBlur={validateEmail}>
            <TypoInput
              labelValue="Email"
              placeholder="john@example.com"
              onChange={(event) => setEmail(event.target.value)}
              helperText={emailError}
              data-testid="email"
              value={email}
              error={!!emailError}
            />
          </EmailFieldTypoInputGrid>
          <Grid sx={{ marginTop: 8 }} onBlur={validatePassword}>
            <TypoInput
              labelValue="Password"
              placeholder="Create a password"
              value={password}
              data-testid="password"
              onChange={(event) => setPassword(event.target.value)}
              helperText={passwordError}
              error={!!passwordError}
              type={showPassword ? 'text' : 'password'}
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
          <Grid sx={{ marginTop: 8 }}>
            <SignUpBUtton
              variant="contained"
              disabled={disableSignUpButton}
              {...SignUpButtonConfig}
            />
          </Grid>
          <Grid sx={{ marginTop: '28px' }}>
            <Divider>
              <Typography
                text={'OR'}
                variant="caption1"
                color={theme.palette.text.mediumEmphasis}
                sx={{ padding: '0px 19px' }}
              />
            </Divider>
          </Grid>
          <ContinueWithGoogleGrid>
            <Button variant="contained" {...ContinueWithGoogleConfig} />
          </ContinueWithGoogleGrid>
          <Grid sx={{ marginTop: 8, width: '100%' }}>
            <Grid
              direction="row"
              container
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ float: 'left' }}>
                <Typography
                  text="Already have an account?"
                  variant="body2"
                  color={theme.palette.text.black}
                />
              </Box>
              <Box {...SignInToggleBoxConfig}>
                <SignUpTypography text="Sign In" variant="body2" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignUp
