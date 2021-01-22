import { Linux, Apple, Windows } from '@styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

type Platform = 'windows' | 'mac' | 'linux';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
	developer: string;
	publisher: string;
	releaseDate: string;
	platforms: Platform[];
	rating: Rating;
	genres: string[];
};

const GameDetails = ({
	platforms,
	developer,
	releaseDate,
	rating,
	genres,
	publisher,
}: GameDetailsProps) => {
	const platformIcons = {
		windows: <Windows title="windows" size={18} />,
		mac: <Apple title="mac" size={20} />,
		linux: <Linux title="linux" size={20} />,
	};

	return (
		<S.Wrapper>
			<MediaMatch greaterThan="medium">
				<Heading lineLeft lineColor="secondary" color="white">
					Game details
				</Heading>
			</MediaMatch>

			<S.Content>
				<S.Block>
					<S.Title>Developer</S.Title>
					<S.Description>{developer}</S.Description>
				</S.Block>
				<S.Block>
					<S.Title>Release date</S.Title>
					<S.Description>
						{Intl.DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
						}).format(new Date(releaseDate))}
					</S.Description>
				</S.Block>
				<S.Block>
					<S.Title>Platforms</S.Title>
					<S.IconsWrapper>
						{platforms.map((icon: Platform) => (
							<S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
						))}
					</S.IconsWrapper>
				</S.Block>
				<S.Block>
					<S.Title>Publisher</S.Title>
					<S.Description>{publisher}</S.Description>
				</S.Block>
				<S.Block>
					<S.Title>Rating</S.Title>
					<S.Description>
						{rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
					</S.Description>
				</S.Block>
				<S.Block>
					<S.Title>Genre</S.Title>
					<S.Description>{genres.join(' / ')}</S.Description>
				</S.Block>
			</S.Content>
		</S.Wrapper>
	);
};

export default GameDetails;
