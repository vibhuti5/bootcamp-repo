import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import Setting from '../../../../public/assets/Icons/setting.svg'
import theme from '../../../theme'
import { SIDE_BAR_ELEMENTS } from '../../../utils/constant'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'

interface SideBarProps {
  width?: string
  height?: string
}

const SideBarStack = styled(Stack)({
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.grays.gray500,
})

const SideBar = ({ width, height }: SideBarProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (id: number, path?: string) => {
    if (id === 1 || id === 5) {
      if (path) navigate(path)
    }
  }
  return (
    <SideBarStack width={width} height={height}>
      <Stack>
        {SIDE_BAR_ELEMENTS.map((item) => (
          <Button
            data-testid={`${item}.id}-list-item`}
            key={item.id}
            onClick={() => {
              handleClick(item.id, item?.path)
            }}
            sx={{
              backgroundColor:
                location.pathname === `${item.path}` ||
                location.pathname === `${item.siblingPath}`
                  ? `${theme.palette.grays.gray400}`
                  : ``,
              color:
                location.pathname === `${item.path}` ||
                location.pathname === `${item.siblingPath}`
                  ? `${theme.palette.text.white}`
                  : `${theme.palette.grays.gray200}`,
              cursor:
                item.label === 'Home' || item.label === 'Files'
                  ? 'pointer'
                  : 'default',
              '&:hover': {
                backgroundColor:
                  location.pathname === `${item.path}` ||
                  location.pathname === `${item.siblingPath}`
                    ? `${theme.palette.grays.gray400}`
                    : `${theme.palette.grays.gray500}`,
              },
              borderRadius: '0px',
            }}
            disableRipple
          >
            <Stack sx={{ padding: '16px 24px' }}>
              <Icon
                src={item.src}
                alt={'HI'}
                style={{
                  width: '24px',
                  height: '24px',
                  filter:
                    location.pathname === `${item.path}` ||
                    location.pathname === `${item.siblingPath}`
                      ? `brightness(1000%) contrast(100%)`
                      : `invert(68%) sepia(0%) saturate(506%) hue-rotate(298deg) brightness(88%) contrast(92%)`,
                }}
              />
              <Typography variant="caption1" text={item.label} />
            </Stack>
          </Button>
        ))}
      </Stack>
      <Stack>
        <Button disabled>
          <Icon
            src={Setting}
            alt={'Setting'}
            style={{ padding: '16px 24px' }}
          />
        </Button>
      </Stack>
    </SideBarStack>
  )
}

export default SideBar
