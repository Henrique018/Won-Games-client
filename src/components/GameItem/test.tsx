import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import GameItem from '.';

const props = {
	img: 'https://source.unsplash.com/user/willianjusten/151x70',
	title: 'Red Dead Redemption',
	price: 'R$ 215,00',
};

describe('<GameItem />', () => {
	it('should render correctly', () => {
		renderWithTheme(<GameItem {...props} />);

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument();

		expect(
			screen.getByRole('img', { name: /Red Dead Redemption/i })
		).toHaveAttribute('src', props.img);

		expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
	});

	it('should render a download link', () => {
		renderWithTheme(<GameItem {...props} downloadLink={'https://link/'} />);

		expect(
			screen.getByRole('link', { name: `get ${props.title} here` })
		).toHaveAttribute('href', 'https://link/');
	});
});
