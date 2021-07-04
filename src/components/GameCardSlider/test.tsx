import 'match-media-mock';
import { render, screen } from 'utils/test-util';

import GameCardSlider from '.';

import gamesMock from 'components/GameCardSlider/mock';

describe('<GameCardSlider />', () => {
	it('should render with white arrows by default', () => {
		render(<GameCardSlider cardItems={gamesMock} />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#fafafa',
		});
	});

	it('should render with black arrows if color is passed', () => {
		render(<GameCardSlider cardItems={gamesMock} color="black" />);

		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#030517',
		});
	});
});
