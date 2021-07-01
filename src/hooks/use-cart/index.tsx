import { createContext, useContext, useEffect, useState } from 'react';
import { getStorageItem } from 'utils/localStorage';

import { useQueryGames } from 'graphql/queries/games';
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
				items: data?.games.map((game) => ({
					id: game.id,
					img: `http://localhost:1337${game.cover?.url}`,
					price: formatPrice(game.price),
					title: game.name,
				})),
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
