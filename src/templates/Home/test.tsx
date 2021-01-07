import 'match-media-mock';
import { screen } from '@testing-library/react';

import Home from '.';
import { renderWithTheme } from 'utils/test/helper';

import highlightMock from 'components/Highlight/mock';
import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';

const homepageProps = {
	banners: [bannerMock[0]],
	newGames: [gamesMock[0]],
	mostPopularHighlight: highlightMock,
	mostPopularGames: [gamesMock[0]],
	upcomingGames: [gamesMock[0]],
	upcomingHighlight: highlightMock,
	moreUpcomingGames: [gamesMock[0]],
	freeGamesHighlight: highlightMock,
	freeGames: [gamesMock[0]],
};

describe('<Home />', () => {
	it('should render menu & footer', () => {
		renderWithTheme(<Home {...homepageProps} />);

		//menu
		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

		//footer
		expect(
			screen.getByRole('heading', { name: /contact/i })
		).toBeInTheDocument();

		//logos
		expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

		//sections
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

		//card games
		expect(screen.getAllByText(/Population zero/i)).toHaveLength(5);

		//highlights
		expect(screen.getAllByText(/Red Dead it's back/i)).toHaveLength(3);
	});
});
