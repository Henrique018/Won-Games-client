import { Story, Meta } from '@storybook/react/types-6-0';

import Ribbon, { RibbonProps } from '.';

export default {
	title: 'Ribbon',
	component: Ribbon,
} as Meta;

export const Basic: Story<RibbonProps> = (args) => (
	<div
		style={{
			position: 'relative',
			backgroundColor: '#888',
			width: '40rem',
			height: '20rem',
		}}
	>
		<Ribbon {...args} />
	</div>
);

Basic.args = {
	children: 'new releases',
};
