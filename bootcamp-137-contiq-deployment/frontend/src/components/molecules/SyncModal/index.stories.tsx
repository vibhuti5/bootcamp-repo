import { type Meta, type StoryObj } from '@storybook/react'
import SyncModal from '.'

export default {
  title: 'Molecules/SyncModal',
  component: SyncModal,
  tags: ['autodocs'],
} as Meta<typeof SyncModal>

type SyncModal = StoryObj<typeof SyncModal>

export const Default: SyncModal = {
  args: {
    open: true,
  },
}
