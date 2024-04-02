import { Meta, StoryFn } from '@storybook/react'
import ConfirmModal from '.'
import { FromAddress, ToAddress, UserName } from '../../../utils/constants'
import { action } from '@storybook/addon-actions'

export default {
  title: 'organisms/ConfirmModal',
  component: ConfirmModal,
} as Meta<typeof ConfirmModal>

const Template: StoryFn<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
)

export const Default = Template.bind({})

Default.args = {
  name: UserName,
  from: FromAddress,
  to: ToAddress,
  open: true,
  onClose: action('Closed Modal'),
}
