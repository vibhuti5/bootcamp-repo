import { type Meta, type StoryObj } from '@storybook/react'
import FolderDeck from '.'
import { FolderMock } from '../../../utils/constant'

const meta: Meta<typeof FolderDeck> = {
  title: 'MOLECULES/FolderDeck',
  component: FolderDeck,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof FolderDeck>

export const Default: Story = {
  args: {
    folders: FolderMock,
  },
}

export default meta
