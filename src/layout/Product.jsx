import banner1 from '../assets/img/HOTELVIETANH.jpg';
import banner2 from '../assets/img/banner2_pnt.png';
const ProductLayout = ({
	luuTru,
	renderStars,
	Link,
	hotLuuTru,
	// khachSanVip,
	handleAddToRecentlyViewed,
	topDiscountedLuuTru,
}) => {
	return (
		<>
			<img
				src={banner1}
				alt="Banner FourWay Travel"
				className="w-3/4 mt-2 max-h-72 object-cover mx-auto rounded-lg"
			/>
			<div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
				<div className="flex justify-center items-center gap-2">
					<i className="fa-solid fa-fire text-2xl"></i>
					<h1 className="py-5 text-xl font-semibold tracking-wide text-center">
						Những chỗ nghỉ nổi bật được đề xuất cho quý khách
					</h1>
				</div>

				<div className="w-full">
					<div className="md:flex mb-4 gap-2 md:w-full md:flex-wrap">
						{luuTru ? (
							<>
								{hotLuuTru.slice(0, 8).map((item, index) => (
									<>
										<div
											className="md:w-w24 m-auto rounded-tl-2xl transition-all mb-3 h-340 hover:shadow-vv"
											key={index}
										>
											<Link
												to={`/booking/chitiet/${item.id}`}
												onClick={() =>
													handleAddToRecentlyViewed(
														item.id,
														item.danhmuc,
														item.title,
														item.img,
														item.price,
														item.lastViewed,
													)
												}
											>
												<div className="w-full">
													<img
														src={item.img}
														alt={item.title}
														className=" rounded-tl-2xl rounded-br-2xl w-full h-52 mb-0.5"
													/>
													<div className="text-black w-full p-2">
														<p className="text-sm font-semibold tracking-wide mb-0.5 w-full truncate">
															{item.title}
														</p>
														<div className="text-primary-cam text-xs tracking-wider">
															<div className="mb-1">{renderStars(item.star)}</div>
															<div className="flex justify-start gap-2 w-full truncate">
																<i className="fa-solid fa-location-dot text-primary-xanh"></i>
																<p className="text-primary-xanh">{item.diaChi}</p>
															</div>
														</div>
														<div className="flex items-end font-semibold text-base text-primary-cam">
															{item.price.toLocaleString('vi')} VND
														</div>
													</div>
												</div>
											</Link>
										</div>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<div className="mx-auto w-3/4 mt-4 px-0 py-0 ">
				<div className="">
					<img
						src={banner2}
						alt="Banner FourWay Travel"
						className="w-full mt-2 mx-auto max-h-72 object-cover rounded-lg"
					/>
				</div>
				<div className="flex justify-center items-center gap-2">
					<i className="fa-solid fa-ticket text-2xl text-primary-xanh"></i>
					<h1 className="py-5 text-xl font-semibold tracking-wide text-center">
						Những chỗ nghỉ giảm giá hấp dẫn đề xuất cho quý khách
					</h1>
				</div>

				<div className="">
					<div className="md:flex mb-4 gap-2 w-full md:flex-wrap ">
						{luuTru ? (
							<>
								{topDiscountedLuuTru.slice(0, 8).map((item, index) => (
									<>
										<div
											className="md:w-w24 m-auto rounded-tl-2xl transition-all mb-3 h-340 hover:shadow-vv"
											key={index}
										>
											<Link
												to={`/booking/chitiet/${item.id}`}
												onClick={() =>
													handleAddToRecentlyViewed(
														item.id,
														item.danhmuc,
														item.title,
														item.img,
														item.price,
														item.lastViewed,
													)
												}
											>
												<div className="w-full">
													<div className="relative">
														<img
															src={item.img}
															alt={item.title}
															className=" rounded-tl-2xl rounded-br-2xl w-full h-52 mb-0.5"
														/>
														<div className=" absolute top-5 opacity-90 right-0 w-1/3 text-center">
															<div className="bg-primary-cam uppercase font-semibold tracking-wide text-xs py-1 text-white">
																Giảm giá {item.voucher}%
															</div>
														</div>
													</div>
													<div className="text-black w-full p-2">
														<p className="text-sm font-semibold tracking-wide mb-0.5 w-full truncate">
															{item.title}
														</p>
														<div className="text-primary-cam text-xs tracking-wider">
															<div className="mb-1">{renderStars(item.star)}</div>
															<div className="flex justify-start gap-2 w-full  truncate">
																<i className="fa-solid fa-location-dot text-primary-xanh"></i>
																<p className="text-primary-xanh">{item.diaChi}</p>
															</div>
														</div>
														<div className="font-semibold text-base text-primary-cam">
															{item.price.toLocaleString('vi')} VND
														</div>
													</div>
												</div>
											</Link>
										</div>
									</>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>

		</>
	);
};

export default ProductLayout;
