import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/BannerFragment';

export const QUERY_HOME = gql`
	query QueryHome {
		banners {
			...BannerFragment
		}
	}
	${BannerFragment}
`;
