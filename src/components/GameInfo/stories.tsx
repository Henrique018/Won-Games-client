import { Story, Meta } from '@storybook/react/types-6-0';

import mockGame from './mock';
import GameInfo, { GameInfoProps } from '.';
import { cartContextTypes } from 'hooks/use-cart';

export default {
	title: 'Game/GameInfo',
	component: GameInfo,
	args: mockGame,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
	<div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
		<GameInfo {...args} />
	</div>
);

export const isInCart: Story<GameInfoProps & cartContextTypes> = (args) => (
	<div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
		<GameInfo {...args} />
	</div>
);

isInCart.args = {
	isInCart: () => true,
};
