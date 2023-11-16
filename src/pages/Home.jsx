import AboutFTW from '@/layout/AboutFTW';
import Partner from '@/layout/Partner';
import QRcode from '@/layout/QRcode';
import Footer from '@/pages/Footer';
import Tabs from '@/pages/Tabs';
import ListKhuVuc from './ListKhuVuc';
import Product from './Product';
import SearchBar from './SearchBar';
import XemGanDay from './xemGanDay';

const Home = () => {
	return (
		<>
			{/* <div className="mx-auto mb-7 w-3/4 mt-10">
				<h1 className="text-2xl font-semibold leading-tight font-poppins">
					<span>Chúng tôi so sánh giá phòng từ nhiều trang</span>
				</h1>
			</div> */}
			<SearchBar />
			<Partner />
			<XemGanDay />
			<Tabs />
			<QRcode />
			<Product />
			<AboutFTW />
			<ListKhuVuc />
			{/* <SearchList /> */}
			<Footer />
		</>
	);
};

export default Home;
