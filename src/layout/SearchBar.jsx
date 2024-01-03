export default function SearchBarLayout({
	Box, Link,
	FormControl, diadanh,
	onAddressChange,
	isBookingPage, filterAddress, setFilterAddress,
	address, Select, MenuItem, OutlinedInput, MenuProps, getStyles, theme,
	vungMien, mien, filterMien, setFilterMien, onMienChange,
	filterDiaDanh
}) {

	return (
		<>
			<div className="w-3/4 mx-auto mt-2 border-none rounded-lg shadow-2xl mb-2 z-50 md:sticky top-0 left-0 right-0">
				<div
					className="flex flex-wrap w-full overflow-hidden bg-white rounded-lg 2xl:flex-nowrap"
					data-testid="search-form"
				>
					<div className="grid w-full grid-cols-1 rounded-lg md:h-14 md:grid-cols-8">
						{/* Vùng miền */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full col-span-1 md:col-span-3 pl-5 pr-11 md:pr-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center justify-center h-14 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span
									className="inline-flex flex-shrink-0 mr-2 leading-none transform "
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
												value={isBookingPage ? filterMien : undefined}
												defaultValue={[]}
												onChange={
													isBookingPage
														? (e) => setFilterMien(e.target.value)
														: onMienChange
												}
												input={<OutlinedInput />}
												sx={{ py: 2 }}
												MenuProps={MenuProps}
												inputProps={{ 'aria-label': 'Without label' }}
											>
												<MenuItem disabled value="">
													<i className="fa-solid fa-earth-asia mr-2"></i>
													<em>Chọn vùng miền</em>
												</MenuItem>
												<MenuItem
													value=""
												>
													Xem tất cả vùng miền
												</MenuItem>

												{vungMien.map((vung) => (
													<MenuItem
														key={vung.id}
														value={`${vung.id}`}
														style={getStyles(vung.tenVungMien, vung.tenVungMien, theme)}
													>
														{vung.tenVungMien}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Box>
								</span>
							</span>
						</button>
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full col-span-1 md:col-span-4 px-12 md:px-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center justify-center h-14 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col justify-center w-full truncate">
									<Box fullWidth>
										<FormControl fullWidth sx={{ m: 1.5 }}>
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
												// onChange={(e) => onAddressChange(e.target.value, 'tinhThanh')}
												input={<OutlinedInput />}
												sx={{ py: 2 }}
												MenuProps={MenuProps}
												inputProps={{ 'aria-label': 'Without label' }}
											>
												<MenuItem disabled value="">
													<i className="fa-solid fa-location-dot mr-2"></i>
													<em>Chọn khu vực</em>
												</MenuItem>
												<MenuItem
													value=""
												>
													Xem tất cả tỉnh thành
												</MenuItem>

												{filterDiaDanh.map((khuvuc) => (
													<MenuItem
														key={khuvuc.id}
														value={`${khuvuc.id}`}
														style={getStyles(khuvuc.tenTinhThanh, khuvuc.tenTinhThanh, theme)}
													>
														{khuvuc.tenTinhThanh}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Box>
								</span>
							</span>
						</button>
						{/* Tìm */}
						<span className="flex items-center justify-end col-span-1">
							<Link
								to={`/booking/${mien}/${address}`}
								type="button"
								className={`
									flex items-center justify-center px-12 py-2
									h-full rounded-b-lg md:rounded-md 
									text-md font-semibold text-white
									bg-blue-500 hover:bg-blue-600 w-full
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
