import { act, renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { useCart, CartProvider, CartProviderProps } from '.';
import { gamesMock, cartItems } from './mocks';

import { getStorageItem, setStorageItem } from 'utils/localStorage';

describe('useCart()', () => {
	beforeEach(() => window.localStorage.clear());

	it('should return items and its info if there are any', async () => {
		const wrapper = ({ children }: CartProviderProps) => {
			return (
				<MockedProvider mocks={[gamesMock]}>
					<CartProvider>{children}</CartProvider>
				</MockedProvider>
			);
		};

		setStorageItem('cartItems', ['1', '2']);

		const { result, waitForNextUpdate } = renderHook(() => useCart(), {
			wrapper,
		});

		expect(result.current.loading).toBe(true);

		await waitForNextUpdate();

		expect(result.current.loading).toBe(false);

		expect(result.current.items).toStrictEqual(cartItems);
		expect(result.current.quantity).toStrictEqual(2);
		expect(result.current.total).toStrictEqual('$39.98');
	});

	it('should check whether there is an item or not in the cart ', () => {
		const wrapper = ({ children }: CartProviderProps) => {
			return (
				<MockedProvider mocks={[gamesMock]}>
					<CartProvider>{children}</CartProvider>
				</MockedProvider>
			);
		};

		setStorageItem('cartItems', ['1', '2']);

		const { result } = renderHook(() => useCart(), {
			wrapper,
		});

		expect(result.current.isInCart('2')).toBe(true);
		expect(result.current.isInCart('5')).toBe(false);
	});

	it('should add and remove an item from  cart', () => {
		const wrapper = ({ children }: CartProviderProps) => {
			return (
				<MockedProvider mocks={[gamesMock]}>
					<CartProvider>{children}</CartProvider>
				</MockedProvider>
			);
		};

		const { result } = renderHook(() => useCart(), {
			wrapper,
		});

		act(() => result.current.addToCart('15'));

		expect(result.current.quantity).toBe(1);
		expect(getStorageItem('cartItems')).toStrictEqual(['15']);

		act(() => result.current.removeFromCart('15'));

		expect(result.current.quantity).toBe(0);
		expect(getStorageItem('cartItems')).toStrictEqual([]);
	});

	it('should clear the cart', () => {
		const wrapper = ({ children }: CartProviderProps) => {
			return (
				<MockedProvider mocks={[gamesMock]}>
					<CartProvider>{children}</CartProvider>
				</MockedProvider>
			);
		};

		setStorageItem('cartItems', ['1', '2']);

		const { result } = renderHook(() => useCart(), {
			wrapper,
		});

		act(() => result.current.clearCart());

		expect(result.current.quantity).toBe(0);
		expect(getStorageItem('cartItems')).toStrictEqual([]);
	});
});
