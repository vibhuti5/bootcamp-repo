import { type Meta, type StoryObj } from '@storybook/react'
import Avatar from '.'
import ProfilePic from '../../../../public/assets/Icons/Profile.svg'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/avatar',
  component: Avatar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof Avatar>

export const AvatarWithPic: Story = {
  args: {
    src: ProfilePic,
    alt: 'Avatar Photo',
  },
}

export const AvatarWithOutPic: Story = {
  args: {
    alt: 'Avatar Photo',
  },
}

export default meta
