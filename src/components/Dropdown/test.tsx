import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test/helper';

import Dropdown from '.';

describe('<Dropdown />', () => {
	it('should render a title', () => {
		renderWithTheme(<Dropdown title="Click here">content</Dropdown>);

		expect(screen.getByText(/click here/i)).toBeInTheDocument();
	});

	it('should handle open/close dropdown ', () => {
		renderWithTheme(<Dropdown title="Click here">content</Dropdown>);

		const content = screen.queryByText(/content/i);
		expect(content).not.toBeVisible();

		userEvent.click(screen.getByText(/click here/i));
		expect(content).toBeVisible();

		userEvent.click(screen.getByText(/click here/i));
		expect(content).not.toBeVisible();
	});
});
