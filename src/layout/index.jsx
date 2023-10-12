import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<SearchBar />
		</>
	);
}
