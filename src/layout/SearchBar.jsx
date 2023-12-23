export default function SearchBarLayout({
	Box, Link,
	FormControl, NativeSelect, diadanh,
	startDate, endDate, handleStartDateChange, handleEndDateChange,
	startDateSelected,
	onAddressChange,
	Filter, isBookingPage, filterAddress, setFilterAddress,
	address, Select, MenuItem, OutlinedInput, MenuProps, getStyles, theme,
	sanitizeAddress
}) {

	return (
		<>
			<div className="w-3/4 mx-auto mt-2 border-none rounded-lg shadow-2xl mb-2 z-50 md:sticky top-0 left-0 right-0">
				<div
					className="flex flex-wrap w-full overflow-hidden bg-white rounded-lg 2xl:flex-nowrap"
					data-testid="search-form"
				>
					<div className="grid w-full grid-cols-1 rounded-lg md:h-14 md:grid-cols-5">
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full col-span-1 md:col-span-2 px-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center justify-center h-14  2xl:hover:bg-grey-200 2xl:rounded-md">
								<span
									className="inline-flex flex-shrink-0 mr-1 leading-none transform "
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										className="max-w-full max-h-full pointer-events-none"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeMiterlimit={10}
											strokeWidth={2}
										>
											<path
												d="M10 3a7 7 0 107 7 7 7 0 00-7-7zM21 21l-6-6"
												vectorEffect="non-scaling-stroke"
											></path>
										</g>
									</svg>
								</span>
								<span className="relative flex flex-col justify-center w-full truncate">
									<Box fullWidth>
										<FormControl fullWidth sx={{ m: 1 }}>

											<Select
												// multiple
												displayEmpty
												value={isBookingPage ? filterAddress : undefined}
												defaultValue={[]}
												onChange={
													isBookingPage
														? (e) => setFilterAddress(e.target.value)
														: onAddressChange
												}
												input={<OutlinedInput />}
												sx={{ py: 2 }}
												MenuProps={MenuProps}
												inputProps={{ 'aria-label': 'Without label' }}
											>
												<MenuItem disabled value="">
													<em>Chọn khu vực</em>
												</MenuItem>
												<MenuItem
													value=""
												>
													Xem tất cả
												</MenuItem>

												{diadanh.map((khuvuc) => (
													<MenuItem
														key={khuvuc.id}
														value={`${khuvuc.text}`}
														style={getStyles(khuvuc.text, khuvuc.text, theme)}
													>
														{khuvuc.text}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Box>
								</span>
							</span>
						</button>
						{/* Nhận trả lưu trú */}
						<button
							type="button"
							data-testid="search-form-calendar"
							className="w-full col-span-1 pl-4 pr-4 md:pl-0 text-left truncate bg-white border-t md:border-l md:border-t-0 group h-14 active:bg-grey-200"
						>
							<span className="flex items-center md:pl-4 md:hover:bg-grey-200 md:rounded-md">
								<span className="relative flex flex-col w-full truncate">
									<div className="flex justify-between items-center">
										<div className="nhan md:w-full">
											<span
												className="flex flex-col text-sm font-bold leading-normal truncate text-grey-900"
												data-testid="search-form-calendar-value"
											>
												<span
													className="text-xs leading-tight truncate text-grey-700"
													data-testid="search-form-calendar-label"
												>
													Ngày nhận
												</span>
											</span>
											<div className="flex items-center">
												<input
													type="date"
													name="start"
													className="block w-full text-sm outline-0"
													value={startDate}
													onChange={handleStartDateChange}
												/>
											</div>
										</div>
										<div className="tra md:w-full  md:hidden">
											<span
												className="flex flex-col text-sm font-bold leading-normal truncate md:hidden text-grey-900"
												data-testid="search-form-calendar-value"
											>
												<span
													className="text-xs leading-tight truncate text-grey-700"
													data-testid="search-form-calendar-label"
												>
													Ngày trả
												</span>
											</span>
											<div className="flex items-center">
												<input
													type="date"
													name="end"
													className="block w-full text-sm outline-0"
													value={endDate}
													onChange={handleEndDateChange}
													disabled={!startDateSelected}
												/>
											</div>
										</div>
									</div>
								</span>
							</span>
						</button>
						{/* Trả lưu trú */}
						<button
							type="button"
							data-testid="search-form-guest-selector"
							className="hidden w-full col-span-1 text-left truncate bg-white border-t md:inline-block md:border-l md:border-t-0 group h-14 active:bg-grey-200"
						>
							<span className="z-20 flex items-center justify-start m-auto 2xl:p-2 2xl:hover:bg-white 2xl:rounded-md">
								<span className="relative flex flex-col w-full pl-4 truncate">
									<span
										className="text-xs leading-tight truncate text-grey-900 font-bold"
										data-testid="search-form-calendar-label"
									>
										Ngày trả
									</span>
									<span
										className="text-sm leading-normal truncate text-grey-500"
										data-testid="search-form-calendar-value"
									>
										<input
											type="date"
											name="end"
											className="block w-full text-sm outline-0"
											value={endDate}
											onChange={handleEndDateChange}
											disabled={!startDateSelected}
										/>
									</span>
								</span>
							</span>
						</button>
						{/* Số khách và lưu trú */}

						{/*Fiter */}
						{/* <Filter></Filter> */}
						{/* end Fiter */}

						<span className="flex items-center justify-end col-span-1">
							<Link
								to={`/booking/${sanitizeAddress(address)}`}
								type="button"
								className={`
									flex items-center justify-center px-12 py-2
									h-full rounded-b-lg md:rounded-md 
									text-md font-semibold text-white
									bg-blue-600 hover:bg-blue-700 w-full md:w-20
								`}
								data-testid="search-button"
							>
								<span className="text-center">Tìm</span>
							</Link>
						</span>
					</div>
				</div>
			</div >
		</>
	);
}
