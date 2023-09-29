import { removeVietnamese } from '@/utils/utils';
import {
	cloneDeep,
	deburr,
	findIndex,
	includes,
	isEmpty,
	isEqual,
	filter as loFilter,
	map,
	orderBy,
	toLower,
	trim,
} from 'lodash';
import { useEffect, useState } from 'react';

export const useFilter = (data) => {
	const [rows, setRows] = useState(data);

	const [filter, setFilter] = useState([]);
	const [search, setSearch] = useState({});
	const [sort, setSort] = useState({});

	const handleAddFilter = (key, value) => {
		const newFilter = cloneDeep(filter || []);
		const index = findIndex(newFilter, { key });

		if (index === -1) {
			newFilter.push({ key, value });
		} else {
			newFilter[index].value = value;
		}

		setFilter(newFilter);
	};

	const handleRemoveFilter = (key) => {
		const newFilter = cloneDeep(filter || []);
		const index = findIndex(newFilter, { key });

		if (index !== -1) {
			newFilter.splice(index, 1);
		}

		setFilter(newFilter);
	};

	const handleClearFilter = () => {
		setFilter([]);
	};

	const getFilterValue = (key) => {
		const index = findIndex(filter, { key });

		if (index !== -1) {
			return filter[index].value;
		}

		return undefined;
	};

	const handleSearch = (key, value) => {
		setSearch({
			key,
			value,
		});
	};

	const handleClearSearch = () => {
		setSearch({});
	};

	const handleSort = (key, type) => {
		setSort({
			key,
			type,
		});
	};

	const handleClearSort = () => {
		setSort({});
	};

	const handleClearAll = () => {
		setFilter([]);
		setSearch({});
		setSort({});
	};

	useEffect(() => {
		let result = cloneDeep(data);

		if (!isEmpty(search) && !isEmpty(search.value) && !isEmpty(search.key)) {
			const searchValue = removeVietnamese(trim(toLower(deburr(search.value))));

			result = loFilter(result, (item) => includes(removeVietnamese(deburr(toLower(item[search.key]))), searchValue));
		}

		if (!isEmpty(filter)) {
			map(filter, ({ key, value }) => {
				result = loFilter(result, (item) => {
					if (isEmpty(item[key])) return false;

					return isEqual(deburr(toLower(value)), deburr(toLower(item[key])));
				});
			});
		}

		if (!isEmpty(sort)) {
			const { key, type } = sort;

			result = orderBy(result, [key], [type]);
		}

		setRows(result);
	}, [search, data, filter, sort]);

	return {
		rows,
		filter,
		addFilter: handleAddFilter,
		removeFilter: handleRemoveFilter,
		clearFilter: handleClearFilter,
		search,
		setSearch: handleSearch,
		clearSearch: handleClearSearch,
		sort,
		setSort: handleSort,
		clearSort: handleClearSort,
		clearAll: handleClearAll,
		getFilterValue,
	};
};
