import 'match-media-mock';
import { screen } from '@testing-library/react';

import GameCardSlider from '.';
import { renderWithTheme } from 'utils/test/helper';

const items = [
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x141',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x143',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x145',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
];

describe('<GameCardSlider />', () => {
	it('should render with black arrows by default', () => {
		renderWithTheme(<GameCardSlider cardItems={items} />);

		expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
			color: '#030517',
		});
	});

	it('should render with white arrows if color is passed', () => {
		renderWithTheme(<GameCardSlider cardItems={items} color="white" />);

		expect(screen.getByLabelText(/next games/i)).toHaveStyle({
			color: '#fafafa',
		});
	});
});
