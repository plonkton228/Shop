import type { Meta, StoryObj } from '@storybook/react'
import { Loader, LoaderState } from './Loader'

const meta: Meta<typeof Loader> = {
    component: Loader
}

export default meta
type Story = StoryObj<typeof Loader>

export const loaderFirst: Story = {
    args: {
        state: LoaderState.Primary
    }
}

export const LoaderSecond: Story = {
    args: {
        state: LoaderState.Secondary
    }
}
