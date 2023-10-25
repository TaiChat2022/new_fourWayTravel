export default function SearchBarLayout({
	Link, Box, FormControl, NativeSelect,
	diadanh,
	startDate, endDate, handleStartDateChange, handleEndDateChange,
	startDateSelected,

	handleSearch
}) {
	return (
		<>
			<div className="mx-auto mt-4 mb-7 w-3/4 shadow-2xl border-none rounded-lg">
				<div
					className="flex flex-wrap 2xl:flex-nowrap w-full rounded-lg bg-white overflow-hidden "
					data-testid="search-form"
				>
					<div className="grid grid-cols-1 md:grid-cols-5 w-full rounded-lg">
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className=" group w-full col-span-1 text-left truncate h-14 px-5 bg-white active:bg-grey-200"
						>
							<span className="flex items-center 2xl:p-2 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span
									className="leading-none inline-flex transform flex-shrink-0 mr-3 "
									aria-hidden="true"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
										<g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2}>
											<path d="M10 3a7 7 0 107 7 7 7 0 00-7-7zM21 21l-6-6" vectorEffect="non-scaling-stroke">
											</path>
										</g>
									</svg>

								</span>
								<span className="flex flex-col relative w-full truncate">
									<Box sx={{ minWidth: 150 }}>
										<FormControl fullWidth>
											<span
												className="text-xs leading-tight text-grey-700 truncate"
												data-testid="search-form-destination-label"
											>
												Địa danh
											</span>
											<NativeSelect
												defaultValue={30}
												inputProps={{
													name: 'diadanh',
													id: 'uncontrolled-native',
												}}

											>
												{diadanh ? (
													<>
														{diadanh.map((khuvuc) => (
															<>
																<option key={khuvuc.id} value={`${khuvuc.text}`}>{khuvuc.text}</option>
															</>
														))}
													</>
												) :
													(
														<>
															<p>Không lấy được dữ liệu địa danh</p>
														</>
													)
												}
											</NativeSelect>
										</FormControl>
									</Box>
								</span>

							</span>
						</button>
						{/* Nhận trả phòng */}
						<button
							type="button"
							data-testid="search-form-calendar"
							className="border-t md:border-l md:border-t-0 col-span-1 group w-full text-left truncate h-14 px-5 bg-white active:bg-grey-200"
						>
							<span className="flex items-center md:p-2 md:hover:bg-grey-200 md:rounded-md">
								<span
									className="leading-none inline-flex transform flex-shrink-0 mr-3"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="pointer-events-none max-h-full max-w-full w-6 h-6"
									>
										<g fill="currentColor">
											<path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z" />
											<circle
												cx="7.5"
												cy="12.5"
												r="1.5"
											/>
											<path d="M19 5h-1a1 1 0 00-2 0H8a1 1 0 00-2 0H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1V9h16zm0-10H4V7a1 1 0 011-1h14a1 1 0 011 1z" />
											<circle
												cx="7.5"
												cy="12.5"
												r="1.5"
											/>
										</g>
									</svg>
								</span>

								<span className="flex flex-col relative w-full truncate">
									<span
										className="text-xs leading-tight text-grey-700 truncate"
										data-testid="search-form-calendar-label"
									>
										Nhận/trả phòng
									</span>
									<div className="flex items-center justify-between">
										<span
											className="text-sm leading-normal font-bold truncate text-grey-900"
											data-testid="search-form-calendar-value"
										>
											<input
												type="date"
												name="start"
												className="text-sm block w-full outline-0"
												value={startDate}
												onChange={handleStartDateChange}
											/>
										</span>
										<span className="md:hidden inline-block text-sm leading-normal font-bold truncate text-grey-900"
											data-testid="search-form-calendar-value"
										>
											<input
												type="date"
												name="end"
												className="text-sm block w-full outline-0"
												value={endDate}
												onChange={handleEndDateChange}
												disabled={!startDateSelected}
											/>
										</span>
									</div>
								</span>

							</span>

						</button>
						{/* Trả phòng */}
						<button
							type="button"
							data-testid="search-form-guest-selector"
							className="hidden md:inline-block border-t md:border-l md:border-t-0 col-span-1 group w-full text-left truncate h-14 bg-white active:bg-grey-200"
						>
							<span className="flex justify-start m-auto items-center 2xl:p-2 z-20 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="flex flex-col pl-4 relative w-full truncate">
									<span
										className="leading-tight text-grey-700 truncate text-xs"
										data-testid="search-form-calendar-label"
									>
										Trả phòng
									</span>
									<span
										className="text-sm leading-normal font-bold truncate text-grey-900"
										data-testid="search-form-calendar-value"
									>
										<input
											type="date"
											name="end"
											className="text-sm block w-full outline-0"
											value={endDate}
											onChange={handleEndDateChange}
											disabled={!startDateSelected}
										/>
									</span>
								</span>
							</span>
						</button>
						{/* Số khách và phòng */}
						<button
							type="button"
							data-testid="search-form-guest-selector"
							className="border-t md:border-l md:border-t-0 col-span-1 group w-full text-left truncate h-14 px-5 bg-white active:bg-grey-200"
						>
							<span className="flex items-center 2xl:p-2 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span
									className="leading-none inline-flex transform flex-shrink-0 mr-3 "
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										className="pointer-events-none max-h-full max-w-full"
									>
										<path
											d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
											fill="currentColor"
										/>
									</svg>
								</span>
								<span className="flex flex-col relative w-full truncate">
									<span
										className="text-xs leading-tight text-grey-700 truncate"
										data-testid="search-form-guest-selector-label"
									>
										Số khách và phòng
									</span>
									<span
										className="text-sm leading-normal font-bold truncate text-grey-900"
										data-testid="search-form-guest-selector-value"
									>
										2 khách, 1 phòng
									</span>
								</span>
							</span>
						</button>

						<Link to='/booking' className="col-span-1 flex items-center justify-end">
							<button
								type="button"
								className="flex items-center justify-center px-12 py-2 h-full rounded-b-lg md:rounded-md text-white text-xl font-semibold bg-blue-600 hover:bg-blue-700 w-full md:w-20"
								data-testid="search-button"
							>
								<span className="text-center">Tìm</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}