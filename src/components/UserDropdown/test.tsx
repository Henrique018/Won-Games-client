import { render, screen } from 'utils/test-util';
import userEvent from '@testing-library/user-event';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
	it('should render a username', () => {
		render(<UserDropdown username="Henrique" />);

		expect(screen.getByText(/henrique/i)).toBeInTheDocument();
	});

	it('should render the dropdown with all links', () => {
		render(<UserDropdown username="Henrique" />);

		userEvent.click(screen.getByText(/henrique/i));
		expect(screen.getByText(/my account/i)).toBeVisible();
		expect(screen.getByText(/wishlist/i)).toBeVisible();
		expect(screen.getByText(/sign out/i)).toBeVisible();
	});
});
