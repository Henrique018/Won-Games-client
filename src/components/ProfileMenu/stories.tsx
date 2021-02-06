import { Story, Meta } from '@storybook/react/types-6-0';

import ProfileMenu from '.';

export default {
	title: 'ProfileMenu',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: ProfileMenu,
} as Meta;

export const Basic: Story = (args) => <ProfileMenu {...args} />;
