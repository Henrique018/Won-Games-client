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

	const { data } = await client.query<QueryGames, QueryGamesVariables>({
		query: QUERY_GAMES,
		variables: { limit: 9 },
	});

	return {
		props: {
			revalidate: true,
			games: data.games.map((game) => ({
				title: game.name,
				slug: game.slug,
				developer: game.developers[0].name,
				img: `http://localhost:1337${game.cover!.url}`,
				price: game.price,
			})),
			filterItems: filterItemsMock,
		},
	};
}