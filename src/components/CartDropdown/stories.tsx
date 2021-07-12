import { Story, Meta } from '@storybook/react/types-6-0';

import CartDropdown from '.';

import cartMock from 'components/CartList/mock';

export default {
	title: 'CartDropdown',
	component: CartDropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<CartDropdown {...args} />
	</div>
);

Basic.args = {
	quantity: cartMock.items.length,
	items: cartMock.items,
	total: '$335,00',
};

export const EmptyDropdown: Story = () => (
	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<CartDropdown />
	</div>
);
