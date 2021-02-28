import Link from 'next/link';
import {
	FavoriteBorder,
	Favorite,
	AddShoppingCart,
} from '@styled-icons/material-outlined';

import * as S from './styles';
import Button from 'components/Button';
import Ribbon, { sizeProps, colorProps } from 'components/Ribbon';
import { formatPrice } from 'utils/formatPrice';

export type GameCardProps = {
	slug: string;
	img: string;
	title: string;
	developer: string;
	price: number;
	promotionalPrice?: number;
	ribbonText?: React.ReactNode;
	ribbonColor?: colorProps;
	ribbonSize?: sizeProps;
	favorite?: boolean;
	onFav?: () => void;
};

const GameCard = ({
	slug,
	img,
	title,
	developer,
	price,
	promotionalPrice,
	ribbonText,
	ribbonColor = 'primary',
	ribbonSize,
	favorite = false,
	onFav,
}: GameCardProps) => {
	return (
		<S.Wrapper>
			{!!ribbonText && (
				<Ribbon size={ribbonSize} color={ribbonColor}>
					{ribbonText}
				</Ribbon>
			)}
			<Link href={`game/${slug}`} passHref>
				<S.ImageBox>
					<img src={img} alt={title} />
				</S.ImageBox>
			</Link>
			<S.Content>
				<Link href={`game/${slug}`} passHref>
					<S.Info>
						<S.Title>{title}</S.Title>
						<S.Developer>{developer}</S.Developer>
					</S.Info>
				</Link>
				<S.FavButton onClick={onFav} role="button">
					{favorite ? (
						<Favorite aria-label="remove from wishlist" />
					) : (
						<FavoriteBorder aria-label="add to wishlist" />
					)}
				</S.FavButton>

				<S.BuyBox>
					{!!promotionalPrice && (
						<S.Price isPromotional>{formatPrice(price)}</S.Price>
					)}
					<S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};

export default GameCard;
