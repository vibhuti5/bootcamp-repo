import { type Meta, type StoryObj } from '@storybook/react'
import LocalUploadModal from '.'
import FileContextProvider from '../../../context/FileContext'

export default {
  title: 'Organisms/LocalUploadModal',
  component: LocalUploadModal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <FileContextProvider>
        <Story />
      </FileContextProvider>
    ),
  ],
} as Meta<typeof LocalUploadModal>

type LocalUploadModal = StoryObj<typeof LocalUploadModal>

export const Default: LocalUploadModal = {
  args: {},
}
