import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider from '.';

export default {
	title: 'GameCardSlider',
	component: GameCardSlider,
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
} as Meta;

const items = [
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x140',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x141',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x142',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x143',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x144',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
	{
		title: 'Population Zero',
		developer: 'Rockstar Games',
		img: 'https://source.unsplash.com/user/willianjusten/300x145',
		price: 'R$ 235,00',
		promotionalPrice: 'R$ 215,00',
	},
];

export const Basic: Story = (args) => (
	<div style={{ maxWidth: '110rem', margin: '0 auto' }}>
		<GameCardSlider cardItems={items} color="white" {...args} />
	</div>
);
