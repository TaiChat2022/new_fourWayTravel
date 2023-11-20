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
			<SearchBar />
			<XemGanDay />
			<Tabs />
			<QRcode />
			<Product />
			<Partner />
			<ListKhuVuc />
			<Footer />
		</>
	);
};

export default Home;
