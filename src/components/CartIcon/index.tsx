import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined';

import * as S from './styles';

export type CartIconProps = {
	quantity?: number;
};

const CartIcon = ({ quantity }: CartIconProps) => {
	return (
		<S.Wrapper>
			{quantity && quantity > 0 ? (
				<S.Badge aria-label="Cart items">{quantity}</S.Badge>
			) : null}
			<ShoppingCartIcon aria-label="Shopping cart" />
		</S.Wrapper>
	);
};

export default CartIcon;
