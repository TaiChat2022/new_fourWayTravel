import headerBanner from '@/assets/img/bannerQN.jpg';
import Tabs from '@/pages/Tabs';
import XemGanDay from '@/pages/xemGanDay';
import Product from './Product';
import SearchBar from './SearchBar';
const Home = () => {
	return (
		<>
			<div className='w-screen h-400 relative flex items-center justify-center'>
				<img className='w-full h-400 absolute object-cover'
					src={headerBanner} alt="banner header" />
				<SearchBar />
			</div>
			<XemGanDay />
			<Tabs />
			<Product />
		</>
	);
};

export default Home;
