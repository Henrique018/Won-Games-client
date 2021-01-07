import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider from '.';
import items from './mock';

export default {
	title: 'GameCardSlider',
	component: GameCardSlider,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<GameCardSlider cardItems={items} {...args} color="white" />
	</div>
);
