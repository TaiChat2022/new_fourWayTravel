import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Home />
        </>
    );
};

export default Main;