import 'match-media-mock';
import { render, screen } from 'utils/test-util';

import galleryMock from 'components/Gallery/mock';
import TextContentMock from 'components/TextContent/mock';
import gameInfoMock from 'components/GameInfo/mock';
import gameDetailsMock from 'components/GameDetails/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { GameDetailsProps } from 'components/GameDetails';

import Game, { GameTemplateProps } from '.';

const props: GameTemplateProps = {
	cover: 'bg-image.jpg',
	gameInfo: gameInfoMock,
	gallery: galleryMock,
	description: TextContentMock.content,
	gameDetails: gameDetailsMock as GameDetailsProps,
	recommendedTitle: 'you may like these games',
	recommendedGames: { games: gamesMock, highlight: highlightMock },
	upcomingGames: { games: gamesMock },
};

jest.mock('components/GameInfo', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="GameInfo mock"></div>;
		},
	};
});

jest.mock('components/Gallery', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Gallery mock"></div>;
		},
	};
});

jest.mock('components/TextContent', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Description mock"></div>;
		},
	};
});

jest.mock('components/GameDetails', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Game Details mock"></div>;
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

describe('<Game />', () => {
	it('should render all game elements', () => {
		render(<Game {...props} />);

		expect(screen.getByTestId(/gameinfo mock/i)).toBeInTheDocument();
		expect(screen.getByTestId(/gallery mock/i)).toBeInTheDocument();
		expect(screen.getByTestId(/game details mock/i)).toBeInTheDocument();
		expect(screen.getByTestId(/description mock/i)).toBeInTheDocument();
		expect(screen.getAllByTestId(/showcase mock/i)).toHaveLength(2);
	});

	it("shouldn't render gallery if there is no images", () => {
		render(<Game {...props} gallery={undefined} />);

		expect(screen.queryByTestId(/gallery mock/i)).not.toBeInTheDocument();
	});

	it("shouldn't render gallery on mobile", () => {
		render(<Game {...props} />);

		expect(screen.getByTestId(/gallery mock/i).parentElement).toHaveStyleRule(
			'display',
			'block',
			{
				media: '(min-width: 768px)',
			}
		);
	});

	it('should render the cover image', () => {
		render(<Game {...props} />);

		const cover = screen.getByRole('image', { name: /cover/i });

		expect(cover).toHaveStyle({
			backgroundImage: 'url(bg-image.jpg)',
			height: '39.5rem',
		});
	});
});
