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

				<div className="">
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


			<div id="indicators-carousel" className="relative w-full" data-carousel="static">
				{/* Carousel wrapper */}
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					{/* Item 1 */}
					<div className="hidden duration-700 ease-in-out" data-carousel-item="active">
						<img src="/docs/images/carousel/carousel-1.svg"
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
						SLide 1
					</div>
					{/* Item 2  */}
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img src="/docs/images/carousel/carousel-2.svg"
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
						SLide 2
					</div>

				</div>
				{/* Slider indicators */}
				<div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
					<button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
					{/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
				</div>

				{/* Slider controls */}
				<button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						{/* <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
						</svg> */}
						{`<`}
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						{/* <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
						</svg> */}
						{`>`}
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

		</>
	);
};

export default ProductLayout;
