import { gql, QueryHookOptions, useQuery } from '@apollo/client';

import { GameFragment } from 'graphql/fragments/GameFragment';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

export const QUERY_GAMES = gql`
	query QueryGames($limit: Int!, $start: Int) {
		games(limit: $limit, start: $start) {
			...GameFragment
		}
	}
	${GameFragment}
`;

export const QUERY_GAME_BY_SLUG = gql`
	query QueryGameBySlug($slug: String!) {
		games(where: { slug: $slug }) {
			name
			short_description
			price
			description
			release_date
			rating
			gallery {
				url
				label: alternativeText
			}
			cover {
				url
				alternativeText
			}
			categories {
				name
			}
			developers {
				name
			}
			publisher {
				name
			}
			platforms {
				name
			}
		}
	}
`;

export function useQueryGames(
	options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
	return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options);
}
