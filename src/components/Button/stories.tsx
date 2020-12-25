import { Story, Meta } from '@storybook/react/types-6-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		icon: { type: '' },
	},
} as Meta;

export const Default: Story = (args) => <Button {...args} />;
export const WithIcon: Story = (args) => <Button {...args} />;

Default.args = {
	children: 'Buy now',
};

WithIcon.args = {
	children: 'Buy now',
	icon: <AddShoppingCart />,
};
