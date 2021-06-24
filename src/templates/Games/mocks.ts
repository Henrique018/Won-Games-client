import { QUERY_GAMES } from 'graphql/queries/games';

export const gamesMock = {
	request: {
		query: QUERY_GAMES,
		variables: { limit: 15 },
	},
	result: {
		data: {
			games: [
				{
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
		},
	},
};

export const seeMoreMock = {
	request: {
		query: QUERY_GAMES,
		variables: { limit: 15, start: 1 },
	},
	result: {
		data: {
			games: [
				{
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
		},
	},
};
