import { render, screen } from 'utils/test-util';
import CartIcon from '.';

describe('<CartIcon />', () => {
	it('should render without a badge', () => {
		render(<CartIcon />);

		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
	});

	it('should render with a badge', () => {
		render(<CartIcon quantity={12} />);

		expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
		expect(screen.queryByText(/12/i)).toBeInTheDocument();
	});

	it('should render a badge but only positive numbers', () => {
		render(<CartIcon quantity={-1} />);

		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/-1/i)).not.toBeInTheDocument();
	});
});
