import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';

import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import gamesMock from '../components/GameCardSlider/mock';

import Wishlist, { WishlistProps } from 'templates/Wishlist';

export default function Index(props: WishlistProps) {
	return <Wishlist {...props} />;
}

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<QueryRecommended>({
		query: QUERY_RECOMMENDED,
	});

	return {
		props: {
			games: gamesMock,
			recommendedTitle: data.recommended?.section?.title,
			recommendedGames: gamesMapper(data?.recommended?.section?.games),
			recommendedHighlight: highlightMapper(
				data?.recommended?.section?.highlight
			),
		},
	};
}
