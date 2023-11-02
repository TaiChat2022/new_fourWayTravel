const FavouriteLayout = ({ Link, userFavorites, currentUser }) => {
	return (
		<>
			{currentUser ? (
				<>
					{userFavorites ? (
						<>
							<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
								<span className="self-start mr-10">
									<Link
										to="/"
										className="flex items-center text-blue-500 text-md hover:text-blue-700"
									>
										<i className="fa-solid fa-chevron-left"></i>
										Trước
									</Link>
								</span>

								<div className="w-full">
									<div className="px-2 w-3/4 m-auto flex gap-1 justify-start items-center">
										<h1
											className="font-semibold text-3xl text-heading-xl text-gray-900"
											data-testid="favorites-page-headline"
										>
											Nơi lưu trú bạn đã thích
										</h1>
										<span className=" text-sm font-semibold text-blue-600">
											({userFavorites.length} danh sách)
										</span>
									</div>

									<section
										className="mx-auto px-4 w-full"
										data-testid="favorites-page-items-list"
									>
										<ul className="grid grid-cols-1">
											<li>
												<article>
													<div className="flex flex-row items-center m-auto my-7 w-3/4">
														<h2
															className="text-heading-m text-gray-900 font-bold"
															id="destination-count-0"
														>
															Miền Bắc
														</h2>
														<span className=" text-sm font-semibold text-blue-600">
															({userFavorites.length} kỳ lưu trú)
														</span>
													</div>

													<ul className=" p-0">
														{userFavorites.map((item) => (
															<>
																<li className="py-2">
																	<div className="bg-white rounded flex flex-col">
																		<article className="flex bg-white w-full text-gray-900 rounded 2xl:rounded-sm">
																			<div className="flex w-3/4 justify-between gap-2 rounded-lg shadow-3xl m-auto">
																				<div className="w-64 h-44">
																					<img
																						className="rounded-ww w-64 h-full "
																						src={item.img}
																						alt=""
																					/>
																				</div>
																				<div className="p-2">
																					<section className="flex justify-between ">
																						<Link to="/listluutru">
																							<h2
																								className="text-heading-m mb-1 text-left w-full font-bold truncate"
																								dir="auto"
																							>
																								<span
																									data-testid="item-name"
																									className="text-left w-full truncate font-bold text-xl"
																								>
																									<span itemProp="name">
																										{item.title}
																									</span>
																								</span>
																							</h2>
																						</Link>

																						<div className="relative Tooltip_wrapper__ameta">
																							<div
																								aria-describedby="tooltip--__1"
																								className="leading-none"
																							>
																								<button
																									type="button"
																									className="flex ml-2"
																									data-testid="accommodation-card-favorite-list-button"
																								>
																									<svg
																										xmlns="http://www.w3.org/2000/svg"
																										width="28"
																										height="28"
																										viewBox="0 0 24 24"
																										className="text-red-800  cursor-pointer"
																									>
																										<path
																											d="M20.43 4.82a5.13 5.13 0 00-7.5-.36A6.32 6.32 0 0012 5.58a6.32 6.32 0 00-.92-1.12A5.24 5.24 0 007.51 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.75 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.57-4.25z"
																											fill="currentColor"
																										></path>
																									</svg>
																									<span className="sr-only">
																										Loại bỏ trong
																										danh sách yêu
																										thích
																									</span>
																								</button>
																							</div>
																						</div>
																					</section>
																					<div className="flex flex-wrap items-center">
																						<button
																							type="button"
																							data-testid="accommodation-type"
																							className="cursor-auto focus:outline-none"
																						>
																							<span className="flex items-center">
																								<span
																									itemProp="starRating"
																									itemScope=""
																									itemType="https://schema.org/Rating"
																									data-testid="star-rating"
																									className="text-s text-gray-500 flex"
																								>
																									<span
																										className="inline-flex leading-none transform w-3 h-3 mr-px"
																										data-testid="star"
																									>
																										<i className="fa-solid fa-star mb-1 mr-1 text-gray-300 text-xx"></i>
																									</span>
																									<span
																										className="inline-flex leading-none transform w-3 h-3 mr-px"
																										data-testid="star"
																									>
																										<i className="fa-solid fa-star mb-1 mr-1 text-gray-300 text-xx"></i>
																									</span>
																									<span
																										className="inline-flex leading-none transform w-3 h-3 mr-px"
																										data-testid="star"
																									>
																										<i className="fa-solid fa-star mb-1 mr-1 text-gray-300 text-xx"></i>
																									</span>
																									<span
																										className="inline-flex leading-none transform w-3 h-3 mr-px"
																										data-testid="star"
																									>
																										<i className="fa-solid fa-star mb-1 mr-1 text-gray-300 text-xx"></i>
																									</span>
																									<span
																										className="inline-flex leading-none transform w-3 h-3 mr-px"
																										data-testid="star"
																									>
																										<i className="fa-solid fa-star mb-1 mr-1 text-gray-300 text-xx"></i>
																									</span>
																								</span>
																								<span className="whitespace-nowrap text-xs ml-2">
																									Khách sạn
																								</span>
																							</span>
																						</button>
																					</div>
																					<div className="mt-1">
																						<button
																							type="button"
																							className="w-full mt-2 flex items-center py-2 pl-2 border-t border-b border-gray-200 cursor"
																							data-testid="distance-label-section"
																						>
																							<span className="inline-flex leading-none transform pr-2">
																								<i className="fa-light fa-location-dot text-gray-500 "></i>
																							</span>
																							<span className="block text-xs text-left w-11/12 text-m pl-1">
																								{item.diaChi}
																							</span>
																						</button>
																					</div>
																					<div className="py-2">
																						<span
																							data-testid="aggregate-rating"
																							className="overflow-hidden truncate w-11/12"
																							itemProp="aggregateRating"
																							itemScope=""
																							itemType="https://schema.org/AggregateRating"
																						>
																							<span className="space-x-1 flex gap-1 text-sm ">
																								<span className="inline-flex  justify-center items-center rounded-full leading-none text-xs text-white font-semibold px-4 py-0.5 w-8 bg-green-900">
																									9.2
																								</span>
																								<span className="mt-px ">
																									<strong className="leading-none mr-2">
																										Xuất sắc
																									</strong>
																									<span className="font-normal">
																										(2506 nhận xét)
																									</span>
																								</span>
																							</span>
																						</span>
																					</div>
																				</div>
																				<div className="flex w-48 p-3">
																					<div className="p-2 flex flex-col rounded-lg bg-gray-200 justify-between ">
																						<p className="text-gray-900 text-mm w-full">
																							Kiểm tra giá và lượng phòng
																							vào ngày bạn chọn
																						</p>
																						<a
																							className="text-white px-3 py-2 self-end text-xs font-bold w-auto rounded-lg bg-gray-500 border-b border-gray-500 hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-500 disabled:bg-gray-300 disabled:border-gray-300 "
																							href=""
																						>
																							Kiểm tra giá
																						</a>
																					</div>
																				</div>
																			</div>
																		</article>
																	</div>
																</li>
															</>
														))}
													</ul>
												</article>
											</li>
										</ul>
									</section>
								</div>
							</main>
						</>
					) : (
						<>
							<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
								<span className="self-start mr-10">
									<Link
										to="/"
										className="flex items-center text-blue-500 text-md hover:text-blue-700"
									>
										<i className="fa-solid fa-chevron-left"></i>
										Trước
									</Link>
								</span>

								<div className="w-full">
									<div className="px-4">
										<h1
											className="font-bold text-heading-xl text-gray-900"
											data-testid="favorites-page-headline"
										>
											Nơi lưu trú bạn đã thích
										</h1>
										<p className="mt-1 mb-3 text-m text-gray-900">0 danh sách</p>
									</div>
									<Link to="/listluutru">
										<section
											className="px-4 mx-auto max-w-screen-2xl"
											data-testid="favorites-page-items-list"
										>
											<ul className="grid grid-cols-1 gap-4 list-none l:grid-cols-3">
												<li className="flex flex-col w-full gap-2 my-3">
													<a href="/vi/fa/n%C6%A1i-b%E1%BA%A1n-l%C6%B0u-tr%C3%BA-ti%E1%BA%BFp-theo?listId=">
														<div className="relative l:max-w-xs">
															<img
																className="h-full rounded-sm cursor-pointer w-255 h-159 full wobject-cover hover:opacity-75"
																src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_150,q_auto,w_240/dummy.jpeg"
																loading="lazy"
																draggable="false"
																data-testid="favorite-list-item-element-image"
																alt="Nơi bạn lưu trú tiếp theo"
															/>
														</div>
														<p className="flex flex-wrap max-w-xs mt-2 font-semibold gap-x-2 FavoriteListItem_listName__zqNpN">
															Nơi bạn lưu trú tiếp theo
															<span className="font-normal">(0 lưu trú)</span>
														</p>
													</a>
												</li>
											</ul>
										</section>
									</Link>
								</div>
							</main>
						</>
					)}
				</>
			) : (
				<>
					<main className="flex justify-start w-3/4 mx-auto pt-9 max-w-screen-2xl">
						<span className="self-start mr-10">
							<Link
								to="/"
								className="flex items-center text-blue-500 text-md hover:text-blue-700"
							>
								<i className="fa-solid fa-chevron-left"></i>
								Trước
							</Link>
						</span>

						<div className="flex items-center px-3 py-3 mb-5 border rounded-lg shadow-3xl border-gray-300 ">
							<span className="inline-flex p-2 mr-2 leading-none transform bg-blue-200 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									className="max-w-full max-h-full pointer-events-none"
								>
									<path
										d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
										fill="currentColor"
									></path>
								</svg>
							</span>
							<section>
								<h2 className="font-bold text-heading-m text-gray-900">
									Theo dõi nơi lưu trú bạn thích
								</h2>
								<p className="text-m ">
									<button
										id="favorites-login"
										className="px-1 text-blue-800 cursor-pointer hover:underline "
									>
										Đăng nhập hoặc tạo tài khoản
									</button>
									để lưu nơi lưu trú bạn thích vào tài khoản và tạo danh sách riêng của mình.
								</p>
							</section>
						</div>
					</main>
				</>
			)}
		</>
	);
};

export default FavouriteLayout;
