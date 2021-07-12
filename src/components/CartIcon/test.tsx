import { cartContextDefaultValues } from 'hooks/use-cart';

import { render, screen } from 'utils/test-util';

import CartIcon from '.';
describe('<CartIcon />', () => {
	it('should render without badge', () => {
		render(<CartIcon />);
		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
	});

	it('should render with badge', () => {
		render(<CartIcon />, {
			cartProviderProps: { ...cartContextDefaultValues, quantity: 12 },
		});
		expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
		expect(screen.queryByText(/12/i)).toBeInTheDocument();
	});
});
