import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import LogoutModal, { LogoutProps } from '.'
import { action } from '@storybook/addon-actions'

export default {
  component: LogoutModal,
  title: 'molecules/LogoutModal',
} as Meta<typeof LogoutModal>

const Template: StoryFn<LogoutProps> = (args) => <LogoutModal {...args} />

export const OpenModal = Template.bind({})
OpenModal.args = {
  open: true,
  onCancel: action('onCancel'),
  onLogout: action('Logged out'),
}
