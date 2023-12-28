import 'flowbite';
const BookingLayout = ({
	luuTru,
	filterLuuTru,
	getRatingText,
	Link,
	handleFavoriteChange,
	Checkbox,
	labelFavorite,
	userFavorites,
	handleAddToRecentlyViewed,
	selectedTinhThanh,
	tinhthanh,
	sanitizeAddress,
}) => {
	return (
		<>
			<div className=" w-3/4 mx-auto mt-4">
				<>
					{tinhthanh.map((khuvuc) => (
						<Link
							to={`/booking/${khuvuc?.id}`}
							key={khuvuc.id}
						>
							<button
								type="button"
								className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
								value={`${khuvuc.text}`}
							>
								{khuvuc.text}
							</button>
						</Link>
					))}
				</>
				{selectedTinhThanh && selectedTinhThanh?.text && (
					<h1 className="mt-4 w-full font-semibold text-xl tracking-normal mb-5">
						Khách sạn tại {selectedTinhThanh.text}
					</h1>
				)}
				{!selectedTinhThanh?.text && (
					<h1 className="mt-4 w-full font-semibold text-xl tracking-normal mb-5">Xem tất cả khách sạn</h1>
				)}

				{luuTru ? (
					<>
						{!selectedTinhThanh?.text || !selectedTinhThanh ? (
							<>
								{luuTru.map((item) => (
									<>
										<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product hover:scale-103 transition ease-in-out delay-50 duration-200">
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
																to={`/booking/chitiet/${item.id}`}
																className="font-semibold text-lg"
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
																{item.title}
															</Link>

															{/* Yêu thích */}
															{userFavorites.some(
																(favorite) => favorite.id === item.id,
															) ? (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																		checkedIcon={
																			<i className="fa-regular fa-heart"></i>
																		}
																	/>
																</>
															) : (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={<i className="fa-regular fa-heart"></i>}
																		checkedIcon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																	/>
																</>
															)}
														</div>
													</div>

													<div className="flex items-center justify-start mt-2 text-sm">
														<span className="font-semibold text-sm mr-1">
															<i className="fa-solid fa-star mb-1 mr-1 text-gray-300"></i>
															{item.star} - {getRatingText(item.star)}
														</span>
														{/* <p className="text-sm">(30 đánh giá)</p> */}
													</div>
													<div className="flex items-center justify-start mt-2 text-sm">
														<span className=" text-sm mr-1">
															<span className="font-semibold"> Địa chỉ: </span>
															{item.diaChi}
														</span>
													</div>
													{/* <span className="text-sm font-semibold">Tiện ích:</span> */}
													<div className="flex flex-wrap gap-2 mb-2">
														{item.tienich.slice(0, 4).map((value, index) => (
															<div
																key={index}
																className="w-auto h-8 border-none bg-gray-200 rounded-lg mt-1 "
															>
																<div className="flex justify-start items-center  pt-1 text-mm gap-1">
																	<div className="p-1">{value} </div>
																</div>
															</div>
														))}
													</div>
													{/* <button onClick={handleOpen}>Tiện ích</button> */}
												</div>
												<div className="block m-2 col-span-1 md:col-span-2 relative">
													<div className="flex flex-col w-auto rounded-lg border-none bg-stone-200">
														<div className="flex flex-wrap items-center gap-1 mt-1 ml-3 text-xs">
															<p className="border-none rounded-lg mt-1">Gần đây:</p>
															{item.diaDiemGanDay.slice(0, 2).map((value, index) => (
																<div
																	key={index}
																	className="w-auto border-none rounded-lg"
																>
																	<div className="flex justify-start items-center pt-1 text-mm truncate">
																		{/* Kiểm tra nếu không phải là mục đầu tiên, thêm dấu phẩy */}
																		{index > 0 && <span>,</span>}
																		<div className="p-1">{value}</div>
																	</div>
																</div>
															))}
														</div>

														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-2 pb-2 ">
															<span className="flex items-center text-md mt-1 font-semibold mr-4">
																Tên phòng
																<i className="fa-solid fa-user mb-0.5 ml-2"></i>
															</span>
															<span className="flex text-lg md:text-md mt-1 font-semibold mr-4">
																{item.price.toLocaleString('vi')} VND
															</span>
														</div>
														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-1">
															<span className="flex text-md font-semibold mr-4">
																Chỉ còn bao nhiêu phòng ?
															</span>
														</div>
													</div>
													<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-primary-do transition-all hover:opacity-80">
														<Link
															to={`/booking/chitiet/${item.id}`}
															className="w-full flex items-center justify-center h-11 rounded-md"
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
															<p className="text-white font-light text-base">
																Xem chi tiết
															</p>
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
								{filterLuuTru.map((item) => (
									<>
										<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product hover:scale-103 transition ease-in-out delay-50 duration-200">
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
																to={`/booking/chitiet/${item.id}`}
																className="font-semibold text-lg"
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
																{item.title}
															</Link>

															{/* Yêu thích */}
															{userFavorites.some(
																(favorite) => favorite.id === item.id,
															) ? (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																		checkedIcon={
																			<i className="fa-regular fa-heart"></i>
																		}
																	/>
																</>
															) : (
																<>
																	<Checkbox
																		{...labelFavorite}
																		onChange={() =>
																			handleFavoriteChange((item.id, item))
																		}
																		icon={<i className="fa-regular fa-heart"></i>}
																		checkedIcon={
																			<i className="fa-solid fa-heart text-red-500"></i>
																		}
																	/>
																</>
															)}
														</div>
													</div>

													<div className="flex items-center justify-start mt-2 text-sm">
														<span className="font-semibold text-sm mr-1">
															<i className="fa-solid fa-star mb-1 mr-1 text-gray-300"></i>
															{item.star} - {getRatingText(item.star)}
														</span>
														{/* <p className="text-sm">(30 đánh giá)</p> */}
													</div>
													<div className="flex items-center justify-start mt-2 text-sm">
														<span className=" text-sm mr-1">
															<span className="font-semibold"> Địa chỉ: </span>
															{item.diaChi}
														</span>
													</div>
													{/* <span className="text-sm font-semibold">Tiện ích:</span> */}
													<div className="flex flex-wrap gap-2 mb-2">
														{item.tienich.slice(0, 4).map((value, index) => (
															<div
																key={index}
																className="w-auto h-8 border-none bg-gray-200 rounded-lg mt-1 "
															>
																<div className="flex justify-start items-center  pt-1 text-mm gap-1">
																	<div className="p-1">{value} </div>
																</div>
															</div>
														))}
													</div>
													{/* <button onClick={handleOpen}>Tiện ích</button> */}
												</div>
												<div className="block m-2 col-span-1 md:col-span-2 relative">
													<div className="flex flex-col w-auto rounded-lg border-none bg-stone-200">
														<div className="flex flex-wrap items-center gap-1 mt-1 ml-3 text-xs">
															<p className="border-none rounded-lg mt-1">Gần đây:</p>
															{item.diaDiemGanDay.slice(0, 2).map((value, index) => (
																<div
																	key={index}
																	className="w-auto border-none rounded-lg"
																>
																	<div className="flex justify-start items-center pt-1 text-mm truncate">
																		{/* Kiểm tra nếu không phải là mục đầu tiên, thêm dấu phẩy */}
																		{index > 0 && <span>,</span>}
																		<div className="p-1">{value}</div>
																	</div>
																</div>
															))}
														</div>
														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-1">
															<span className="flex items-center text-md mt-1 font-semibold mr-4">
																Tên phòng
																<i className="fa-solid fa-user mb-0.5 ml-2"></i>
															</span>
															<span className="flex text-md  mt-1 font-semibold mr-4">
																{item.price.toLocaleString('vi')} VND
															</span>
														</div>
														<div className="flex flex-wrap items-center justify-between ml-3 mr-2 mb-1">
															<span className="flex text-md font-semibold mr-4">
																Chỉ còn bao nhiêu phòng ?
															</span>
														</div>
													</div>
													<div className="w-full h-14 border-none rounded-lg py-2 mt-3 flex gap-2 flex-wrap bg-primary-do transition-all hover:opacity-80">
														<Link
															to={`/booking/chitiet/${item.id}`}
															className="w-full flex items-center justify-center h-11 rounded-md"
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
															<p className="text-white font-light text-base">
																Xem chi tiết
															</p>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</>
								))}
							</>
						)}
					</>
				) : (
					<>
						<p>Không tìm được phòng</p>
					</>
				)}
			</div>
		</>
	);
};

export default BookingLayout;
