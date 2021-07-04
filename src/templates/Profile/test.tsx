import React from 'react';
import { render, screen } from 'utils/test-util';

import Profile from '.';

jest.mock('next/router', () => ({
	useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}));

jest.mock('templates/Base', () => {
	return {
		__esModule: true,
		default: function Mock({ children }: { children: React.ReactNode }) {
			return <div data-testid="Base mock">{children}</div>;
		},
	};
});

jest.mock('components/ProfileMenu', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="ProfileMenu mock"></div>;
		},
	};
});

describe('<Profile />', () => {
	it('should render the profile elements correctly', () => {
		render(
			<Profile>
				<h1>a simple component</h1>
			</Profile>
		);

		expect(
			screen.getByRole('heading', { name: /a simple component/i })
		).toBeInTheDocument();

		expect(screen.getByTestId('Base mock')).toBeInTheDocument();
		expect(screen.getByTestId('ProfileMenu mock')).toBeInTheDocument();
	});
});
