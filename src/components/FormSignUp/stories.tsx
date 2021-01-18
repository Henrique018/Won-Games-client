import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignUp from '.';

export default {
	title: 'Form/FormSignUp',
	component: FormSignUp,
} as Meta;

export const Basic: Story = (args) => (
	<div style={{ width: 350, margin: '0 auto' }}>
		<FormSignUp {...args} />
	</div>
);
