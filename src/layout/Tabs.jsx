import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function TabPanel(props) {
	const { children, value, index } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '75%', margin: 'auto' }}>
			<Box sx={{ fontSize: '20px', fontWeight: 700, marginTop: '50px' }}>Tìm kiếm phổ biến</Box>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab
						sx={{ fontSize: '12px', fontWeight: 600 }}
						label="Thành phố"
						{...a11yProps(0)}
					/>
					<Tab
						sx={{ fontSize: '12px', fontWeight: 600 }}
						label="Điểm đến"
						{...a11yProps(1)}
					/>
				</Tabs>
			</Box>
			<TabPanel
				value={value}
				index={0}
			>
				<div className="grid grid-cols-4 gap-4">
					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Vũng Tàu
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/68/07/68078_v73.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									TP. Hồ Chí Minh
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/68/08/68089_v54.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Đà Lạt
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/68/09/68093_v72.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Nha Trang
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/68/08/68088_v59.jpeg"
								alt=""
								className="image"
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
							/>
						</div>
					</Link>
				</div>
			</TabPanel>
			<TabPanel
				value={value}
				index={1}
			>
				<div className="grid grid-cols-4 gap-4">
					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Vũng Tàu
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/0/217_v79.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									TP. Hồ Chí Minh
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/31/47/31474_v73.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Đà Lạt
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/41/85/418570_v71.jpeg"
								alt=""
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
								className="image"
							/>
						</div>
					</Link>

					<Link
						to=""
						className="box-images"
						style={{ width: '233px', height: '280px' }}
					>
						<div
							className="box-img"
							style={{ width: '100%', height: '100%' }}
						>
							<div
								className="box-content"
								style={{ position: 'absolute', margin: '10px 0px 0px 10px' }}
							>
								<h3
									className="name-travel"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									Nha Trang
								</h3>
								<h3
									className="total-room"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="total-number">1.615</span> Khách sạn
								</h3>
								<h3
									className="medium"
									style={{
										fontSize: '18px',
										fontWeight: 600,
										backgroundColor: '#fff',
										padding: '2px 2px',
										borderRadius: '10px',
										marginBottom: '10px',
										color: '#5c93d1',
									}}
								>
									<span className="medium-number">Trung bình:</span> 54đ
								</h3>
							</div>
							<img
								src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/68/05/68057_v73.jpeg"
								alt=""
								className="image"
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
							/>
						</div>
					</Link>
				</div>
			</TabPanel>
			<TabPanel
				value={value}
				index={2}
			>
				Item Three
			</TabPanel>
		</Box>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
