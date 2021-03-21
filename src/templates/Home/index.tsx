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
	newGamesTitle: string;
	newGames: GameCardProps[];
	mostPopularHighlight: HighlightProps;
	mostPopularGames: GameCardProps[];
	upcomingGamesTitle: string;
	upcomingGames: GameCardProps[];
	upcomingHighlight: HighlightProps;
	freeGamesTitle: string;
	freeGamesHighlight: HighlightProps;
	freeGames: GameCardProps[];
	mostPopularGamesTitle: string;
};

const Home = ({
	banners,
	newGamesTitle,
	newGames,
	mostPopularGamesTitle,
	mostPopularHighlight,
	mostPopularGames,
	upcomingGamesTitle,
	upcomingGames,
	upcomingHighlight,
	freeGamesTitle,
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
				<Showcase title={newGamesTitle} games={newGames} color="black" />
			</S.SectionNews>

			<Showcase
				title={mostPopularGamesTitle}
				highlight={mostPopularHighlight}
				games={mostPopularGames}
			/>

			<Showcase
				title={upcomingGamesTitle}
				highlight={upcomingHighlight}
				games={upcomingGames}
			/>

			<Showcase
				title={freeGamesTitle}
				highlight={freeGamesHighlight}
				games={freeGames}
			/>
		</Base>
	);
};

export default Home;
