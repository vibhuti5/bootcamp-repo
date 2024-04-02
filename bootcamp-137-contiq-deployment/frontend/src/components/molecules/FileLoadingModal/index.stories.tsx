import { type Meta, type StoryObj } from '@storybook/react'
import FileLoadingModal from '.'

const meta: Meta<typeof FileLoadingModal> = {
  title: 'MOLECULES/FileLoadingModal',
  component: FileLoadingModal,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof FileLoadingModal>

export const FileType: Story = {
  args: {
    fileName: 'Contract agreement.pdf',
    sx: {
      width: '696px',
      height: '508px',
    },
  },
}

export default meta
