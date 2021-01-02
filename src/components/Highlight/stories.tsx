import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
	title: 'Highlight',
	component: Highlight,
	args: {
		backgroundImage: '/img/Background.png',
		title: "Red Dead it's back",
		subtitle: "Come see John's adventures",
		buttonLabel: 'Buy now',
		buttonLink: '/rdr2/',
	},
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;
