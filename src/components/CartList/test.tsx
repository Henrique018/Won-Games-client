import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import CartList from '.';

import cartMock from './mock';

describe('<CartList />', () => {
	it('should render correctly', () => {
		const { container } = renderWithTheme(<CartList {...cartMock} />);

		expect(screen.getAllByRole('heading')).toHaveLength(2);
		expect(screen.getByText(/total/i)).toBeInTheDocument();
		expect(screen.getByText('R$ 335,00')).toHaveStyle({ color: '#F231A5' });

		expect(container.firstChild).toMatchSnapshot();
	});
});
