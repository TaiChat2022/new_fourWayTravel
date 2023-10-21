const BookingLayout = ({ React, Box, Container, FormControl, MenuItem, Select }) => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<>
			<Container className=" bg-slate-200">
				<div className="mx-auto w-5/6  border-none rounded-lg">
					<div className="flex justify-between gap-4 pr-4">
						<div className="flex justify-between  mt-4 w-5/6">
							<div className="flex">
								<span className="pt-2 mr-1 ml-6 text-sm">Sắp xếp theo</span>
								<select
									id="countries"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9"
								>
									<option selected>Gợi ý của chúng tôi</option>
									<option value="">Xếp hạng & gợi ý</option>
									<option value="">Giá & gợi ý</option>
									<option value="">Khoảng cách & gợi ý</option>
									<option value="">Chỉ xếp hạng</option>
									<option value="">Chỉ giá</option>
								</select>
							</div>
							<div className="">
								<div className="flex gap-1 text-xs">
									<svg
										className="w-4 h-3 text-gray-800 dark:text-white mr-1 "
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
										/>
									</svg>
									<span>Số nơi lưu trú: 489</span>
								</div>
								<div className="flex gap-1 text-xs mt-1">
									<svg
										className="w-3 h-3 text-gray-800 dark:text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 20"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
										/>
									</svg>
									<span>Số trang web đặt phòng đã tìm: 489</span>
								</div>
							</div>
						</div>
						<div>
							<img
								src="https://imgcy.trivago.com/q_auto/v1/hardcodedimages/map-entry-background.png"
								alt=""
								width={'272px'}
								height={'52px'}
								className="mt-4 rounded "
							/>
						</div>
					</div>

					<h1 className="mt-4 p-4 font-semibold ml-2">
						Khách sạn tại Vũng Tàu (Tỉnh Bà Rịa-Vũng Tàu, Việt Nam)
					</h1>
					<Box className="m-4 borderRadius={1} bg-white rounded-lg max-h-48 ml-5">
						<div className="flex justify-between max-h-44">
							<div className="flex gap-4 ">
								<img
									src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/09/47/e19111ced629392b0fb9011ad67f4ca5bb2759573f4faa929bd5deabc5db.jpeg"
									alt=""
									className="rounded-l-lg "
								/>
								<div className="">
									<div className="flex gap-52 cursor-pointer">
										<h1 className="font-semibold ">Nha Nghi 846b50</h1>
										<svg
											class="w-5 h-5 text-gray-800 dark:text-white mt-1 cursor-pointer"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 19"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
											/>
										</svg>
									</div>
									<p>Nhà trọ</p>
									<div className="flex justify-between mt-2">
										<p>Cách trung tâm thành phố 0.0km</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
									<div className="flex justify-between mt-2">
										<span className="font-bold">8.6- Xuất sắc</span> <p>(30 nhận xét)</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="m-2 ">
								<div className="w-56 h-24 rounded-lg border-green-200 border-2 bg-lime-100">
									<div className="flex justify-between">
										<span className="text-sm mt-2 ml-1 font-medium">Agoda</span>
										<div className=" border border-amber-600 mt-1 mr-1 rounded">
											<span className=" text-xs pl-1 pr-1 font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</span>
										</div>
									</div>
									<div className="flex text-sm">
										<svg
											class="w-4 h-3 text-gray-800 dark:text-white m-2 text-lime-600"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
									</div>
									<div className="flex justify-between ml-2 mr-2">
										<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
										<button className="border rounded-md bg-green-500 font-medium flex text-xs">
											<span className="p-2 ">Xem Giá Tốt</span>
											<svg
												class="w-3 h-3 text-gray-800 dark:text-white mt-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
										</button>
									</div>
								</div>
								<FormControl
									sx={{ mt: 2, minWidth: 220 }}
									size="small"
									className="bg-slate-200"
								>
									<Select
										value={age}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="">
											<em>Giá khác</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
					</Box>
					<Box className="m-4 borderRadius={1} bg-white rounded-lg max-h-48 ml-5">
						<div className="flex justify-between max-h-44">
							<div className="flex gap-4 ">
								<img
									src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/09/47/e19111ced629392b0fb9011ad67f4ca5bb2759573f4faa929bd5deabc5db.jpeg"
									alt=""
									className="rounded-l-lg "
								/>
								<div className="">
									<div className="flex gap-52 cursor-pointer">
										<h1 className="font-semibold ">Nha Nghi 846b50</h1>
										<svg
											class="w-5 h-5 text-gray-800 dark:text-white mt-1 cursor-pointer"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 19"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
											/>
										</svg>
									</div>
									<p>Nhà trọ</p>
									<div className="flex justify-between mt-2">
										<p>Cách trung tâm thành phố 0.0km</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
									<div className="flex justify-between mt-2">
										<span className="font-bold">8.6- Xuất sắc</span> <p>(30 nhận xét)</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="m-2 ">
								<div className="w-56 h-24 rounded-lg border-green-200 border-2 bg-lime-100">
									<div className="flex justify-between">
										<span className="text-sm mt-2 ml-1 font-medium">Agoda</span>
										<div className=" border border-amber-600 mt-1 mr-1 rounded">
											<span className=" text-xs pl-1 pr-1 font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</span>
										</div>
									</div>
									<div className="flex text-sm">
										<svg
											class="w-4 h-3 text-gray-800 dark:text-white m-2 text-lime-600"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
									</div>
									<div className="flex justify-between ml-2 mr-2">
										<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
										<button className="border rounded-md bg-green-500 font-medium flex text-xs">
											<span className="p-2 ">Xem Giá Tốt</span>
											<svg
												class="w-3 h-3 text-gray-800 dark:text-white mt-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
										</button>
									</div>
								</div>
								<FormControl
									sx={{ mt: 2, minWidth: 220 }}
									size="small"
									className="bg-slate-200"
								>
									<Select
										value={age}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="">
											<em>Giá khác</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
					</Box>
					<Box className="m-4 borderRadius={1} bg-white rounded-lg max-h-48 ml-5">
						<div className="flex justify-between max-h-44">
							<div className="flex gap-4 ">
								<img
									src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/09/47/e19111ced629392b0fb9011ad67f4ca5bb2759573f4faa929bd5deabc5db.jpeg"
									alt=""
									className="rounded-l-lg "
								/>
								<div className="">
									<div className="flex gap-52 cursor-pointer">
										<h1 className="font-semibold ">Nha Nghi 846b50</h1>
										<svg
											class="w-5 h-5 text-gray-800 dark:text-white mt-1 cursor-pointer"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 19"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
											/>
										</svg>
									</div>
									<p>Nhà trọ</p>
									<div className="flex justify-between mt-2">
										<p>Cách trung tâm thành phố 0.0km</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
									<div className="flex justify-between mt-2">
										<span className="font-bold">8.6- Xuất sắc</span> <p>(30 nhận xét)</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="m-2 ">
								<div className="w-56 h-24 rounded-lg border-green-200 border-2 bg-lime-100">
									<div className="flex justify-between">
										<span className="text-sm mt-2 ml-1 font-medium">Agoda</span>
										<div className=" border border-amber-600 mt-1 mr-1 rounded">
											<span className=" text-xs pl-1 pr-1 font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</span>
										</div>
									</div>
									<div className="flex text-sm">
										<svg
											class="w-4 h-3 text-gray-800 dark:text-white m-2 text-lime-600"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
									</div>
									<div className="flex justify-between ml-2 mr-2">
										<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
										<button className="border rounded-md bg-green-500 font-medium flex text-xs">
											<span className="p-2 ">Xem Giá Tốt</span>
											<svg
												class="w-3 h-3 text-gray-800 dark:text-white mt-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
										</button>
									</div>
								</div>
								<FormControl
									sx={{ mt: 2, minWidth: 220 }}
									size="small"
									className="bg-slate-200"
								>
									<Select
										value={age}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="">
											<em>Giá khác</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
					</Box>
					<Box className="m-4 borderRadius={1} bg-white rounded-lg max-h-48 ml-5">
						<div className="flex justify-between max-h-44">
							<div className="flex gap-4 ">
								<img
									src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/09/47/e19111ced629392b0fb9011ad67f4ca5bb2759573f4faa929bd5deabc5db.jpeg"
									alt=""
									className="rounded-l-lg "
								/>
								<div className="">
									<div className="flex gap-52 cursor-pointer">
										<h1 className="font-semibold ">Nha Nghi 846b50</h1>
										<svg
											class="w-5 h-5 text-gray-800 dark:text-white mt-1 cursor-pointer"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 19"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
											/>
										</svg>
									</div>
									<p>Nhà trọ</p>
									<div className="flex justify-between mt-2">
										<p>Cách trung tâm thành phố 0.0km</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
									<div className="flex justify-between mt-2">
										<span className="font-bold">8.6- Xuất sắc</span> <p>(30 nhận xét)</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="m-2 ">
								<div className="w-56 h-24 rounded-lg border-green-200 border-2 bg-lime-100">
									<div className="flex justify-between">
										<span className="text-sm mt-2 ml-1 font-medium">Agoda</span>
										<div className=" border border-amber-600 mt-1 mr-1 rounded">
											<span className=" text-xs pl-1 pr-1 font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</span>
										</div>
									</div>
									<div className="flex text-sm">
										<svg
											class="w-4 h-3 text-gray-800 dark:text-white m-2 text-lime-600"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
									</div>
									<div className="flex justify-between ml-2 mr-2">
										<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
										<button className="border rounded-md bg-green-500 font-medium flex text-xs">
											<span className="p-2 ">Xem Giá Tốt</span>
											<svg
												class="w-3 h-3 text-gray-800 dark:text-white mt-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
										</button>
									</div>
								</div>
								<FormControl
									sx={{ mt: 2, minWidth: 220 }}
									size="small"
									className="bg-slate-200"
								>
									<Select
										value={age}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="">
											<em>Giá khác</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
					</Box>
					<Box className="m-4 borderRadius={1} bg-white rounded-lg max-h-48 ml-5">
						<div className="flex justify-between max-h-44">
							<div className="flex gap-4 ">
								<img
									src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/09/47/e19111ced629392b0fb9011ad67f4ca5bb2759573f4faa929bd5deabc5db.jpeg"
									alt=""
									className="rounded-l-lg "
								/>
								<div className="">
									<div className="flex gap-52 cursor-pointer">
										<h1 className="font-semibold ">Nha Nghi 846b50</h1>
										<svg
											class="w-5 h-5 text-gray-800 dark:text-white mt-1 cursor-pointer"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 21 19"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
											/>
										</svg>
									</div>
									<p>Nhà trọ</p>
									<div className="flex justify-between mt-2">
										<p>Cách trung tâm thành phố 0.0km</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
									<div className="flex justify-between mt-2">
										<span className="font-bold">8.6- Xuất sắc</span> <p>(30 nhận xét)</p>
										<svg
											class="w-4 h-4 text-gray-800 dark:text-white mt-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="m-2 ">
								<div className="w-56 h-24 rounded-lg border-green-200 border-2 bg-lime-100">
									<div className="flex justify-between">
										<span className="text-sm mt-2 ml-1 font-medium">Agoda</span>
										<div className=" border border-amber-600 mt-1 mr-1 rounded">
											<span className=" text-xs pl-1 pr-1 font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</span>
										</div>
									</div>
									<div className="flex text-sm">
										<svg
											class="w-4 h-3 text-gray-800 dark:text-white m-2 text-lime-600"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
									</div>
									<div className="flex justify-between ml-2 mr-2">
										<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
										<button className="border rounded-md bg-green-500 font-medium flex text-xs">
											<span className="p-2 ">Xem Giá Tốt</span>
											<svg
												class="w-3 h-3 text-gray-800 dark:text-white mt-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
										</button>
									</div>
								</div>
								<FormControl
									sx={{ mt: 2, minWidth: 220 }}
									size="small"
									className="bg-slate-200"
								>
									<Select
										value={age}
										onChange={handleChange}
										displayEmpty
										inputProps={{ 'aria-label': 'Without label' }}
									>
										<MenuItem value="">
											<em>Giá khác</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
					</Box>
				</div>
			</Container>
		</>
	);
};

export default BookingLayout;
