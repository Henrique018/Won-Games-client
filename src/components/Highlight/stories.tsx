import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';
import props from './mock';

export default {
	title: 'Highlight',
	component: Highlight,
} as Meta;

export const Basic: Story<HighlightProps> = () => (
	<div style={{ maxWidth: '104rem' }}>
		<Highlight {...props} />
	</div>
);

export const withFloatImage: Story<HighlightProps> = () => (
	<div style={{ maxWidth: '104rem' }}>
		<Highlight {...props} floatImage="/img/red-dead.png" />
	</div>
);

withFloatImage.args = {
	floatImage: '/img/red-dead.png',
};
