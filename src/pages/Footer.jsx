import FooterLayout from '@/layout/Footer';
import Logo1 from '@/assets/img/logoft.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
				Link={Link}
				Logo1={Logo1}
			/>
		</>
	);
};

export default Footer;
