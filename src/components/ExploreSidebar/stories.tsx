import { Story, Meta } from '@storybook/react/types-6-0';

import ExploreSidebar, { ExploreSidebarProps } from '.';

import items from './mock';

export default {
	title: 'ExploreSidebar',
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
	args: {
		items,
	},
	component: ExploreSidebar,
} as Meta;

export const Basic: Story<ExploreSidebarProps> = (args) => (
	<div style={{ maxWidth: 320 }}>
		<ExploreSidebar {...args} />
	</div>
);

export const WithInitialvalues: Story<ExploreSidebarProps> = (args) => (
	<div style={{ maxWidth: 320 }}>
		<ExploreSidebar
			{...args}
			initialValues={{
				windows: true,
				sort_by: 'high-to-low',
				action: true,
			}}
		/>
	</div>
);
