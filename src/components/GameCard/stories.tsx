import { Story, Meta } from '@storybook/react/types-6-0';
import { cartContextTypes } from 'hooks/use-cart';

import GameCard, { GameCardProps } from '.';

export default {
	title: 'GameCard',
	component: GameCard,
	args: {
		slug: 'population-zero',
		title: 'Population zero',
		developer: 'Rockstar Games',
		img: '/img/population-zero.png',
		price: 235,
	},
	argTypes: {
		onFav: { action: 'clicked' },
	},
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard {...args} />
	</div>
);

export const isInCart: Story<GameCardProps & cartContextTypes> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard {...args} />
	</div>
);

isInCart.args = {
	isInCart: () => true,
};

export const WithRibbon: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem' }}>
		<GameCard promotionalPrice={199.9} {...args} />
	</div>
);

WithRibbon.args = {
	ribbonText: '20% OFF',
	ribbonSize: 'small',
	ribbonColor: 'primary',
};
