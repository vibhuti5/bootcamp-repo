import { action } from '@storybook/addon-actions'
import { type Meta, type StoryObj } from '@storybook/react'
import FileCardRow from '.'
import theme from '../../../theme'

const meta: Meta<typeof FileCardRow> = {
  title: 'Molecules/FileCardRow',
  component: FileCardRow,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'Gray',
      values: [
        {
          name: 'Gray',
          value: theme.palette.grays.gray400,
        },
      ],
    },
  },
}

type Story = StoryObj<typeof FileCardRow>

export const FileCardRowElement: Story = {
  args: {
    label: 'File 1',
    onClick: action('Forward click'),
  },
}
export default meta
