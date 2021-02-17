import { Story, Meta } from '@storybook/react/types-6-0';

import ExploreSidebar from '.';

export default {
	title: 'ExploreSidebar',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: ExploreSidebar,
} as Meta;

export const Basic: Story = (args) => <ExploreSidebar {...args} />;
