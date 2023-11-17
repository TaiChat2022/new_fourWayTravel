import 'flowbite';

const BookingLayout = ({
	renderStars,
	luuTru,
	getRatingText,
	Link,
	handleFavoriteChange,
	Checkbox,
	labelFavorite,
	userFavorites,
	handleAddToRecentlyViewed,
	Modal,
	handleClose,
	handleOpen,
	open,
	selectedAmenity,
}) => {
	return (
		<>
			<div className=" w-3/4 mx-auto">
				<div className="">
					<img
						src="https://img.pikbest.com/backgrounds/20210920/booking-luxury-hotel-banner-background-eps_6126596.jpg!bw700"
						alt=""
						className="w-full h-80"
					/>
				</div>
				<h1 className="mt-4 w-full font-semibold text-xl tracking-normal mb-5">
					Khách sạn tại Đà Lạt <span>(Tỉnh Lâm Đồng, Việt Nam)</span>
				</h1>
				{luuTru ? (
					<>
						{luuTru.map((item) => (
							<>
								<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product">
									<div
										key={item.id}
										className="grid grid-cols-1 md:grid-cols-5 gap-8"
									>
										<div className="col-span-1">
											<img
												src={item.img}
												alt={item.title}
												className="rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg w-full h-48 md:h-full object-cover"
											/>
										</div>
										<div className="ml-3 md:ml-0 col-span-1 md:col-span-2">
											<div className="mt-2">
												<div className="flex items-center justify-between">
													<Link
														to={`/booking/${item.id}`}
														className="font-semibold text-lg text-red-600"
														onClick={() =>
															handleAddToRecentlyViewed(
																item.id,
																item.danhmuc,
																item.title,
																item.img,
															)
														}
													>
														{item.title}
													</Link>
													{/* <button
														onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img)}
													>
														Đếm
													</button> */}
													{/* Yêu thích */}
													{userFavorites.some((favorite) => favorite.id === item.id) ? (
														<>
															<Checkbox
																{...labelFavorite}
																onChange={() => handleFavoriteChange((item.id, item))}
																icon={
																	<i className="fa-solid fa-heart text-red-500"></i>
																}
																checkedIcon={<i className="fa-regular fa-heart"></i>}
															/>
														</>
													) : (
														<>
															<Checkbox
																{...labelFavorite}
																onChange={() => handleFavoriteChange((item.id, item))}
																icon={<i className="fa-regular fa-heart"></i>}
																checkedIcon={
																	<i className="fa-solid fa-heart text-red-500"></i>
																}
															/>
														</>
													)}
												</div>
												<p className="text-xm text-gray-300 flex items-center">
													{/* <Rating1></Rating1> */}

													<span className="text-mm mr-2 font-light text-slate-950">
														Khách sạn
													</span>
													{renderStars(item.star)}
												</p>
											</div>
											<div className="flex  mt-2 text-sm">
												<p className="text-mm font-200">
													Cách trung tâm thành phố <span>0.0km</span>
												</p>
											</div>
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className="font-semibold text-mm mr-1">
													<i className="fa-solid fa-star mb-1 mr-1 text-gray-300"></i>
													{item.star} - {getRatingText(item.star)}
												</span>
												<p className="text-mm">(30 đánh giá)</p>
											</div>
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className=" text-mm mr-1">
													<span className="font-semibold"> Địa chỉ: </span>
													{item.diaChi}
												</span>
											</div>
											{/* <span className="text-sm font-semibold">Tiện ích:</span> */}
											{/* <button
												onClick={handleOpen}
												className="border-2 p-1 text-sm font-semibold rounded"
											>
												Tiện ích
											</button> */}
											<div className="flex flex-wrap gap-2 mb-2 mt-1">
												{item.tienich.map((value, index) => (
													<div
														key={index}
														className="w-auto h-6 border-none bg-gray-200 rounded-lg  "
													>
														<div className="flex justify-start items-center   text-mm gap-1">
															<div className="p-1 text-xx">{value} </div>
														</div>
													</div>
												))}
											</div>
										</div>
										<div className="block m-2 col-span-1 md:col-span-2 relative">
											<div className="w-full rounded-lg  border-none bg-stone-100">
												<div className="absolute top-2 right-0 w-auto -translate-x-2.5 py-0.5 px-2 text-center text-xx font-bold text-red-600 pt-2">
													<span className="bg-red-600 text-white border-2 rounded-vch border-red-600 px-1.5 py-0.5">
														18%
													</span>
													<span className="bg-white w-auto border-solid border-2 rounded-vchh border-red-600 px-1.5 py-0.5 text-black h-full ">
														Rẻ hơn mọi khi
													</span>
												</div>
												<div className="flex items-center w-full mt-2 pt-2 ml-2">
													<span className="text-mm ml-1 font-bold">Agoda</span>
												</div>
												<div className="service flex gap-2 justify-between ">
													<div className="ml-2 mt-2">
														<i className="fa-solid fa-check text-mm  mr-1"></i>
														<span className="text-mm  font-semibold">Gồm bữa sáng</span>
													</div>
													<div className="mr-6  mt-1  rounded-xl hover:text-orange-500">
														<i className="fa-solid fa-check text-mm  mr-1"></i>
														<button
															onClick={handleOpen}
															className="  text-mm font-semibold rounded "
														>
															Tiện ích khác
														</button>
													</div>
												</div>
												<div className=" ml-3 mr-2 mb-2 pb-2 ">
													<span className="flex justify-center text-sm md:text-md mt-1 font-semibold  ">
														{item.price.toLocaleString('vi')}đ
													</span>
												</div>
											</div>
											<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-orange-600 hover:bg-orange-700">
												<Link
													to={`/booking/${item.id}`}
													className="w-full flex items-center justify-center h-11 rounded-md"
												>
													<p className="text-white font-light text-sm">Xem chi tiết</p>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</>
						))}
					</>
				) : (
					<>
						<p>Không tìm được phòng</p>
					</>
				)}
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				className="bg-white backdrop-1 opacity-90"
			>
				<div className="bg-white w-1/3 m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-none rounded-md p-6 opacity-100">
					<h1 className="text-2xl font-bold">
						{selectedAmenity ? `Tất cả các tiện ích:` : 'Chọn một tiện ích'}
					</h1>
					<div className="mt-2">
						<div className="flex flex-wrap gap-2 mb-2">
							{luuTru.map((item) => (
								<div key={item.id}>
									{item.tienich.map((value, index) => (
										<div
											key={index}
											className={`w-auto h-8 border-none rounded-lg mt-1 cursor-pointer ${
												selectedAmenity === value ? 'bg-yellow-500' : ''
											}`}
											onClick={() => handleOpen(value)}
										>
											<div className="flex justify-start items-center  pt-1 text-mm gap-1">
												<div
													className={`p-1 ${
														selectedAmenity === value ? 'text-white' : 'text-black'
													}`}
												>
													{value}
												</div>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default BookingLayout;
