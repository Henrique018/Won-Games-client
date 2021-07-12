import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

import { useQueryGames } from 'graphql/queries/games';
import { ArrowIosDownwardOutline as ArrowDown } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

import {
	parseQueryStringToExploreFilter,
	parseQueryStringToWhere,
} from 'utils/filter/filter';

import Base from 'templates/Base';

import { Grid } from 'components/Grid';
import GameCard from 'components/GameCard';
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';

import * as S from './styles';
import Empty from 'components/Empty';

export type GamesTemplateProps = {
	filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
	const { push, query } = useRouter();
	const { data, loading, fetchMore } = useQueryGames({
		notifyOnNetworkStatusChange: true,
		variables: {
			limit: 15,
			where: parseQueryStringToWhere({ queryString: query, filterItems }),
			sort: query.sort as string,
		},
	});

	if (!data) return <p>Loading...</p>;
	const { games, gamesConnection } = data;

	const hasMoreGames = games.length < (gamesConnection?.values?.length || 0);

	const handleOnFilter = (items: ParsedUrlQueryInput) => {
		push({
			pathname: '/games',
			query: items,
		});
		return;
	};

	const handleSeeMore = () => {
		fetchMore({ variables: { limit: 15, start: games?.length } });
	};

	return (
		<Base>
			<S.Main>
				<S.SidebarWrapper>
					<ExploreSidebar
						items={filterItems}
						initialValues={parseQueryStringToExploreFilter({
							queryString: query,
							filterItems,
						})}
						onFilter={handleOnFilter}
					/>
				</S.SidebarWrapper>

				<section>
					{games?.length ? (
						<>
							<Grid>
								{games?.map((game) => (
									<GameCard
										key={`game - ${game.id}`}
										id={game.id}
										title={game.name}
										img={`http://localhost:1337${game.cover?.url}`}
										price={game.price}
										slug={game.slug}
										developer={game.developers[0].name}
									/>
								))}
							</Grid>
							{hasMoreGames && (
								<S.SeeMore>
									{loading ? (
										<S.SeeMoreLoading
											src="/img/dots.svg"
											alt="Loading more games..."
										/>
									) : (
										<S.SeeMoreButton role="button" onClick={handleSeeMore}>
											<p>See More</p>
											<ArrowDown size={35} />
										</S.SeeMoreButton>
									)}
								</S.SeeMore>
							)}
						</>
					) : (
						<Empty
							title="nothing here..."
							description="No games found with specified filters"
						/>
					)}
				</section>
			</S.Main>
		</Base>
	);
};

export default GamesTemplate;
