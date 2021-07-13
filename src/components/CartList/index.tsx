import Link from 'next/link';

import { useCart } from 'hooks/use-cart';

import Empty from 'components/Empty';
import Loader from 'components/Loader';
import Button from 'components/Button';
import GameItem from 'components/GameItem';

import * as S from './styles';

export type CartListProps = {
	hasButton?: boolean;
};
const CartList = ({ hasButton = false }: CartListProps) => {
	const { items, total, loading } = useCart();

	if (loading)
		return (
			<S.Loading>
				<Loader />;
			</S.Loading>
		);

	return (
		<S.Wrapper isEmpty={!items.length}>
			{items?.length ? (
				<>
					<S.GamesList>
						{items?.map((item, index) => (
							<GameItem key={`game - ${index}`} {...item} />
						))}
					</S.GamesList>

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
