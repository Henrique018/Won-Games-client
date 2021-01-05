import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider from '.';

export default {
	title: 'BannerSlider',
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
	component: BannerSlider,
} as Meta;

const items = [
	{
		img: 'https://source.unsplash.com/user/willianjusten/1042x580',
		title: 'Defy death 1',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbon: 'Bestselling',
	},
	{
		img: 'https://source.unsplash.com/user/willianjusten/1042x582',
		title: 'Defy death 2',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
	},
	{
		img: 'https://source.unsplash.com/user/willianjusten/1042x581',
		title: 'Defy death 3',
		subtitle: '<p>Play the new <strong>CrashLands</strong> season',
		buttonLabel: 'Buy now',
		buttonLink: '/games/defy-death',
		ribbonText: '20% OFF',
	},
];

export const Basic: Story = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<BannerSlider items={items} {...args} />
	</div>
);
