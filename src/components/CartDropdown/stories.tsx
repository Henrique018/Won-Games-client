import { Story, Meta } from '@storybook/react/types-6-0';

import CartDropdown, { CartDropdownProps } from '.';

import cartMock from 'components/CartList/mock';

export default {
	title: 'CartDropdown',
	component: CartDropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	args: {
		items: cartMock.items,
		total: 'R$ 350,00',
	},
} as Meta;

export const Basic: Story<CartDropdownProps> = (args) => (
	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<CartDropdown {...args} />
	</div>
);

export const EmptyDropdown: Story<CartDropdownProps> = () => (
	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<CartDropdown />
	</div>
);
