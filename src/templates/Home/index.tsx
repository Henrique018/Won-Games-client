import Base from 'templates/Base';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { Container } from 'components/Container';

import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';

import * as S from './styles';

export type HomeTemplateProps = {
	banners: BannerProps[];
	newGames: GameCardProps[];
	mostPopularHighlight: HighlightProps;
	mostPopularGames: GameCardProps[];
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	moreUpcomingGames: GameCardProps[];
	freeGamesHighlight: HighlightProps;
	freeGames: GameCardProps[];
};

const Home = ({
	banners,
	newGames,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGames,
	upcomingHighlight,
	moreUpcomingGames,
	freeGamesHighlight,
	freeGames,
}: HomeTemplateProps) => {
	return (
		<Base>
			<Container>
				<S.SectionBanner>
					<BannerSlider items={banners} />
				</S.SectionBanner>
			</Container>

			<S.SectionNews>
				<Showcase title="News" games={newGames} />
			</S.SectionNews>

			<Showcase
				title="Most populars"
				highlight={mostPopularHighlight}
				games={mostPopularGames}
			/>

			<S.SectionUpcoming>
				<Showcase title="Upcoming" games={upcomingGames} />
				<Showcase highlight={upcomingHighlight} games={moreUpcomingGames} />
			</S.SectionUpcoming>

			<Showcase
				title="Free games"
				highlight={freeGamesHighlight}
				games={freeGames}
			/>
		</Base>
	);
};

export default Home;
