export default function SearchBarLayout({
	// Box,
	Link,
	// FormControl,
	// diadanh,
	onAddressChange,
	isBookingPage,
	filterAddress,
	setFilterAddress,
	address,
	// Select,
	// MenuItem,
	// OutlinedInput,
	// MenuProps,
	getStyles,
	theme,
	vungMien,
	mien,
	filterMien,
	setFilterMien,
	onMienChange,
	filterDiaDanh,
}) {
	return (
		<>
			<div className="w-2/4  mt-2 border-none rounded-lg shadow-2xl mb-2 z-50 md:sticky top-0 left-0 right-0">
				<div
					className=" w-full overflow-hidden rounded-lg"
					data-testid="search-form"
				>
					<div className="flex justify-between gap-5">
						{/* Vùng miền */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full rounded-lg col-span-1 border-2 border-gray-300 md:col-span-3 pl-5 pr-11 md:pr-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center justify-center h-14 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col justify-center w-full truncate">
									<div className="w-full">

										<select
											className="hover:border-b-2 hover:border-gray-300 outline-none w-full"
											value={isBookingPage ? filterMien : undefined}
											defaultValue={[]}
											onChange={
												isBookingPage ? (e) => setFilterMien(e.target.value) : onMienChange
											}
										>
											<option
												disabled
												value=""
												className="text-gray-700 bg-white hover:bg-gray-100"
											>
												<i className="fa-solid fa-earth-asia mr-2"></i>
												<em>Chọn vùng miền</em>
											</option>
											<option value="">Xem tất cả vùng miền</option>

											{vungMien.map((vung) => (
												<option
													key={vung.id}
													value={`${vung.id}`}
													className="text-gray-700 bg-white hover:bg-gray-100"
													style={getStyles(vung.tenVungMien, vung.tenVungMien, theme)}
												>
													{vung.tenVungMien}
												</option>
											))}
										</select>

									</div>
								</span>
							</span>
						</button>
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full rounded-lg border-2 border-gray-300 col-span-1 md:col-span-4 px-12 md:px-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center justify-center h-14 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col justify-center w-full truncate">
									<div className="w-full">

										<select
											className="hover:border-b-2 hover:border-gray-300 outline-none w-full"
											value={isBookingPage ? filterAddress : undefined}
											defaultValue={[]}
											onChange={
												isBookingPage
													? (e) => setFilterAddress(e.target.value)
													: onAddressChange
											}
										>
											<option
												disabled
												value=""
												className="text-gray-700 bg-white hover:bg-gray-100"
											>
												<i className="fa-solid fa-location-dot mr-2"></i>
												<em>Chọn tỉnh thành</em>
											</option>
											<option value="">Xem tất cả tỉnh thành</option>

											{filterDiaDanh.map((khuvuc) => (
												<option
													className="text-gray-700 bg-white hover:bg-gray-100"
													key={khuvuc.id}
													value={`${khuvuc.id}`}
													style={getStyles(
														khuvuc.tenTinhThanh,
														khuvuc.tenTinhThanh,
														theme,
													)}
												>
													{khuvuc.tenTinhThanh}
												</option>
											))}
										</select>

									</div>
								</span>
							</span>
						</button>
						{/* Tìm */}
						<span className="flex items-center justify-end col-span-1">
							<Link
								to={`/booking/${mien}/${address}`}
								type="button"
								className={`
									flex items-center justify-center px-6 py-2
									h-full rounded-b-lg md:rounded-md 
									text-md font-semibold text-white
									bg-blue-500 hover:bg-blue-600 w-full
								`}
								data-testid="search-button"
							>
								<span
									className="inline-flex flex-shrink-0 mr-1 leading-none transform "
									aria-hidden="true"
								>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
								<span className="text-center">Tìm</span>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
