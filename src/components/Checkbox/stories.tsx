import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
	title: 'Checkbox',
	argTypes: {
		onCheck: { action: 'checked' },
	},
	component: Checkbox,
} as Meta;

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Basic.parameters = {
	backgrounds: { default: 'won-dark' },
};

Basic.args = {
	label: 'Abaixo de R$100,00',
};
