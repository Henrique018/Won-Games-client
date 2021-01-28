import Game, { GameTemplateProps } from 'templates/Game';

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
	return {
		props: {
			cover:
				'https://images.gog-statics.com/e7c6ab0d300a11ed9195f0d8bf65954d042a2d4d405d99069edb3fbe3b1906c8_bg_crop_1366x655.jpg',
		},
	};
}
