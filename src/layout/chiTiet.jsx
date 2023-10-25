const ChiTietLayout = ({ data, renderStars }) => {
	return (
		<>
			<div className="container-details w-full h-screen">
				<div className="w-3/4 mx-auto mt-2">
					<div className="flex justify-between">
						<div className="flex flex-col items-start justify-center ">
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
						<div className="flex flex-col items-end justify-center">
							<p className="text-xs font-medium">Giá phòng mỗi đêm từ</p>

							<span className="text-2xl text-orange-600 font-bold">1.606.000 VND</span>

							<button className="w-64 h-11 rounded-md bg-orange-600 text-white">
								<span className="font-semibold">Chọn phòng</span>
							</button>
						</div>
					</div>
					{/* start images */}
					<div className="grid grid-cols-5 gap-2 w-full mt-5">
						<div className="col-span-3 h-full w-full">
							<img
								className="w-full rounded-lg max-h-96 object-cover"
								src={data.img}
								alt={data.title}
							/>
						</div>
						<div className="grid grid-cols-2 gap-2 col-span-2 max-h-96 overflow-hidden">
							<div className="col-span-1 ">
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

					<div className="grid grid-cols-5 grid-rows-5 w-full gap-4 mt-5">
						<div className="col-span-2 row-span-2 shadow-3xl rounded-lg">
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
						<div className="col-span-3 row-span-2 col-start-3 shadow-3xl rounded-lg">
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
						<div className="col-span-2 row-span-3 row-start-3 shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Tiện ích chính</h2>
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
						<div className="col-span-3 row-span-3 col-start-3 row-start-3 shadow-3xl rounded-lg">
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
			</div>
		</>
	);
};

export default ChiTietLayout;
