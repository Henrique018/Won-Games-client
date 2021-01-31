import { screen } from '@testing-library/react';

import Wishlist, { WishlistProps } from '.';
import { renderWithTheme } from 'utils/test/helper';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props: WishlistProps = {
	games: gamesMock,
	recommendedGames: gamesMock.slice(0, 2),
	recommendedHighlight: highlightMock,
};

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Showcase mock"></div>;
		},
	};
});

describe('<Wishlist />', () => {
	it('should render the wishlist elements', () => {
		renderWithTheme(<Wishlist {...props} />);

		expect(
			screen.getAllByRole('heading', { name: /population zero/i })
		).toHaveLength(6);

		expect(
			screen.getByRole('heading', { name: /Wishlist/i })
		).toBeInTheDocument();

		expect(screen.getByTestId(/showcase mock/i)).toBeInTheDocument();
	});

	it('should render a message when theres no fav games', () => {
		renderWithTheme(<Wishlist {...props} games={undefined} />);

		expect(
			screen.queryByRole('heading', { name: /population zero/i })
		).not.toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /Your wishlist is empty/i })
		).toBeInTheDocument();
	});
});
