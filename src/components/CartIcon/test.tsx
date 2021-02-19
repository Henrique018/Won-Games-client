import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import CartIcon from '.';

describe('<CartIcon />', () => {
	it('should render without a badge', () => {
		renderWithTheme(<CartIcon />);

		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
	});

	it('should render with a badge', () => {
		renderWithTheme(<CartIcon quantity={12} />);

		expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
		expect(screen.queryByText(/12/i)).toBeInTheDocument();
	});

	it('should render a badge but only positive numbers', () => {
		renderWithTheme(<CartIcon quantity={-1} />);

		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/-1/i)).not.toBeInTheDocument();
	});
});
