import Cart, { CartProps } from 'templates/Cart';

import cartMock from 'components/CartList/mock';
import paymentCardsMock from 'components/PaymentOptions/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: CartProps) {
	return <Cart {...props} />;
}

export function getServerSideProps() {
	return {
		props: {
			items: cartMock.items,
			total: cartMock.total,
			cards: paymentCardsMock,
			recommendedGames: gamesMock,
			recommendedHighlight: highlightMock,
		},
	};
}
