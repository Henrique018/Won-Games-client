import Game, { GameTemplateProps } from 'templates/Game';

import galleryMock from 'components/Gallery/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: GameTemplateProps) {
	return <Game {...props} />;
}

export function getStaticPaths() {
	return {
		paths: [{ params: { slug: 'metal-gear' } }],
		fallback: false,
	};
}

export async function getStaticProps() {
	const descriptionHTML = `
	You are Snake, a government agent on a mission to regain control of a secret nuclear weapons base from terrorist hands.
	<br><br>
	Now the international best-selling PlayStation game comes to the PC with better graphics, added features, and new gameplay modes!  Unlike anything you've played before, Metal Gear Solid introduces a new genre of gaming where ninja-like stealth and cool head are your best weapons for survival
	<br><br>
	<ul>
		<li>
			VR Missions Game included!</li>
			<li>Optional 1st person play mode thrusts you into the action from the moment you suit up.</li>
			<li>Multiple game controller support and improved quick-save function for ease of play.</li>
			</ul>
			<p class="description__copyrights">
      © Konami Digital Entertainment
			</p>
`;
	return {
		props: {
			cover:
				'https://images.gog-statics.com/e7c6ab0d300a11ed9195f0d8bf65954d042a2d4d405d99069edb3fbe3b1906c8_bg_crop_1366x655.jpg',
			gameInfo: {
				title: 'METAL GEAR SOLID',
				price: '49.89',
				description:
					'You are Snake, a government agent on a mission to regain control of a secret nuclear weaponsbase from terrorist hands.',
			},
			gallery: galleryMock,
			description: descriptionHTML,
			gameDetails: {
				developer: 'Konami Digital Entertainment',
				releaseDate: '2000-07-25T23:00:00',
				platforms: ['windows'],
				publisher: 'Konami Digital Entertainment',
				rating: 'BR16',
				genres: ['adventure', 'action', 'stealth'],
			},
			upcomingGames: {
				title: 'Upcoming',
				games: gamesMock,
				highlight: highlightMock,
			},
			recommendedGames: {
				title: 'You may like these games',
				games: gamesMock,
			},
		},
	};
}
