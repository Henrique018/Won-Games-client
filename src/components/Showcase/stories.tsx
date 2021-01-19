import { Story, Meta } from '@storybook/react/types-6-0';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Showcase, { ShowcaseProps } from '.';

export default {
	title: 'Showcase',
	component: Showcase,
	decorators: [
		(Story) => (
			<div style={{ margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Basic.args = {
	title: 'You may like these games',
	highlight: highlightMock,
	games: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
	<Showcase {...args} />
);

WithoutHighlight.args = {
	title: 'You may like these games',
	games: gamesMock,
};

export const WithoutGameCard: Story<ShowcaseProps> = (args) => (
	<Showcase {...args} />
);

WithoutGameCard.args = {
	title: 'You may like these games',
	highlight: highlightMock,
};
