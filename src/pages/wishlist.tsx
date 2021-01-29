import Wishlist, { WishlistProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: WishlistProps) {
	return <Wishlist {...props} />;
}

export function getStaticProps() {
	return {
		props: {
			games: gamesMock,
			recommendedGames: gamesMock.slice(0, 4),
			recommendedHighlight: highlightMock,
		},
	};
}
