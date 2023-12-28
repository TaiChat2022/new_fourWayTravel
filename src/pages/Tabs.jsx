import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import { getProByRegion } from '@/utils/utils';
import React from 'react';

function sanitizeAddress(address) {
	if (address === undefined || address === null) {
		return '';
	}
	// Normalize and remove diacritics
	let cleanAddress = address.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	// Remove spaces
	cleanAddress = cleanAddress.replace(/\s+/g, '');
	return cleanAddress;
}
const Tabs = () => {
	const { data: luuTru } = useDocsQuery('luuTru');
	const { data: tinhthanh1 } = useDocsQuery('danhmuc');
	const { data: tinhthanh2 } = useDocsQuery('danhmuc');
	const { data: tinhthanh3 } = useDocsQuery('danhmuc');

	const filteredDanhmucMienBac = React.useMemo(() => {
		return getProByRegion(tinhthanh1, luuTru, 'Miền Bắc');
	}, [tinhthanh1]);
	const filteredDanhmucMienNam = React.useMemo(() => {
		return getProByRegion(tinhthanh2, luuTru, 'Miền Nam');
	}, [tinhthanh2]);
	const filteredDanhmucMienTrung = React.useMemo(() => {
		return getProByRegion(tinhthanh3, luuTru, 'Miền Trung');
	}, [tinhthanh3]);

	return (
		<>
			<BasicTabs
				tinhthanh1={filteredDanhmucMienBac}
				tinhthanh2={filteredDanhmucMienNam}
				tinhthanh3={filteredDanhmucMienTrung}
				luuTru={luuTru}
				sanitizeAddress={sanitizeAddress}
			/>
		</>
	);
};

export default Tabs;
