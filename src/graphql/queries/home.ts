import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/BannerFragment';
import { GameFragment } from 'graphql/fragments/GameFragment';
import { HighlightFragment } from 'graphql/fragments/HighlightFragment';

export const QUERY_HOME = gql`
	query QueryHome {
		banners {
			...BannerFragment
		}
		newGames: games(
			where: { release_date_lte: "2021-03-14" }
			sort: "release_date:desc"
			limit: 8
		) {
			...GameFragment
		}

		upcomingGames: games(
			where: { release_date_gt: "2021-03-06" }
			sort: "release_date:asc"
			limit: 8
		) {
			...GameFragment
		}

		freeGames: games(where: { price: 0 }, sort: "release_date:asc", limit: 6) {
			...GameFragment
		}

		sections: home {
			newGames {
				title
				highlight {
					...HighlightFragment
				}
			}

			popularGames {
				title
				highlight {
					...HighlightFragment
				}

				games {
					...GameFragment
				}
			}

			upcomingGames {
				title
				highlight {
					...HighlightFragment
				}
			}

			freeGames {
				title
				highlight {
					...HighlightFragment
				}
			}
		}
	}
	${BannerFragment}
	${GameFragment}
	${HighlightFragment}
`;
