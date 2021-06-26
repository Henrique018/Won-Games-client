import { gql } from '@apollo/client';

export const GameFragment = gql`
	fragment GameFragment on Game {
		id
		cover {
			url
		}
		name
		slug
		developers {
			name
		}
		price
	}
`;
