import { render, screen } from 'utils/test-util';

import cartMock from 'components/CartList/mock';

import CartDropdown from '.';

describe('<CartDropdown />', () => {
	it('should render CartIcon and its badge', () => {
		render(<CartDropdown items={cartMock.items} total={cartMock.total} />);

		expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
		expect(screen.getByText(`${cartMock.items.length}`)).toBeInTheDocument();
		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
	});

	it('should render a dropdown with cart items', () => {
		render(<CartDropdown items={cartMock.items} total={cartMock.total} />);

		expect(screen.getByText(`${cartMock.total}`)).toBeInTheDocument();
		expect(screen.getByText(`${cartMock.items[0].title}`)).toBeInTheDocument();
	});
});
