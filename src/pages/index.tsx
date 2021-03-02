import Home, { HomeTemplateProps } from 'templates/Home';

import { initializeApollo } from 'utils/apollo';
import { QUERY_HOME } from 'graphql/queries/home';
import { QueryHome } from 'graphql/generated/QueryHome';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
	return <Home {...props} />;
}

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query<QueryHome>({
		query: QUERY_HOME,
	});

	return {
		props: {
			revalidate: 60,
			banners: data.banners.map((banner) => ({
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
