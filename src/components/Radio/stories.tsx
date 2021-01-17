import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '.';

export default {
	title: 'Form/Radio',
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'won-dark',
		},
	},
	argTypes: {
		onCheck: { action: 'checked' },
	},
	component: Radio,
} as Meta;

export const Basic: Story<RadioProps> = (args) => (
	<>
		<div style={{ padding: 10 }}>
			<Radio
				name="category"
				label="primeiro"
				labelFor="primeiro"
				id="primeiro"
				value="primeiro"
				defaultChecked
				{...args}
			/>
		</div>

		<div style={{ padding: 10 }}>
			<Radio
				name="category"
				label="segundo"
				labelFor="segundo"
				id="segundo"
				value="segundo"
				{...args}
			/>
		</div>

		<div style={{ padding: 10 }}>
			<Radio
				name="category"
				id="terceiro"
				label="terceiro"
				labelFor="terceiro"
				value="terceiro"
				{...args}
			/>
		</div>
	</>
);
