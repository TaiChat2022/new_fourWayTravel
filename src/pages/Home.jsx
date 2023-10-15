import Tabs from '../layout/Tabs';
import Footer from '../layout/Footer';
import SearchBar from '../layout/searchBar';
import Partner from '@/layout/Partner';
import QRcode from '@/layout/QRcode';
import AboutFTW from '@/layout/AboutFTW';
import SearchList from '@/layout/SearchList';
const Home = ({ windowWidth }) => {
	return (
		<>
			<div className="mx-auto mb-7 w-3/4 mt-10">
				<h1 className="text-2xl font-semibold leading-tight font-poppins">
					<span>Chúng tôi so sánh giá phòng từ nhiều trang</span>
				</h1>
			</div>
			<SearchBar windowWidth={windowWidth} />
			<Partner />
			<Tabs />
			<QRcode />
			<AboutFTW />
			<SearchList />
			<Footer windowWidth={windowWidth} />
		</>
	);
};

export default Home;
