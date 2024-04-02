import { type Meta, type StoryObj } from '@storybook/react'
import CloudDriveOptions from '.'

export default {
  title: 'Molecules/CloudDriveOptions',
  component: CloudDriveOptions,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<typeof CloudDriveOptions>

type CloudDriveOptions = StoryObj<typeof CloudDriveOptions>

export const Default: CloudDriveOptions = {
  args: {},
}
