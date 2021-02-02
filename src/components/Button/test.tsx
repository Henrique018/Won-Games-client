import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { renderWithTheme } from 'utils/test/helper';
import Button from '.';

describe('<Button />', () => {
	it('should render a medium size button by default', () => {
		const { container } = renderWithTheme(<Button>Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem',
		});

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a small size button', () => {
		renderWithTheme(<Button size="small">Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			height: '3rem',
			'font-size': '1.2rem',
		});
	});

	it('should render a large size button', () => {
		renderWithTheme(<Button size="large">Download Now</Button>);

		expect(screen.getByRole('button')).toHaveStyle({
			height: '5rem',
			'font-size': '1.6rem',
		});
	});

	it('should render a disabled version', () => {
		const { debug } = renderWithTheme(<Button disabled>Download Now</Button>);

		debug(screen.getByRole('button', { name: /Download Now/i }));
		expect(
			screen.getByRole('button', { name: /Download Now/i })
		).toHaveStyleRule('cursor', 'not-allowed', {
			modifier: ':disabled',
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

	it('should render a minimal version', () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart />} minimal>
				Add to wishlist
			</Button>
		);

		expect(
			screen.getByRole('button', { name: /add to wishlist/i })
		).toHaveStyle({
			background: 'none',
		});
	});

	it('should render the button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>
		);

		expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
			'href',
			'/link'
		);
	});
});
