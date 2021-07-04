import 'match-media-mock';
import { render, screen } from 'utils/test-util';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
	banners: bannerMock,
	newGamesTitle: 'new games',
	newGames: gamesMock,
	mostPopularGamesTitle: 'most popular games',
	mostPopularHighlight: highlightMock,
	upcomingGamesTitle: 'upcoming games',
	mostPopularGames: gamesMock,
	upcomingGames: gamesMock,
	upcomingHighlight: highlightMock,
	freeGamesTitle: 'free games',
	freeGamesHighlight: highlightMock,
	freeGames: gamesMock,
};

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
	it('should render with banner and showcases', () => {
		render(<Home {...props} />);
		expect(screen.getByTestId('Banner mock')).toBeInTheDocument();
		expect(screen.getAllByTestId('Showcase mock')).toHaveLength(4);
	});
});
