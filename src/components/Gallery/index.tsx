import { useEffect, useState, useRef } from 'react';
import SlickSlider from 'react-slick';
import { Close } from '@styled-icons/material-outlined/Close';
import {
	ArrowForwardIos as ArrowFoward,
	ArrowBackIos as ArrowBack,
} from '@styled-icons/material-outlined';

import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';

const commonSettings: SliderSettings = {
	arrows: true,
	prevArrow: <ArrowBack aria-label="previous image" />,
	nextArrow: <ArrowFoward aria-label="next image" />,
	infinite: false,
	lazyLoad: 'ondemand',
};

const settings: SliderSettings = {
	...commonSettings,
	slidesToShow: 3.7,
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

const modalSettings: SliderSettings = {
	...commonSettings,
	slidesToShow: 1,
};

export type GalleryImageProps = {
	src: string;
	alternativeText: string;
};

export type GalleryProps = {
	images: GalleryImageProps[];
};

const Gallery = ({ images }: GalleryProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const slider = useRef<SlickSlider>(null);

	useEffect(() => {
		const handleKeyUp = ({ key }: KeyboardEvent) => {
			key === 'Escape' && setIsOpen(false);
		};

		window.addEventListener('keyup', handleKeyUp);
		return () => removeEventListener('keyup', handleKeyUp);
	}, []);

	return (
		<S.Wrapper>
			<Slider ref={slider} settings={settings}>
				{images.map((item, index) => (
					<img
						role="button"
						key={`thumb - ${index}`}
						src={item.src}
						alt={`thumb - ${item.alternativeText}`}
						onClick={() => {
							setIsOpen(true);
							slider.current?.slickGoTo(index, true);
						}}
					/>
				))}
			</Slider>

			<S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
				<S.Close
					role="button"
					aria-label="close modal"
					onClick={() => setIsOpen(false)}
				>
					<Close size={40} />
				</S.Close>

				<S.Content>
					<Slider ref={slider} settings={modalSettings}>
						{images.map((item, index) => (
							<img
								key={`gallery-${index}`}
								src={item.src}
								alt={item.alternativeText}
							/>
						))}
					</Slider>
				</S.Content>
			</S.Modal>
		</S.Wrapper>
	);
};

export default Gallery;
