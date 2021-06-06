import { gql } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/GameFragment';
import { HighlightFragment } from 'graphql/fragments/HighlightFragment';

export const QUERY_RECOMMENDED = gql`
	query QueryRecommended {
		recommended {
			section {
				title
				highlight {
					...HighlightFragment
				}
				games {
					...GameFragment
				}
			}
		}
	}
	${GameFragment}
	${HighlightFragment}
`;
