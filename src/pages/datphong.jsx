import DatphongLayout from '@/layout/datphong';
import Footer from '@/pages/Footer';
import Header from './Header';
import { useDocQuery } from '@/hooks/useFirestore';
import { Link, useParams } from 'react-router-dom';

// import SearchBar from './SearchBar';
const Datphong = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);
	return (
		<>
			<Header />
			{/* <SearchBar /> */}
			<DatphongLayout data={data} />
			<Footer />
		</>
	);
};

export default Datphong;
