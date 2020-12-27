import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';
import 'jest-styled-components';

import Heading from '.';

describe('<Heading />', () => {
	it('should render a black color by default', () => {
		renderWithTheme(<Heading>Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			color: '#030517',
		});
	});

	it('should render a white color when property is passed', () => {
		renderWithTheme(<Heading color="white">Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			color: '#FAFAFA',
		});
	});

	it('should render a heading with a left line to the side ', () => {
		renderWithTheme(<Heading lineLeft>Won Games</Heading>);
		expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
			'border-left': '0.7rem solid #F231A5',
		});
	});

	it('should render a heading with a secondary line color', () => {
		renderWithTheme(
			<Heading lineLeft lineColor="secondary">
				Won Games
			</Heading>
		);
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

	it('should render a smaller heading when size small is passed', () => {
		renderWithTheme(<Heading size="small">Won Games</Heading>);

		expect(screen.getByText(/won games/i)).toHaveStyle({
			'font-size': '1.6rem',
		});

		expect(screen.getByText(/won games/i)).toHaveStyleRule('width', '2.5rem', {
			modifier: '::after',
		});
	});
});
