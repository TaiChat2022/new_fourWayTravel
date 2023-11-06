// import logo from '@/assets/img/logo1.jpg';

const DatphongLayout = ({ data }) => {
	return (
		<>
			<div className="container bg-gray-100 ">
				<div className="md:flex md:gap-4 md:justify-between w-3/4 m-auto">
					<div className="md:w-4/6">
						<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
							<div className="-mx-3 md:flex mb-6">
								<div className="md:flex md:w-1/2">
									<div className="md:w-2/6 px-3 w-4">
										<label
											className="block tracking-wide text-grey-darker text-base font-bold mb-2"
											htmlFor="grid-state"
										>
											Tiêu đề
										</label>
										<div className="relative">
											<select
												className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
												id="grid-state"
											>
												<option>Ông</option>
												<option>Bà</option>
												<option>Anh</option>
												<option>Chị</option>
											</select>
											<div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/4 flex items-center px-2 text-grey-darker">
												<i className="fa-regular fa-chevron-down"></i>
											</div>
										</div>
									</div>
									<div className="md:w-4/6 px-3 mb-6 md:mb-0">
										<label
											className="block tracking-wide text-grey-darker text-base font-bold mb-2"
											htmlFor="grid-first-name"
										>
											Tên *
										</label>
										<input
											className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
											id="grid-first-name"
											type="text"
											placeholder=""
										/>
									</div>
								</div>
								<div className="md:w-1/2 px-3">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-last-name"
									>
										Họ *
									</label>
									<input
										className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
										id="grid-last-name"
										type="text"
										placeholder=""
									/>
								</div>
							</div>
							<div className="-mx-3 md:flex mb-2">
								<div className="md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-email"
									>
										Email *
									</label>
									<input
										className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
										id="grid-email"
										type="email"
										placeholder=""
									/>
								</div>
								<div className="md:w-1/2 px-3">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-email"
									>
										Nhập lại email *
									</label>
									<input
										className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
										id="grid-email"
										type="email"
										placeholder=""
									/>
								</div>
							</div>

							<div className="-mx-3 md:flex mb-2">
								<div className="md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-phone"
									>
										Số điện thoại *
									</label>
									<input
										className="appearance-none text-sm outline-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
										id="grid-city"
										type="text"
										placeholder="987 654 321"
									/>
								</div>
								<div className="md:w-1/2 px-3">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-state"
									>
										Khu vực *
									</label>
									<div className="relative">
										<select
											className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
											id="grid-state"
										>
											<option>Miền Bắc</option>
											<option>Miền Trung</option>
											<option>Miền Nam</option>
										</select>
										<div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/4 flex items-center px-2 text-grey-darker">
											<i className="fa-regular fa-chevron-down"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="-mx-3 md:flex mb-2">
								<div className="md:w-full px-3 mb-6 md:mb-0">
									<label
										className="block tracking-wide text-grey-darker text-base font-bold mb-2"
										htmlFor="grid-phone"
									>
										Yêu cầu thêm
									</label>
									<textarea
										className="w-full border p-3 outline-none rounded-sm text-sm"
										name=""
										id=""
										cols="30"
										rows="10"
										placeholder="Ví dụ: Sở thích về Giường, địa điểm đón hoặc trả khách"
									></textarea>
								</div>
							</div>
						</div>
						<div className="bg-white px-3 py-4 mb-4">
							<h1 className="text-lg font-semibold tracking-wide">Chính sách đặt phòng</h1>
							<div className="w-full h-0.2 bg-gray-500 my-5"></div>
							<div className="rounded-sm">
								<div className="flex justify-start items-center my-2 gap-3 ">
									<i className="fa-light fa-file-lines text-lg"></i>
									<span className="font-semibold text-sm tracking-wide">Phòng Superior Twin</span>
								</div>
								<div className="flex justify-start items-center my-2 gap-2 p-26px">
									<span className="font-semibold text-sm">Hủy:</span>
									<p className="text-sm tracking-wide ">
										Nếu hủy, thay đổi hoặc không đến, khách sẽ trả toàn bộ giá trị tiền đặt phòng.
									</p>
								</div>
								<div className="flex justify-start items-center my-2 gap-2 p-26px">
									<span className="font-semibold text-sm tracking-wide">Thanh toán:</span>
									<p className="text-sm tracking-wide">Thanh toán toàn bộ giá trị tiền đặt phòng.</p>
								</div>
								<div className="my-2 p-26px">
									<span className="font-semibold text-sm tracking-wide">Đã bao gồm ăn sáng</span>
								</div>
							</div>
						</div>
						<div className="bg-white px-3 py-4">
							<h1 className="text-lg font-semibold tracking-wide">Phương thức thanh toán</h1>
							<div className="w-full h-0.2 bg-gray-500 my-5"></div>
							<div className="md:w-full px-3 w-4">
								<label
									className="block tracking-wide text-grey-darker text-base font-bold mb-2"
									htmlFor="grid-state"
								>
									Tiêu đề
								</label>
								<div className="relative">
									<select
										className="block outline-none text-sm appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
										id="grid-state"
									>
										<option>OnePay Vietnam (Thẻ ATM)</option>
										<option>
											Online Payment via International Cards (Visa, Master, JCB, Amex, CUP)
										</option>
									</select>
									<div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/4 flex items-center px-2 text-grey-darker">
										<i className="fa-regular fa-chevron-down"></i>
									</div>
								</div>
							</div>
							<div className="flex items-center  px-3 mt-4">
								<input
									id="default-radio-1"
									type="radio"
									defaultValue=""
									name="default-radio"
									className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300"
								/>
								<label
									htmlFor="default-radio-1"
									className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
								>
									Vui lòng đọc kỹ và đồng ý với điều khoản đặt phòng bằng cách đánh dấu vào ô bên
									cạnh.
								</label>
							</div>
							<div className="mt-3">
								<button className="w-36 py-3 bg-green-500 borrder-none rounded-md text-white text-base font-semibold tracking-wide">
									Đặt phòng
								</button>
							</div>
						</div>
					</div>

					<div className="xl:w-2/6 mt-2 ">
						<div className="w-full h-auto bg-white p-5 rounded-md">
							<div className="flex justify-between gap-4">
								<img
									src={data.img}
									alt=""
									className="w-26 h-20 rounded-md"
								/>
								<div className="">
									<h1 className="text-base font-semibold">{data.title}</h1>
									<p className="text-xs font-semibold mt-3 tracking-wide">Phòng Grand Ocean View</p>
								</div>
							</div>
							<div className="w-full h-0.2 bg-gray-200 mt-4"></div>
							<div className="">
								<div className="flex justify-between mt-4">
									<div className="flex justify-start items-center gap-3">
										<i className="fa-light fa-calendar-day text-gray-400"></i>
										<span className="text-gray-400 text-sm tracking-wide">Ngày nhận phòng</span>
									</div>
									<span className="text-sm font-medium">05/11/2023</span>
								</div>
								<div className="flex justify-between mt-4">
									<div className="flex justify-start items-center gap-3">
										<i className="fa-light fa-calendar-day text-gray-400"></i>
										<span className="text-gray-400 text-sm tracking-wide">Ngày trả phòng</span>
									</div>
									<span className="text-sm font-medium">09/11/2023</span>
								</div>
								<div className="flex justify-between mt-4">
									<div className="flex justify-start items-center gap-3">
										<i className="fa-regular fa-user-pen text-gray-400"> </i>
										<span className="text-gray-400 text-sm tracking-wide">Số khách phòng</span>
									</div>
									<span className="flex text-sm">
										<p className="">2 khách,</p>
										<p className="">1 phòng</p>
									</span>
								</div>
							</div>
							<div className="w-full h-0.2 bg-gray-200 mt-4"></div>
							<div className="">
								<div className="flex justify-between mt-4">
									<span className="flex gap-1 text-gray-400 text-sm tracking-wide">
										<p className="">2 khách </p>
										<p className="">x </p>
										<p className="">1 phòng</p>
									</span>

									<span className="text-sm font-medium">{data.price.toLocaleString('vi')}</span>
								</div>
								<div className="flex justify-between mt-4">
									<span className="text-gray-400 text-sm tracking-wide">Promo giảm 40%</span>

									<span className="text-sm font-medium">-1,674,000 VND</span>
								</div>
								<div className="flex justify-between mt-4">
									<span className="text-blue-500 font-semibold text-sm tracking-wide">
										Phí dịch vụ
									</span>

									<span className="flex text-sm text-blue-500 font-semibold">MIỄN PHÍ</span>
								</div>
							</div>
							<div className="w-full h-0.2 bg-gray-200 mt-4"></div>
							<div className="mt-4 flex justify-between items-center">
								<span className="text-base font-semibold">Tổng tiền</span>
								<p className="text-base font-semibold text-green-600">
									{data.price.toLocaleString('vi')} VND
								</p>
							</div>
							<div className="w-full p-6 text-sm bg-green-100 border-none rounded-md mt-6">
								Booking của bạn đang được chờ xác nhận. Tư vấn viên sẽ sớm liên hệ với bạn
							</div>
							<div className="flex gap-4 items-center bg-gray-100 p-3 mt-4 border-none rounded-md">
								<i className="fa-regular fa-phone text-gray-400"></i>
								<span className="flex gap-1 items-center text-sm">
									Gọi <p className="font-semibold">1900 1011</p> để được hỗ trợ 24/7
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DatphongLayout;
