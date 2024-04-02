import { type Meta, type StoryObj } from '@storybook/react'
import AlreadyExistModal from '.'

const meta: Meta<typeof AlreadyExistModal> = {
  title: 'MOLECULES/AlreadyExistModal',
  component: AlreadyExistModal,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof AlreadyExistModal>

export const FileType: Story = {
  args: {
    fileName: 'Contract agreement.pdf',
  },
}

export default meta
