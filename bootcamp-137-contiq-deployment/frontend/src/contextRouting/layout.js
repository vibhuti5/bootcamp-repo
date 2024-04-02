import { Outlet } from 'react-router'
import { UserContext } from '../context/UserContext'

export const SetupLayout = () => {
  return (
    <UserContext>
      <Outlet />
    </UserContext>
  )
}
