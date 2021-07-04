import { render, screen } from 'utils/test-util';

import CartPage from '.';

import cartMock from 'components/CartList/mock';
import paymentCardsMock from 'components/PaymentOptions/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
	items: cartMock.items,
	total: cartMock.total,
	cards: paymentCardsMock,
	recommendedTitle: 'You may like these games',
	recommendedGames: gamesMock,
	recommendedHighlight: highlightMock,
};

jest.mock('components/CartList', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="CartList mock"></div>;
		},
	};
});

jest.mock('components/PaymentOptions', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="PaymentOptions mock"></div>;
		},
	};
});

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Showcase mock"></div>;
		},
	};
});

jest.mock('components/Empty', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Empty mock"></div>;
		},
	};
});

describe('<CartPage />', () => {
	it('should render all cart elements', () => {
		render(<CartPage {...props} />);

		expect(
			screen.getByRole('heading', { name: /My Cart/i })
		).toBeInTheDocument();

		expect(screen.getAllByTestId(/CartList mock/i)).toHaveLength(2);
		expect(screen.getByTestId(/PaymentOptions mock/i)).toBeInTheDocument();
		expect(screen.getByTestId(/Showcase mock/i)).toBeInTheDocument();
		expect(screen.queryByTestId(/empty mock/i)).not.toBeInTheDocument();
	});

	it('should render the empty component if there are no items', () => {
		const { container } = render(<CartPage {...props} items={[]} />);

		expect(screen.getByTestId(/empty mock/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
