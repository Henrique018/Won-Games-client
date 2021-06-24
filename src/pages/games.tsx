import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';

import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

export default function GamesPage(props: GamesTemplateProps) {
	return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
	const client = initializeApollo();

	await client.query<QueryGames, QueryGamesVariables>({
		query: QUERY_GAMES,
		variables: { limit: 15 },
	});

	return {
		props: {
			revalidate: true,
			initialApolloState: client.cache.extract(),
			filterItems: filterItemsMock,
		},
	};
}
