import { getStorageItem, setStorageItem } from '.';

describe('getStorageItem()', () => {
	it('should return an item from localStorage', () => {
		localStorage.setItem('WONGAMES_cardItems', JSON.stringify(['1', '2']));

		const result = getStorageItem('cardItems');
		expect(result).toStrictEqual(['1', '2']);
	});
});

describe('setStorageItem()', () => {
	beforeEach(() => window.localStorage.clear());
	it('should set an item on localStorage', () => {
		setStorageItem('cardItems', ['1', '2', '3']);

		expect(getStorageItem('cardItems')).toStrictEqual(['1', '2', '3']);
	});
});
