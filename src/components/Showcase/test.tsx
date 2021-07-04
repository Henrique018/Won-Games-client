import 'match-media-mock';
import { render, screen } from 'utils/test-util';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Showcase from '.';

const props = {
	title: 'you may like these games',
	highlight: highlightMock,
	games: gamesMock.slice(0, 1),
};

describe('<Showcase />', () => {
	it('should render all elements', () => {
		render(<Showcase {...props} />);

		expect(
			screen.getByRole('heading', { name: /you may like these games/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.highlight.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: props.games[0].title })
		).toBeInTheDocument();
	});

	it('should not render a highlight', () => {
		render(<Showcase title={props.title} games={props.games} />);

		expect(
			screen.queryByRole('heading', { name: props.highlight.title })
		).not.toBeInTheDocument();
	});

	it('should not render a CardGamesSlider', () => {
		render(<Showcase title={props.title} highlight={props.highlight} />);

		expect(
			screen.queryByRole('heading', { name: props.games[0].title })
		).not.toBeInTheDocument();
	});

	it('should not render a title', () => {
		render(<Showcase highlight={props.highlight} games={props.games} />);
		expect(
			screen.queryByRole('heading', { name: /you may like these games/i })
		).not.toBeInTheDocument();
	});
});
