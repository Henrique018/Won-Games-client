import {
	ArrowForwardIos as ArrowFoward,
	ArrowBackIos as ArrowBack,
} from '@styled-icons/material-outlined';

import GameCard, { GameCardProps } from 'components/GameCard';
import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

export type GameCardSliderProps = {
	cardItems: GameCardProps[];
	color?: 'black' | 'white';
};

const settings: SliderSettings = {
	slidesToShow: 4,
	arrows: true,
	prevArrow: <ArrowBack aria-label="previous games" />,
	nextArrow: <ArrowFoward aria-label="next games" />,
	infinite: false,
	lazyLoad: 'ondemand',
	responsive: [
		{
			breakpoint: 1370,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
			},
		},
		{
			breakpoint: 570,
			settings: {
				arrows: false,
				slidesToShow: 1.2,
			},
		},
		{
			breakpoint: 370,
			settings: {
				arrows: false,
				slidesToShow: 1.1,
			},
		},
	],
};

const GameCardSlider = ({
	cardItems,
	color = 'white',
}: GameCardSliderProps) => {
	return (
		<S.Wrapper color={color}>
			<Slider settings={settings}>
				{cardItems.map((cardItem, index) => (
					<GameCard key={index} {...cardItem} />
				))}
			</Slider>
		</S.Wrapper>
	);
};

export default GameCardSlider;
