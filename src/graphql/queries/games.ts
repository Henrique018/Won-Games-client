import { gql } from '@apollo/client';

export const QUERY_GAMES = gql`
	query QueryGames($limit: Int!) {
		games(limit: $limit) {
			name
			slug
			cover {
				url
			}
			developers {
				name
			}
			price
		}
	}
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
