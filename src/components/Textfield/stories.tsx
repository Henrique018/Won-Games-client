import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined/Email';

import Textfield from '.';

export default {
	title: 'Textfield',
	args: {
		label: 'E-mail',
		labelFor: 'Email',
		id: 'Email',
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
