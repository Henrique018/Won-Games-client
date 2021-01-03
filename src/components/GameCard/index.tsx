import {
	FavoriteBorder,
	AddShoppingCart,
} from '@styled-icons/material-outlined';

import * as S from './styles';
import Button from 'components/Button';

export type GameCardProps = {
	img: string;
	title: string;
	developer: string;
	price: string;
};

const GameCard = ({ img, title, developer, price }: GameCardProps) => {
	return (
		<S.Wrapper>
			<S.ImageBox>
				<img src={img} alt={title} />
			</S.ImageBox>
			<S.Content>
				<S.Info>
					<S.Title>{title}</S.Title>
					<S.Developer>{developer}</S.Developer>
				</S.Info>

				<S.FavButton role="button">
					<FavoriteBorder aria-label="add to wishlist" />
				</S.FavButton>

				<S.BuyBox>
					<S.Price>{price}</S.Price>
					<Button icon={<AddShoppingCart />} size="small" />
				</S.BuyBox>
			</S.Content>
		</S.Wrapper>
	);
};

export default GameCard;
