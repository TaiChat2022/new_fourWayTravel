import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Link } from 'react-router-dom';
import '../../public/css/Tabs.css';

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
				<Box sx={{ p: 2 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const slides = [
	{
		name: 'Cát Bà',
		imageUrl:
			'https://vcdn-vnexpress.vnecdn.net/2023/07/03/catb-9687-1688394483.jpg',
	},
	{
		name: 'Sa Pa',
		imageUrl:
			'https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-bac/sa-pa/du-lich-sapa-tet-nguyen-dan-2023.jpg',
	},
	{
		name: 'Hà Nội',
		imageUrl:
			'https://static.vinwonders.com/2022/07/dia-diem-du-lich-ha-noi-6.jpg',
	},
	{
		name: 'Mộc Châu',
		imageUrl:
			'https://family-64-home-mo-c-chau-moc-chau.hotelmix.vn/data/Photos/OriginalPhoto/13039/1303996/1303996564/Family-64-Home-Mo-C-Chau-Moc-Chau-Exterior.JPEG',
	},
];
export default function BasicTabs({
	currentSlideIndex, handlePrevious, handleNext
}) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box className="container mt-0" >
				<Box className="search-title">Tìm kiếm phổ biến</Box>
				<Box className="search-tabs ">
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							style={{ fontSize: '12px', fontWeight: '600' }}
							className="tabs"
							label="Miền bắc"
							{...a11yProps(0)}
						/>
						<Tab
							style={{ fontSize: '12px', fontWeight: '600' }}
							className="tabs"
							label="Miền trung"
							{...a11yProps(1)}
						/>
						<Tab
							style={{ fontSize: '12px', fontWeight: '600' }}
							className="tabs"
							label="Miền nam"
							{...a11yProps(2)}
						/>
					</Tabs>
				</Box>
				<TabPanel
					value={value}
					index={0}
				>
					<div className="flex w-full overflow-x-scroll overflow-y-hidden h-80 max-h-72 relative pb-2">
						{slides.map((slide, index) => (
							<Link to="" className="w-1/3 grow-0 shrink-0 mr-4" key={index}>
								<div className="h-full">
									<div className="box-content text-xs w-32 2xl:text-md flex flex-col gap-y-4">
										<h3 className="name-travel">{slide.name}</h3>
										<h3 className="total-room">
											<span className="total-number">1.615</span>
											<span> Khách sạn</span>
										</h3>
									</div>
									<img src={slide.imageUrl} alt="" className="image" />
								</div>
							</Link>
						))}
					</div>
					<div className="flex justify-between">
						<Button onClick={handlePrevious}>Previous</Button>
						<Button onClick={handleNext}>Next</Button>
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
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Quy Nhơn</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://grandcenterquynhon.com.vn/images/tt_duan1a.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Đà Nắng</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://media.baodautu.vn/Images/chicuong/2022/06/24/16-Bana_Hilss.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Nha Trang</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://baodienbienphu.com.vn/Uploads/images/uthong85/2023/02/14/NT777837387837833.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Bình Thuận</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://binhthuan.gov.vn/Images/Dangtai/Thang122019/3012/tin7/image003.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>
					</div>
				</TabPanel>
				<TabPanel
					value={value}
					index={2}
					className=""
				>
					<div className="grid grid-cols-4 gap-4">
						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Vũng Tàu</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Kiên Giang</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://xdcs.cdnchinhphu.vn/446259493575335936/2023/9/20/kiengiang2-169518441550478692841.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">Cần Thơ</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://vcdn-kinhdoanh.vnecdn.net/2020/10/19/121774598-699865344269296-8580-6401-9195-1603091427.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>

						<Link
							to=""
							className="box-images"
						>
							<div className="box-img">
								<div className="box-content">
									<h3 className="name-travel">TP. Hồ Chí Minh</h3>
									<h3 className="total-room">
										<span className="total-number">1.615</span> Khách sạn
									</h3>
								</div>
								<img
									src="https://media.vneconomy.vn/w800/images/upload/2022/07/13/dang-ky-bao-ho-nhan-hieu-tai-thanh-pho-ho-chi-minh.jpg"
									alt=""
									className="image"
								/>
							</div>
						</Link>
					</div>
				</TabPanel>
			</Box>
		</>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
