import GamesTemplate, { GamesTemplateProps } from 'templates/Games';

import filterItemsMock from 'components/ExploreSidebar/mock';
import gameCardsMock from 'components/GameCardSlider/mock';

export default function GamesPage(props: GamesTemplateProps) {
	return <GamesTemplate {...props} />;
}

export function getServerSideProps() {
	return {
		props: {
			games: gameCardsMock,
			filterItems: filterItemsMock,
		},
	};
}
