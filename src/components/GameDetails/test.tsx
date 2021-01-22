import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
	developer: 'Different tales',
	releaseDate: '2020-11-21T23:00:00',
	platforms: ['windows', 'mac', 'linux'],
	publisher: 'Walkabout',
	rating: 'BR0',
	genres: ['Role-playing', 'action'],
};

describe('<GameDetails />', () => {
	it('should render the block details', () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(
			screen.getByRole('heading', { name: /Developer/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Release date/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /platforms/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /publisher/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Rating/i })
		).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument();
	});

	it('should render the icons', () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
	});

	it('should render a release date', () => {
		renderWithTheme(<GameDetails {...props} />);

		expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
	});

	it('should have a free rating when BR0 is passed', () => {
		renderWithTheme(<GameDetails {...props} />);
		expect(screen.getByText(/free/i)).toBeInTheDocument();
	});

	it('should have a 18+ rating when BR18 is passed', () => {
		renderWithTheme(<GameDetails {...props} rating="BR18" />);
		expect(screen.getByText(/18+/i)).toBeInTheDocument();
	});

	it('should render the genres', () => {
		renderWithTheme(<GameDetails {...props} />);
		expect(screen.getByText(/Role-playing \/ action/i)).toBeInTheDocument();
	});
});
