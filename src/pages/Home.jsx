import Tabs from '../layout/Tabs';
import Footer from '../layout/Footer';
import SearchBar from '../layout/searchBar';
import Booking from '@/layout/Booking';
import Support from '@/layout/Support';
const Home = ({ windowWidth }) => {
	return (
		<>
			<div className="mx-auto mb-5 px-6 2xs:px-8 l:px-14 2xl:px-5 w-3/4 mt-4">
				<h1 className="text-3xl font-bold leading-tight">
					<span>Chúng tôi so sánh giá phòng từ nhiều trang</span>
				</h1>
			</div>
			<SearchBar windowWidth={windowWidth} />
			{/* <Support /> */}
			<Booking />
			<Footer windowWidth={windowWidth} />
		</>
	);
};

export default Home;
