import { Story, Meta } from '@storybook/react/types-6-0';

import GameCard, { GameCardProps } from '.';

export default {
	title: 'GameCard',
	component: GameCard,
	args: {
		title: 'Population zero',
		developer: 'Rockstar Games',
		img: '/img/population-zero.png',
		price: 'R$ 235,00',
	},
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard {...args} />
	</div>
);

export const withDiscount: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard promotionalPrice="R$ 199.90" {...args} />
	</div>
);
