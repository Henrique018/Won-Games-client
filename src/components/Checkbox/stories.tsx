import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
	title: 'Form/Checkbox',
	argTypes: {
		onCheck: { action: 'checked' },
	},
	component: Checkbox,
} as Meta;

export const Basic: Story<CheckboxProps> = (args) => (
	<>
		<div style={{ padding: 10 }}>
			<Checkbox
				isChecked
				{...args}
				name="category"
				label="Action"
				labelFor="action"
			/>
		</div>

		<div style={{ padding: 10 }}>
			<Checkbox {...args} name="category" label="RPG" labelFor="rpg" />
		</div>

		<div style={{ padding: 10 }}>
			<Checkbox
				{...args}
				name="category"
				label="Adventure"
				labelFor="adventure"
			/>
		</div>
	</>
);

Basic.parameters = {
	backgrounds: { default: 'won-dark' },
};

Basic.args = {
	label: 'Abaixo de R$100,00',
};
