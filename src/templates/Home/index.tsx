import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import Highlight, { HighlightProps } from 'components/Highlight';

import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';

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
				<Menu username="Henrique" />
				<S.SectionBanner>
					<BannerSlider items={banners} />
				</S.SectionBanner>
			</Container>

			<S.SectionNews>
				<Container className="newsSection">
					<Heading lineLeft lineColor="secondary">
						News
					</Heading>
					<GameCardSlider cardItems={newGames} color="black" />
				</Container>
			</S.SectionNews>

			<Container>
				<S.SectionMostPopular>
					<Heading lineLeft lineColor="secondary" color="white">
						Most popular
					</Heading>
					<Highlight {...mostPopularHighlight} />
					<GameCardSlider cardItems={mostPopularGames} />
				</S.SectionMostPopular>
			</Container>

			<S.SectionUpcoming>
				<Container>
					<Heading lineLeft lineColor="secondary" color="white">
						Upcoming
					</Heading>
					<GameCardSlider cardItems={upcomingGames} />
					<Highlight {...upcomingHighlight} />
					<GameCardSlider cardItems={moreUpcomingGames} />
				</Container>
			</S.SectionUpcoming>

			<Container>
				<S.SectionFreeGames>
					<Heading lineLeft lineColor="secondary" color="white">
						Free Games
					</Heading>

					<Highlight {...freeGamesHighlight} />
					<GameCardSlider cardItems={freeGames} />
				</S.SectionFreeGames>
			</Container>

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};

export default Home;
