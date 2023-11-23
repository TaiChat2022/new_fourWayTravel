import { useDocQuery, useDocsQuery } from '@/hooks/useFirestore';
import ChiTietLayout from '@/layout/chiTiet';
import Footer from '@/pages/Footer';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const chiTiet = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);
	const navigate = useNavigate();

	const { data: luuTru } = useDocsQuery('luuTru');

	//không lặp trùng id chi tiết
	const shuffleArrayWithoutDuplicates = (array, currentItems) => {
		const remainingItems = array.filter((item) => !currentItems.includes(item.id));
		const shuffledArray = [...remainingItems];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	};
	const [currentItemIds, setCurrentItemIds] = useState([]);
	//không lặp trùng id chi tiết

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

	const checkIcon = (tienIch) => {
		if (tienIch === 'Điều hòa') {
			return 'fa-snowflake';
		}
		if (tienIch === 'WiFi') {
			return 'fa-wifi';
		}
		if (tienIch === 'Với đầy đủ bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đường cho xe lăn') {
			return 'fa-wheelchair';
		}
		if (tienIch === 'Thanh toán tại nơi lưu trú') {
			return 'fa-money-bill';
		}
		if (tienIch === 'Với 1 bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đầy đủ dịch vụ') {
			return 'fa-bell-concierge';
		}
		if (tienIch === 'Gia đình') {
			return 'fa-people-roof';
		}
		if (tienIch === 'Biển') {
			return 'fa-water';
		}
		if (tienIch === 'Bể bơi') {
			return 'fa-water-ladder';
		}
		if (tienIch === 'Gồm bữa sáng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đậu xe') {
			return 'fa-square-parking';
		}
		if (tienIch === 'Bồn tắm nước nóng') {
			return 'fa-bath';
		}
		if (tienIch === 'Spa') {
			return 'fa-spa';
		}
		if (tienIch === 'Miễn phí Đổi/Hủy') {
			return 'fa-road-circle-check';
		}
		if (tienIch === 'Chấp nhận vật nuôi') {
			return 'fa-paw';
		}
		if (tienIch === 'Nhà hàng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Phòng Gym') {
			return 'fa-dumbbell';
		}
		return null;
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
				luuTru={luuTru}
				checkIcon={checkIcon}
				navigate={navigate}
				shuffleArrayWithoutDuplicates={shuffleArrayWithoutDuplicates}
				currentItemIds={currentItemIds}
				setCurrentItemIds={setCurrentItemIds}
			/>
			<Footer />
		</>
	);
};

export default chiTiet;
