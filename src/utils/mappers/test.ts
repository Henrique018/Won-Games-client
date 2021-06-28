import { QueryGames_games } from 'graphql/generated/QueryGames';
import {
	QueryHome_banners,
	QueryHome_sections_popularGames_highlight,
} from 'graphql/generated/QueryHome';
import { bannerMapper, gamesMapper, highlightMapper } from '.';

describe('bannerMapper', () => {
	it('should return the correct structure for the banner component', () => {
		const bannerMock = {
			title: 'Cyberpunk is here!',
			subtitle: 'Join Night City in this open-world, action-adventure story',
			image: {
				url: '/uploads/cyberpunk_2077_44ff1e39f7.jpg',
				alternativeText: null,
			},
			button: {
				label: 'Buy now',
				link: 'http://localhost:3000/game/cyberpunk-2077',
			},
			ribbon: {
				text: '-20%',
				color: 'primary',
				size: 'small',
			},
		} as QueryHome_banners;

		const result = bannerMapper([bannerMock]);

		expect(result).toStrictEqual([
			{
				img: 'http://localhost:1337/uploads/cyberpunk_2077_44ff1e39f7.jpg',
				title: 'Cyberpunk is here!',
				subtitle: 'Join Night City in this open-world, action-adventure story',
				buttonLabel: 'Buy now',
				buttonLink: 'http://localhost:3000/game/cyberpunk-2077',
				ribbonText: '-20%',
				ribbonColor: 'primary',
				ribbonSize: 'small',
			},
		]);
	});
});

describe('gamesMapper', () => {
	it('should return the correct structure for games', () => {
		const gamesMock = {
			id: '10',
			name: 'Cyberpunk 2077',
			price: 200,
			slug: 'Cyberpunk-2077',
			cover: {
				url: '/uploads/cyberpunk_2077_44ff1e39f7.jpg',
			},
			developers: [
				{
					name: 'CD PROJEKT RED',
				},
			],
		} as QueryGames_games;

		const games = gamesMapper([gamesMock]);

		expect(games).toStrictEqual([
			{
				title: 'Cyberpunk 2077',
				slug: 'Cyberpunk-2077',
				img: 'http://localhost:1337/uploads/cyberpunk_2077_44ff1e39f7.jpg',
				developer: 'CD PROJEKT RED',
				price: 200,
			},
		]);
	});
});

describe('gamesMapper', () => {
	it('should return the correct structure for games', () => {
		const highlightMock = {
			title: 'Cyberpunk 2077',
			subtitle: 'Join Night City in this open-world, action-adventure story',
			floatImage: {
				url: '/uploads/cyberpunk_2077_float.jpg',
			},
			alignment: 'left',
			background: {
				url: '/uploads/cyberpunk_2077_44ff1e39f7.jpg',
			},
			buttonLabel: 'buy now',
			buttonLink: 'http://localhost:3000/game/cyberpunk-2077',
		} as QueryHome_sections_popularGames_highlight;

		const games = highlightMapper(highlightMock);

		expect(games).toStrictEqual({
			title: 'Cyberpunk 2077',
			subtitle: 'Join Night City in this open-world, action-adventure story',
			floatImage: 'http://localhost:1337/uploads/cyberpunk_2077_float.jpg',
			backgroundImage:
				'http://localhost:1337/uploads/cyberpunk_2077_44ff1e39f7.jpg',
			alignment: 'left',
			buttonLabel: 'buy now',
			buttonLink: 'http://localhost:3000/game/cyberpunk-2077',
		});
	});
});
