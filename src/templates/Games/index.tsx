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
		variables: {
			limit: 15,
			where: parseQueryStringToWhere({ queryString: query, filterItems }),
			sort: query.sort as string,
		},
	});

	const handleOnFilter = (items: ParsedUrlQueryInput) => {
		push({
			pathname: '/games',
			query: items,
		});
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
						initialValues={parseQueryStringToExploreFilter({
							queryString: query,
							filterItems,
						})}
						onFilter={handleOnFilter}
					/>
				</S.SidebarWrapper>

				<section>
					<Grid>
						{data?.games?.length ? (
							<>
								{data?.games?.map((game, index) => (
									<GameCard
										key={`game - ${index}`}
										title={game.name}
										img={`http://localhost:1337${game.cover?.url}`}
										price={game.price}
										slug={game.slug}
										developer={game.developers[0].name}
									/>
								))}
							</>
						) : (
							<Empty
								title="nothing here..."
								description="No games found with specified filters"
							/>
						)}
					</Grid>
					<S.SeeMore>
						{loading ? (
							<S.SeeMoreLoading
								src="img/dots.svg"
								alt="Loading more games..."
							/>
						) : (
							<S.SeeMoreButton role="button" onClick={handleShowMore}>
								<p>See more</p>
								<ArrowDown size={35} />
							</S.SeeMoreButton>
						)}
					</S.SeeMore>
				</section>
			</S.Main>
		</Base>
	);
};

export default GamesTemplate;
