import 'match-media-mock';
import { screen } from '@testing-library/react';

import GameCardSlider from '.';
import { renderWithTheme } from 'utils/test/helper';

import gamesMock from 'components/GameCardSlider/mock';

describe('<GameCardSlider />', () => {
	it('should render with white arrows by default', () => {
		renderWithTheme(<GameCardSlider cardItems={gamesMock} />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#fafafa',
		});
	});

	it('should render with black arrows if color is passed', () => {
		renderWithTheme(<GameCardSlider cardItems={gamesMock} color="black" />);

		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#030517',
		});
	});
});
