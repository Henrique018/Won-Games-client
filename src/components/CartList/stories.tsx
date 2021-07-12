import { Story, Meta } from '@storybook/react/types-6-0';

import CartList from '.';
import cartMock from './mock';

export default {
	title: 'CartList',
	argTypes: {
		cartContextValue: { type: '' },
		items: { type: '' },
	},
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: CartList,
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ maxWidth: 800 }}>
		<CartList {...args} />;
	</div>
);

Basic.args = {
	total: '$335,00',
	cartContextValue: { items: cartMock.items },
};

export const WithButton: Story = (args) => (
	<div style={{ maxWidth: 800 }}>
		<CartList {...args} hasButton />;
	</div>
);

WithButton.args = {
	total: '$335,00',
	cartContextValue: { items: cartMock.items },
};

export const EmptyCartList: Story = (args) => (
	<div style={{ maxWidth: 800 }}>
		<CartList {...args} />;
	</div>
);
