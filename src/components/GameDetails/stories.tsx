import { Story, Meta } from '@storybook/react/types-6-0';

import GameDetails, { GameDetailsProps } from '.';

import detailsMock from './mock';

export default {
	title: 'Game/GameDetails',
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	args: detailsMock,

	argTypes: {
		platforms: {
			control: {
				type: 'inline-check',
				options: ['windows', 'linux', 'mac'],
			},
		},

		genres: {
			control: {
				type: 'inline-check',
				options: ['role-playing', 'adventure', 'narrative'],
			},
		},

		releaseDate: {
			control: 'date',
		},
	},
} as Meta;

export const Basic: Story<GameDetailsProps> = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<GameDetails {...args} />
	</div>
);
