import { Story, Meta } from '@storybook/react/types-6-0';

import mockGame from './mock';
import GameInfo, { GameInfoProps } from '.';

export default {
	title: 'GameInfo',
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
