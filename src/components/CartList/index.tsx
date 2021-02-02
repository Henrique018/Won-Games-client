import GameItem, { GameItemProps } from 'components/GameItem';
import * as S from './styles';

export type CartListProps = {
	items: GameItemProps[];
	total: string;
};
const CartList = ({ items, total }: CartListProps) => {
	return (
		<S.Wrapper>
			{items?.map((item, index) => (
				<GameItem key={`game - ${index}`} {...item} />
			))}

			<S.Footer>
				Total: <S.Total>{total}</S.Total>
			</S.Footer>
		</S.Wrapper>
	);
};

export default CartList;
