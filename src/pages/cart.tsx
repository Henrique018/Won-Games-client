import { initializeApollo } from 'utils/apollo';

import Cart, { CartProps } from 'templates/Cart';

import cartMock from 'components/CartList/mock';
import paymentCardsMock from 'components/PaymentOptions/mock';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: CartProps) {
	return <Cart {...props} />;
}

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<QueryRecommended>({
		query: QUERY_RECOMMENDED,
	});

	return {
		props: {
			items: cartMock.items,
			total: cartMock.total,
			cards: paymentCardsMock,
			recommendedTitle: data.recommended?.section?.title,
			recommendedGames: gamesMapper(data.recommended?.section?.games),
			recommendedHighlight: highlightMapper(
				data.recommended?.section?.highlight
			),
		},
	};
}
