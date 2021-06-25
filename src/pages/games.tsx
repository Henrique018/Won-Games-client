import { GetServerSidePropsContext } from 'next';

import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import { initializeApollo } from 'utils/apollo';
import { parseQueryStringToWhere } from 'utils/filter/filter';

export default function GamesPage(props: GamesTemplateProps) {
	return <GamesTemplate {...props} />;
}

const filterPlatforms = {
	title: 'Platforms',
	name: 'platforms',
	type: 'checkbox',
	fields: [
		{ label: 'Mac', name: 'mac' },
		{ label: 'Windows', name: 'windows' },
		{ label: 'Linux', name: 'linux' },
	],
};

const filterSort = {
	title: 'Sort by price',
	name: 'sort',
	type: 'radio',
	fields: [
		{ label: 'low to high', name: 'price:asc' },
		{ label: 'high to low', name: 'price:desc' },
	],
};

const filterCategories = {
	title: 'Genres',
	name: 'categories',
	type: 'checkbox',
	fields: [
		{ label: 'Action', name: 'action' },
		{ label: 'Adventure', name: 'adventure' },
		{ label: 'Sports', name: 'sports' },
		{ label: 'Puzzle', name: 'puzzle' },
		{ label: 'Horror', name: 'horror' },
		{ label: 'Platform', name: 'platform' },
		{ label: 'Fantasy', name: 'fantasy' },
		{ label: 'RPG', name: 'role-playing' },
		{ label: 'JRPG', name: 'jrpg' },
		{ label: 'Simulation', name: 'simulation' },
		{ label: 'Strategy', name: 'strategy' },
		{ label: 'Shooter', name: 'shooter' },
	],
};

const filterPrice = {
	title: 'Price',
	name: 'price_lte',
	type: 'radio',
	fields: [
		{ label: 'Free', name: 0 },
		{ label: 'Under $50', name: 50 },
		{ label: 'Under $100', name: 100 },
		{ label: 'Under $150', name: 150 },
		{ label: 'Under $250', name: 250 },
		{ label: 'Under $500', name: 500 },
	],
};

const filterItems = [
	filterPrice,
	filterSort,
	filterCategories,
	filterPlatforms,
];

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
	const client = initializeApollo();

	await client.query<QueryGames, QueryGamesVariables>({
		notifyOnNetworkStatusChange: true,
		query: QUERY_GAMES,
		variables: {
			limit: 15,
			where: parseQueryStringToWhere({ queryString: query, filterItems }),
			sort: query.sort as string | null,
		},
	});

	return {
		props: {
			initialApolloState: client.cache.extract(),
			filterItems,
		},
	};
}
