import { useDocsQuery } from '@/hooks/useFirestore';
import ProductLayout from '@/layout/Product';

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
	return (
		<>
			<ProductLayout
				luuTru={luuTru}
				renderStars={renderStars}
			/>
		</>
	);
};

export default Product;