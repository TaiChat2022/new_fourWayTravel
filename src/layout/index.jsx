import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';

import Support from '../layout/Support';
import Booking from './Booking';
export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			{/* <Support /> */}
			<Booking />
			<Footer />
			<SearchBar />
		</>
	);
}
