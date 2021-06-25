import { ParsedUrlQueryInput } from 'querystring';
import { ItemProps } from 'components/ExploreSidebar';

type parseArgs = {
	queryString: ParsedUrlQueryInput;
	filterItems: Pick<ItemProps, 'name' | 'type'>[];
};

export const parseQueryStringToWhere = ({
	queryString,
	filterItems,
}: parseArgs) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const obj: any = {};

	Object.keys(queryString)
		.filter((item) => item != 'sort')
		.forEach((key) => {
			const item = filterItems.find((item) => item.name == key);
			const checkbox = item?.type === 'checkbox';

			obj[key] = !checkbox
				? queryString[key]
				: { name_contains: queryString[key] };
		});
	return obj;
};

export const parseQueryStringToExploreFilter = ({
	queryString,
	filterItems,
}: parseArgs) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const obj: any = {};

	Object.keys(queryString).forEach((key) => {
		const item = filterItems.find((item) => item.name == key);
		const checkbox = item?.type === 'checkbox';
		const isArray = Array.isArray(queryString[key]);

		obj[key] = !isArray && checkbox ? [queryString[key]] : queryString[key];
	});
	return obj;
};
