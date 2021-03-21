import { gql } from '@apollo/client';

export const GameFragment = gql`
	fragment GameFragment on Game {
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
