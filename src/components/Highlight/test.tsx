import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Highlight from '.';

const args = {
	title: 'heading 1',
	subtitle: 'heading 2',
	img: 'https://source.unsplash.com/user/willianjusten/1042x580',
	buttonLabel: 'buy now',
	buttonLink: 'rdr2/',
	backgroundImage: 'img/red-dead-img.png',
};

describe('<Highlight />', () => {
	it('should render the highlight', () => {
		renderWithTheme(<Highlight {...args} />);

		expect(
			screen.getByRole('heading', { name: /heading 1/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /heading 2/i })
		).toBeInTheDocument();

		expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
	});

	it('should render a background image', () => {
		const { container } = renderWithTheme(<Highlight {...args} />);

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${args.backgroundImage})`,
		});
	});
});
