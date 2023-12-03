const LichSuDPLayout = ({ Link, currentUser, userDatPhong, luuTru, renderStars }) => {
	// Filter luuTru items based on the luuTruId in userDatPhong
	const filteredLuuTru = luuTru.filter((luuTruItem) =>
		userDatPhong.some((datPhongItem) => datPhongItem.luuTruId === luuTruItem.id),
	);
	return (
		<>
			{currentUser ? (
				<>
					<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
						<span className="self-start mr-10">
							<Link
								to="/"
								className="flex items-center text-blue-500 text-md hover:text-blue-700"
							>
								<i className="fa-solid fa-chevron-left"></i>
								Trước
							</Link>
						</span>

						<div className="px-2 w-full m-auto flex flex-col gap-1 items-start">
							{filteredLuuTru.length > 0 ? (
								<>
									{filteredLuuTru.map((item, index) => (
										<div
											key={index}
											className="w-full"
										>
											<div className="rounded-sm border p-3 flex flex-col md:flex-row justify-between item gap-5">
												<div className="w-full md:w-1/5">
													<img
														className="w-full md:w-32 h-32 rounded-lg object-cover"
														src={item.img}
														alt={item.title}
													/>
												</div>
												<div className="w-full md:w-3/5">
													<div className="">
														<h1 className="font-semibold text-xl">{item.title}</h1>
													</div>

													<div className="">
														<p className="render text-xm font-normal text-primary-xanh flex items-center">
															Khách Sạn
															<span className="text-sm ml-2 text-primary-vang">
																{renderStars(item.star)}
															</span>
														</p>
													</div>
													<div className="flex items-center justify-start mt-2 text-sm">
														<span className="font-semibold text-sm mr-1">
															<i className="fa-solid fa-location-dot text-primary-do"></i>
														</span>
														<p className="text-sm font-medium ">{item.diaChi} </p>
													</div>
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
												</div>
												<div className="w-full md:w-1/5 flex flex-row md:flex-col justify-between">
													<div className="bg-primary-do w-full rounded-md mt-5 mr-1 md:mr-0">
														<p className="font-semibold text-white tracking-wider text-center py-3 w-full px-5 text-sm">
															{item.price.toLocaleString('vi')} VND
														</p>
													</div>
													<div className="mt-5 w-full">
														<button className="rounded-lg bg-primary-xanh py-4 w-full px-5 text-xs text-white font-semibold tracking-wider uppercase">
															<Link to={`/booking/chitiet/${item.id}`}>
																Đặt lại phòng
															</Link>
														</button>
													</div>
												</div>
											</div>
										</div>
									))}
								</>
							) : (
								<>Bạn chưa có đặt phòng nào !</>
							)}
						</div>
					</main>
				</>
			) : (
				<>
					<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
						<span className="self-start mr-10">
							<Link
								to="/"
								className="flex items-center text-blue-500 text-md hover:text-blue-700"
							>
								<i className="fa-solid fa-chevron-left"></i>
								Trước
							</Link>
						</span>

						<div className="flex items-center px-3 py-3 mb-5 border rounded-lg shadow-3xl border-gray-300 ">
							<span className="inline-flex p-2 mr-2 leading-none transform bg-blue-200 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="max-w-full max-h-full pointer-events-none"
								>
									<path
										d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
										fill="currentColor"
									></path>
								</svg>
							</span>
							<section>
								<h2 className="font-bold text-heading-m text-gray-900">
									Theo dõi nơi lưu trú bạn thích
								</h2>
								<p className="text-m ">
									<button
										id="favorites-login"
										className="px-1 text-blue-800 cursor-pointer hover:underline "
									>
										Đăng nhập hoặc tạo tài khoản
									</button>
									để lưu nơi lưu trú bạn thích vào tài khoản và tạo danh sách riêng của mình.
								</p>
							</section>
						</div>
					</main>
				</>
			)}
		</>
	);
};

export default LichSuDPLayout;
