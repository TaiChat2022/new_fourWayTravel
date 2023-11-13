import Filter from './Filter';

export default function SearchBarLayout({
	Link,
	Box,
	FormControl,
	NativeSelect,
	diadanh,
	startDate,
	endDate,
	handleStartDateChange,
	handleEndDateChange,
	startDateSelected,
}) {
	return (
		<>
			<div className="w-3/4 mx-auto mt-4 border-none rounded-lg shadow-2xl mb-7">
				<div
					className="flex flex-wrap w-full overflow-hidden bg-white rounded-lg 2xl:flex-nowrap "
					data-testid="search-form"
				>
					<div className="grid w-full grid-cols-1 rounded-lg md:grid-cols-5">
						{/* Địa danh */}
						<button
							type="button"
							data-testid="search-form-destination"
							className="w-full col-span-1 px-5 text-left truncate bg-white group h-14 active:bg-grey-200"
						>
							<span className="flex items-center 2xl:p-2 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span
									className="inline-flex flex-shrink-0 mr-3 leading-none transform "
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
								<span className="relative flex flex-col w-full truncate">
									<Box sx={{ minWidth: 150 }}>
										<FormControl fullWidth>
											<span
												className="text-xs leading-tight truncate text-grey-700"
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
															<option
																key={khuvuc.id}
																value={`${khuvuc.text}`}
															>
																{khuvuc.text}
															</option>
														))}
													</>
												) : (
													<>
														<p>Không lấy được dữ liệu địa danh</p>
													</>
												)}
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
							className="w-full col-span-1 px-5 text-left truncate bg-white border-t md:border-l md:border-t-0 group h-14 active:bg-grey-200"
						>
							<span className="flex items-center md:p-2 md:hover:bg-grey-200 md:rounded-md">
								<span
									className="inline-flex flex-shrink-0 mr-3 leading-none transform"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 max-w-full max-h-full pointer-events-none"
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

								<span className="relative flex flex-col w-full truncate">
									<span
										className="text-xs leading-tight truncate text-grey-700"
										data-testid="search-form-calendar-label"
									>
										Nhận/trả phòng
									</span>
									<div className="flex items-center justify-between">
										<span
											className="text-sm font-bold leading-normal truncate text-grey-900"
											data-testid="search-form-calendar-value"
										>
											<input
												type="date"
												name="start"
												className="block w-full text-sm outline-0"
												value={startDate}
												onChange={handleStartDateChange}
											/>
										</span>
										<span
											className="inline-block text-sm font-bold leading-normal truncate md:hidden text-grey-900"
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
									</div>
								</span>
							</span>
						</button>
						{/* Trả phòng */}
						<button
							type="button"
							data-testid="search-form-guest-selector"
							className="hidden w-full col-span-1 text-left truncate bg-white border-t md:inline-block md:border-l md:border-t-0 group h-14 active:bg-grey-200"
						>
							<span className="z-20 flex items-center justify-start m-auto 2xl:p-2 2xl:hover:bg-grey-200 2xl:rounded-md">
								<span className="relative flex flex-col w-full pl-4 truncate">
									<span
										className="text-xs leading-tight truncate text-grey-700"
										data-testid="search-form-calendar-label"
									>
										Trả phòng
									</span>
									<span
										className="text-sm font-bold leading-normal truncate text-grey-900"
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
						{/* Số khách và phòng */}

						{/*Fiter */}
						<Filter></Filter>
						{/* end Fiter */}

						<Link
							to="/booking"
							className="flex items-center justify-end col-span-1"
						>
							<button
								type="button"
								className={`
									flex items-center justify-center px-12 py-2
									h-full rounded-b-lg md:rounded-md text-white 
									text-md font-semibold
									bg-blue-600 hover:bg-blue-700 w-full md:w-20
								`}
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
