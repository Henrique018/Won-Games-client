import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test/helper';

import { MockedProvider } from '@apollo/client/testing';

import filterItemsMock from 'components/ExploreSidebar/mock';
import { gamesMock, noGamesMock, seeMoreMock } from './mocks';

import Games from '.';
import apolloCache from 'utils/apolloCache';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
	push,
	query: '',
	asPath: '',
	route: '/',
}));

jest.mock('next/link', () => ({
	__esModule: true,
	default: function Mock({ children }: { children: React.ReactNode }) {
		return <div>{children}</div>;
	},
}));

describe('<Games />', () => {
	it('should render an Empty component', async () => {
		renderWithTheme(
			<MockedProvider mocks={[noGamesMock]} addTypename={false}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		expect(
			await screen.findByText(/No games found with specified filters/i)
		).toBeInTheDocument();
	});

	it('should render all elements of Games page correctly', async () => {
		renderWithTheme(
			<MockedProvider mocks={[gamesMock]} addTypename={false}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		expect(await screen.findByText(/price/i)).toBeInTheDocument();

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

	it('should change the url when selecting a field from ExploreSidebar', async () => {
		renderWithTheme(
			<MockedProvider mocks={[gamesMock, seeMoreMock]} cache={apolloCache}>
				<Games filterItems={filterItemsMock} />
			</MockedProvider>
		);

		userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }));
		userEvent.click(await screen.findByRole('radio', { name: /high to low/i }));

		expect(push).toHaveBeenCalledWith({
			pathname: '/games',
			query: { platforms: ['windows'], sort_by: 'high-to-low' },
		});
	});
});
