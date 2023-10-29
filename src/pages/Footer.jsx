import FooterLayout from '@/layout/Footer';
import { useEffect, useState } from 'react';
const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <FooterLayout
                windowWidth={windowWidth}
            />
        </>
    );
};

export default Footer;