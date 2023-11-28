const UserXemGanDayLayout = ({ currentUser, userXemGanDay, Link }) => {
	return (
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
					<h1 className=" mb-2 text-2xl font-semibold leading-tight font-poppins">Xem gần đây</h1>
					<div className="flex flex-col gap-8">
						{currentUser ? (
							userXemGanDay && userXemGanDay.length ? (
								[...userXemGanDay]
									.reverse()
									.slice(0, 4)
									.map((item) => {
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
												<div
													key={item.id}
													className="border border-gray-300 p-0 rounded-md relative grid grid-col-4"
												>
													<p className="text-lg text-gray-900 font-bold absolute top-0 right-0">
														{formattedDate}{' '}
													</p>
													<div className="flex justify-between ">
														<div className="p-2 w-32 h-32">
															<img
																src={item.img}
																alt={item.title}
																className="rounded-lg w-full h-full object-cover"
															/>
														</div>
														<div className="p-2">
															<Link to={`/booking/chitiet/${item.id}`}>
																<p className="font-semibold text-xl tracking-wider">
																	{item.title}
																</p>
															</Link>
															<p className="text-sm ">{item.danhMuc}</p>
														</div>
														<div className="bg-primary-do rounded-md w-56 h-14">
															<p className="font-semibold text-white tracking-wider text-center py-3 px-5 text-sm">
																{item.price.toLocaleString('vi')} VND
															</p>
														</div>
													</div>
												</div>
											</>
										);
									})
							) : (
								<p>Không có mục nào trong danh sách xem gần đây.</p>
							)
						) : (
							<p>Vui lòng đăng nhập để xem danh sách xem gần đây.</p>
						)}
					</div>
				</div>
			</main>
		</>
	);
};

export default UserXemGanDayLayout;
