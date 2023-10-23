const BookingLayout = ({
	renderStars, luuTru, getRatingText,
	Link
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
								<div key={item.id} className="mt-2 bg-white rounded-lg mb-4 h-auto shadow-product">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
										<div className="flex gap-4 col-span-1 md:col-span-2  relative">
											<div className="mr-1 w-2/6">
												<img
													src={item.img}
													alt={item.title}
													className="rounded-l-lg w-full h-48 object-cover"
												/>
											</div>
											<div>
												<div className="cursor-pointer mt-3 ">
													<h1 className="flex justify-between font-semibold text-lg">
														{item.title}
														<div className="favourite">
															<i className="fa-regular fa-heart"></i>
														</div>
													</h1>
													<p className="render text-xx text-gray-300 flex items-center">
														{renderStars(item.star)}
														<span className="text-xm ml-2 font-light text-slate-950">
															Khách sạn
														</span>
													</p>
												</div>
												<div className="flex justify-between mt-2 text-sm">
													<p className="text-sm font-200">
														cách Trung tâm thành phố <span>0.0km</span>
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
										</div>
										<div className="block m-2 col-span-1 relative">
											<div className="w-full h-24 rounded-lg border-green-200 border-2 bg-lime-50">
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
												<div className="flex justify-between ml-2 mr-2">
													<span className="flex text-lg md:text-xl mt-2 font-semibold text-green-800">
														1.158.400 <span className="underline">đ</span>
													</span>
													<Link to={`/booking/${item.id}`} className="flex items-center justify-center border rounded-md bg-green-700 text-white font-bold w-1/2 md:text-sm">
														<span className="p-2">Xem Giá Tốt</span>
														<i className="fa-solid fa-chevron-right mr-2"></i>
													</Link>
												</div>
											</div>

											<div className="bg-gray-200 border-none w-full h-16 rounded-lg mt-3 flex gap-2 flex-wrap">
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
		</>
	);
};

export default BookingLayout;
