import { Story, Meta } from '@storybook/react/types-6-0';

import FormProfile from '.';

export default {
	title: 'Form/FormProfile',
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
	component: FormProfile,
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ maxWidth: '85rem', margin: '0 auto' }}>
		<FormProfile {...args} />;
	</div>
);
