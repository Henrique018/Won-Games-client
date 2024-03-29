import { render, screen, fireEvent } from 'utils/test-util';

import GameCard from '.';

const props = {
	id: '1',
	slug: 'population-zero',
	title: 'Population zero',
	developer: 'Rockstar Games',
	img: '/img/population-zero.png',
	price: 235,
};

describe('<GameCard />', () => {
	it('should render the GameCard correctly', () => {
		render(<GameCard {...props} />);

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

		expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
			'href',
			`/game/${props.slug}`
		);
	});

	it('should render the price correctly', () => {
		render(<GameCard {...props} />);

		expect(screen.getByText(`$235.00`)).toHaveStyle({
			background: '#3CD3C1',
		});

		expect(screen.getByText(`$235.00`)).not.toHaveStyle({
			textDecoration: 'line-through',
		});
	});

	it('should render a line-through the old price', () => {
		render(<GameCard promotionalPrice={199.9} {...props} />);

		expect(screen.getByText(`$235.00`)).toHaveStyle({
			textDecoration: 'line-through',
		});

		expect(screen.getByText('$199.90')).not.toHaveStyle({
			textDecoration: 'line-through',
		});
	});

	it('should render a filled heart when favorite is true', () => {
		render(<GameCard favorite {...props} />);

		expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
	});

	it('should call onFav method when clicked', () => {
		const onFav = jest.fn();

		render(<GameCard favorite onFav={onFav} {...props} />);

		fireEvent.click(screen.getAllByRole('button')[0]);

		expect(onFav).toBeCalled();
	});

	it('should render a ribbon when there is a discount', () => {
		render(
			<GameCard
				promotionalPrice={199.9}
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
