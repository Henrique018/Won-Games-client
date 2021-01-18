import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Menu from '.';

describe('<Menu />', () => {
	it('should render the Menu with accessibility support', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
	});

	it('should handle open/close menu', () => {
		renderWithTheme(<Menu />);

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
		renderWithTheme(<Menu />);
		expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/my wishlist/i)).not.toBeInTheDocument();
		expect(screen.getByText(/sign in now/i)).toBeInTheDocument();
		expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
	});

	it('should show the my account and my wishlist when logged in ', () => {
		renderWithTheme(<Menu username="Henrique" />);
		expect(screen.queryByText(/sign in now/i)).not.toBeInTheDocument();
		expect(screen.getAllByText(/sign up/i)).toHaveLength(1);
		expect(screen.getByText(/my account/i)).toBeInTheDocument();
		expect(screen.getByText(/my wishlist/i)).toBeInTheDocument();
	});
});
