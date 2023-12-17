import '@/assets/css/hotTab.css';
import { useDocsQuery } from '@/hooks/useFirestore';
import ProductLayout from '@/layout/Product';
import { Link } from 'react-router-dom';
const Product = () => {
	const { data: luuTru } = useDocsQuery('luuTru');
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
	const hotLuuTru = luuTru.filter((item) => item.hot === true);
	const khachSanVip = luuTru.filter((item) => item.star === 5);
	return (
		<>
			<ProductLayout
				luuTru={luuTru}
				khachSanVip={khachSanVip}
				hotLuuTru={hotLuuTru}
				renderStars={renderStars}
				Link={Link}
			/>
		</>
	);
};

export default Product;