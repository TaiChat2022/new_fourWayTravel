const ChiTietLayout = ({
	data,
	Link,
	luuTru,
	renderStars,
	getRatingText,
	checkIcon,
	navigate,
	setCurrentItemIds,
	currentItemIds,
	shuffleArrayWithoutDuplicates,

	Box,
	Modal,
	styleModal,
	openModal,
	handleOpenModal,
	handleCloseModal,
	styles,
	dataForBox1,
	dataForBox2,

	binhLuan,
	handleInputChange,
	handleSendComment,
	binhLuanArray,
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
							<div className="flex items-center gap-2">
								<h1 className="text-2xl font-bold my-2">{data.title}</h1>
								<p className="render text-xm font-normal text-primary-xanh flex items-center pt-0.5">
									Khách sạn
									<span className="text-sm ml-2 text-primary-cam">{renderStars(data.star)}</span>
								</p>
							</div>
							<div className="flex items-center justify-start my-2 text-sm">
								<span className="font-semibold text-sm mr-1">
									<i className="fa-solid fa-location-dot"></i>
								</span>
								<p className="text-sm font-medium ">
									{data.diaChi}{' '}
									<span className="">
										<a
											className="text-primary-xanh font-semibold"
											href=""
										>
											Xem bản đồ
										</a>
									</span>
								</p>
							</div>
						</div>
						<div className="flex flex-auto flex-col items-end justify-center">
							<a href="#choose_room">
								<button className="flex items-center justify-center w-full px-8 md:px-4 py-4 md:w-64 rounded-md bg-primary-xanh hover:scale-95 transition ease-in-out delay-50 duration-200 text-white font-semibold">
									Chọn phòng
									<i className="fa-solid fa-angle-right ml-1"></i>
								</button>
							</a>
							{/* <Link to={`/datphong/${data.id}`}>
								<button className="flex items-center justify-center w-full px-8 md:px-4 py-4 md:w-64 rounded-md bg-primary-xanh hover:scale-95 transition ease-in-out delay-50 duration-200 text-white font-semibold">
									Chọn phòng
									<i className="fa-solid fa-angle-right ml-1"></i>
								</button>
							</Link> */}
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
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 col-span-1 md:col-span-2 h-auto md:max-h-96 overflow-hidden">
							{data.imgPhu.map((image) => (
								<>
									<div className="col-span-1">
										<img
											className="w-full rounded-lg h-32 object-cover "
											src={image}
											alt={data.title}
										/>
									</div>
								</>
							))}
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
										<button
											onClick={handleOpenModal}
											className=" font-semibold text-sm tracking-wide"
										>
											Xem thêm <i className="fa-regular fa-chevron-right text-mm"></i>
										</button>

										<Modal
											open={openModal}
											onClose={handleCloseModal}
										>
											<Box sx={styleModal}>
												<h1 className="text-3xl font-bold">{data.title}</h1>
												<div className="w-full h-0.5 bg-gray-300 mb-6"></div>

												<div id="modal-modal-description">{data.detail}</div>
											</Box>
										</Modal>
									</div>
								</div>
								<div className="">
									<p
										className="text-sm font-normal leading-relaxed"
										style={styles}
									>
										{data.detail}
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
										{dataForBox1.map((diaDiemGanDay) => (
											<div
												key={diaDiemGanDay}
												className="flex justify-start items-center gap-2 mb-4"
											>
												<i className="fa-solid fa-location-dot text-primary-xanh"></i>
												<span className="text-sm font-medium">{diaDiemGanDay}</span>
											</div>
										))}
									</div>
									<div className="w-1/2">
										{dataForBox2.map((diaDiemGanDay) => (
											<div
												key={diaDiemGanDay}
												className="flex justify-start items-center gap-2 mb-4"
											>
												<i className="fa-solid fa-location-dot text-primary-xanh"></i>
												<span className="text-sm font-medium">{diaDiemGanDay}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						{/* Tiện ích */}
						<div className="grid-cols-1 md:col-span-2 	shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Tiện ích chính</h2>
								</div>
								<div className="grid grid-cols-3 md:grid-cols-1">
									{data.tienich.map((tienIch) => (
										<div
											key={tienIch}
											className="flex justify-start items-center gap-2 mb-4"
										>
											<i className={`fa-light text-primary-xanh ${checkIcon(tienIch)}`}></i>
											<span className="text-sm font-medium truncate">{tienIch}</span>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* Khách bình luận */}
						<div className="grid-cols-1 md:col-span-3  shadow-3xl rounded-lg">
							<div className="p-3">
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-base font-semibold">Khách nói gì về kỳ nghỉ của họ</h2>
								</div>
								<div className="">
									<div className="flex items-center mb-5">
										<p className="flex items-center gap-0.5 bg-stone-100 text-primary-xanh text-sm font-semibold p-1.5 rounded-ss">
											{data.star}{' '}
											<i className="fa-solid fa-star text-white-100 mb-0.5 text-xs"></i>
										</p>
										<p className="ml-2 font-medium text-gray-900 ">{getRatingText(data.star)}</p>
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
													<div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-300 mr-2">
														<div
															className="bg-xanhtext-primary-xanh h-2.5 rounded dark:bg-primary-xanh"
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
				{/* start loại phòng  */}

				<div
					className="shadow-3xl w-3/4 mx-auto mt-2 rounded-md px-3 py-3"
					id="choose_room"
				>
					<div className="bg-white mt-3 px-6 py-3 rounded-md">
						<div className="mb-3">
							<h1 className="text-xl font-extrabold">Tên phòng</h1>
						</div>
						<div className="md:flex md:justify-between md:gap-4">
							<div className="shadow-2xl md:w-2/6 md:pb-4 rounded-lg">
								<div className="">
									<img
										src="https://ak-d.tripcdn.com/images/0223h12000anlbdki734D_R_339_206_R5_D.jpg"
										alt=""
										className="w-full h-52 object-cover rounded-qq"
									/>
								</div>
								<div className="flex justify-start text-lg items-center gap-3 pl-3 mt-3">
									<i className="fa-solid fa-bed"></i>
									<span className="font-semibold ">1 giường đơn</span>
								</div>
								<div className="pl-3 mt-3">
									<p className=" flex justify-start items-center gap-3 text-xm font-medium mb-2 p-1 rounded-md">
										<i className="fa-solid fa-bed text-primary-xanh"></i>
										<span className="">WiFi miễn phí</span>{' '}
									</p>
									<p className=" flex justify-start items-center gap-3 text-xm font-medium mb-2 p-1 rounded-md">
										<i className="fa-solid fa-ban-smoking text-primary-xanh"></i>
										<span className="">Không hút thuốc</span>{' '}
									</p>
									<p className=" flex justify-start items-center gap-3 text-xm font-medium mb-2 p-1 rounded-md">
										<i className="fa-regular fa-snowflake text-primary-xanh"></i>
										<span className="">Điều hòa</span>{' '}
									</p>
									<p className=" flex justify-start items-center gap-3 text-xm font-medium mb-2 p-1 rounded-md">
										<i className="fa-solid fa-water-ladder text-primary-xanh"></i>
										<span className="">Hồ bơi</span>{' '}
									</p>
									<p className=" flex justify-start items-center gap-3 text-xm font-medium mb-2 p-1 rounded-md">
										<i className="fa-solid fa-mobile-screen-button text-primary-xanh"></i>
										<span className="">Điện thoại</span>{' '}
									</p>
								</div>
							</div>

							<div className="md:w-4/6 md:h-auto shadow-3xl rounded-lg py-5 ">
								<div className="px-6 md:flex md:justify-between">
									<div className="flex flex-col border-r-2 pr-2">
										<div className="mb-2">
											<h1 className="font-semibold">Tóm tắt</h1>
										</div>
										<div className="font-medium text-xm text-gray-600 tracking-wider bg-gray-300 p-2 rounded-md -ml-9">
											<span>Giá tốt có bữa ăn sáng và hủy miễn phí</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fa-solid fa-utensils text-primary-xanh"></i>
											<span>Bao gồm 2 bữa sáng</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fa-regular fa-circle-check text-primary-xanh"></i>
											<span>
												Hủy miễn phí <span>trước 22:00, 5 Thg1, 2024</span>
											</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fa-solid fa-bolt text-primary-xanh"></i>
											<span>Xác nhận ngay</span>
										</div>
									</div>

									<div className="">
										<div className="mb-2">
											<h1 className="font-semibold text-center">Sức chứa</h1>
										</div>
										<div className="flex justify-center items-center gap-2">
											<i className="fa-solid fa-user "></i>
											<i className="fa-solid fa-user"></i>
										</div>
									</div>
									<div className="border-l-2 pl-2">
										<p className="font-medium text-mm tracking-wider  mb-2">Bao gồm thuế mỗi đêm</p>
										<p className="font-bold text-lg tracking-wider mb-1">192.903VND</p>
										<p className="font-bold text-mm tracking-wider text-primary-cam mb-1">
											Chỉ còn <span>1</span> phòng
										</p>
										<p className="font-bold text-mm tracking-wider text-xanhbg-primary-xanh">
											Giá cuối cùng
										</p>
									</div>
								</div>
								<div className="px-6 md:flex md:justify-between">
									<div className="flex justify-start items-center gap-4 ">
										<i className="fa-solid fa-money-check-dollar text-primary-xanh"></i>
										<div className="text-xm font-medium tracking-wider">
											<p className="">Thanh toán trước trực tuyến</p>
										</div>
									</div>
									<div className="bg-primary-xanh w-28 text-center rounded-lg">
										<Link to="">
											<button className="px-3 py-2 text-base text-white">Đặt ngay</button>
										</Link>
									</div>
								</div>
								<div className="w-11/12 h-0.5 bg-gray-100 m-auto mt-4"></div>
								<div className="px-6 md:flex md:justify-between">
									<div className="flex flex-col border-r-2 pr-2">
										<div className="mb-2">
											<h1 className="font-semibold">Tóm tắt</h1>
										</div>
										<div className="font-medium text-xm text-gray-600 tracking-wider bg-gray-300 p-2 rounded-md -ml-9">
											<span>Giá tốt có bữa ăn sáng và hủy miễn phí</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fa-solid fa-utensils text-primary-xanh"></i>
											<span>Bao gồm 2 bữa sáng</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fas fa-user-tie text-primary-xanh"></i>
											<span>
												Hủy miễn phí <span>trước 22:00, 5 Thg1, 2024</span>
											</span>
										</div>
										<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider">
											<i className="fas fa-user-tie text-primary-xanh"></i>
											<span>Xác nhận ngay</span>
										</div>
									</div>

									<div className="">
										<div className="mb-2">
											<h1 className="font-semibold text-center">Sức chứa</h1>
										</div>
										<div className="flex justify-center items-center gap-2">
											<i className="fa-solid fa-user"></i>
											<i className="fa-solid fa-user"></i>
										</div>
									</div>
									<div className="border-l-2 pl-2">
										<p className="font-medium text-mm tracking-wider mb-2">Bao gồm thuế mỗi đêm</p>
										<p className="font-bold text-lg tracking-wider mb-1">192.903VND</p>
										<p className="font-bold text-mm tracking-wider text-primary-cam mb-1">
											Chỉ còn <span>1</span> phòng
										</p>
										<p className="font-bold text-mm tracking-wider text-xanhbg-primary-xanh">
											Giá cuối cùng
										</p>
									</div>
								</div>
								<div className="px-6 md:flex md:justify-between">
									<div className="flex justify-start items-center gap-4 ">
										<i className="fa-solid fa-money-check-dollar text-primary-xanh"></i>
										<div className="text-xm font-medium tracking-wider">
											<p className="">Thanh toán trước trực tuyến</p>
										</div>
									</div>
									<div className="bg-primary-xanh w-28 text-center rounded-lg">
										<Link to="">
											<button className="px-3 py-2 text-base text-white">Đặt ngay</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* end loại phòng  */}
				{/* Bình luận */}
				<div className="w-3/4 mx-auto my-4">
					<div className="">
						<h1 className="text-xl  font-semibold my-5">100 bình luận</h1>
					</div>
					<div className="flex gap-2">
						<textarea
							className="bg-stone-100 w-full h-16 px-4 py-2 rounded-lg outline-none"
							name="binhluan"
							value={binhLuan}
							onChange={handleInputChange}
							cols="30"
							placeholder="Viết bình luận..."
							rows="10"
						></textarea>
						<button
							className="px-6 py-2 font-light text-white bg-primary-xanh hover:bg-primary-xanh rounded-md flex items-center justify-between"
							onClick={handleSendComment}
						>
							Gửi
							<i className="fa-solid fa-paper-plane mb-0.5 ml-2"></i>
						</button>
					</div>
				</div>

				{/* Bình luận */}
				<div className="w-3/4 mx-auto my-7">
					<div className="flex w-full justify-start items-center flex-wrap">
						{luuTru && binhLuanArray ? (
							binhLuanArray.map((item, index) => (
								<div
									key={index}
									className="flex mt-5 justify-start items-center w-full gap-2 shadow-sm"
								>
									<div className="">
										<img
											className="rounded-full border w-auto h-8"
											src={item.img}
											alt="User img"
										/>
									</div>
									<div className="">
										<div className="flex items-center justify-start gap-1">
											<p className="text-sm font-semibold">@{item.tenNguoiDung}</p>
											<span className="text-sm font-medium text-gray-400 tracking-wide">
												1 tháng trước
											</span>
										</div>
										<p className="w-full truncate text-base mt-1 font-light">{item.noiDung}</p>
									</div>
								</div>
							))
						) : (
							<p>Chưa có bình luận nào.</p>
						)}
					</div>
				</div>

				<div className="bg-gray-200 w-3/4 mx-auto mt-2 rounded-md px-3 py-6">
					<div className="mb-4">
						<h1 className="text-black text-xl -tracking-normal font-semibold">
							Những lưu trú còn trống tại Four Way Travel
						</h1>
					</div>

					<div className="flex justify-start gap-3 items-center bg-primary-xanh p-3 rounded-md">
						<img
							src="https://ik.imagekit.io/tvlk/image/imageResource/2020/04/14/1586844222168-9f81c6c60bcffcde668cf46de941aa3c.png?tr=q-75"
							alt=""
							className="w-9 h-9"
						/>
						<span className="text-white text-sm font-semibold tracking-wider">
							Phải đặt lưu trú trong thời điểm không chắc chắn này? Hãy chọn lưu trú có thể hủy miễn phí!
						</span>
					</div>
					{luuTru ? (
						<>
							{shuffleArrayWithoutDuplicates(luuTru, currentItemIds)
								.slice(0, 3)
								.map((item) => (
									<>
										<div className="bg-white mt-3 px-6 py-3 rounded-md">
											<div className="mb-3">
												<h1 className="text-xl font-extrabold">{item.title}</h1>
											</div>
											<div className="md:flex md:justify-between md:gap-4">
												<div className="shadow-2xl md:w-2/6 md:pb-4 rounded-lg">
													<div className="">
														<img
															src={item.img}
															alt={item.img}
															className="w-full h-52 object-cover rounded-qq"
														/>
													</div>
													<div className="flex justify-start items-center gap-3 pl-3 mt-3">
														<i className="fa-duotone fa-pen-ruler text-primary-xanh"></i>
														<span className="font-semibold text-sm">
															25.0 m<sup>2</sup>
														</span>
													</div>
													<div className="pl-3 mt-3">
														<p className="text-xm font-medium mb-2 p-1 rounded-md w-28">
															<span className="text-sm"> Vòi tắm đứng</span>{' '}
														</p>
														<p className="text-xm font-medium mb-2 p-1 rounded-md w-28">
															<span className="text-sm"> Máy lạnh</span>{' '}
														</p>
														<p className="text-xm font-medium mb-2 p-1 rounded-md w-28">
															<span className="text-sm"> Tủ lạnh</span>{' '}
														</p>
														<p className="text-xm font-medium mb-2 p-1 rounded-md w-28">
															<span className="text-sm"> Nước nóng</span>{' '}
														</p>
													</div>
													<div className="bg-gray-50 text-center w-4/5 py-1 m-auto rounded-md ">
														<Link
															to={`/booking/chitiet/${item.id}`}
															className="text-primary-xanh font-semibold tracking-wide text-sm"
														>
															Xem chi tiết
														</Link>
													</div>
												</div>

												<div className="md:w-4/6 md:h-80 shadow-2xl rounded-lg mt-4">
													<div className="px-6 md:flex md:justify-between">
														<div className="flex flex-col">
															{item.tienich.slice(0, 3).map((tienIch) => (
																<div
																	className="flex gap-3 justify-start items-center mb-3 font-medium text-xm tracking-wider"
																	key={tienIch}
																>
																	<i
																		className={`fa-light ${checkIcon(
																			tienIch,
																		)} text-primary-xanh`}
																	></i>
																	<span>{tienIch}</span>
																</div>
															))}
														</div>

														<div className="">
															<div className="flex gap-3 justify-start items-center mb-3 font-medium text-xm  tracking-wider">
																<i className="fa-solid fa-ban text-primary-xanh"></i>
																<span>Hủy lưu trú có thu phí</span>
															</div>
															<div className="flex gap-3 justify-start items-center mb-1 font-medium text-xm text-xanhbg-primary-xanh tracking-wider">
																<i className="fa-solid fa-question text-primary-xanh"></i>
																<span>Xem chính sách hủy lưu trú</span>
															</div>
														</div>
														<div className="">
															<p className="font-medium text-mm tracking-wider text-gray-500 line-through">
																{item.OldPrice.toLocaleString('vi')} VND
															</p>
															<p className="font-bold text-lg tracking-wider">
																{item.price.toLocaleString('vi')} VND
															</p>
															<p className="font-bold text-mm tracking-wider">
																/ lưu trú / đêm
															</p>
															<p className="font-bold text-mm tracking-wider text-xanhbg-primary-xanh">
																Giá cuối cùng
															</p>
														</div>
													</div>
													<div className="px-6 mt-6 md:flex md:justify-between">
														<div className="flex justify-start items-center gap-4 ">
															<i className="fa-solid fa-money-check-dollar text-primary-xanh"></i>
															<div className="text-xm font-medium tracking-wider">
																<p className="">Thanh toán khi nhận lưu trú</p>
																<p className="">
																	Đặt bây giờ và thanh toán khi nhận lưu trú!
																</p>
															</div>
														</div>
														<div className="bg-primary-xanh w-28 text-center rounded-lg">
															<button
																className="px-3 py-2 text-base text-white"
																onClick={() => {
																	setCurrentItemIds((prevItemIds) => [
																		...prevItemIds,
																		item.id,
																	]);
																	navigate(`/booking/chitiet/${item.id}`);
																}}
															>
																Xem chi tiết
															</button>
														</div>
													</div>
													<div className="w-11/12 h-0.5 bg-gray-100 m-auto mt-4"></div>
													{item.voucher ? (
														<>
															<div className="md:px-6 md:mt-6 md:flex md:justify-start md:items-center md:gap-4 px-6 mt-6 pb-5 flex justify-start items-center gap-4">
																<i className="fa-solid fa-hotel text-primary-xanh"></i>
																<p className="text-xm font-medium ">
																	Ưu đãi giờ chót - giảm {item.voucher} %
																</p>
															</div>
														</>
													) : (
														<></>
													)}
												</div>
											</div>
										</div>
									</>
								))}
						</>
					) : (
						<>
							<p>Không tìm được lưu trú</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default ChiTietLayout;
