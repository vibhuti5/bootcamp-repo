import { Box, Grid, IconButton, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import VISIBILITY_OFF from '../../../../public/assets/Icons/VisibilityOff.svg'
import VISIBILITY_ON from '../../../../public/assets/Icons/VisibilityOn.svg'
import GoogleIcon from '../../../../public/assets/images/google.svg'
import theme from '../../../theme'
import { ISignIn } from '../../../utils/interface'
import Button from '../../atoms/Button'
import CheckboxComponent from '../../atoms/Checkbox'
import Divider from '../../atoms/Divider'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import TypoInput from '../../molecules/TypoInput'
import { useEmailValidation, usePasswordValidation } from './hook'
interface SignInProps {
  onSignIn: (loginData: ISignIn) => void
  onOAuthBtnClick: () => void
  onSignUpToggle?: () => void
  handleForgetPasswordClick: () => void
}

const SignUpTypography = styled(Typography)(
  `color: var(--primary-500, #8B3DFF);
  padding-left: 3px;`
)

const EmailFieldTypoInputGrid = styled(Grid)(`
    margin-top: 30px;
    width: 100%;
    height: 76px;
`)

const ContinueWithGoogleGrid = styled(Grid)({
  marginTop: '28px',
  width: '90%',
  backgroundColor: theme.palette.grays.gray600,
})

const SignInButton = styled(Button)({
  '&.MuiButton-contained.Mui-disabled': {
    background: '#F2EAFD',
    color: '#FFFFFF',
  },
})

const checkbox = {
  color: 'grey',
  // '&.Mui-checked': {
  //   color: 'grey',
  // },
}

const SignIn = (props: SignInProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const { password, setPassword, passwordError, validatePassword } =
    usePasswordValidation()
  const { email, setEmail, emailError, validateEmail } = useEmailValidation()

  const SignInButtonConfig = {
    children: 'Sign In',
    onClick: () => props.onSignIn({ email: email, password: password }),
    sx: {
      color: theme.palette.structuralColor.white,
      backgroundColor: theme.palette.primary.main,
      width: '26vw',
      height: '6.25vh',
      '&:hover': { backgroundColor: theme.palette.primary.main },
    },
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

  const disableSignInButton =
    password === '' || !!passwordError || email === '' || !!emailError
  const [checked, setChecked] = useState(false)
  return (
    <Box data-testid="sign-in" sx={{ margin: '100px', width: '40%' }}>
      <Grid container direction="column" justifyContent="center">
        <Grid item width={'100%'}>
          <Typography
            text="Sign In"
            variant="h2"
            color={theme.palette.text.black}
            sx={{ paddingLeft: '20px' }}
          />
        </Grid>
        <Grid direction="column" sx={{ marginLeft: 5 }} onBlur={validateEmail}>
          <EmailFieldTypoInputGrid>
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
              labelValue="Password"
              placeholder="Enter a password"
              value={password}
              data-testid="password"
              onChange={(event) => setPassword(event.target.value)}
              helperText={passwordError}
              error={!!passwordError}
              type={showPassword ? 'text' : 'password'}
            />
          </Grid>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '26vw',
            }}
          >
            <CheckboxComponent
              label={'Remember Me'}
              controlLabelStyle={{ color: 'grey' }}
              checkboxStyle={checkbox}
              isChecked={checked}
              onCheck={() => setChecked(!checked)}
            />
            <Typography
              text="Forgot Password?"
              variant="caption1"
              sx={{ cursor: 'pointer' }}
              color={theme.palette.primary.main}
              onClick={props.handleForgetPasswordClick}
            />
          </Box>
          <Grid sx={{ paddingTop: '20px' }}>
            <SignInButton
              variant="contained"
              disabled={disableSignInButton}
              {...SignInButtonConfig}
            />
          </Grid>
          <Grid sx={{ marginTop: '28px' }}>
            <Divider>
              <Typography
                sx={{ padding: '0px 19px' }}
                variant="caption1"
                color={theme.palette.text.mediumEmphasis}
                text={'OR'}
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
                  text="Doesn't have an account?"
                  variant="body2"
                  color={theme.palette.text.black}
                />
              </Box>
              <Box
                onClick={props.onSignUpToggle}
                sx={{ float: 'left', cursor: 'pointer' }}
              >
                <SignUpTypography text="Sign Up" variant="body2" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignIn
