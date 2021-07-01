import { QUERY_GAMES } from 'graphql/queries/games';

export const gamesMock = {
	request: {
		query: QUERY_GAMES,
		variables: { where: { id: ['1', '2'] } },
	},
	result: {
		data: {
			games: [
				{
					id: '1',
					name: 'System Shock™ 2',
					slug: 'system-shock-2',
					cover: {
						url:
							'/uploads/the_caligula_effect_overdose_stigma_bundle_173f70653c.jpg',
					},
					developers: [{ name: 'Irrational Games and Looking Glass' }],
					price: 19.99,
					__typename: 'Game',
				},
				{
					id: '2',
					name: 'System Shock™ 2',
					slug: 'system-shock-2',
					cover: {
						url:
							'/uploads/the_caligula_effect_overdose_stigma_bundle_173f70653c.jpg',
					},
					developers: [{ name: 'Irrational Games and Looking Glass' }],
					price: 19.99,
					__typename: 'Game',
				},
			],
			gamesConnection: {
				values: [{ id: '1' }, { id: '2' }],
				__typename: 'GameConnection',
			},
		},
	},
};

export const cartItems = [
	{
		id: '1',
		title: 'System Shock™ 2',
		img:
			'http://localhost:1337/uploads/the_caligula_effect_overdose_stigma_bundle_173f70653c.jpg',
		price: '$19.99',
	},
	{
		id: '2',
		title: 'System Shock™ 2',
		img:
			'http://localhost:1337/uploads/the_caligula_effect_overdose_stigma_bundle_173f70653c.jpg',
		price: '$19.99',
	},
];
