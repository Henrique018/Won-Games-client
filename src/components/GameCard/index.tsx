import {
	FavoriteBorder,
	Favorite,
	AddShoppingCart,
} from '@styled-icons/material-outlined';

import * as S from './styles';
import Button from 'components/Button';
import Ribbon, { sizeProps, colorProps } from 'components/Ribbon';

export type GameCardProps = {
	img: string;
	title: string;
	developer: string;
	price: string;
	promotionalPrice?: string;
	ribbonText?: React.ReactNode;
	ribbonColor?: colorProps;
	ribbonSize?: sizeProps;
	favorite?: boolean;
	onFav?: () => void;
};

const GameCard = ({
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
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>
			<S.Content>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Developer>{developer}</S.Developer>
				</S.Info>

				<S.FavButton onClick={onFav} role="button">
					{favorite ? (
						<Favorite aria-label="remove from wishlist" />
					) : (
						<FavoriteBorder aria-label="add to wishlist" />
					)}
				</S.FavButton>

				<S.BuyBox>
					{!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
					<S.Price>{promotionalPrice || price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};

export default GameCard;
