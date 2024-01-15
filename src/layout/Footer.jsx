export default function FooterLayout({ windowWidth, Link, Logo1 }) {
	return (
		<>
			{windowWidth < 720 ? (
				<>
					<footer>
						<div className="py-6 mx-auto mt-12 border-t-2 bg-5 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5">
							<div className="flex flex-col justify-between flex-shrink-0 w-3/4 mx-auto mb-6">
								{/* <h2 className="py-4 mb-4 text-3xl font-bold text-primary-footer">FOUR WAY TRAVEL</h2> */}
								<div className="grid grid-cols-1 gap-4">
									<div className="flex flex-col col-span-1 gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="#"
														className=" hover:underline"
													>
														Tìm hiểu
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Cơ hội làm việc
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Tin tức
													</Link>
												</li>
											</ul>
										</div>
										<div className="pt-4 border-t-2 List2">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="#"
														className=" hover:underline"
													>
														Cách hoạt động
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Điều khoản sự dụng
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Thông tin pháp lý
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="#"
														className="hover:underline"
													>
														Thông báo bảo mật
													</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="grid col-span-1 Input_form">
										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>

										<p className="mt-4 leading-normal text-left text-primary-footer text-s">
											Copyright 2023 FourWay Travel.
										</p>
									</div>
									<div className="bao">
										<h2 className="text-lg font-bold text-primary-footer">Thương hiệu</h2>
										<div className="py-4 -ml-3 ">
											<Link to="/">
												<img
													className="h-16 cursor-pointer"
													src={Logo1}
													alt=""
												/>
											</Link>
										</div>

										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>

										<p className="mt-4 leading-normal text-left text-grey-500 text-s text-primary-footer">
											Copyright 2023 FourWay Travel.
										</p>
									</div>
									<div className="bao2">
										<h2 className="-ml-3 text-lg font-bold text-primary-footer">
											Thông tin liên lạc
										</h2>
										<div className="py-4 -ml-3 ">
											<h3 className="text-primary-footer">
												<i className="px-1 fas fa-envelope"></i>Fourwaytravel02@gmail.com
											</h3>
											<h3 className="py-4 text-primary-footer">
												{' '}
												<i className="px-1 fas fa-phone-volume"></i> 0865186230
											</h3>
											<h3 className="text-primary-footer">
												{' '}
												<i className="px-1 fas fa-home"></i> FPT Polytechnic
											</h3>
										</div>
										<div className="h-0.5 w-full bg-1 "></div>
										<h2 className="py-2 mb-6 text-lg font-bold text-primary-footer">
											FourwayTravel đang nổ lực từng ngày để đem đến những khách sạn du lịch mới
											mẻ và chất lượng dịch vụ hoàn hảo đến tay khách hàng.
										</h2>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</>
			) : (
				<>
					<footer>
						<div className="py-6 mx-auto mt-12 border-t-2 bg-5 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5">
							<div className="flex flex-col justify-between flex-shrink-0 w-3/4 mx-auto mb-6">
								{/* <h2 className="py-4 mb-4 text-3xl font-bold text-primary-footer">FOUR WAY TRAVEL</h2> */}
								<div className="grid grid-cols-3 gap-3">
									<div className="flex flex-wrap col-span-1 gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="/timhieu"
														className=" hover:underline"
													>
														Tìm hiểu
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="cohoi"
														className="hover:underline"
													>
														Cơ hội làm việc
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="tintuc"
														className="hover:underline"
													>
														Tin tức
													</Link>
												</li>
											</ul>
										</div>
										<div className="List2">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-sm font-medium text-primary-footer">
												<li className="mb-4">
													<Link
														to="cachhoatdong"
														className=" hover:underline"
													>
														Cách hoạt động
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="/dieukhoan"
														className="hover:underline"
													>
														Điều khoản sự dụng
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="/thongtin"
														className="hover:underline"
													>
														Thông tin pháp lý
													</Link>
												</li>
												<li className="mb-4">
													<Link
														to="thongbao"
														className="hover:underline"
													>
														Thông báo bảo mật
													</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className="flex col-span-2 gap-20 Input_form">
										<div className="bao">
											<h2 className="text-lg font-bold text-primary-footer">Thương hiệu</h2>
											<div className="py-4 -ml-3 ">
												<Link to="/">
													<img
														className="h-16 cursor-pointer"
														src={Logo1}
														alt=""
													/>
												</Link>
											</div>

											<h2 className="mb-6 text-lg font-bold text-primary-footer">
												Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận
												bản tin của chúng tôi.
											</h2>

											<p className="mt-4 leading-normal text-left text-grey-500 text-s text-primary-footer">
												Copyright 2023 FourWay Travel.
											</p>
										</div>
										<div className="bao">
											<h2 className="-ml-3 text-lg font-bold text-primary-footer">
												Thông tin liên lạc
											</h2>
											<div className="py-4 -ml-3 ">
												<h3 className="text-primary-footer">
													<i className="px-1 fas fa-envelope"></i>Fourwaytravel02@gmail.com
												</h3>
												<h3 className="py-4 text-primary-footer">
													{' '}
													<i className="px-1 fas fa-phone-volume"></i> 0865186230
												</h3>
												<h3 className="text-primary-footer">
													{' '}
													<i className="px-1 fas fa-home"></i> FPT Polytechnic
												</h3>
											</div>
											<div className="h-0.5 w-full bg-1 "></div>
											<h2 className="py-2 mb-6 text-lg font-bold text-primary-footer">
												FourwayTravel đang nổ lực từng ngày để đem đến những khách sạn du lịch
												mới mẻ và chất lượng dịch vụ hoàn hảo đến tay khách hàng.
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</>
			)}
		</>
	);
}
