import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import cardsMock from 'components/PaymentOptions/mock';
import CardsList from '.';

describe('<CardsList />', () => {
	it('should render the cards list', () => {
		renderWithTheme(<CardsList cards={cardsMock} />);

		expect(
			screen.getByRole('heading', { name: /my cards/i })
		).toBeInTheDocument();

		expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
			'src',
			'/img/MasterCard.png'
		);

		expect(screen.getByText(/4368/)).toBeInTheDocument();
	});
});
