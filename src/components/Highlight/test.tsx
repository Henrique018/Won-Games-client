import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Highlight from '.';
import * as S from './styles';

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

	it('should render a float image', () => {
		renderWithTheme(<Highlight floatImage="/img/float-image.png" {...args} />);

		expect(screen.getByRole('img', { name: args.title })).toHaveAttribute(
			'src',
			'/img/float-image.png'
		);
	});

	it('should render a highlight with a right alignment by default', () => {
		const { container } = renderWithTheme(
			<Highlight floatImage="/img/float-image.png" {...args} />
		);

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'floatImage content'"
		);
		expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
			modifier: `${S.Content}`,
		});
	});

	it('should render a left aligned highlight', () => {
		const { container } = renderWithTheme(
			<Highlight floatImage="/img/float-image.png" alignment="left" {...args} />
		);

		expect(container.firstChild).toHaveStyleRule(
			'grid-template-areas',
			"'content floatImage'"
		);

		expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
			modifier: `${S.Content}`,
		});
	});
});
