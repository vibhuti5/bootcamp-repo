import { type Meta, type StoryObj } from '@storybook/react'
import GenericModal from '.'

const meta: Meta<typeof GenericModal> = {
  title: 'MOLECULES/GenericModal',
  component: GenericModal,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof GenericModal>

export const Default: Story = {
  args: {
    open: true,
    titleLabel: 'Upload files',
    isBackIcon: true,
    isCrossButton: true,
    sx: {
      width: '696px',
      height: '500px',
    },
  },
}

export default meta
