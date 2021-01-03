import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import GameCard from '.';

const props = {
	title: 'Population zero',
	developer: 'Rockstar Games',
	img: '/img/population-zero.png',
	price: '235',
};

describe('<GameCard />', () => {
	it('should render the GameCard correctly', () => {
		renderWithTheme(<GameCard {...props} />);

		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			props.img
		);

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.developer })
		).toBeInTheDocument();

		expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
	});
});
