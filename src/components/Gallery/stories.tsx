import { Story, Meta } from '@storybook/react/types-6-0';

import Gallery, { GalleryProps } from '.';

import imagesMock from './mock';

export default {
	title: 'Game/Gallery',
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: Gallery,
} as Meta;

export const Basic: Story<GalleryProps> = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<Gallery {...args} images={imagesMock} />;
	</div>
);
