const ChiTietLayout = ({
	data, renderStars, Link
}) => {
	return (
		<>
			<div className="container-details w-full h-auto">
				<div className="w-3/4 mx-auto mt-2">
					<div className="flex flex-wrap md:flex-nowrap justify-between">
						<div
							key={data.id}
							className="flex flex-col items-start justify-center"
						>
							<h1 className="text-3xl font-bold">{data.title}</h1>
							<p className="text-sm mt-1 text-gray-600 font-bold">{data.title}</p>
							<p className="render text-xm font-normal text-blue-600 flex items-center">
								Khách Sạn
								<span className="text-sm ml-2 text-yellow-400">{renderStars(data.star)}</span>
							</p>
							<div className="flex items-center justify-start mt-2 text-sm">
								<span className="font-semibold text-sm mr-1">
									<i className="fa-solid fa-location-dot"></i>
								</span>
								<p className="text-sm font-medium ">
									78 Thợ Nhuộm, Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội, Việt Nam, 100000{' '}
									<span className="">
										<a
											className="text-blue-600 font-semibold"
											href=""
										>
											Xem bản đồ
										</a>
									</span>
								</p>
							</div>
						</div>
						<div className="flex flex-auto flex-col items-end justify-center">
							<p className="text-xs font-medium">Giá phòng mỗi đêm từ</p>
							<span className="text-2xl text-orange-600 font-bold">1.606.000 VND</span>
							<button className="w-full md:w-64 h-11 rounded-md bg-orange-600 text-white font-semibold">
								<Link to={`/datphong/${data.id}`}>
									Đặt phòng
								</Link>
							</button>
						</div>
					</div>
					{/* start images */}
					<div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full mt-5">
						<div className="col-span-1 md:col-span-3 w-full max-h-96">
							<img
								className="w-full rounded-lg h-full object-cover"
								src={data.img}
								alt={data.title}
							/>
						</div>
						<div className="grid grid-cols-3 md:grid-cols-2 gap-2 col-span-1  md:col-span-2 max-h-96 overflow-hidden">
							<div className="col-span-1">
								<img
									className="w-full rounded-lg h-32 object-cover "
									src={data.img}
									alt={data.title}
								/>
							</div>
							<div className="col-span-1">
								<img
									className="w-full rounded-lg object-cover h-32"
									src={data.img}
									alt={data.title}
								/>
							</div>
							<div className="col-span-1">
								<img
									className="w-full rounded-lg object-cover h-32"
									src={data.img}
									alt={data.title}
								/>
							</div>
							<div className="col-span-1">
								<img
									className="w-full rounded-lg object-cover h-32"
									src={data.img}
									alt={data.title}
								/>
							</div>
							<div className="col-span-1">
								<img
									className="w-full rounded-lg object-cover h-32"
									src={data.img}
									alt={data.title}
								/>
							</div>
							<div className="col-span-1">
								<img
									className="w-full rounded-lg object-cover h-32"
									src={data.img}
									alt={data.title}
								/>
							</div>
						</div>
					</div>
					{/* end images */}

					<div className="grid grid-cols-1 md:grid-cols-5  w-full gap-4 mt-5">
						{/* Giới thiệu */}
						<div className="grid-cols-1 md:col-span-2  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="font-semibold text-base">Giới thiệu cơ sở lưu trú</h2>
									<div className="">
										<a
											href=""
											className=""
										>
											<span className="text-blue-600 font-medium text-base">
												Xem thêm <i className="fa-regular fa-chevron-right text-mm"></i>
											</span>
										</a>
									</div>
								</div>
								<div className="">
									<p className="text-sm font-normal leading-relaxed">
										Muong Thanh Hanoi Centre Hotel là một khách sạn nằm trong khu vực an ninh, toạ
										lạc tại Trần Hưng Đạo. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ
										thủ tục nhận phòng đến trả phòng hay bất
									</p>
								</div>
							</div>
						</div>
						{/* Trong khu vực */}
						<div className="grid-cols-1 md:col-span-3  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="mb-4">
									<h2 className="text-base font-semibold">Trong khu vực</h2>
								</div>
								<div className="flex justify-between w-full gap-3">
									<div className="w-1/2">
										<div className="flex justify-start items-center gap-2 mb-2">
											<i
												className="fa-regular fa-bag-shopping"
												style={{ color: ' #2563eb' }}
											></i>
											<span className="text-sm font-medium">Khu mua sắm</span>
										</div>
										<div className="flex justify-between items-center mb-2">
											<div className="flex justify-start items-center gap-2">
												<i
													className="fa-solid fa-location-dot"
													style={{ color: ' #687176' }}
												></i>
												<span className="text-sm font-medium">Nhà thờ Lớn Hà Nội</span>
											</div>
											<div className="">
												<p className="text-xs font-semibold text-gray-400">575 m</p>
											</div>
										</div>
										<div className="flex justify-between items-center mb-2">
											<div className="flex justify-start items-center gap-2">
												<i
													className="fa-solid fa-location-dot"
													style={{ color: ' #687176' }}
												></i>
												<span className="text-sm font-medium">Hanoi Railway Station</span>
											</div>
											<div className="">
												<p className="text-xs font-semibold text-gray-400">687 m</p>
											</div>
										</div>
									</div>
									<div className="w-1/2">
										<div className="flex justify-start items-center gap-2 mb-2">
											<i
												className="fa-solid fa-location-dot"
												style={{ color: ' #687176' }}
											></i>
											<span className="text-sm font-medium">Khu mua sắm</span>
										</div>
										<div className="flex justify-between items-center mb-2">
											<div className="flex justify-start items-center gap-2">
												<i
													className="fa-solid fa-location-dot"
													style={{ color: ' #687176' }}
												></i>
												<span className="text-sm font-medium">Nhà thờ Lớn Hà Nội</span>
											</div>
											<div className="">
												<p className="text-xs font-semibold text-gray-400">575 m</p>
											</div>
										</div>
										<div className="flex justify-between items-center mb-2">
											<div className="flex justify-start items-center gap-2">
												<i
													className="fa-solid fa-location-dot"
													style={{ color: ' #687176' }}
												></i>
												<span className="text-sm font-medium">Hanoi Railway Station</span>
											</div>
											<div className="">
												<p className="text-xs font-semibold text-gray-400">687 m</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Tiện ích */}
						<div className="grid-cols-1 md:col-span-2 	shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Tiện ích chính</h2>
									<a>
										<span className="text-blue-600 font-medium text-base">
											Xem thêm <i className="fa-regular fa-chevron-right text-mm"></i>
										</span>
									</a>
								</div>
								<div className="grid grid-cols-3 md:grid-cols-1">
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-light fa-snowflake"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">Máy lạnh</span>
									</div>
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-solid fa-utensils"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">Nhà hàng</span>
									</div>
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-regular fa-clock"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">Lễ tân 24h</span>
									</div>
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-brands fa-product-hunt"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">Chỗ đậu xe</span>
									</div>
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-solid fa-stairs"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">Tháng máy</span>
									</div>
									<div className="flex justify-start items-center gap-2 mb-4">
										<i
											className="fa-regular fa-wifi"
											style={{ color: ' #2563eb' }}
										></i>
										<span className="text-sm font-medium">WiFi</span>
									</div>
								</div>
							</div>
						</div>
						{/* Khách bình luận */}
						<div className="grid-cols-1 md:col-span-3  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Khách nói gì về kỳ nghỉ của họ</h2>
									<div className="">
										<a
											href=""
											className=""
										>
											<span className="text-blue-600 font-medium text-base">
												Xem tất cả đánh giá{' '}
												<i className="fa-regular fa-chevron-right text-mm"></i>
											</span>
										</a>
									</div>
								</div>
								<div className="">
									<div className="flex items-center mb-5">
										<p className="bg-blue-100 text-blue-600 text-sm font-semibold inline-flex items-center p-1.5 rounded-ss dark:bg-blue-600 dark:text-white">
											8.7
										</p>
										<p className="ml-2 font-medium text-gray-900 ">Tuyệt hảo</p>
										<span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500" />
										<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
											376 đánh giá
										</p>
									</div>
									<div className="mb-4">
										<h2 className="text-md font-semibold">Hạng mục:</h2>
									</div>
									<div className="gap-8 sm:grid sm:grid-cols-2">
										<div>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Nhân viên phục vụ
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '88%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.8
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Tiện nghi
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Sạch sẽ
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '88%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.8
													</span>
												</dd>
											</dl>
										</div>
										<div>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Thoải mái
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Đáng giá tiền
												</dt>
												<dd className="flex items-center mb-3">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '70%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														7.0
													</span>
												</dd>
											</dl>
											<dl>
												<dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
													Địa điểm
												</dt>
												<dd className="flex items-center">
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
														<div
															className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
															style={{ width: '89%' }}
														/>
													</div>
													<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
														8.9
													</span>
												</dd>
											</dl>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-blue-100 w-3/4 mx-auto mt-2 rounded-md px-3 py-6">
					<div className="mb-4">
						<h1 className="text-black text-xl -tracking-normal font-semibold">
							Những phòng còn trống tại Vinpearl Wonderworld Phu Quoc
						</h1>
					</div>
					<div className="flex justify-start gap-3 items-center bg-blue-950 p-3 rounded-md">
						<img
							src="https://ik.imagekit.io/tvlk/image/imageResource/2020/04/14/1586844222168-9f81c6c60bcffcde668cf46de941aa3c.png?tr=q-75"
							alt=""
							className="w-9 h-9"
						/>
						<span className="text-white text-sm font-semibold tracking-wider">
							Phải đặt phòng trong thời điểm không chắc chắn này? Hãy chọn phòng có thể hủy miễn phí!
						</span>
					</div>
					<div className="bg-white mt-3 p-6 rounded-md">
						<div className="">
							<h1 className="font-sm font-semibold tracking-wider mb-3">
								Tìm kiếm nhanh hơn bằng cách chọn những tiện nghi bạn cần
							</h1>
							<div className="xl:flex xl:gap-32">
								<div className="xl:flex xl:items-center xl:gap-2 flex items-center mb-2">
									<input
										id="inline-checkbox"
										type="checkbox"
										defaultValue=""
										className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
									/>
									<label
										htmlFor="inline-checkbox"
										className="ml-2 text-sm font-medium text-gray-900"
									>
										Miễn phí hủy phòng
									</label>
								</div>
								<div className="xl:flex xl:items-center xl:gap-2 flex items-center mb-2">
									<input
										id="inline-2-checkbox"
										type="checkbox"
										defaultValue=""
										className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
									/>
									<label
										htmlFor="inline-2-checkbox"
										className="ml-2 text-sm font-medium text-gray-900"
									>
										Extra Benefit
									</label>
								</div>
								<div className="xl:flex xl:items-center xl:gap-2 flex items-center mb-2">
									<input
										defaultChecked=""
										id="inline-checked-checkbox"
										type="checkbox"
										defaultValue=""
										className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
									/>
									<label
										htmlFor="inline-checked-checkbox"
										className="ml-2 text-sm font-medium text-gray-900"
									>
										Miễn phí bữa sáng
									</label>
								</div>
								<div className="xl:flex xl:items-center xl:gap-2 flex items-center mb-2">
									<input
										defaultChecked=""
										id="inline-checked-checkbox"
										type="checkbox"
										defaultValue=""
										className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
									/>
									<label
										htmlFor="inline-checked-checkbox"
										className="ml-2 text-sm font-medium text-gray-900"
									>
										Miễn phí đưa đón
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white mt-3 px-6 py-3 rounded-md">
						<div className="mb-3">
							<h1 className="text-xl font-extrabold">Superior Double</h1>
						</div>
						<div className="xl:flex xl:justify-between xl:gap-4">
							<div className="shadow-2xl xl:w-2/6 xl:pb-4 rounded-lg">
								<div className="">
									<img
										src="https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20023314-1dd3b52ce5baa32f9a4b15a21224d64b.jpeg?_src=imagekit&tr=c-at_max,h-144,q-40,w-287"
										alt=""
										className="w-full h-52 object-cover rounded-qq"
									/>
								</div>
								<div className="flex justify-start items-center gap-3 pl-3 mt-3">
									<i
										className="fa-duotone fa-pen-ruler"
										style={{ color: '#0094F3' }}
									></i>
									<span className="font-semibold text-sm">
										25.0 m<sup>2</sup>
									</span>
								</div>
								<div className="pl-3 mt-3">
									<p className="text-xm text-green-700 font-medium bg-green-50 mb-2 p-1 rounded-md w-28">
										Vòi tắm đứng
									</p>
									<p className="text-xm text-green-700 font-medium bg-green-50 mb-2 p-1 rounded-md w-28">
										Máy lạnh
									</p>
									<p className="text-xm text-green-700 font-medium bg-green-50 mb-2 p-1 rounded-md w-28">
										Tủ lạnh
									</p>
									<p className="text-xm text-green-700 font-medium bg-green-50 mb-2 p-1 rounded-md w-28">
										Nước nóng
									</p>
								</div>
								<div className="bg-gray-50 text-center w-4/5 py-1 m-auto rounded-md ">
									<button className="text-blue-600 font-semibold tracking-wide text-sm">
										Xem chi tiết phòng
									</button>
								</div>
							</div>

							<div className="xl:w-4/6 xl:h-80 shadow-2xl rounded-lg mt-4">
								<div className="xl:px-6 px-6 pt-5 hidden">
									<h1 className="font-semibold">Deluxe Twin</h1>
									<div className="flex justify-between mt-3">
										<div className="flex gap-3 justify-start items-center mb-3 font-semibold text-sm tracking-wider">
											<i className="fa-light fa-bed"></i>
											<span>2 Giường Đơn</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-semibold text-sm tracking-wider">
											<i className="fa-duotone fa-user-group"></i>
											<span>2 khách</span>
										</div>
										<p className="font-semibold text-sm tracking-wider">Chỉ còn 1 phòng</p>
									</div>
								</div>
								<div className="w-11/12 h-0.5 bg-gray-100 m-auto mb-4"></div>

								<div className="px-6 xl:flex xl:justify-between">
									<div className="">
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm text-green-600 tracking-wider">
											<i
												className="fa-solid fa-utensils"
												style={{ color: '#0DC175' }}
											></i>
											<span>Miễn phí bữa sáng</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm text-green-600 tracking-wider">
											<i
												className="fa-solid fa-wifi"
												style={{ color: '#0DC175' }}
											></i>
											<span>WiFi miễn phí</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm text-green-600 tracking-wider">
											<i
												className="fa-solid fa-smoking"
												style={{ color: '#0DC175' }}
											></i>
											<span>Không hút thuốc</span>
										</div>
									</div>
									<div className="">
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm text-gray-500 tracking-wider">
											<i
												className="fa-solid fa-ban"
												style={{ color: '#687176' }}
											></i>
											<span>Hủy phòng có thu phí</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-1 font-medium text-xm text-blue-500 tracking-wider">
											<i
												className="fa-solid fa-question"
												style={{ color: '#0094F3' }}
											></i>
											<span>Xem chính sách hủy phòng</span>
										</div>
									</div>
									<div className="">
										<p className="font-medium text-mm tracking-wider text-gray-500 line-through">
											3.200.000 VND
										</p>
										<p className="font-bold text-lg tracking-wider text-green-600">2.048.000 VND</p>
										<p className="font-bold text-mm tracking-wider text-gray-500">/ phòng / đêm</p>
										<p className="font-bold text-mm tracking-wider text-blue-500">Giá cuối cùng</p>
									</div>
								</div>
								<div className="px-6 mt-6 xl:flex xl:justify-between">
									<div className="flex justify-start items-center gap-4 ">
										<i
											className="fa-solid fa-money-check-dollar"
											style={{ color: '#0094F3' }}
										></i>
										<div className="text-xm font-medium text-blue-500 tracking-wider">
											<p className="">Thanh toán khi nhận phòng</p>
											<p className="">Đặt bây giờ và thanh toán khi nhận phòng!</p>
										</div>
									</div>
									<div className="bg-green-600 w-28 text-center rounded-lg">
										<button className="px-3 py-2 text-base text-white">Đặt ngay</button>
									</div>
								</div>
								<div className="w-11/12 h-0.5 bg-gray-100 m-auto mt-4"></div>
								<div className="xl:px-6 xl:mt-6 xl:flex xl:justify-start xl:items-center xl:gap-4 px-6 mt-6 pb-5 flex justify-start items-center gap-4">
									<i
										className="fa-solid fa-hotel"
										style={{ color: '#0DC175' }}
									></i>
									<p className="text-xm font-medium text-green-600">Ưu đãi giờ chót - giảm 36%!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChiTietLayout;
