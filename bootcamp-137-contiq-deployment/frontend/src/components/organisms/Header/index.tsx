import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Badge, Box, Stack, styled } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ProfilePic from '../../../../public/assets/Icons/Profile.svg'
import ArrowDown from '../../../../public/assets/Icons/arrowdown.svg'
import ContiqLogo from '../../../../public/assets/Icons/contiqLogo.svg'
import SearchIcon from '../../../../public/assets/Icons/search.svg'
import { useData } from '../../../context/UserContext'
import {
  getAllNotifications,
  getUserById,
  isFileAlreadyExists,
  updateUserById,
} from '../../../services'
import theme from '../../../theme'
import { HEADER_ICONS } from '../../../utils/constant'
import { NotificationType } from '../../../utils/interface'
import Icon from '../../atoms/Icon'
import TextField from '../../atoms/TextField'
import LogoutPopup from '../../molecules/LogoutPopup'
import NotificationPopup from '../NotificationPopup'
import SearchPopup from '../SearchPopup'
import useHeader from './hook'

const Styledtextfield = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  backgroundColor: '#ffffff45',
  borderRadius: '6px',
})

const StyledBox = styled(Box)({
  backgroundColor: '#ffffff45',
  borderRadius: '8px',
  width: '44px',
  height: '44px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: `linear-gradient(0.25turn,#05bdcd, #7c2be8)`,
  padding: '8px 20px',
  height: '7.8125vh',
})

const AvatarBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff45',
  padding: '4px 8px',
  borderRadius: '8px',
})

const iconStyle = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}

const avatarStyle = {
  width: '36px',
  height: '36px',
  cursor: 'pointer',
}

const Header = () => {
  const {
    showOption,
    showNotification,
    searchQuery,
    searchDocuments,
    setShowNotification,
    handleNotificationClick,
    handleOptionClick,
    handleSearchChange,
  } = useHeader()
  const { logout } = useAuth0()
  const { data, updateData } = useData()

  const [notifications, setNotifications] = useState<NotificationType[]>([])
  const [notificationCount, setNotificationCount] = useState<number>(0)
  const navigate = useNavigate()
  const fetchNotificationData = async () => {
    try {
      const result = await getAllNotifications()
      setNotifications(result)
    } catch (error) {
      console.error('Failed to fetch data from the server:', error)
    }
  }

  useEffect(() => {
    fetchNotificationData()
    fetchUserData()
  }, [updateData])

  const fetchUserData = async () => {
    try {
      const result = await getUserById(data.loggedInUserId)
      setNotificationCount(result.unreadNotificationCount)
    } catch (error) {
      console.error('Failed to fetch data from the server:', error)
    }
  }

  const updateUserNotificationCount = async (count: number) => {
    try {
      if (notificationCount > 0) {
        await updateUserById(data.loggedInUserId, {
          unreadNotificationCount: count,
        })
        setNotificationCount(0)
        updateData()
      }
    } catch (error) {
      console.error('Failed to fetch data from the server:', error)
    }
  }

  const handleSearchedFileClick = async (name: string) => {
    const res = await isFileAlreadyExists(name)
    const content = res[0].content
    navigate(`/file-viewer/${res[0].id}`, {
      state: { content, searchQuery, name },
    })
  }

  return (
    <Container>
      <Box>
        <Icon src={ContiqLogo} alt={'Contiq Logo'} />
      </Box>
      <Stack direction={'row'} spacing={'20px'}>
        <Styledtextfield
          autoComplete="off"
          data-testid="search-field"
          startAdornment={
            <Icon
              src={SearchIcon}
              alt={'Search Icon'}
              style={{
                ...iconStyle,
                marginTop: '5px',
                marginRight: '8px',
                cursor: 'pointer',
              }}
            />
          }
          placeholder={'Search'}
          width="25.7vw"
          height="44px"
          inputProps={{ style: { color: theme.palette.text.white } }}
          value={searchQuery}
          onChange={(event) => handleSearchChange(event)}
        ></Styledtextfield>
        {searchQuery && (
          <SearchPopup
            data-testid="search-popup"
            isOpen={true}
            files={searchDocuments ?? []}
            onFileClick={(fileName) => {
              handleSearchedFileClick(fileName)
            }}
          />
        )}
        {HEADER_ICONS.map((value) =>
          value.id != 3 ? (
            <StyledBox key={value.id}>
              <Icon src={value.icon} alt={value.alt} style={iconStyle}></Icon>
            </StyledBox>
          ) : (
            <Fragment key={value.id}>
              <StyledBox
                onClick={() => handleNotificationClick()}
                data-testid="notification-button"
              >
                <Badge
                  badgeContent={notificationCount}
                  color="error"
                  overlap="circular"
                  sx={{
                    color: 'white',
                    '.css-10tn45-MuiBadge-badge': {
                      fontSize: '9px',
                      fontStyle: 'normal',
                      padding: '2px 3px',
                      height: '14px',
                      minWidth: '14px',
                      borderRadius: '50%',
                    },
                  }}
                >
                  <Icon
                    src={value.icon}
                    alt={value.alt}
                    style={iconStyle}
                  ></Icon>
                </Badge>
              </StyledBox>
              {showNotification && (
                <NotificationPopup
                  open={showNotification}
                  notifications={notifications ?? []}
                  onCrossButtonClick={() => {
                    setShowNotification(!showNotification)
                    updateUserNotificationCount(0)
                  }}
                  sx={{ height: '448px', width: '28vw' }}
                  data-testid="notification-popup"
                />
              )}
            </Fragment>
          )
        )}
        {showOption ? (
          <Box
            onClick={() => handleOptionClick()}
            sx={{ padding: '4px' }}
            data-testid="profile-picture"
          >
            <Avatar
              src={ProfilePic}
              sx={avatarStyle}
              alt="Profile Picture"
            ></Avatar>
          </Box>
        ) : (
          <Box
            onClick={() => handleOptionClick()}
            data-testid="profile-options"
          >
            <AvatarBox>
              <Avatar
                src={ProfilePic}
                alt="Profile Picture"
                sx={avatarStyle}
              ></Avatar>
              <Icon
                src={ArrowDown}
                alt={'Arrow Down'}
                style={{
                  ...iconStyle,
                  marginLeft: '10px',
                  marginTop: '5px',
                  cursor: 'pointer',
                }}
              />
            </AvatarBox>
            <LogoutPopup
              isOpen={!showOption}
              onLogoutClick={() => {
                localStorage.clear()
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                })
              }}
              name={data.name}
            />
          </Box>
        )}
      </Stack>
    </Container>
  )
}

export default Header
