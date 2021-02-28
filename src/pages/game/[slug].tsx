import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';

import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import {
	QueryGameBySlug,
	QueryGameBySlugVariables,
} from 'graphql/generated/QueryGameBySlug';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
	const router = useRouter();

	if (router.isFallback) return null;
	return <Game {...props} />;
}

export async function getStaticPaths() {
	const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
		query: QUERY_GAMES,
		variables: { limit: 9 },
	});

	const paths = data.games.map(({ slug }) => ({ params: { slug } }));
	return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await apolloClient.query<
		QueryGameBySlug,
		QueryGameBySlugVariables
	>({ query: QUERY_GAME_BY_SLUG, variables: { slug: String(params!.slug) } });

	if (!data.games.length) return { notFound: true };

	const game = data.games[0];
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
				title: 'Upcoming',
				games: gamesMock,
				highlight: highlightMock,
			},
			recommendedGames: {
				title: 'You may like these games',
				games: gamesMock,
			},
		},
	};
};
