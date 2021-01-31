import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Empty from '.';

const props = {
	title: 'A simple title',
	description: 'a simple description',
};

describe('<Empty />', () => {
	it('should render correctly', () => {
		const { container } = renderWithTheme(<Empty {...props} hasLink />);

		expect(
			screen.getByRole('image', { name: /a gamer playing videogame/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /a simple title/i })
		).toBeInTheDocument();

		expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: /go back to store/i })
		).toHaveAttribute('href', '/');

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not render a link when hasLink is not passed', () => {
		renderWithTheme(<Empty {...props} />);

		expect(
			screen.queryByRole('link', { name: /go back to store/i })
		).not.toBeInTheDocument();
	});
});
