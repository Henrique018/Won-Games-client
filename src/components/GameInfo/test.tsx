import { render, screen } from 'utils/test-util';

import GameInfo from '.';
import mockGame from './mock';

const props = mockGame;

describe('<GameInfo />', () => {
	it('should render a heading, description and price', () => {
		render(<GameInfo {...props} />);

		expect(
			screen.getByRole('heading', { name: /Borderlands 3/i })
		).toBeInTheDocument();

		expect(
			screen.getByText(
				/Experience the epic space strategy games that redefined the RTS genre./i
			)
		).toBeInTheDocument();

		expect(screen.getByText('$215.00')).toBeInTheDocument();
	});

	it('should render with two buttons', () => {
		render(<GameInfo {...props} />);

		expect(
			screen.getByRole('button', { name: /wishlist/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /add to cart/i })
		).toBeInTheDocument();
	});
});
