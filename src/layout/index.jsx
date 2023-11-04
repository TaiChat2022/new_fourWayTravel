import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
import { Tabs } from '@mui/material';
import Partner from './Partner';
import QRcode from './QRcode';
import AboutFTW from './AboutFTW';
import SearchList from './SearchList';
export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Partner />
			<Tabs />
			<QRcode />
			<AboutFTW />
			<SearchList />
			<Footer />
			<SearchBar />
		</>
	);
}
