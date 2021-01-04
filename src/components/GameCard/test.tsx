import { fireEvent, screen } from '@testing-library/react';
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

	it('should render the price correctly', () => {
		renderWithTheme(<GameCard {...props} />);

		expect(screen.getByText(props.price)).toHaveStyle({
			background: '#3CD3C1',
		});

		expect(screen.getByText(props.price)).not.toHaveStyle({
			textDecoration: 'line-through',
		});
	});

	it('should render a line-through the old price', () => {
		renderWithTheme(<GameCard promotionalPrice="R$ 199,90" {...props} />);

		expect(screen.getByText(props.price)).toHaveStyle({
			textDecoration: 'line-through',
		});

		expect(screen.getByText('R$ 199,90')).not.toHaveStyle({
			textDecoration: 'line-through',
		});
	});

	it('should render a filled heart when favorite is true', () => {
		renderWithTheme(<GameCard favorite {...props} />);

		expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
	});

	it('should call onFav method when clicked', () => {
		const onFav = jest.fn();

		renderWithTheme(<GameCard favorite onFav={onFav} {...props} />);

		fireEvent.click(screen.getAllByRole('button')[0]);

		expect(onFav).toBeCalled();
	});

	it('should render a ribbon when there is a discount', () => {
		renderWithTheme(
			<GameCard
				promotionalPrice="R$ 199,90"
				ribbonText="20% OFF"
				ribbonColor="secondary"
				{...props}
			/>
		);

		expect(screen.getByText(/20% OFF/i)).toBeInTheDocument();
		expect(screen.getByText(/20% OFF/i)).toHaveStyle({
			backgroundColor: '#3CD3C1 ',
		});
	});
});