import { render, screen, fireEvent } from 'utils/test-util';

import Menu from '.';

describe('<Menu />', () => {
	it('should render the Menu with accessibility support', () => {
		render(<Menu />);

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
		expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2);
	});

	it('should handle open/close menu', () => {
		render(<Menu />);

		// select the menu
		const menuElement = screen.getByRole('navigation', { hidden: true });
		//check if the menu is hidden
		expect(menuElement.getAttribute('aria-hidden')).toBe('true');
		expect(menuElement).toHaveStyle({ opacity: 0 });
		//on click open menu, it should be visible
		fireEvent.click(screen.getByLabelText(/open menu/i));
		expect(menuElement.getAttribute('aria-hidden')).toBe('false');
		//check if the menu is visible
		expect(menuElement).toHaveStyle({ opacity: 1 });

		//on click close button, the menu should close
		fireEvent.click(screen.getByLabelText(/close menu/i));
		expect(menuElement.getAttribute('aria-hidden')).toBe('true');
		//check if its closed
		expect(menuElement).toHaveStyle({ opacity: 0 });
	});

	it('should show the register box when the user is not logged in', () => {
		render(<Menu />);
		expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/my wishlist/i)).not.toBeInTheDocument();
		expect(screen.getByText(/sign in now/i)).toBeInTheDocument();
		expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
	});

	it('should show the my account and my wishlist when logged in ', () => {
		render(<Menu username="Henrique" />);
		expect(screen.queryByText(/sign in now/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
		expect(screen.getAllByText(/my account/i)).toHaveLength(2);
		expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);
	});
});
