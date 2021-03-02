import { gql } from '@apollo/client';

export const BannerFragment = gql`
	fragment BannerFragment on Banner {
		title
		subtitle
		image {
			url
			alternativeText
		}
		button {
			label
			link
		}
		ribbon {
			text
			color
			size
		}
	}
`;
