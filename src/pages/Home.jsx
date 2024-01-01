import Tabs from '@/pages/Tabs';
import XemGanDay from '@/pages/xemGanDay';
import Product from './Product';
import SearchBar from './SearchBar';
import banner3 from '../assets/img/bannerQN.jpg';

const Home = () => {
	return (
		<>
			<div className="w-full block z-0 bg-primary-xanh absolute">
				<img
					src={banner3}
					alt=""
					className="w-full h-500 object-cover opacity-50 "
				/>
			</div>
			<SearchBar />
			<XemGanDay />
			<Tabs />
			<Product />
		</>
	);
};

export default Home;
