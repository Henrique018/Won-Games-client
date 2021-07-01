import { createContext, useContext, useEffect, useState } from 'react';
import { getStorageItem } from 'utils/localStorage';

import { useQueryGames } from 'graphql/queries/games';
import { cartMapper } from 'utils/mappers';

const CART_KEY = 'cartItems';

type CartItem = {
	id: string;
	img: string;
	price: string;
	title: string;
};

export type cartContextTypes = {
	items: CartItem[];
};

export const cartContextDefaultValues = {
	items: [],
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

	return (
		<CartContext.Provider
			value={{
				items: cartMapper(data?.games),
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
