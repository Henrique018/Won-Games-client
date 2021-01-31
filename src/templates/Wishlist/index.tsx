import Base from 'templates/Base';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';

import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import { Container } from 'components/Container';
import { HighlightProps } from 'components/Highlight';
import GameCard, { GameCardProps } from 'components/GameCard';

//import * as S from './styles';

export type WishlistProps = {
	games: GameCardProps[];
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
};

const Wishlist = ({
	games,
	recommendedGames,
	recommendedHighlight,
}: WishlistProps) => {
	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary" color="white">
					Wishlist
				</Heading>
				<Grid>
					{games?.map((game, index) => (
						<GameCard key={`game - ${index}`} {...game} />
					))}
				</Grid>
			</Container>

			<Container>
				<Divider />
			</Container>

			<Showcase
				title="You may like these games"
				highlight={recommendedHighlight}
				games={recommendedGames}
			/>
		</Base>
	);
};

export default Wishlist;
