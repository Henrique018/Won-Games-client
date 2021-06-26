import Home, { HomeTemplateProps } from 'templates/Home';

import { initializeApollo } from 'utils/apollo';
import { QUERY_HOME } from 'graphql/queries/home';
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';

import { highlightMapper, gamesMapper, bannerMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />;
}

export async function getStaticProps() {
	const apolloClient = initializeApollo();
	const TODAY = new Date().toISOString().slice(0, 10);
	const {
		data: { banners, newGames, upcomingGames, freeGames, sections },
	} = await apolloClient.query<QueryHome, QueryHomeVariables>({
		query: QUERY_HOME,
		variables: { date: TODAY },
	});

	return {
		revalidate: 60,
		props: {
			banners: bannerMapper(banners),
			newGamesTitle: sections?.newGames?.title,
			newGames: gamesMapper(newGames),
			mostPopularGamesTitle: sections?.popularGames?.title,
			mostPopularHighlight: highlightMapper(sections!.popularGames?.highlight),
			mostPopularGames: gamesMapper(sections!.popularGames!.games),
			upcomingGamesTitle: sections?.upcomingGames?.title,
			upcomingGames: gamesMapper(upcomingGames),
			upcomingHighlight: highlightMapper(sections!.upcomingGames?.highlight),
			freeGamesTitle: sections?.freeGames?.title,
			freeGamesHighlight: highlightMapper(sections!.freeGames?.highlight),
			freeGames: gamesMapper(freeGames),
		},
	};
}
