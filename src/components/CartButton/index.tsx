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
	const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart';
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
			{hasText && ButtonText}
		</Button>
	);
};

export default CartButton;
