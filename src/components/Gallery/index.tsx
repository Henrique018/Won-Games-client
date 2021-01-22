import {
	ArrowForwardIos as ArrowFoward,
	ArrowBackIos as ArrowBack,
} from '@styled-icons/material-outlined';

import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

const settings: SliderSettings = {
	slidesToShow: 3.7,
	arrows: true,
	prevArrow: <ArrowBack aria-label="previous image" />,
	nextArrow: <ArrowFoward aria-label="next image" />,
	infinite: false,
	lazyLoad: 'ondemand',
	responsive: [
		{
			breakpoint: 1375,
			settings: {
				arrows: false,
				slidesToShow: 3.2,
				draggable: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 2.5,
				draggable: true,
			},
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2.2,
				draggable: true,
			},
		},
	],
};

export type GalleryImageProps = {
	src: string;
	alternativeText: string;
};

export type GalleryProps = {
	images: GalleryImageProps[];
};

const Gallery = ({ images }: GalleryProps) => {
	return (
		<S.Wrapper>
			<Slider settings={settings}>
				{images.map((item, index) => (
					<img
						role="button"
						key={`thumb - ${index}`}
						src={item.src}
						alt={item.alternativeText}
					/>
				))}
			</Slider>
		</S.Wrapper>
	);
};

export default Gallery;
