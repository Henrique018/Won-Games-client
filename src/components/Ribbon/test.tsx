import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Ribbon from '.';

describe('<Ribbon />', () => {
	it('should render the ribbon with a given title', () => {
		renderWithTheme(<Ribbon color="primary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toBeInTheDocument();
	});

	it('should render the ribbon with a primary color', () => {
		renderWithTheme(<Ribbon color="primary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			backgroundColor: '#F231A5',
		});
	});

	it('should render the ribbon with a secondary color', () => {
		renderWithTheme(<Ribbon color="secondary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			backgroundColor: '#3CD3C1',
		});
	});

	it('should render a medium size ribbon', () => {
		renderWithTheme(<Ribbon size="medium">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			fontSize: '1.4rem',
			height: '3.6rem',
		});
	});

	it('should render a small ribbon', () => {
		renderWithTheme(<Ribbon size="small">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			fontSize: '1.2rem',
			height: '2.4rem',
		});
	});
});
