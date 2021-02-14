import { Story, Meta } from '@storybook/react/types-6-0';

import itemsMock from './mock';
import OrdersList, { OrdersProps } from '.';

export default {
	title: 'Profile/OrdersList',
	args: {
		items: itemsMock,
	},
	component: OrdersList,
} as Meta;

export const Basic: Story<OrdersProps> = (args) => (
	<div style={{ maxWidth: 827, margin: 'auto' }}>
		<OrdersList {...args} />;
	</div>
);
