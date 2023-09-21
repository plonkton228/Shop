import type { Meta, StoryObj } from '@storybook/react'
import cls from '../models/LinkCustom.module.scss'
import { LinkCustom, StateLink } from './LinkCustom'

const meta: Meta<typeof LinkCustom> = {
    component: LinkCustom
}

type Story = StoryObj<typeof LinkCustom>

export const NavbarLink: Story = {
    args: {
        state: StateLink.NAVBAR,
        children: 'Just Link',
        classes: cls.link
    }
}

export const UnderNavbarLink: Story = {
    args: {
        ...NavbarLink.args,
        state: StateLink.UNDERNAVBAR
    },
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: 'aliceblue', height: '100vh' }}>
                <Story/>
            </div>
        )
    ]
}

export const IntroLink: Story = {
    args: {
        ...NavbarLink.args,
        state: StateLink.LINKINTRO
    }
}
export default meta
