import 'match-media-mock';
import { screen } from '@testing-library/react';

import Home from '.';
import { renderWithTheme } from 'utils/test/helper';

import highlightMock from 'components/Highlight/mock';
import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';

const homepageProps = {
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

describe('<Home />', () => {
	it('should render menu & footer', () => {
		renderWithTheme(<Home {...homepageProps} />);

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /contact/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /follow us/i })
		).toBeInTheDocument();
	});

	it('should render four sections', () => {
		renderWithTheme(<Home {...homepageProps} />);

		expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Most popular/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /upcoming/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /free games/i })
		).toBeInTheDocument();
	});
});
