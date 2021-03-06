import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined/Email';

import Textfield from '.';

export default {
	title: 'Form/Textfield',
	args: {
		label: 'E-mail',
		name: 'Email',
		initialValue: '',
		placeholder: 'john.cage@gmail.com',
	},
	argTypes: {
		onInput: { action: 'changed' },
		icon: { type: '' },
	},
	component: Textfield,
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ padding: 25 }}>
		<Textfield {...args} />
	</div>
);

export const withIcon: Story = (args) => (
	<div style={{ padding: 10, maxWidth: 300 }}>
		<Textfield icon={<Email />} {...args} />
	</div>
);

export const withError: Story = (args) => (
	<div style={{ padding: 10, maxWidth: 300 }}>
		<Textfield icon={<Email />} error="this field is required" {...args} />
	</div>
);
