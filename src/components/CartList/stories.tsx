import { Story, Meta } from '@storybook/react/types-6-0';

import CartList, { CartListProps } from '.';
import cartMock from './mock';

export default {
	title: 'CartList',
	args: cartMock,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: CartList,
} as Meta;

export const Basic: Story<CartListProps> = (args) => (
	<div style={{ maxWidth: 800 }}>
		<CartList {...args} />;
	</div>
);
