import { useQueryGames } from 'graphql/queries/games';
import { ArrowIosDownwardOutline as ArrowDown } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

import Base from 'templates/Base';

import { Grid } from 'components/Grid';
import GameCard, { GameCardProps } from 'components/GameCard';
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';

import * as S from './styles';

export type GamesTemplateProps = {
	games?: GameCardProps[];
	filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
	const { data, loading, fetchMore } = useQueryGames({
		variables: { limit: 15 },
	});

	const handleOnFilter = () => {
		return;
	};

	const handleShowMore = () => {
		fetchMore({ variables: { limit: 15, start: data?.games?.length } });
	};

	return (
		<Base>
			<S.Main>
				<S.SidebarWrapper>
					<ExploreSidebar
						items={filterItems}
						initialValues={{ windows: true }}
						onFilter={handleOnFilter}
					/>
				</S.SidebarWrapper>
				{loading ? (
					'Loading...'
				) : (
					<section>
						<Grid>
							{data?.games?.length &&
								data?.games?.map((game, index) => (
									<GameCard
										key={`game - ${index}`}
										title={game.name}
										img={`http://localhost:1337${game.cover?.url}`}
										price={game.price}
										slug={game.slug}
										developer={game.developers[0].name}
									/>
								))}
						</Grid>
						<S.SeeMore role="button" onClick={handleShowMore}>
							<p>See more</p>
							<ArrowDown size={35} />
						</S.SeeMore>
					</section>
				)}
			</S.Main>
		</Base>
	);
};

export default GamesTemplate;
