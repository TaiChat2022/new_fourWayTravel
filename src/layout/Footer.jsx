import { Link } from 'react-router-dom';
export default function Footer({ windowWidth }) {
	return (
		<>
			{windowWidth < 720 ? (
				<>
					<footer>
						<div className="mx-auto bg-5 mt-12 py-6 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5 border-t-2">
							<div className="flex flex-col mx-auto justify-between flex-shrink-0 mb-6 w-3/4">
								<h2 className="font-bold text-primary-footer text-3xl py-4 mb-4">FOUR WAY TRAVEL</h2>
								<div className="grid grid-cols-1 gap-4">
									<div className="col-span-1 flex flex-col gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className="text-primary-footer text-sm font-medium">
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
										<div className="List2 border-t-2 pt-4">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-primary-footer text-sm font-medium">
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

									<div className="Input_form col-span-1">
										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>
										<form>
											<label
												htmlFor="default-search"
												className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-primary-footer"
											>
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-4 h-4 text-gray-500 dark:text-gray-400"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 20"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
														/>
													</svg>
												</div>
												<input
													type="search"
													id="default-search"
													className="block w-full p-4 pl-10 text-sm bg-white border border-gray-400 text-gray-900 rounded-lg "
													placeholder="Địa chỉ email..."
													required
												/>
												<button
													type="submit"
													className="text-primary-footer absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Đăng ký
												</button>
											</div>
										</form>
										<p className="text-primary-footer text-s leading-normal text-left mt-4">
											Copyright 2023 FourWay Travel.
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</>
			) : (
				<>
					<footer>
						<div className="mx-auto bg-5 mt-12 py-6 2xl:py-14 2xl:pb-16 px-7 2xs:px-8 l:px-14 2xl:px-5 border-t-2">
							<div className="flex flex-col mx-auto justify-between flex-shrink-0 mb-6 w-3/4">
								<h2 className="font-bold text-3xl py-4 mb-4 text-primary-footer">FOUR WAY TRAVEL</h2>
								<div className="grid grid-cols-3 gap-4">
									<div className="col-span-1 flex flex-wrap gap-8">
										<div className="List1">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Công ty</h2>
											<ul className=" text-sm text-primary-footer font-medium">
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
										<div className="List2">
											<h2 className="mb-6 text-lg font-bold text-primary-footer">Hỗ trợ</h2>
											<ul className="text-primary-footer text-sm font-medium">
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

									<div className="Input_form col-span-2">
										<h2 className="mb-6 text-lg font-bold text-primary-footer">
											Tìm nguồn cảm hứng đặc biệt cho kỳ nghỉ tiếp theo của bạn - đăng ký nhận bản
											tin của chúng tôi.
										</h2>
										<form>
											<label
												htmlFor="default-search"
												className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-primary-footer"
											>
												Search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-4 h-4 text-gray-500 dark:text-gray-400"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 20 20"
													>
														<path
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
														/>
													</svg>
												</div>
												<input
													type="search"
													id="default-search"
													className="block w-full p-4 pl-10 text-sm bg-white border border-gray-400 text-gray-900 rounded-lg "
													placeholder="Địa chỉ email..."
													required
												/>
												<button
													type="submit"
													className="text-primary-footer absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												>
													Đăng ký
												</button>
											</div>
										</form>
										<p className="text-grey-500 text-s leading-normal text-primary-footer text-left mt-4">
											Copyright 2023 FourWay Travel.
										</p>
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
