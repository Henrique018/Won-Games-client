import { createContext, useContext, useEffect, useState } from 'react';
import { getStorageItem } from 'utils/localStorage';

import { useQueryGames } from 'graphql/queries/games';
import { cartMapper } from 'utils/mappers';
import { formatPrice } from 'utils/formatPrice';

const CART_KEY = 'cartItems';

type CartItem = {
	id: string;
	img: string;
	price: string;
	title: string;
};

export type cartContextTypes = {
	items: CartItem[];
	quantity: number;
	total: string;
};

export const cartContextDefaultValues = {
	items: [],
	quantity: 0,
	total: '$0.00',
};

const CartContext = createContext<cartContextTypes>(cartContextDefaultValues);

export type CartProviderProps = {
	children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useState<string[]>([]);

	useEffect(() => {
		const data = getStorageItem(CART_KEY);
		if (data) {
			setCartItems(data);
		}
	}, []);

	const { data } = useQueryGames({
		skip: !cartItems?.length,
		variables: { where: { id: cartItems } },
	});

	const total = data?.games.reduce((accumulator, game) => {
		return (accumulator += game.price);
	}, 0);

	return (
		<CartContext.Provider
			value={{
				items: cartMapper(data?.games),
				quantity: cartItems.length,
				total: formatPrice(total || 0),
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
