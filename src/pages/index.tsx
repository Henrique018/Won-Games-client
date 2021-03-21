import Home, { HomeTemplateProps } from 'templates/Home';

import { initializeApollo } from 'utils/apollo';
import { QUERY_HOME } from 'graphql/queries/home';
import {
	QueryHome,
	QueryHome_freeGames,
	QueryHome_newGames,
	QueryHome_sections_popularGames_games,
	QueryHome_upcomingGames,
} from 'graphql/generated/QueryHome';

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />;
}

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const {
		data: { banners, newGames, upcomingGames, freeGames, sections },
	} = await apolloClient.query<QueryHome>({
		query: QUERY_HOME,
	});

	const getGames = (
		gamesArray:
			| QueryHome_newGames[]
			| QueryHome_freeGames[]
			| QueryHome_upcomingGames[]
			| QueryHome_sections_popularGames_games[]
	) => {
		return gamesArray.map((game) => ({
			title: game.name,
			img: `http://localhost:1337${game.cover?.url}`,
			price: game.price,
			slug: game.slug,
			developer: game.developers[0].name,
		}));
	};

	return {
		props: {
			revalidate: 60,
			banners: banners.map((banner) => ({
				img: `http://localhost:1337${banner.image?.url}`,
				title: banner.title,
				subtitle: banner.subtitle,
				buttonLabel: banner.button?.label,
				buttonLink: banner.button?.link,
				...(banner.ribbon && {
					ribbonText: banner.ribbon?.text,
					ribbonColor: banner.ribbon?.color,
					ribbonSize: banner.ribbon?.size,
				}),
			})),
			newGamesTitle: sections?.newGames?.title,
			newGames: getGames(newGames),
			mostPopularGamesTitle: sections?.popularGames?.title,
			mostPopularHighlight: {
				title: sections?.popularGames?.highlight?.title,
				subtitle: sections?.popularGames?.highlight?.subtitle,
				buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
				buttonLink: sections?.popularGames?.highlight?.buttonLink,
				alignment: sections?.popularGames?.highlight?.alignment,
				floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
				backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
			},
			mostPopularGames: getGames(sections!.popularGames!.games),
			upcomingGamesTitle: sections?.upcomingGames?.title,
			upcomingGames: getGames(upcomingGames),
			upcomingHighlight: {
				title: sections?.upcomingGames?.highlight?.title,
				subtitle: sections?.upcomingGames?.highlight?.subtitle,
				buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
				buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
				alignment: sections?.upcomingGames?.highlight?.alignment,
				floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
				backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
			},
			freeGamesTitle: sections?.freeGames?.title,
			freeGamesHighlight: {
				title: sections?.freeGames?.highlight?.title,
				subtitle: sections?.freeGames?.highlight?.subtitle,
				buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
				buttonLink: sections?.freeGames?.highlight?.buttonLink,
				alignment: sections?.freeGames?.highlight?.alignment,
				floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
				backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
			},
			freeGames: getGames(freeGames),
		},
	};
}
