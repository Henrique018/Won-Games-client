import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider from '.';
import items from './mock';

export default {
	title: 'BannerSlider',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: BannerSlider,
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<BannerSlider items={items} {...args} />
	</div>
);
