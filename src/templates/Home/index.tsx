import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import Menu from 'components/Menu';
import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';
import Footer from 'components/Footer';
import { Container } from 'components/Container';

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
		<section>
			<Container>
				<Menu />
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

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};

export default Home;
