import { type Meta, type StoryObj } from '@storybook/react'
import PDFViewer from './index'

import documentPath from '../../../../public/assets/files/PDFTRON_about.pdf'
import { action } from '@storybook/addon-actions'
const meta: Meta<typeof PDFViewer> = {
  title: 'Organisms/PDFViewer',
  component: PDFViewer,
  tags: ['autodocs'],
}
type Story = StoryObj<typeof PDFViewer>

export const PDFView: Story = {
  args: {
    onNavBack: action('Navigate Back Clicked'),
    filePath: documentPath,
    text: 'Company agreement.pdf',
  },
}

export default meta
