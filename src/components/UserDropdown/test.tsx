import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/test/helper';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
	it('should render a username', () => {
		renderWithTheme(<UserDropdown username="Henrique" />);

		expect(screen.getByText(/henrique/i)).toBeInTheDocument();
	});

	it('should render the dropdown with all links', () => {
		renderWithTheme(<UserDropdown username="Henrique" />);

		userEvent.click(screen.getByText(/henrique/i));
		expect(screen.getByText(/my account/i)).toBeVisible();
		expect(screen.getByText(/wishlist/i)).toBeVisible();
		expect(screen.getByText(/sign out/i)).toBeVisible();
	});
});
