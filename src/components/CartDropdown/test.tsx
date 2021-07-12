import { cartContextDefaultValues } from 'hooks/use-cart';
import { render, screen } from 'utils/test-util';
import cartMock from 'components/CartList/mock';

import CartDropdown from '.';

describe('<CartDropdown />', () => {
	beforeEach(() => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			quantity: cartMock.items.length,
			items: cartMock.items,
			total: '$335,00',
		};

		render(<CartDropdown />, { cartProviderProps });
	});

	it('should render CartIcon and its badge', () => {
		expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
	});

	it('should render a dropdown with cart items', () => {
		expect(screen.getByText(`$335,00`)).toBeInTheDocument();
		expect(screen.getByText(`${cartMock.items[0].title}`)).toBeInTheDocument();
	});
});
