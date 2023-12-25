import Tabs from '@/pages/Tabs';
import XemGanDay from '@/pages/xemGanDay';
import Product from './Product';
import SearchBar from './SearchBar';
const Home = () => {
	return (
		<>
			<SearchBar />
			<XemGanDay />
			<Tabs />
			<Product />
		</>
	);
};

export default Home;
