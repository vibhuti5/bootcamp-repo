import { type Meta, type StoryObj } from '@storybook/react'
import SideBar from '.'

const meta: Meta<typeof SideBar> = {
  title: 'Organisms/SideBar',
  component: SideBar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof SideBar>

export const FileType: Story = {
  args: {
    width: '81px',
    height: '900px',
  },
}

export default meta
