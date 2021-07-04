import { render, screen } from 'utils/test-util';
import userEvent from '@testing-library/user-event';

import Dropdown from '.';

describe('<Dropdown />', () => {
	beforeEach(() => {
		render(
			<Dropdown title="Click here">
				<span>content</span>
			</Dropdown>
		);
	});

	it('should render a title', () => {
		expect(screen.getByText(/click here/i)).toBeInTheDocument();
	});

	it('should handle open/close dropdown ', () => {
		const content = screen.queryByText(/content/i);
		expect(content).not.toBeVisible();

		userEvent.click(screen.getByText(/click here/i));
		expect(content).toBeVisible();

		userEvent.click(screen.getByText(/click here/i));
		expect(content).not.toBeVisible();
	});

	it('should close dropdown when overlay is clicked', () => {
		const content = screen.getByText(/content/i).parentElement!;
		const overlay = content.nextElementSibling!;
		expect(content).not.toBeVisible();
		expect(overlay).not.toBeVisible();

		userEvent.click(screen.getByText(/click here/i));
		expect(content).toBeVisible();
		expect(overlay).toBeVisible();

		userEvent.click(overlay);
		expect(content).not.toBeVisible();
		expect(overlay).not.toBeVisible();
	});
});
