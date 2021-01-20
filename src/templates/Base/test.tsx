import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import Base from '.';

jest.mock('components/Menu', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Menu mock"></div>;
		},
	};
});

jest.mock('components/Footer', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Footer mock"></div>;
		},
	};
});

describe('<Base />', () => {
	it('should render a children with the base components (Menu/Footer)', () => {
		renderWithTheme(
			<Base>
				<h1>heading</h1>
			</Base>
		);

		expect(screen.getByTestId('Menu mock')).toBeInTheDocument();
		expect(screen.getByTestId('Footer mock')).toBeInTheDocument();

		expect(screen.getByRole('heading', { name: /heading/i }));
	});
});
