import { Story, Meta } from '@storybook/react/types-6-0';

import Empty, { EmptyProps } from '.';

export default {
	title: 'Empty',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	args: {
		title: 'Your wishlist is empty',
		description: 'Nothing to see here',
		hasLink: true,
	},
	component: Empty,
} as Meta;

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />;
