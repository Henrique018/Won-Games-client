import { Story, Meta } from '@storybook/react/types-6-0';

import UserDropdown, { UserDropdownProps } from '.';

export default {
	title: 'UserDropdown',
	component: UserDropdown,
	parameters: {
		backgrounds: {
			default: 'won-dark',
		},
	},
} as Meta;

export const Basic: Story<UserDropdownProps> = (args) => (
	<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
		<UserDropdown {...args} />;
	</div>
);

Basic.args = {
	username: 'Henrique',
};
