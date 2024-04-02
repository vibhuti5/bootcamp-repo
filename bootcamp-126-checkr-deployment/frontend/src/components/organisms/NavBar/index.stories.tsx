import { Meta, StoryFn } from '@storybook/react'
import NavBar from '.'
import {
  AvatarName,
  AvatarSubtext,
  NavBarItems,
} from '../../../utils/constants'
import { BrowserRouter } from 'react-router-dom'
export default {
  title: 'organisms/NavBar',
  component: NavBar,
} as Meta<typeof NavBar>

const Template: StoryFn<typeof NavBar> = (args) => (
  <BrowserRouter>
    <NavBar {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  navBarItems: NavBarItems,
  avatarName: AvatarName,
  avatarSubtext: AvatarSubtext,
}
