import React from 'react';
import { Link } from 'react-router-dom';
import { useDocsQuery } from '../hooks/firestore';
import LuuTruUI from './layout/luuTruUI';
import EndowUi from './endow';
import Accommodation from './accommodation';
const LuuTru = () => {
	const { data: luuTru_list } = useDocsQuery('luuTru');

	const getRatingText = (star) => {
		if (star > 4) return 'Xuất sắc';
		if (star > 3) return 'Tuyệt vời';
		if (star === 3) return 'Bình thường';
		return 'Giá rẻ';
	};
	return (
		<>
			<EndowUi />
			<Accommodation />
			<LuuTruUI
				luuTru_list={luuTru_list}
				getRatingText={getRatingText}
				Link={Link}
			/>
			<list />
		</>
	);
};

export default LuuTru;
