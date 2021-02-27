import { gql } from '@apollo/client';

import Home, { HomeTemplateProps } from 'templates/Home';
import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { initializeApollo } from 'utils/apollo';

const GET_GAMES = gql`
	query getgame {
		games {
			name
		}
	}
`;

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />;
}

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query({ query: GET_GAMES });

	return {
		props: {
			data: data,
			initialApolloState: apolloClient.cache.extract(),
			banners: bannerMock,
			newGames: gamesMock,
			mostPopularHighlight: highlightMock,
			mostPopularGames: gamesMock,
			upcomingGames: gamesMock,
			upcomingHighlight: highlightMock,
			moreUpcomingGames: gamesMock,
			freeGamesHighlight: highlightMock,
			freeGames: gamesMock,
		},
	};
}
