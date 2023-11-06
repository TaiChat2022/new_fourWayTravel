const BookingLayout = ({
	renderStars, luuTru, getRatingText,
	Link, handleFavoriteChange,

	Checkbox, labelFavorite,
	userFavorites,
	handleAddToRecentlyViewed
}) => {
	return (
		<>
			<div className="mt-2 w-3/4 mx-auto">
				<h1 className="mt-4 w-full font-semibold text-xl tracking-normal mb-5">
					Khách sạn tại Đà Lạt <span>(Tỉnh Lâm Đồng, Việt Nam)</span>
				</h1>
				{luuTru ? (
					<>
						{luuTru.map((item) => (
							<>
								<div className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product">
									<div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
													<Link to={`/booking/${item.id}`}
														className="font-semibold text-lg"
														onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img)}
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
																checkedIcon={
																	<i className="fa-regular fa-heart"></i>
																}
															/>
														</>
													) : (
														<>
															<Checkbox
																{...labelFavorite}
																onChange={() => handleFavoriteChange((item.id, item))}
																icon={
																	<i className="fa-regular fa-heart"></i>
																}
																checkedIcon={
																	<i className="fa-solid fa-heart text-red-500"></i>
																}
															/>
														</>
													)
													}
												</div>
												<p className="text-xm text-gray-300 flex items-center">
													{renderStars(item.star)}
													<span className="text-xm ml-2 font-light text-slate-950">
														Khách sạn
													</span>
												</p>
											</div>
											<div className="flex justify-between mt-2 text-sm">
												<p className="text-sm font-200">
													Cách trung tâm thành phố <span>0.0km</span>
												</p>
												<svg
													className="w-4 h-4 text-gray-800 dark:text-white mt-1"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 10 6"
												>
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="m1 1 4 4 4-4"
													/>
												</svg>
											</div>
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className="font-semibold text-sm mr-1">
													<i className="fa-solid fa-star mb-1 mr-1 text-gray-300"></i>
													{item.star} - {getRatingText(item.star)}
												</span>
												<p className="text-sm">(30 đánh giá)</p>
											</div>
										</div>
										<div className="block m-2 col-span-1 relative">
											<div className="w-full h-auto rounded-lg border-green-200 border-2 bg-lime-50">
												<div className="absolute top-2 right-0 w-auto -translate-x-2.5 py-0.5 px-2 text-center text-xx font-bold text-red-600">
													<span className="bg-red-600 text-white border-2 rounded-vch border-red-600 px-1.5 py-0.5">
														18%
													</span>
													<span className="bg-white w-auto border-solid border-2 rounded-vchh border-red-600 px-1.5 py-0.5 text-black h-full ">
														Rẻ hơn mọi khi
													</span>
												</div>
												<div className="flex items-center w-full mt-2">
													<span className="text-mm ml-1 font-bold">Agoda</span>
												</div>
												<div className="service flex gap-2 justify-start items-center ml-1 mt-1">
													<i className="fa-solid fa-check text-mm text-green-600"></i>
													<span className="text-mm text-green-600">Gồm bữa sáng</span>
												</div>
												<div className="flex flex-wrap justify-between ml-2 mr-2 mb-2">
													<span className="flex text-lg md:text-md mt-2 font-semibold text-green-800">
														{(item.price).toLocaleString('vi')}đ
													</span>
													<Link to={`/booking/${item.id}`}
														className={`
															flex items-center justify-center border rounded-md
															bg-green-700 text-white font-bold px-2 md:px-0
															text-sm  md:text-xx lg:text-xs
														`}
														onClick={() => handleAddToRecentlyViewed(item.id, item.danhmuc, item.title, item.img)}
													>
														<span className="p-2">Xem Giá Tốt</span>
														<i className="fa-solid fa-chevron-right mr-2"></i>
													</Link>
												</div>
											</div>

											<div className="w-full h-auto border-none bg-gray-200 rounded-lg py-2 mt-3 flex gap-2 flex-wrap">
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-regular fa-wifi"></i>
													<span>WiFi miễn phí</span>
												</div>
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-light fa-martini-glass"></i>
													<span>Quầy bar</span>
												</div>
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-light fa-snowflake"></i>
													<span>Điều hào nhiệt độ</span>
												</div>
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-light fa-utensils"></i>
													<span>Nhà hàng</span>
												</div>
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-light fa-square-parking"></i>
													<span>Bãi đỗ xe</span>
												</div>
												<div className="flex justify-start items-center ml-2 pt-1 text-mm gap-1">
													<i className="fa-solid fa-paw"></i>
													<span>Chấp nhận vật nuôi</span>
												</div>
											</div>
										</div>
									</div>
								</div >
							</>
						))}
					</>
				) : (
					<>
						<p>Không tìm được phòng</p>
					</>
				)}
			</div >
		</>
	);
};

export default BookingLayout;
