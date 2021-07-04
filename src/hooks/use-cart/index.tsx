import { createContext, useContext, useEffect, useState } from 'react';
import { useQueryGames } from 'graphql/queries/games';

import { cartMapper } from 'utils/mappers';
import { formatPrice } from 'utils/formatPrice';
import { getStorageItem, setStorageItem } from 'utils/localStorage';

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
	loading: boolean;
	isInCart: (id: string) => boolean;
	addToCart: (id: string) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
};

export const cartContextDefaultValues = {
	items: [],
	quantity: 0,
	total: '$0.00',
	loading: false,
	isInCart: () => false,
	addToCart: () => undefined,
	removeFromCart: () => undefined,
	clearCart: () => undefined,
};

export const CartContext = createContext<cartContextTypes>(
	cartContextDefaultValues
);

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

	const { data, loading } = useQueryGames({
		skip: !cartItems?.length,
		variables: { where: { id: cartItems } },
	});

	const total = data?.games.reduce((accumulator, game) => {
		return (accumulator += game.price);
	}, 0);

	function isInCart(id: string) {
		return id ? cartItems.includes(id) : false;
	}

	function saveToCart(cartItems: string[]) {
		setCartItems(cartItems);
		setStorageItem(CART_KEY, cartItems);
	}

	function addToCart(id: string) {
		saveToCart([...cartItems, id]);
	}

	function removeFromCart(id: string) {
		const newItems = cartItems.filter((itemId) => itemId !== id);

		saveToCart(newItems);
	}

	function clearCart() {
		saveToCart([]);
	}

	return (
		<CartContext.Provider
			value={{
				items: cartMapper(data?.games),
				quantity: cartItems.length,
				total: formatPrice(total || 0),
				loading,
				isInCart,
				addToCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
