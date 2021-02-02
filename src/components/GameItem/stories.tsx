import { Story, Meta } from '@storybook/react/types-6-0';

import GameItem, { GameItemProps } from '.';

export default {
	title: 'GameItem',
	args: {
		img: 'https://source.unsplash.com/user/willianjusten/151x70',
		title: 'Red Dead Redemption',
		price: 'R$ 215,00',
	},
	component: GameItem,
} as Meta;

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />;
export const WithPayment: Story<GameItemProps> = (args) => (
	<GameItem {...args} />
);

WithPayment.args = {
	downloadLink: 'https://wongames.com/download',
	paymentInfo: {
		number: '*** *** **** 4316',
		flag: 'mastercard',
		img: '/img/MasterCard.png',
		purchaseDate: 'Purchase made on 02/01/2021 at 21:09',
	},
};
