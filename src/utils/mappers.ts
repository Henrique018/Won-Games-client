import { QueryGames_games } from 'graphql/generated/QueryGames';
import {
	QueryHome_banners,
	QueryHome_sections_popularGames_highlight,
	QueryHome_sections_upcomingGames_highlight,
	QueryHome_sections_freeGames_highlight,
} from 'graphql/generated/QueryHome';

export const bannerMapper = (banners: QueryHome_banners[] | null) => {
	return (
		banners &&
		banners.map((banner) => ({
			img: `http://localhost:1337${banner.image?.url}`,
			title: banner.title,
			subtitle: banner.subtitle,
			buttonLabel: banner.button?.label,
			buttonLink: banner.button?.link,
			...(banner.ribbon && {
				ribbonText: banner.ribbon?.text,
				ribbonColor: banner.ribbon?.color,
				ribbonSize: banner.ribbon?.size,
			}),
		}))
	);
};

export const highlightMapper = (
	highlight:
		| QueryHome_sections_popularGames_highlight
		| QueryHome_sections_upcomingGames_highlight
		| QueryHome_sections_freeGames_highlight
		| null
		| undefined
) => {
	return (
		highlight && {
			title: highlight?.title,
			subtitle: highlight.subtitle,
			buttonLabel: highlight.buttonLabel,
			buttonLink: highlight.buttonLink,
			alignment: highlight.alignment,
			floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
			backgroundImage: `http://localhost:1337${highlight.background?.url}`,
		}
	);
};

export const gamesMapper = (
	gamesArray: QueryGames_games[] | null | undefined
) => {
	return (
		gamesArray &&
		gamesArray.map((game) => ({
			title: game.name,
			img: `http://localhost:1337${game.cover?.url}`,
			price: game.price,
			slug: game.slug,
			developer: game.developers[0].name,
		}))
	);
};
