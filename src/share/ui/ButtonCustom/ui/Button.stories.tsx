import type { Meta, StoryObj } from '@storybook/react'
import cls from '../models/button.module.scss'
import { ButtonCustom, ButtonCustomState } from './ButtonCustom'

const meta: Meta<typeof ButtonCustom> = {
    component: ButtonCustom
}

type Story = StoryObj<typeof ButtonCustom>

export const PrimaryButton: Story = {
    args: {
        state: ButtonCustomState.RESET,
        children: 'Just Button',
        className: [cls.buttonC, cls.reset].join(' ')
    }
}
export default meta
