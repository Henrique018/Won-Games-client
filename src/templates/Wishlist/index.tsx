import Base from 'templates/Base';

import Empty from 'components/Empty';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';

import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import { Container } from 'components/Container';
import { HighlightProps } from 'components/Highlight';
import GameCard, { GameCardProps } from 'components/GameCard';

//import * as S from './styles';

export type WishlistProps = {
	games?: GameCardProps[];
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
	recommendedTitle: string;
};

const Wishlist = ({
	games = [],
	recommendedGames,
	recommendedTitle = 'You may like these games',
	recommendedHighlight,
}: WishlistProps) => {
	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary" color="white">
					Wishlist
				</Heading>
				{games?.length ? (
					<Grid>
						{games?.map((game, index) => (
							<GameCard key={`game - ${index}`} {...game} />
						))}
					</Grid>
				) : (
					<Empty
						title="Your wishlist is empty"
						description="Go back to catalog and explore fun games"
						hasLink
					/>
				)}
			</Container>
			<Container>
				<Divider />
			</Container>

			<Showcase
				title={recommendedTitle}
				highlight={recommendedHighlight}
				games={recommendedGames}
			/>
		</Base>
	);
};

export default Wishlist;
