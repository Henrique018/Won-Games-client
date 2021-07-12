import { render, screen } from 'utils/test-util';
import userEvent from '@testing-library/user-event';

import { cartContextDefaultValues } from 'hooks/use-cart';

import CartButton from '.';

describe('<CartButton />', () => {
	it('should render and execute addToCart method if clicked', () => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			isInCart: () => false,
			addToCart: jest.fn(),
		};

		render(<CartButton id="1" />, { cartProviderProps });

		const button = screen.getByLabelText(/add to cart/);

		expect(button).toBeInTheDocument();

		userEvent.click(button);

		expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1');
	});

	it('should execute removeFromCart method if clicked', () => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			isInCart: () => true,
			addToCart: jest.fn(),
			removeFromCart: jest.fn(),
		};

		render(<CartButton id="1" />, { cartProviderProps });

		const button = screen.getByLabelText(/remove from cart/);
		userEvent.click(button);
		expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
	});
});
