import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';

import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import {
	QueryGameBySlug,
	QueryGameBySlugVariables,
} from 'graphql/generated/QueryGameBySlug';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_UPCOMING } from 'graphql/queries/upcoming';
import {
	QueryUpcoming,
	QueryUpcomingVariables,
} from 'graphql/generated/QueryUpcoming';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return null;
	return <Game {...props} />;
}

export async function getStaticPaths() {
	const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
		query: QUERY_GAMES,
		variables: { limit: 15 },
	});

	const paths = data.games.map(({ slug }) => ({ params: { slug } }));
	return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	//get game info
	const { data } = await apolloClient.query<
		QueryGameBySlug,
		QueryGameBySlugVariables
	>({ query: QUERY_GAME_BY_SLUG, variables: { slug: String(params!.slug) } });

	if (!data.games.length) return { notFound: true };

	const game = data.games[0];

	//get recommended games
	const { data: recommended } = await apolloClient.query<QueryRecommended>({
		query: QUERY_RECOMMENDED,
	});

	// get Upcoming games
	const TODAY = new Date().toISOString().slice(0, 10);
	const { data: upcoming } = await apolloClient.query<
		QueryUpcoming,
		QueryUpcomingVariables
	>({
		query: QUERY_UPCOMING,
		variables: { date: TODAY },
	});

	return {
		props: {
			revalidate: 60,
			cover: `http://localhost:1337${game.cover!.url}`,
			gameInfo: {
				title: game.name,
				description: game.short_description,
				price: game.price,
			},
			gallery: game.gallery.map((image) => ({
				src: `http://localhost:1337${image.url}`,
				alternativeText: image.label,
			})),
			description: game.description,
			gameDetails: {
				developer: game.developers[0].name,
				publisher: game.publisher?.name,
				releaseDate: game.release_date,
				platforms: game.platforms.map((platform) => platform.name),
				rating: game.rating,
				genres: game.categories.map((category) => category.name),
			},
			upcomingGames: {
				title: upcoming.showcase?.upcomingGames?.title,
				games: gamesMapper(upcoming.upcomingGames),
				highlight: highlightMapper(upcoming.showcase?.upcomingGames?.highlight),
			},
			recommendedGames: {
				title: recommended.recommended?.section?.title,
				games: gamesMapper(recommended.recommended?.section?.games),
			},
		},
	};
};
