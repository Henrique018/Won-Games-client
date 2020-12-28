import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { renderWithTheme } from 'utils/test/helper';
import Button from '.';

describe('<Button />', () => {
	it('should render a medium size button by default', () => {
		const { container } = renderWithTheme(<Button>Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			width: '12.2rem',
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem',
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a small size button', () => {
		renderWithTheme(<Button size="small">Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			width: '9.5rem',
			height: '3rem',
			'font-size': '1.2rem',
		});
	});

	it('should render a large size button', () => {
		renderWithTheme(<Button size="large">Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			width: '15rem',
			height: '5rem',
			padding: '0.8rem 4.0rem',
			'font-size': '1.6rem',
		});
	});

	it('should render a full width button', () => {
		renderWithTheme(<Button fullWidth>Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			width: '100%',
		});
	});

	it('should render an icon version', () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />}>
				Download Now
			</Button>
		);

		expect(screen.getByText(/download now/i)).toBeInTheDocument();
		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});

	it('should render the button as a link', () => {
		const { debug, container } = renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>
		);

		debug(container);
		expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
			'href',
			'/link'
		);
	});
});
