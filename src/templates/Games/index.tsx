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

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
	const handleOnFilter = () => {
		return;
	};

	const handleShowMore = () => {
		return;
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
				<section>
					<Grid>
						{games?.length &&
							games?.map((game, index) => (
								<GameCard key={`game - ${index}`} {...game} />
							))}
					</Grid>
					<S.SeeMore role="button" onClick={handleShowMore}>
						<p>See more</p>
						<ArrowDown size={35} />
					</S.SeeMore>
				</section>
			</S.Main>
		</Base>
	);
};

export default GamesTemplate;
