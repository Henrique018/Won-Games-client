import {
	parseQueryStringToWhere,
	parseQueryStringToExploreFilter,
} from './filter';

const filterItems = [
	{ name: 'platforms', type: 'checkbox' },
	{ name: 'price_lte', type: 'radio' },
	{ name: 'developers', type: 'checkbox' },
	{ name: 'sort', type: 'radio' },
];

const queryString = {
	developers: 'Bathesda',
	platforms: ['windows', 'linux'],
	price_lte: 100,
	sort: 'price:asc',
};

describe('parseQueryStringToWhere()', () => {
	it('should parse a queryString to a Where format', () => {
		const parsedQuery = parseQueryStringToWhere({ queryString, filterItems });

		expect(parsedQuery).toStrictEqual({
			developers: { name_contains: 'Bathesda' },
			platforms: { name_contains: ['windows', 'linux'] },
			price_lte: 100,
		});
	});
});

describe('parseQueryStringToExploreFilter()', () => {
	it('should parse a queryString to a explore filter format', () => {
		const parsedQuery = parseQueryStringToExploreFilter({
			queryString,
			filterItems,
		});

		expect(parsedQuery).toStrictEqual({
			developers: ['Bathesda'],
			platforms: ['windows', 'linux'],
			price_lte: 100,
			sort: 'price:asc',
		});
	});
});
