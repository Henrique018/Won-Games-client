import { Story, Meta } from '@storybook/react/types-6-0';

import CardsList, { CardListProps } from '.';
import cardsMock from 'components/PaymentOptions/mock';

export default {
	title: 'CardsList',
	args: {
		cards: cardsMock,
	},
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: CardsList,
} as Meta;

export const Basic: Story<CardListProps> = (args) => <CardsList {...args} />;
