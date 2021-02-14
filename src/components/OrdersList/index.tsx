import Empty from 'components/Empty';
import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from 'components/Heading';
import * as S from './styles';

export type OrdersProps = {
	items?: GameItemProps[];
};

const OrdersList = ({ items }: OrdersProps) => {
	return (
		<S.Wrapper>
			<Heading lineBottom color="black" size="small">
				My orders
			</Heading>

			{items?.length ? (
				items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
			) : (
				<Empty
					title="You have no orders yet"
					description="Go back to the store and explore great offers"
					hasLink
				/>
			)}
		</S.Wrapper>
	);
};

export default OrdersList;
