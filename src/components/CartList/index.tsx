import Link from 'next/link';

import Empty from 'components/Empty';
import Button from 'components/Button';
import GameItem, { GameItemProps } from 'components/GameItem';
import * as S from './styles';

export type CartListProps = {
	items?: GameItemProps[];
	total?: string;
	hasButton?: boolean;
};
const CartList = ({ items = [], total, hasButton = false }: CartListProps) => {
	return (
		<S.Wrapper isEmpty={!items.length}>
			{items?.length ? (
				<>
					{items?.map((item, index) => (
						<GameItem key={`game - ${index}`} {...item} />
					))}

					<S.Footer>
						{!hasButton && <span>Total:</span>}
						<S.Total>{total}</S.Total>
						{hasButton && (
							<Link href="/cart" passHref>
								<Button as="a">Buy it now!</Button>
							</Link>
						)}
					</S.Footer>
				</>
			) : (
				<Empty
					title="Your cart is empty"
					description="nothing to see here yet, explore the catalog to see fun games"
					hasLink
				/>
			)}
		</S.Wrapper>
	);
};

export default CartList;
