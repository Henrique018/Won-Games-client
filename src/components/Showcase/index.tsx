import Heading from 'components/Heading';

import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Highlight, { HighlightProps } from 'components/Highlight';
import * as S from './styles';

export type ShowcaseProps = {
	title?: string;
	highlight?: HighlightProps;
	games?: GameCardProps[];
};

const Showcase = ({ title, games, highlight }: ShowcaseProps) => {
	return (
		<S.Wrapper>
			{!!title && (
				<Heading lineLeft lineColor="secondary" color="white">
					{title}
				</Heading>
			)}

			{!!highlight && <Highlight {...highlight} />}
			{!!games && <GameCardSlider cardItems={games} />}
		</S.Wrapper>
	);
};

export default Showcase;
