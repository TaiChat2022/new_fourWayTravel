const XemGanDayLayout = ({ currentUser, userXemGanDay, Link }) => {
	return (
		<>
			<div className="w-3/4 mx-auto mt-96">
				<h1 className="mt-4 mb-2 text-lg pl-1 py-2 font-medium leading-tight font-poppins">
					<i className="fa-light fa-clock-rotate-left"></i> Xem gần đây
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{currentUser ? (
						userXemGanDay && userXemGanDay.length ? (
							[...userXemGanDay]
								.reverse()
								.slice(0, 4)
								.map((item, index) => {
									const formattedDate =
										item.lastViewed && typeof item.lastViewed.toDate === 'function'
											? item.lastViewed.toDate().toLocaleDateString('en-US', {
													year: 'numeric',
													month: '2-digit',
													day: '2-digit',
											  })
											: '';

									return (
										<>
											<Link to={`/booking/chitiet/${item.id}`}>
												<div
													key={index}
													className="border border-gray-300 p-0 rounded-md relative grid grid-col-4"
												>
													<p className="text-lg text-gray-900 font-bold absolute top-0 right-0">
														{formattedDate}{' '}
													</p>
													<div className="flex items-center col-span-1 relative">
														<div className="p-2 w-20 h-20">
															<img
																src={item.img}
																alt={item.title}
																className="rounded-lg w-full h-full  object-cover"
															/>
														</div>
														<div className="flex flex-col truncatee">
															<p className="text-base font-semibold md:text-sm">
																{item.title}
															</p>
															<p className="text-base md:text-sm ">{item.danhmuc}</p>
														</div>
													</div>
												</div>
											</Link>
										</>
									);
								})
						) : (
							<p className="w-full col-span-2 md:col-span-4">
								Không có mục nào trong danh sách xem gần đây.
							</p>
						)
					) : (
						<p className="w-full col-span-2 md:col-span-4">
							Vui lòng đăng nhập để xem danh sách xem gần đây.
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default XemGanDayLayout;
