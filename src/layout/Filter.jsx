// @ts-nocheck
import { Popover } from '@mui/material';
import { useRef, useState } from 'react';

export default function Filter() {
	const anchorEle = useRef();
	const [isOpen, setIsopen] = useState(false);

	return (
		<>
			<button
				ref={anchorEle}
				onClick={() => setIsopen(true)}
			>
				2 khách, 1 phòng
			</button>

			<Popover
				open={isOpen}
				anchorEl={anchorEle?.current}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				onClose={() => setIsopen(false)}
			>
				{/* <div className="bg-white rounded-lg">
					<div className="px-8 pt-6">
						<div className="grid grid-rows-3 gap-4 mb-6">
							<div className="flex items-center justify-between">
								<label
									htmlFor="number-input43"
									className="font-bold text-m"
								>
									Người lớn
								</label>
								<div className="grid grid-flow-col gap-4 auto-cols-auto">
									<button className="text-blue-800 border rounded-full w-9 h-9">-</button>
									<input
										type="text"
										className="w-10 text-center border border-gray-300 appearance-none rounded-xs h-9"
									/>
									<button className="text-blue-800 border rounded-full w-9 h-9">+</button>
								</div>
							</div>
						</div>
						<div className="flex flex-row py-6 border-t border-grey-300">
							<div className="w-full text-md">
								<h2 className="font-bold">Cho phép mang theo vật nuôi</h2>
								<h3>Chỉ hiển thị những nơi lưu trú cho phép mang theo vật nuôi</h3>
							</div>
							<div className="flex flex-row-reverse items-center">
								<input
									className="relative flex items-center justify-center flex-shrink-0 border appearance-none Checkbox_checkbox--large__bw_up border-grey-500 rounded-xs"
									type="checkbox"
									id="checkbox-46"
									data-testid="pet-friendly-filter"
								/>
							</div>
						</div>
					</div>
					<div className="px-8 py-3">
						<div className="px-8 py-3 rounded-t-md shadow-nux-15">
							<div className="flex items-baseline justify-between ">
								<button
									type="button"
									data-testid="guest-selector-reset"
									className="font-bold uppercase text-grey-700 text-m disabled:text-grey-300 disabled:cursor-not-allowed"
									disabled=""
								>
									Chọn lại
								</button>
								<button
									type="button"
									className="font-bold text-white bg-blue-800 disabled:cursor-not-allowed PrimaryButton_small__8N1se PrimaryButton_enabled__KCd_i"
									data-testid="guest-selector-apply"
								>
									Áp dụng
								</button>
							</div>
						</div>
					</div>
				</div> */}

				{/* Fiter */}
				<div className="relative bg-white rounded-md Flyout_wrapper__Y6ACW shadow-popover ">
					<div className="FlyoutGuestsRooms_flyoutWidth__O7VpR">
						<div className="flex justify-center px-6 pt-6 align-center ">
							<div data-testid="guests-rooms">
								<div className="grid grid-rows-3 gap-4 mb-6">
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input65"
											className="font-bold text-m"
										>
											Người lớn
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												data-testid="adults-amount-minus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={24}
															height={24}
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">Ít hơn</span>
												</span>
											</button>
											<input
												min="1"
												max="48"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input65"
												data-testid="adults-amount"
												value={2}
											/>
											<button
												type="button"
												data-testid="adults-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
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
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">Thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input66"
											className="font-bold text-m"
										>
											Trẻ em
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												disabled=""
												data-testid="children-amount-minus-button"
												className="text-blue-300 border rounded-full cursor-not-allowed h-9 w-9"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">ít hơn</span>
												</span>
											</button>
											<input
												min="0"
												max="42"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input66"
												data-testid="children-amount"
												value="0"
											/>
											<button
												type="button"
												data-testid="children-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="number-input133"
											className="font-bold text-m"
										>
											Phòng
										</label>
										<div className="grid grid-flow-col gap-4 auto-cols-auto">
											<button
												type="button"
												disabled=""
												data-testid="rooms-amount-minus-button"
												className="text-blue-300 border rounded-full cursor-not-allowed h-9 w-9"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<path
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
																vectorEffect="non-scaling-stroke"
																d="M6 12h12"
															></path>
														</svg>
													</span>
													<span className="sr-only">ít hơn</span>
												</span>
											</button>
											<input
												min="1"
												max="6"
												minLength="1"
												maxLength="2"
												className="w-10 m-0 text-center border appearance-none NumberInput_input__i1zP_ h-9 border-grey-300 rounded-xs"
												type="number"
												id="number-input133"
												data-testid="rooms-amount"
												value="1"
											/>
											<button
												type="button"
												data-testid="rooms-amount-plus-button"
												className="text-blue-800 border rounded-full h-9 w-9 hover:text-blue-900"
											>
												<span className="flex items-center justify-center">
													<span
														className="inline-flex leading-none transform"
														aria-hidden="true"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24"
															height="24"
															viewBox="0 0 24 24"
															className="max-w-full max-h-full pointer-events-none"
														>
															<g
																fill="none"
																stroke="currentColor"
																strokeLinecap="round"
																strokeMiterlimit="10"
																strokeWidth="2"
															>
																<path
																	vectorEffect="non-scaling-stroke"
																	d="M6 12h12M12 6v12"
																></path>
															</g>
														</svg>
													</span>
													<span className="sr-only">thêm</span>
												</span>
											</button>
										</div>
									</div>
									<div className="flex flex-row py-6 border-t border-grey-300">
										<div className="w-full text-m">
											<h2 className="font-bold">Cho phép mang theo vật nuôi</h2>
											<h3>Chỉ hiển thị những nơi lưu trú cho phép mang theo vật nuôi</h3>
										</div>
										<div className="flex flex-row-reverse items-center">
											<input
												className="relative flex items-center justify-center flex-shrink-0 border appearance-none Checkbox_checkbox--large__bw_up border-grey-500 rounded-xs"
												type="checkbox"
												id="checkbox-45"
												data-testid="pet-friendly-filter"
											/>
										</div>
									</div>
									<div className="px-8 py-3 rounded-t-md shadow-nux-15">
										<div className="flex items-baseline justify-between ">
											<button
												type="button"
												data-testid="guest-selector-reset"
												className="font-bold uppercase text-grey-700 text-m disabled:text-grey-300 disabled:cursor-not-allowed"
												disabled=""
											>
												Chọn lại
											</button>
											<button
												type="button"
												className="w-20 h-10 font-bold text-white bg-blue-800 rounded-md disabled:cursor-not-allowed PrimaryButton_small__8N1se PrimaryButton_enabled__KCd_i"
												data-testid="guest-selector-apply"
											>
												Áp dụng
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Popover>
		</>
	);
}
