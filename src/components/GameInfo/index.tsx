import { Heart } from '@styled-icons/boxicons-regular/Heart';

import CartButton from 'components/CartButton';
import Button from 'components/Button';
import Ribbon from 'components/Ribbon';
import Heading from 'components/Heading';

export type GameInfoProps = {
	id: string;
	title: string;
	description: string;
	price: number;
};

import * as S from './styles';
import { formatPrice } from 'utils/formatPrice';

const GameInfo = ({ id, title, description, price }: GameInfoProps) => {
	return (
		<S.Wrapper>
			<Heading lineBottom lineColor="primary">
				{title}
			</Heading>
			<Ribbon color="secondary">{formatPrice(price)}</Ribbon>

			<S.Description>{description}</S.Description>

			<S.ButtonsWrapper>
				<CartButton id={id} size="large" hasText />
				<Button minimal icon={<Heart />}>
					Wishlist
				</Button>
			</S.ButtonsWrapper>
		</S.Wrapper>
	);
};

export default GameInfo;
