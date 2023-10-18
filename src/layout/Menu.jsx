export default function MenuLayOut({
	Logo, Link, windowWidth,
	Button, Menu, MenuItem, Box, Typography,
	anchorEl, open, handleClick, handleClose,

	currincey, ITEM_HEIGHT,
	anchorE2, open2, handleClick2, handleClose2,
	selectedCurrency, handleCurrencyChange,

	language, anchorE3, open3, handleClick3, handleClose3,
	selectedLanguage, handleLanguageChange,

	styleModal, Modal, openModal, handleOpenModal, handleCloseModal,

	Login, user, signOut, anchorE4, open4, handleClick4, handleClose4
}) {
	return (
		<>
			{windowWidth < 720 ? (
				<>
					<div className="mx-auto border-2 px-4 w-full relative">
						<div className="shrink-0">
							<header className="flex  justify-between items-center h-14">
								<Link to="/">
									<img
										src={Logo}
										alt="Logo FourWay Travel"
										width={150}
										height={50}
										className="object-contain"
									/>
								</Link>
								<nav className="h-full self-end ml-auto">
									<ul className="flex h-full mr-2 s:mr-0 text-grey-900">
										{/* Yêu thích */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<Link
													to="#"
													className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
												>
													<i className="fa-regular fa-heart leading-none inline-flex transform text-lg"></i>
												</Link>
											</div>
										</li>
										{/* Login */}
										{user ? (
											<>
												<li className="h-full list-none flex relative">
													<div className="flex justify-center">
														<Button
															className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
															id="user-button"
															aria-controls={open4 ? 'user-menu' : undefined}
															aria-expanded={open4 ? 'true' : undefined}
															aria-haspopup="true"
															onClick={handleClick4}
														>
															<div className="flex items-center justify-center py-2">
																<img className="flex items-center h-6 w-6 rounded-full ring-2"
																	src={user.photoURL} alt={user.displayName} />
															</div>

														</Button>
													</div>
													<Menu
														id="user-menu"
														MenuListProps={{
															'aria-labelledby': 'user-button',
														}}
														anchorEl={anchorE4}
														open={open4}
														onClose={handleClose4}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: '16ch',
															},
														}}
													>
														<span className="flex items-center justify-center text-sm text-black space-nowrap mx-2 py-2 normal-case truncate">
															{user.displayName}
														</span>
														<MenuItem>
															<Button onClick={signOut}
																className="flex items-center justify-center w-full">
																<span>Đăng xuất</span>
															</Button>
														</MenuItem>
													</Menu>

												</li>
											</>
										) : (
											<>
												<li className="h-full list-none flex relative">
													<div className="flex justify-center">
														<Button
															onClick={handleOpenModal}
															className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
														>
															<i className="fa-regular fa-circle-user leading-none inline-flex transform text-black text-lg"></i>
														</Button>
													</div>
													<Modal
														open={openModal}
														onClose={handleCloseModal}
														aria-labelledby="modal-modal-title"
														aria-describedby="modal-modal-description"
													>
														<Box sx={styleModal}>
															<Typography
																id="modal-modal-title"
																variant="h6"
																component="h2"
															>
																<span className="font-bold">Đăng nhập</span>
															</Typography>
															<Typography
																id="modal-modal-description"
																sx={{ mt: 2 }}
																component="div"
															>
																<form>
																	<div className="mb-6">
																		<label
																			htmlFor="email"
																			className="block mb-2 text-sm font-bold text-black"
																		>
																			Tài khoản email
																		</label>
																		<input
																			type="email"
																			id="email"
																			className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																			placeholder="name@flowbite.com"
																			required
																		/>
																	</div>
																	<div className="mb-6">
																		<label
																			htmlFor="password"
																			className="block mb-2 text-sm font-bold text-black"
																		>
																			Mật khẩu
																		</label>
																		<input
																			type="password"
																			id="password"
																			className="bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																			required
																		/>
																	</div>
																	<div className="flex items-start mb-6">
																		<div className="flex items-center h-5">
																			<input
																				id="remember"
																				type="checkbox"
																				defaultValue
																				className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
																				required
																			/>
																		</div>
																		<label
																			htmlFor="remember"
																			className="ml-2 text-sm font-medium text-gray-900"
																		>
																			Remember me
																		</label>
																	</div>
																	<button
																		type="submit"
																		className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
																	>
																		Submit
																	</button>
																</form>
															</Typography>
															<hr className="mt-2" />
															<Login />
														</Box>
													</Modal>
												</li>
											</>
										)
										}
										{/* Menu */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<div className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4">
													<Button
														className="flex-grow text-sm space-nowrap mx-2"
														id="menu-btn"
														aria-controls={open ? 'menu-btn' : undefined}
														aria-haspopup="true"
														aria-expanded={open ? 'true' : undefined}
														onClick={handleClick}
													>
														<i className="fa-solid fa-bars leading-none inline-flex transform text-black"></i>
														<span className="flex-grow text-sm text-black space-nowrap mx-2">
															Menu
														</span>
													</Button>
													<Menu
														id="menu-btn"
														anchorEl={anchorEl}
														open={open}
														onClose={handleClose}
														MenuListProps={{
															'aria-labelledby': 'menu-btn',
														}}
													>
														<MenuItem onClick={handleClose}>Xem gần đây</MenuItem>

														{/* Currincy */}
														<div className="flex w-full px-2 items-start h-full cursor-pointer hover:bg-grey-200">
															<Button
																className="flex text-sm"
																id="long-button"
																aria-controls={open2 ? 'long-menu' : undefined}
																aria-expanded={open2 ? 'true' : undefined}
																aria-haspopup="true"
																onClick={handleClick2}
															>
																<span className="flex justify-start text-sm text-black space-nowrap">
																	{selectedCurrency}
																</span>
																<i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black ml-2"></i>
															</Button>
															<Menu
																id="long-menu"
																MenuListProps={{
																	'aria-labelledby': 'long-button',
																}}
																anchorEl={anchorE2}
																open={open2}
																onClose={handleClose2}
																PaperProps={{
																	style: {
																		maxHeight: ITEM_HEIGHT * 4.5,
																		width: '21ch',
																	},
																}}
															>
																{currincey.map((option) => (
																	<MenuItem
																		key={option}
																		selected={option === selectedCurrency}
																		onClick={() => handleCurrencyChange(option)}
																	>
																		{option}
																	</MenuItem>
																))}
															</Menu>
														</div>
														{/* Language */}
														<div className="flex w-full px-2 items-start h-full cursor-pointer hover:bg-grey-200">
															<Button
																className="flex text-sm space-nowrap"
																id="long-button"
																aria-controls={open3 ? 'long-menu' : undefined}
																aria-expanded={open3 ? 'true' : undefined}
																aria-haspopup="true"
																onClick={handleClick3}
															>
																<span className="flextext-sm text-black">
																	{selectedLanguage}{' '}
																	{/* Hiển thị chỉ phần đầu của chuỗi */}
																</span>
																<i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black ml-2"></i>
															</Button>
															<Menu
																id="long-menu"
																MenuListProps={{
																	'aria-labelledby': 'long-button',
																}}
																anchorEl={anchorE3}
																open={open3}
																onClose={handleClose3}
																PaperProps={{
																	style: {
																		maxHeight: ITEM_HEIGHT * 4.5,
																		width: '20ch',
																	},
																}}
															>
																{language.map((option) => (
																	<MenuItem
																		key={option}
																		selected={option === selectedLanguage}
																		onClick={() => handleLanguageChange(option)}
																	>
																		{option}
																	</MenuItem>
																))}
															</Menu>
														</div>

														<MenuItem onClick={handleClose}>Hỗ trợ và trợ giúp</MenuItem>
													</Menu>
												</div>
											</div>
										</li>
									</ul>
								</nav>
							</header>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="mx-auto border-2 px-4 2xs:px-5 l:px-10 2xl:px-5 w-full relative">
						<div className="fresnel-container fresnel-lessThan-2xl w-78 m-auto">
							<header className="flex justify-between items-center h-14">
								<Link to="/">
									<img
										src={Logo}
										alt="Logo FourWay Travel"
										className="object-contain w-200 h-auto"
									/>
								</Link>
								<nav className="h-full self-end ml-auto">
									<ul className="flex h-full s:mr-0 text-grey-900">
										{/* Yêu thích */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<Link
													to="#"
													className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-2"
												>
													<i className="fa-regular fa-heart leading-none inline-flex transform"></i>
													<span className="flex-grow text-xs md:text-sm text-black space-nowrap mx-2 truncate">
														Yêu thích
													</span>
												</Link>
											</div>
										</li>
										{/* Currincy */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<div className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-2">
													<Button
														className="flex-grow text-sm space-nowrap mx-2"
														id="long-button"
														aria-controls={open2 ? 'long-menu' : undefined}
														aria-expanded={open2 ? 'true' : undefined}
														aria-haspopup="true"
														onClick={handleClick2}
													>
														<span className="flex-grow text-sm text-black space-nowrap mx-2">
															{selectedCurrency.split(' - ')[0]}
														</span>
														<i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black"></i>
													</Button>
													<Menu
														id="long-menu"
														MenuListProps={{
															'aria-labelledby': 'long-button',
														}}
														anchorEl={anchorE2}
														open={open2}
														onClose={handleClose2}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: '21ch',
															},
														}}
													>
														{currincey.map((option) => (
															<MenuItem
																key={option}
																selected={option === selectedCurrency}
																onClick={() => handleCurrencyChange(option)}
															>
																{option}
															</MenuItem>
														))}
													</Menu>
												</div>
											</div>
										</li>
										{/* Language */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<div className="flex w-full items-center h-full cursor-pointer hover:bg-grey-200 px-2">
													<Button
														className="flex-grow text-sm space-nowrap mx-2"
														id="long-button"
														aria-controls={open3 ? 'long-menu' : undefined}
														aria-expanded={open3 ? 'true' : undefined}
														aria-haspopup="true"
														onClick={handleClick3}
													>
														<span className="flex-grow text-sm text-black space-nowrap mx-2">
															{selectedLanguage.split(' - ')[0]}{' '}
															{/* Hiển thị chỉ phần đầu của chuỗi */}
														</span>
														<i className="fa-solid fa-chevron-down leading-none inline-flex transform text-black"></i>
													</Button>
													<Menu
														id="long-menu"
														MenuListProps={{
															'aria-labelledby': 'long-button',
														}}
														anchorEl={anchorE3}
														open={open3}
														onClose={handleClose3}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: '20ch',
															},
														}}
													>
														{language.map((option) => (
															<MenuItem
																key={option}
																selected={option === selectedLanguage}
																onClick={() => handleLanguageChange(option)}
															>
																{option}
															</MenuItem>
														))}
													</Menu>
												</div>
											</div>
										</li>
										{/* Login */}
										{user ? (
											<>
												<li className="h-full list-none flex relative">
													<div className="flex justify-center">
														<Button
															className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
															id="user-button"
															aria-controls={open4 ? 'user-menu' : undefined}
															aria-expanded={open4 ? 'true' : undefined}
															aria-haspopup="true"
															onClick={handleClick4}
														>

															<span className="flex items-center text-sm text-black space-nowrap mx-2 normal-case w-24 h-12 truncate">
																Chào bạn {user.displayName}
															</span>
														</Button>
													</div>
													<Menu
														id="user-menu"
														MenuListProps={{
															'aria-labelledby': 'user-button',
														}}
														anchorEl={anchorE4}
														open={open4}
														onClose={handleClose4}
														PaperProps={{
															style: {
																maxHeight: ITEM_HEIGHT * 4.5,
																width: '21ch',
															},
														}}
													>
														<div className="flex items-center justify-center py-2">
															<img className="flex items-center h-12 w-12 rounded-full ring-2"
																src={user.photoURL} alt={user.displayName} />
														</div>
														<MenuItem>
															<Button onClick={signOut}
																className="border-t mt-2 border-2 border-gray-900 flex items-center justify-center w-full">
																<span>Đăng xuất</span>
															</Button>
														</MenuItem>
													</Menu>

												</li>
											</>
										) : (
											<>
												<li className="h-full list-none flex relative">
													<div className="flex justify-center">
														<Button
															onClick={handleOpenModal}
															className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4"
														>
															<i className="fa-regular fa-circle-user leading-none inline-flex transform text-black"></i>
															<span className="flex-grow text-xs md:text-sm text-black space-nowrap mx-2 normal-case truncate">
																Đăng nhập
															</span>
														</Button>
													</div>
													<Modal
														open={openModal}
														onClose={handleCloseModal}
														aria-labelledby="modal-modal-title"
														aria-describedby="modal-modal-description"
													>
														<Box sx={styleModal}>
															<Typography
																id="modal-modal-title"
																variant="h6"
																component="h2"
															>
																<span className="font-bold">Đăng nhập</span>
															</Typography>
															<Typography
																id="modal-modal-description"
																sx={{ mt: 2 }}
																component="div"
															>
																<form>
																	<div className="mb-6">
																		<label
																			htmlFor="email"
																			className="block mb-2 text-sm font-bold text-black"
																		>
																			Tài khoản email
																		</label>
																		<input
																			type="email"
																			id="email"
																			className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																			placeholder="name@flowbite.com"
																			required
																		/>
																	</div>
																	<div className="mb-6">
																		<label
																			htmlFor="password"
																			className="block mb-2 text-sm font-bold text-black"
																		>
																			Mật khẩu
																		</label>
																		<input
																			type="password"
																			id="password"
																			className="bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
																			required
																		/>
																	</div>
																	<div className="flex items-start mb-6">
																		<div className="flex items-center h-5">
																			<input
																				id="remember"
																				type="checkbox"
																				defaultValue
																				className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
																				required
																			/>
																		</div>
																		<label
																			htmlFor="remember"
																			className="ml-2 text-sm font-medium text-gray-900"
																		>
																			Remember me
																		</label>
																	</div>
																	<button
																		type="submit"
																		className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
																	>
																		Submit
																	</button>
																</form>
															</Typography>
															<hr className="mt-2" />
															<Login />
														</Box>
													</Modal>
												</li>
											</>
										)
										}
										{/* Menu */}
										<li className="h-full list-none flex relative">
											<div className="flex justify-center">
												<div className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4">
													<Button
														className="flex-grow text-sm space-nowrap mx-2"
														id="menu-btn"
														aria-controls={open ? 'menu-btn' : undefined}
														aria-haspopup="true"
														aria-expanded={open ? 'true' : undefined}
														onClick={handleClick}
													>
														<i className="fa-solid fa-bars leading-none inline-flex transform text-black"></i>
														<span className="flex-grow text-sm text-black space-nowrap mx-2 normal-case">
															Menu
														</span>
													</Button>
													<Menu
														id="menu-btn"
														anchorEl={anchorEl}
														open={open}
														onClose={handleClose}
														MenuListProps={{
															'aria-labelledby': 'menu-btn',
														}}
													>
														<MenuItem onClick={handleClose}>Xem gần đây</MenuItem>
														<MenuItem onClick={handleClose}>Hỗ trợ và trợ giúp</MenuItem>
													</Menu>
												</div>
											</div>
										</li>
									</ul>
								</nav>
							</header>
						</div>
					</div>
				</>
			)}
		</>
	);
}