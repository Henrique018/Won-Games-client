import { QUERY_GAMES } from 'graphql/queries/games';

export const noGamesMock = {
	request: {
		query: QUERY_GAMES,
		variables: { limit: 15, where: {} },
	},
	result: {
		data: {
			games: [],
			gamesConnection: {
				values: [],
				__typename: 'GameConnection',
			},
		},
	},
};

export const gamesMock = {
	request: {
		query: QUERY_GAMES,
		variables: { limit: 15, where: {} },
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
			],
			gamesConnection: {
				values: [{ id: '1' }, { id: '2' }],
				__typename: 'GameConnection',
			},
		},
	},
};

export const seeMoreMock = {
	request: {
		query: QUERY_GAMES,
		variables: { limit: 15, start: 1, where: {} },
	},
	result: {
		data: {
			games: [
				{
					id: '2',
					name: 'see more game',
					slug: 'see-more-game',
					cover: {
						url: '/uploads/see-more-sample.jpg',
					},
					developers: [{ name: 'sample developer' }],
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
