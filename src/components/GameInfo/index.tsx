import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { AddShoppingCart } from '@styled-icons/material-outlined';

import Button from 'components/Button';
import Ribbon from 'components/Ribbon';
import Heading from 'components/Heading';

export type GameInfoProps = {
	title: string;
	description: string;
	price: number;
};

import * as S from './styles';
import { formatPrice } from 'utils/formatPrice';

const GameInfo = ({ title, description, price }: GameInfoProps) => {
	return (
		<S.Wrapper>
			<Heading lineBottom lineColor="primary">
				{title}
			</Heading>
			<Ribbon color="secondary">{formatPrice(price)}</Ribbon>

			<S.Description>{description}</S.Description>

			<S.ButtonsWrapper>
				<Button icon={<AddShoppingCart />}>Add to cart</Button>
				<Button minimal icon={<Heart />}>
					Wishlist
				</Button>
			</S.ButtonsWrapper>
		</S.Wrapper>
	);
};

export default GameInfo;
