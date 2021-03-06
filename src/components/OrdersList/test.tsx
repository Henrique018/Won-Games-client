import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import OrdersList from '.';
import mock from './mock';

jest.mock('components/Empty', () => ({
	__esModule: true,
	default: function Mock() {
		return <div data-testid="Mock Empty" />;
	},
}));

jest.mock('components/GameItem', () => ({
	__esModule: true,
	default: function Mock({ children }: { children: React.ReactNode }) {
		return <div data-testid="Mock GameItem">{children}</div>;
	},
}));

describe('<OrdersList />', () => {
	it('should render the game items', () => {
		renderWithTheme(<OrdersList items={mock} />);

		expect(screen.getByRole('heading', { name: /my orders/i }));
		expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
	});

	it('should render the empty component if there are no items', () => {
		renderWithTheme(<OrdersList items={[]} />);

		expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
	});
});
