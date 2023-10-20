import Tabs from '../layout/Tabs';
import Footer from '../layout/Footer';
import SearchBar from '../layout/searchBar';
const Home = ({ windowWidth }) => {
	return (
		<>
			<div className="w-3/4 mx-auto mt-10 mb-7">
				<h1 className="text-2xl font-semibold leading-tight font-poppins">
					<span>Chúng tôi so sánh giá phòng từ nhiều trang</span>
				</h1>
			</div>
			<SearchBar windowWidth={windowWidth} />
			<Tabs />
			<Footer windowWidth={windowWidth} />
		</>
	);
};

export default Home;
