import ListLuutruLayout from '@/layout/ListLuutru';
import { Link } from 'react-router-dom';
import Header from '../pages/Header';
const ListLuuTru = () => {
    return (
        <>
            <Header />
            <ListLuutruLayout
                Link={Link}
            />
        </>
    );
};

export default ListLuuTru;