import { Story, Meta } from '@storybook/react/types-6-0';

import Banner, { BannerProps } from '.';

export default {
	title: 'Banner',
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
	},
	component: Banner,
} as Meta;

export const Basic: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
);

export const withRibbon: Story<BannerProps> = (args) => (
	<div style={{ maxWidth: '104rem', margin: '0 auto' }}>
		<Banner {...args} />
	</div>
);

withRibbon.args = {
	ribbonText: '20% OFF',
};
