import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { useCart, CartProvider, CartProviderProps } from '.';
import { gamesMock, cartItems } from './mocks';

import { setStorageItem } from 'utils/localStorage';

describe('useCart()', () => {
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

		await waitForNextUpdate();

		expect(result.current.items).toStrictEqual(cartItems);
	});
});
