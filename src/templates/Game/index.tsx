import { Divider } from 'components/Divider';
import Showcase, { ShowcaseProps } from 'components/Showcase';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import TextContent from 'components/TextContent';

import Base from 'templates/Base';
import * as S from './styles';

export type GameTemplateProps = {
	cover: string;
	gameInfo: GameInfoProps;
	gallery?: GalleryImageProps[];
	description: string;
	gameDetails: GameDetailsProps;
	upcomingGames: ShowcaseProps;
	recommendedGames: ShowcaseProps;
	recommendedTitle: string;
};

const Game = ({
	cover,
	gameInfo,
	gallery,
	description,
	gameDetails,
	upcomingGames,
	recommendedGames,
	recommendedTitle,
}: GameTemplateProps) => {
	return (
		<Base>
			<S.Cover src={cover} aria-label="cover" role="image" />
			<S.Main>
				<S.SectionGameInfo>
					<GameInfo {...gameInfo} />
				</S.SectionGameInfo>

				<S.SectionGallery>
					{gallery && <Gallery images={gallery} />}
				</S.SectionGallery>

				<S.SectionDescription>
					<TextContent title="Description" content={description} />
				</S.SectionDescription>

				<S.SectionGameDetails>
					<GameDetails {...gameDetails} />
					<Divider />
				</S.SectionGameDetails>

				<Showcase {...upcomingGames} />

				<Showcase title={recommendedTitle} {...recommendedGames} />
			</S.Main>
		</Base>
	);
};

export default Game;
