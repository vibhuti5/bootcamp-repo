import { type Meta, type StoryObj } from '@storybook/react'
import FileUploadModal from '.'
import FileContextProvider from '../../../context/FileContext'

export default {
  title: 'Organisms/FileUploadModal',
  component: FileUploadModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <FileContextProvider>
        <Story />
      </FileContextProvider>
    ),
  ],
} as Meta<typeof FileUploadModal>

type FileUploadModal = StoryObj<typeof FileUploadModal>

export const Default: FileUploadModal = {
  args: {
    isOpen: true,
  },
}
