import { type Meta, type StoryObj } from '@storybook/react'
import ProgressBar from '.'
const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof ProgressBar>

export const FileUploadProgressBar: Story = {
  args: {
    value: 50,
  },
}

export default meta
