import {
	AddShoppingCart,
	RemoveShoppingCart,
} from '@styled-icons/material-outlined';

import { useCart } from 'hooks/use-cart';
import Button from 'components/Button';

type CartButtonProps = {
	id: string;
	size?: 'large' | 'medium' | 'small';
	hasText?: boolean;
};
const CartButton = ({ id, hasText, size }: CartButtonProps) => {
	const { isInCart, addToCart, removeFromCart } = useCart();
	return (
		<Button
			icon={
				isInCart(id) ? (
					<RemoveShoppingCart aria-label="remove from cart" />
				) : (
					<AddShoppingCart aria-label="add to cart" />
				)
			}
			size={size}
			onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
		>
			{hasText && isInCart(id) ? 'Remove from cart' : 'Add to cart'}
		</Button>
	);
};

export default CartButton;
