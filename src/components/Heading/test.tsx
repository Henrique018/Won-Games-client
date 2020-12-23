import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';
import 'jest-styled-components';

import Heading from '.';

describe('<Heading />', () => {
	it('should render a white color by default', () => {
		renderWithTheme(<Heading>Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should render a dark color when property is passed', () => {
		renderWithTheme(<Heading color="black">Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			color: '#030517',
		});
	});

	it('should render a heading with a left line to the side ', () => {
		renderWithTheme(<Heading lineLeft>Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			'border-left': '0.7rem solid #3CD3C1',
		});
	});

	it('should render a heading with a bottom line', () => {
		renderWithTheme(<Heading lineBottom>Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
			'border-bottom',
			'0.5rem solid #F231A5',
			{
				modifier: '::after',
			}
		);
	});
});
