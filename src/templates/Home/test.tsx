import 'match-media-mock';
import { screen } from '@testing-library/react';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';
import { renderWithTheme } from 'utils/test/helper';

const props = {
	banners: bannerMock,
	newGames: gamesMock,
	mostPopularHighlight: highlightMock,
	mostPopularGames: gamesMock,
	upcomingGames: gamesMock,
	upcomingHighlight: highlightMock,
	moreUpcomingGames: gamesMock,
	freeGamesHighlight: highlightMock,
	freeGames: gamesMock,
};

jest.mock('components/Menu', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Menu mock"></div>;
		},
	};
});

jest.mock('components/Footer', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Footer mock"></div>;
		},
	};
});

jest.mock('components/BannerSlider', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Banner mock"></div>;
		},
	};
});

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Showcase mock"></div>;
		},
	};
});

describe('<Home />', () => {
	it('should render the page with all elements', () => {
		renderWithTheme(<Home {...props} />);

		expect(screen.getByTestId('Menu mock')).toBeInTheDocument();
		expect(screen.getByTestId('Banner mock')).toBeInTheDocument();
		expect(screen.getAllByTestId('Showcase mock')).toHaveLength(5);
		expect(screen.getByTestId('Footer mock')).toBeInTheDocument();
	});
});
