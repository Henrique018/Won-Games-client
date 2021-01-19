import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';
import highlightMock from 'components/Highlight/mock';

import Highlight from '.';
import * as S from './styles';

describe('<Highlight />', () => {
	it('should render the highlight', () => {
		renderWithTheme(<Highlight {...highlightMock} />);

		expect(
			screen.getByRole('heading', { name: highlightMock.title })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: highlightMock.subtitle })
		).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: highlightMock.buttonLabel })
		).toBeInTheDocument();
	});

	it('should render a background image', () => {
		const { container } = renderWithTheme(<Highlight {...highlightMock} />);

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${highlightMock.backgroundImage})`,
		});
	});

	it('should render a float image', () => {
		renderWithTheme(
			<Highlight floatImage="/img/float-image.png" {...highlightMock} />
		);

		expect(
			screen.getByRole('img', { name: highlightMock.title })
		).toHaveAttribute('src', '/img/float-image.png');
	});

	it('should render a highlight with a right alignment by default', () => {
		const { container } = renderWithTheme(
			<Highlight floatImage="/img/float-image.png" {...highlightMock} />
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
			<Highlight
				floatImage="/img/float-image.png"
				alignment="left"
				{...highlightMock}
			/>
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
