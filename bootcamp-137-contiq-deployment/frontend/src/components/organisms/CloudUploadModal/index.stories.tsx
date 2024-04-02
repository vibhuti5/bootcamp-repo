import { type Meta, type StoryObj } from '@storybook/react'
import CloudUploadModal from '.'
import { FileMock } from '../../../utils/constant'

const meta: Meta<typeof CloudUploadModal> = {
  title: 'ORGANISMS/CloudUploadModal',
  component: CloudUploadModal,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof CloudUploadModal>

export const Default: Story = {
  args: {
    files: FileMock,
  },
}

export default meta
