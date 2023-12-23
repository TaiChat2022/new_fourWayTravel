import Footer from '@/pages/Footer';
import Tabs from '@/pages/Tabs';
import XemGanDay from '@/pages/xemGanDay';
import Product from './Product';
import SearchBar from './SearchBar';
const Home = () => {
	return (
		<>
			{/* <div className="mx-auto mb-7 w-3/4 mt-4">
				<h1 className="text-2xl font-semibold leading-tight font-poppins">
					<span>Chúng tôi so sánh giá phòng từ nhiều trang</span>
				</h1>
			</div> */}
			<SearchBar />
			<XemGanDay />
			<Tabs />
			{/* <QRcode /> */}
			<Product />
			{/* <Partner /> */}
			{/* <ListKhuVuc /> */}
			<Footer />
		</>
	);
};

export default Home;
