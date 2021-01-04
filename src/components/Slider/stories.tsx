import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';

import Slider from '.';

export default {
	title: 'Slider',
	component: Slider,
} as Meta;

const settings: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
};

const verticalSettings: Settings = {
	dots: true,
	vertical: true,
	verticalSwiping: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
};

const Slide = styled.div`
	background: gray;
	width: 30rem;
	padding: 10rem 0;
	color: white;
	text-align: center;
	border: 0.1rem solid #f231a5;
`;

export const Horizontal: Story = (args) => (
	<Slider settings={settings} {...args}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
		<Slide>4</Slide>
		<Slide>5</Slide>
	</Slider>
);

export const Vertical: Story = (args) => (
	<Slider settings={verticalSettings} {...args}>
		<Slide>1</Slide>
		<Slide>2</Slide>
		<Slide>3</Slide>
	</Slider>
);
