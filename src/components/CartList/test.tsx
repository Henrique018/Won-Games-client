import { render, screen } from 'utils/test-util';
import { cartContextDefaultValues } from 'hooks/use-cart';
import CartList from '.';

import cartMock from './mock';

describe('<CartList />', () => {
	it('should render correctly', () => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			items: cartMock.items,
			total: '$335,00',
		};

		const { container } = render(<CartList />, {
			cartProviderProps,
		});

		expect(
			screen.getByRole('heading', { name: 'Borderlands 3' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Red Dead Redemption 2' })
		).toBeInTheDocument();
		expect(screen.getByText(/total/i)).toBeInTheDocument();
		expect(screen.getByText('$335,00')).toHaveStyle({ color: '#F231A5' });

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a button', () => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			items: cartMock.items,
		};

		render(<CartList hasButton />, { cartProviderProps });

		expect(screen.getByRole('link', { name: /buy it now!/i }));
	});

	it('should render the empty component if there are no games', () => {
		render(<CartList hasButton />);

		expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
		expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
	});

	it('should render a loader', () => {
		const cartProviderProps = {
			...cartContextDefaultValues,
			loading: true,
		};
		render(<CartList />, { cartProviderProps });

		expect(screen.getByTitle(/Loading.../i)).toBeInTheDocument();
	});
});
