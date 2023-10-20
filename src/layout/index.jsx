import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
import { Tabs } from '@mui/material';

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Tabs />
			<Footer />
			<SearchBar />
			
		</>
	);
}
