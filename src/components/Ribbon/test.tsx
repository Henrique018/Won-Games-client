import { render, screen } from 'utils/test-util';

import Ribbon from '.';

describe('<Ribbon />', () => {
	it('should render the ribbon with a given title', () => {
		render(<Ribbon color="primary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toBeInTheDocument();
	});

	it('should render the ribbon with a primary color', () => {
		render(<Ribbon color="primary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			backgroundColor: '#F231A5',
		});
	});

	it('should render the ribbon with a secondary color', () => {
		render(<Ribbon color="secondary">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			backgroundColor: '#3CD3C1',
		});
	});

	it('should render a medium size ribbon', () => {
		render(<Ribbon size="medium">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			fontSize: '1.4rem',
			height: '3.6rem',
		});
	});

	it('should render a small ribbon', () => {
		render(<Ribbon size="small">new release</Ribbon>);

		expect(screen.getByText(/new release/i)).toHaveStyle({
			fontSize: '1.2rem',
			height: '2.4rem',
		});
	});
});
