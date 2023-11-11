import { useDocQuery } from '@/hooks/useFirestore';
import ChiTietLayout from '@/layout/chiTiet';
import Footer from '@/pages/Footer';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { useDocsQuery } from '@/hooks/useFirestore';
import SearchBar from './SearchBar';

const chiTiet = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);

	const { data: luuTru } = useDocsQuery('luuTru');

	const getRatingText = (star) => {
		if (star > 4) return 'Xuất sắc';
		if (star > 3) return 'Tuyệt vời';
		if (star === 3) return 'Bình thường';
		return 'Giá rẻ';
	};
	const renderStars = (soSao) => {
		let stars = [];
		for (let i = 0; i < soSao; i++) {
			stars.push(
				<i
					key={i}
					className="fa-solid fa-star text-white-100"
				></i>,
			);
		}
		return stars;
	};

	//tiện ích
	const amenityIcons = {
		'Điều hòa': 'fa-snowflake',
		pool: 'fa-swimming-pool',
		wifi: 'fa-wifi',

		// Add more amenities and their corresponding icons as needed
	};

	return (
		<>
			<Header />
			<SearchBar />
			<ChiTietLayout
				data={data}
				getRatingText={getRatingText}
				renderStars={renderStars}
				Link={Link}
				amenityIcons={amenityIcons}
				luuTru={luuTru}
			/>
			<Footer />
		</>
	);
};

export default chiTiet;
