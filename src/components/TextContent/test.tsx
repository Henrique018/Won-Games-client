import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import TextContent from '.';

const props = {
	title: 'Description',
	content: `<h1>heading</h1>`,
};

describe('<TextContent />', () => {
	it('should render the heading and content', () => {
		renderWithTheme(<TextContent {...props} />);

		expect(
			screen.getByRole('heading', { name: /description/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /heading/i })
		).toBeInTheDocument();
	});

	it('should render without a title', () => {
		renderWithTheme(<TextContent content={props.content} />);

		expect(
			screen.queryByRole('heading', { name: /description/i })
		).not.toBeInTheDocument();
	});

	it('should have a white background', () => {
		renderWithTheme(<TextContent {...props} />);

		const wrapper = screen.getByRole('heading', { name: /description/i })
			.parentElement;

		expect(wrapper).toHaveStyle({ color: '#FAFAFA' });

		expect(wrapper).toHaveStyleRule('color', '#030517', {
			media: '(min-width: 768px)',
		});
	});
});
