import { render, screen } from 'utils/test-util';
import highlightMock from 'components/Highlight/mock';

import Highlight from '.';
import * as S from './styles';

describe('<Highlight />', () => {
	it('should render the highlight', () => {
		render(<Highlight {...highlightMock} />);

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
		const { container } = render(<Highlight {...highlightMock} />);

		expect(container.firstChild).toHaveStyle({
			backgroundImage: `url(${highlightMock.backgroundImage})`,
		});
	});

	it('should render a float image', () => {
		render(<Highlight floatImage="/img/float-image.png" {...highlightMock} />);

		expect(
			screen.getByRole('img', { name: highlightMock.title })
		).toHaveAttribute('src', '/img/float-image.png');
	});

	it('should render a highlight with a right alignment by default', () => {
		const { container } = render(
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
		const { container } = render(
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
