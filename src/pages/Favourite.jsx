import FavouriteLayout from '@/layout/Favourite';
import { Link } from 'react-router-dom';
import Header from '../pages/Header';
const Favourite = () => {
    return (
        <>
            <Header />
            <FavouriteLayout
                Link={Link}
            />
        </>
    );
};

export default Favourite;