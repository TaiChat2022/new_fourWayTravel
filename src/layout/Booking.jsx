const BookingLayout = ({
	React,
	Box, FormControl, MenuItem, Select,
	luuTru, getRatingText, renderStars
}) => {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<>
			<div
				maxWidth="md"
				className="mt-2 w-3/4 mx-auto"
			>
				<h1 className="mt-4 w-full font-semibold text-2xl">Phòng khách sạn</h1>
				{luuTru ? (
					<>
						{luuTru.map((item) =>
							<Box className="mt-2 border-1 bg-white rounded-lg h-48 mb-4">
								<div className="grid grid-cols-1 md:grid-cols-3 max-h-44 gap-8 ">
									<div className="flex gap-4 col-span-1 md:col-span-2  relative">
										<div className="mr-1">
											<img
												src={item.img}
												alt={item.title}
												className="rounded-l-lg w-full h-48 object-cover"
											/>
										</div>
										<div>
											<div className="cursor-pointer">
												<h1 className="font-semibold text-lg">{item.title}</h1>
											</div>
											<div className="flex justify-between mt-2 text-sm">
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
											<div className="flex items-center justify-start mt-2 text-sm">
												<span className="font-bold text-sm mr-1">
													<i className="fa-solid fa-star mb-1 mr-1 text-yellow-300"></i>
													{item.star} - {getRatingText(item.star)}
												</span>
												<p className="text-sm">(30)</p>
												<span>
													{renderStars(item.star)}
												</span>
											</div>
										</div>
									</div>
									<div className="m-2 col-span-1 relative">
										<div className="w-full h-24 rounded-lg border-green-200 border-2 bg-lime-100">
											<div className="absolute -top-4 inset-x-1/4  p-1 text-center bg-white border border-amber-600 rounded text-xs font-medium text-red-600">
												Giá thấp nhất của chúng tôi
											</div>
											<div className="flex items-center w-full mt-2">
												<span className="text-md mt-2 ml-1 font-medium">Agoda</span>
											</div>
											{/* <div className="flex text-sm">
												<span className="mt-1 text-green-600 font-medium">Miễn phí Đổi/Hủy</span>
											</div> */}
											<div className="flex justify-between ml-2 mr-2">
												<span className="text-sm mt-2 text-green-600 font-medium">158.400đ</span>
												<button className="flex items-center justify-center border rounded-md bg-green-500 text-white font-medium text-xs">
													<span className="p-2 ">Xem Giá Tốt</span>
													<i className="fa-solid fa-chevron-right mr-2"></i>
												</button>
											</div>
										</div>
										<FormControl
											sx={{ mt: 1, minWidth: 220 }}
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
						)}
					</>
				) : (
					<>
						<p>Không tìm được phòng</p>
					</>
				)
				}
			</div>

		</>
	);
};

export default BookingLayout;