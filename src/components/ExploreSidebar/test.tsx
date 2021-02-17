import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import ExploreSidebar from '.';

describe('<ExploreSidebar />', () => {
	it('should render the heading', () => {
		renderWithTheme(<ExploreSidebar />);

		expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /sort by/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /System/i })
		).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument();
	});

	it('should render all inputs', () => {
		renderWithTheme(<ExploreSidebar />);

		expect(
			screen.getByRole('checkbox', { name: /under \$50/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('radio', { name: /high to low/i })
		).toBeInTheDocument();
	});

	it('should render a filter button', () => {
		renderWithTheme(<ExploreSidebar />);

		expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
	});
});
