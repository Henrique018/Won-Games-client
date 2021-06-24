import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import { MockedProvider } from '@apollo/client/testing';

import filterItemsMock from 'components/ExploreSidebar/mock';
import { gamesMock, seeMoreMock } from './mocks';

import Games from '.';
import apolloCache from 'utils/apolloCache';

jest.mock('components/ExploreSidebar', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="ExploreSidebar mock"></div>;
		},
	};
});

describe('<Games />', () => {
	it('should render a loading', () => {
		renderWithTheme(
			<MockedProvider mocks={[]} addTypename={false}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		expect(screen.getByText(/loading.../i)).toBeInTheDocument();
	});

	it('should render all elements of Games page correctly', async () => {
		renderWithTheme(
			<MockedProvider mocks={[gamesMock]} addTypename={false}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		expect(
			await screen.findByTestId('ExploreSidebar mock')
		).toBeInTheDocument();

		expect(await screen.findByText(/System Shock™ 2/i)).toBeInTheDocument();

		expect(
			await screen.findByRole('button', { name: /see more/i })
		).toBeInTheDocument();
	});

	it('should render more games when see more is clicked', async () => {
		renderWithTheme(
			<MockedProvider mocks={[gamesMock, seeMoreMock]} cache={apolloCache}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		expect(await screen.findByText(/System Shock™ 2/i)).toBeInTheDocument();

		const seeMoreBtn = await screen.findByRole('button', { name: /see more/i });

		fireEvent.click(seeMoreBtn);

		expect(await screen.findByText(/see more game/i)).toBeInTheDocument();
	});
});
