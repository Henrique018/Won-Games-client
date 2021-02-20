import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import CartList from '.';

import cartMock from './mock';

describe('<CartList />', () => {
	it('should render correctly', () => {
		const { container } = renderWithTheme(<CartList {...cartMock} />);

		expect(
			screen.getByRole('heading', { name: 'Borderlands 3' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Red Dead Redemption 2' })
		).toBeInTheDocument();
		expect(screen.getByText(/total/i)).toBeInTheDocument();
		expect(screen.getByText('R$ 335,00')).toHaveStyle({ color: '#F231A5' });

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a button', () => {
		renderWithTheme(<CartList {...cartMock} hasButton />);

		expect(screen.getByRole('link', { name: /buy it now!/i }));
	});

	it('should render the empty component if there are no games', () => {
		renderWithTheme(<CartList items={[]} hasButton />);

		expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
		expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
	});
});
