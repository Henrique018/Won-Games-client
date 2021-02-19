import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import filterItemsMock from 'components/ExploreSidebar/mock';
import gameCardsMock from 'components/GameCardSlider/mock';

import Games from '.';

jest.mock('components/ExploreSidebar', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="ExploreSidebar mock"></div>;
		},
	};
});

jest.mock('components/GameCard', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="GameCard mock"></div>;
		},
	};
});

describe('<Games />', () => {
	it('should render all elements of Games page correctly', () => {
		renderWithTheme(
			<Games filterItems={filterItemsMock} games={gameCardsMock.slice(0, 3)} />
		);

		expect(screen.getByTestId('ExploreSidebar mock')).toBeInTheDocument();
		expect(screen.getAllByTestId('GameCard mock')).toHaveLength(3);
		expect(screen.getByRole('button', { name: /see more/i }));
	});
});
