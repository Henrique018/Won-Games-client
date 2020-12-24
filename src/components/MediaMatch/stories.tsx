import { Story, Meta } from '@storybook/react/types-6-0';

import MediaMatch from '.';

export default {
	title: 'MediaMatch',
	component: MediaMatch,
} as Meta;

export const Desktop: Story = (args) => (
	<MediaMatch {...args} greaterThan="medium">
		Appears on Desktop Only
	</MediaMatch>
);
export const Mobile: Story = (args) => (
	<MediaMatch {...args} lessThan="medium">
		Appears on mobile only
	</MediaMatch>
);

Mobile.parameters = {
	viewport: { defaultViewport: 'mobile1' },
};
