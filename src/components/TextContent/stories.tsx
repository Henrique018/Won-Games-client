import { Story, Meta } from '@storybook/react/types-6-0';

import TextContent, { TextContentProps } from '.';

import contentMock from './mock';

export default {
	title: 'Game/TextContent',
	component: TextContent,
	args: contentMock,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story<TextContentProps> = (args) => (
	<TextContent {...args} />
);
