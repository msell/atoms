import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'coral', 'mint', 'cobalt', 'yolk'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Coral: Story = {
  args: {
    children: 'Coral',
    variant: 'coral',
  },
}

export const Mint: Story = {
  args: {
    children: 'Mint',
    variant: 'mint',
  },
}

export const Cobalt: Story = {
  args: {
    children: 'Cobalt',
    variant: 'cobalt',
  },
}

export const Yolk: Story = {
  args: {
    children: 'Yolk',
    variant: 'yolk',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}
