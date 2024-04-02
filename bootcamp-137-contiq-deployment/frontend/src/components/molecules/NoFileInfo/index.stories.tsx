import { type Meta, type StoryObj } from '@storybook/react'
import noFileSvg from '../../../../public/assets/images/noFileInfo.svg'
import NoFileInfo from './index'

const meta: Meta<typeof NoFileInfo> = {
  title: 'Molecules/NoFileInfo',
  component: NoFileInfo,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof NoFileInfo>

export const FileNoFileInfo: Story = {
  args: {
    src: noFileSvg,
    title: 'No files availabe',
    subTitle: 'Start by syncing your cloud storage to contiq',
  },
}

export default meta
