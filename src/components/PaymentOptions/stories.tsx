import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOptions, { PaymentOptionsProps } from '.';
import cardsMock from './mock';

export default {
	title: 'PaymentOptions',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	args: { cards: cardsMock },
	argTypes: {
		cards: { type: '' },
		handlePayment: {
			action: 'clicked',
		},
	},
	component: PaymentOptions,
} as Meta;

export const Basic: Story<PaymentOptionsProps> = (args) => (
	<div style={{ maxWidth: 472 }}>
		<PaymentOptions {...args} />
	</div>
);
