import { Divider, IconButton, Stack } from '@mui/material'
import { NavBarItemsType } from '../../../utils/types'
import { StyledCard, StyledNavButton } from './styles'
import CustomTypography from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import Recruit from '../../../../public/assets/images/recruit-low-resolution-logo-color-on-transparent-background 1.svg'
import React, { useContext } from 'react'
import Theme from '../../../theme'
import CustomAvatar from '../../atoms/Avatar'
import User from '../../../../public/assets/images/user.svg'
import Logout from '../../../../public/assets/images/logout.svg'
import LogoutModal from '../../molecules/LogoutModal'
import { useAuth0 } from '@auth0/auth0-react'
import { useLocation, useNavigate } from 'react-router'
import { DashboardContext } from '../../../App'

interface NavBarProps {
  navBarItems: NavBarItemsType[]
  avatarName: string
  avatarSubtext: string
}

const NavBar = (props: NavBarProps) => {
  const { setDashboardRefresh } = useContext(DashboardContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = React.useState(false)
  const { logout } = useAuth0()
  const handleCloseDialog = () => {
    setOpen(false)
  }
  const handleClick = (id: number, path?: string) => {
    if (id === 2 || id === 3) {
      setDashboardRefresh(true)
      if (path) navigate(path)
    }
  }

  return (
    <StyledCard>
      <Stack
        width={'5.71vw'}
        height={'2.60'}
        marginLeft={'1.5vw'}
        marginTop={'3.64vh'}
      >
        <Icon src={Recruit}></Icon>
      </Stack>
      <Stack spacing={2} width={'15.08vw'} height={'48.69vh'} padding={'1.4vw'}>
        {props.navBarItems.map((item) => (
          <StyledNavButton
            data-testid={`${item}.id}-list-item`}
            key={item.id}
            onClick={() => {
              handleClick(item.id, item?.path)
            }}
            style={{
              backgroundColor:
                location.pathname === `${item.path}` ||
                location.pathname === `${item.siblingPath}`
                  ? `${Theme.palette.primary[300]}`
                  : '',
              color:
                location.pathname === `${item.path}` ||
                location.pathname === `${item.siblingPath}`
                  ? `${Theme.palette.primary[500]}`
                  : `${Theme.palette.text.highEmphasis}`,
            }}
            startIcon={<Icon src={item.src}></Icon>}
          >
            {item.title}
          </StyledNavButton>
        ))}
      </Stack>
      <Divider
        style={{
          color: Theme.palette.structuralColors.stroke,
          marginTop: '23vh',
          marginBottom: '2vh',
        }}
      />
      <Stack
        direction={'row'}
        width={'15.08vw'}
        height={'4.94vh'}
        justifyContent={'space-between'}
        marginLeft={'1vw'}
      >
        <Stack direction={'row'} spacing={2}>
          <CustomAvatar
            style={{ width: '44px', height: '44px' }}
            src={User}
          ></CustomAvatar>
          <Stack>
            <CustomTypography
              children={props.avatarName}
              variant="body1"
              color={Theme.palette.text.highEmphasis}
            />
            <Stack maxWidth={'9vw'}>
              <CustomTypography
                children={props.avatarSubtext}
                variant="caption2"
                color={Theme.palette.text.lowEmphasis}
                style={{
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <IconButton onClick={() => setOpen(true)} data-testid="logout-button">
          {<img src={Logout} alt="logout" />}
        </IconButton>
        <LogoutModal
          open={open}
          onCancel={handleCloseDialog}
          onLogout={() => {
            localStorage.clear()
            logout({
              logoutParams: { returnTo: window.location.origin + '/login' },
            })
          }}
        ></LogoutModal>
      </Stack>
    </StyledCard>
  )
}

export default NavBar
